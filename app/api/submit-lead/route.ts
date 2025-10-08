import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, property, message } = body;

    // Validate required fields
    if (!name || !email || !phone) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Split full name into firstName & lastName
    const [firstName, ...lastNameParts] = name.trim().split(" ");
    const lastName = lastNameParts.join(" ") || "";

    // Format phone number
    const formattedPhone = phone.startsWith('+91') ? phone : `+91${phone.replace(/\D/g, '')}`;

    // Generate unique DumpdataObjectId (timestamp-based)
    const dumpId = new Date().toISOString().replace(/[-:.TZ]/g, "").substring(0, 13);

    // Prepare ERP payload
    const erpPayload = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      mobilePhone: formattedPhone,
      comments: message || "",
      originFrom: "Website",
      product: property || "",
      campaign: "Website Lead",
      isUpdatefromUIDate: false,
      isImported: true,
      DumpdataObjectId: dumpId,
      tenantId: 918,
    };

    // Array to track submission results
    const results = {
      googleSheets: false,
      farvisionERP: false,
    };

    // Send to Google Apps Script (non-blocking)
    try {
      const googleResponse = await fetch(
        "https://script.google.com/macros/s/AKfycbyp-EWyBzcmmWLiSoMXZnFKp_d8-3XFYpnKr5oO2QI7XxHXFZYb1xxHkkQxOa9-hVPb/exec",
        {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams({
            name,
            email,
            phone: formattedPhone,
            property: property || "",
            message: message || "",
          }),
        }
      );
      
      results.googleSheets = googleResponse.ok;
      console.log("Google Sheets submission:", googleResponse.status);
    } catch (googleError) {
      console.error("Google Sheets submission failed:", googleError);
    }

    // 2️⃣ Send to FARVISION ERP (critical - blocks response)
    try {
      const erpResponse = await fetch(
        "https://farvisioncloud.com/sfasync/api/syncleads/website",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(erpPayload),
        }
      );

      const erpResult = await erpResponse.json();
      console.log("FARVISION ERP Response:", erpResult);

      // Check if ERP submission was successful
      if (erpResult.status === true) {
        results.farvisionERP = true;
        
        return NextResponse.json({
          success: true,
          message: "Lead submitted successfully",
          details: {
            erp: erpResult.message || "Sync request accepted",
            googleSheets: results.googleSheets ? "Success" : "Failed (non-critical)",
          },
        });
      } else {
        return NextResponse.json(
          {
            success: false,
            message: "ERP submission failed",
            erpResponse: erpResult,
          },
          { status: 400 }
        );
      }
    } catch (erpError: any) {
      console.error("FARVISION ERP submission failed:", erpError);
      
      return NextResponse.json(
        {
          success: false,
          message: "Failed to submit to ERP system",
          error: erpError.message,
        },
        { status: 500 }
      );
    }
  } catch (error: any) {
    console.error("Submit API error:", error);
    
    return NextResponse.json(
      {
        success: false,
        message: "Internal server error",
        error: error.message,
      },
      { status: 500 }
    );
  }
}