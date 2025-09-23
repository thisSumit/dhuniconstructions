import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, phone, property, message } = body;

    // Split full name into firstName & lastName
    const [firstName, ...lastNameParts] = name.split(" ");
    const lastName = lastNameParts.join(" ") || "";

    // 1️⃣ Send to Google Apps Script
    const googleResponse = await fetch(
      "https://script.google.com/macros/s/AKfycbyp-EWyBzcmmWLiSoMXZnFKp_d8-3XFYpnKr5oO2QI7XxHXFZYb1xxHkkQxOa9-hVPb/exec",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          name,
          email,
          phone,
          property,
          message,
        }),
      }
    );

    // 2️⃣ Send to FARVISION ERP
    const dumpId = new Date().toISOString().replace(/[-:.TZ]/g, ""); // unique timestamp
    const erpPayload = {
      firstName: name,
      lastName ,
      email: email,
      mobilePhone: phone,
      comments: message,
      originFrom: "Website",
      product: property,
      campaign: "WebsiteCampaign", // make sure this exists in ERP
      isUpdatefromUIDate: false,
      isImported: true,
      DumpdataObjectId: dumpId,
      tenantId: 918,
    };

    const erpResponse = await fetch(
      "https://farvisioncloud.com/sfasync/api/syncleads/website",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(erpPayload),
      }
    );

    const erpResult = await erpResponse.json();

    return NextResponse.json({
      success: true,
      googleStatus: googleResponse.status,
      erpStatus: erpResult,
    });
  } catch (error: any) {
    console.error("Submit API error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
