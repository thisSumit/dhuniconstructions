import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Whatsapp from "@/components/Whatsapp";


export const metadata: Metadata = {
  title: "Best Apartments & Flats for Sale in Nagpur | Dhuni Constructions",
  description: "Find the best apartments & flats for sale in Nagpur. Premium 1 BHK, 2 BHK, 3 BHK & 4 BHK apartments near you. Ready to move & under construction flats in prime locations of Nagpur. Contact +91 8830256985 | +91 8262899382",
  keywords: [
    "best apartment near me",
    "flat for sale in nagpur", 
    "apartments for sale",
    "flats in nagpur",
    "apartments in nagpur",
    "flat for sale",
    "apartment for sale",
    "best apartments nagpur",
    "1 bhk flat nagpur",
    "2 bhk flat nagpur", 
    "3 bhk flat nagpur",
    "ready to move flats nagpur",
    "luxury apartments nagpur",
    "affordable flats nagpur",
    "property in nagpur",
    "real estate nagpur",
    "dhuni constructions",
    "flats near me",
    "apartments near me"
  ],
  authors: [{ name: "Dhuni Constructions Pvt. Ltd." }],
  creator: "Dhuni Constructions Pvt. Ltd.",
  publisher: "Dhuni Constructions Pvt. Ltd.",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://dhuniconstructions.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Best Apartments & Flats for Sale in Nagpur | Dhuni Constructions",
    description: "Find the best apartments & flats for sale in Nagpur. Premium 1 BHK, 2 BHK, 3 BHK & 4 BHK apartments near you. Ready to move & under construction flats in prime locations.",
    url: 'https://dhuniconstructions.com',
    siteName: 'Dhuni Constructions',
    images: [
      {
        url: '/hero.png',
        width: 1200,
        height: 630,
        alt: 'Best Apartments and Flats for Sale in Nagpur',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Best Apartments & Flats for Sale in Nagpur | Dhuni Constructions",
    description: "Find the best apartments & flats for sale in Nagpur. Premium BHK apartments near you.",
    images: ['/hero.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Add your Google Search Console verification code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <head>
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            Date.now(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PZWSM6ZX');
          `}
        </Script>

        {/* Structured Data - Organization */}
        <Script id="structured-data-organization" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://www.dhuniconstructions.com/",
            "@type": "Organization",
            "name": "Dhuni Constructions Pvt. Ltd.",
            "url": "https://dhuniconstructions.com",
            "logo": "https://dhuniconstructions.com/logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-8830256985",
              "contactType": "sales",
              "areaServed": "IN",
              "availableLanguage": ["English", "Hindi", "Marathi"]
            },
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Flat No. 202, Ganraj Sankul, Pratap Nagar",
              "addressLocality": "Nagpur",
              "addressRegion": "Maharashtra", 
              "postalCode": "440022",
              "addressCountry": "IN"
            },
            "sameAs": [
              "https://www.facebook.com/Dhuniconstructionsnagpur/",
              "https://www.instagram.com/dhuniconstructions"
            ]
          })}
        </Script>

        {/* Structured Data - Real Estate Business */}
        <Script id="structured-data-realestate" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ApartmentBuilder",
            "name": "Dhuni Constructions Pvt. Ltd.",
            "description": "Leading real estate developer in Nagpur offering best apartments and flats for sale. Specializing in 1 BHK, 2 BHK, 3 BHK and 4 BHK apartments in prime locations of Nagpur.",
            "url": "https://dhuniconstructions.com",
            "telephone": "+91-8830256985",
            "email": "dhuniconstructionspvtltd@gmail.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Flat No. 202, Ganraj Sankul, Pratap Nagar",
              "addressLocality": "Nagpur",
              "addressRegion": "Maharashtra",
              "postalCode": "440022",
              "addressCountry": "IN"
            },
            "areaServed": {
              "@type": "City",
              "name": "Nagpur",
              "addressRegion": "Maharashtra",
              "addressCountry": "IN"
            },
            "serviceType": [
              "Apartment Sales",
              "Flat Sales", 
              "Real Estate Development",
              "Property Sales",
              "Residential Projects",
              "Flat for Sale",
              "Luxury Apartments",
              "Affordable Flats",
              "Best Apartments", 
              "Flats Near Me",
              "Flats in Nagpur",
              "Apartments in Nagpur"
            ]
          })}
        </Script>

        {/* Structured Data - Local Business */}
        <Script id="structured-data-localbusiness" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Dhuni Constructions Pvt. Ltd.",
            "image": "https://dhuniconstructions.com/hero.png",
            "description": "Best apartments and flats for sale in Nagpur. Premium residential projects with world-class amenities.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Flat No. 202, Ganraj Sankul, Pratap Nagar",
              "addressLocality": "Nagpur",
              "addressRegion": "Maharashtra",
              "postalCode": "440022",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "21.1458",
              "longitude": "79.0882"
            },
            "url": "https://dhuniconstructions.com",
            "telephone": "+91-8830256985",
            "email": "dhuniconstructionspvtltd@gmail.com",
            "priceRange": "₹₹₹",
            "openingHours": "Mo-Sa 11:00-20:00"
          })}
        </Script>

        {/* Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-7F88QZKWVN"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-7F88QZKWVN');
          `}
        </Script>

        {/* Meta Pixel Code */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1304037298067119');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img height="1" width="1" style={{display:'none'}}
            src="https://www.facebook.com/tr?id=1304037298067119&ev=PageView&noscript=1"
          />
        </noscript>
    </head>
    <body className="antialiased box-content ">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PZWSM6ZX"
            height="0" width="0" style={{display:'none', visibility:'hidden'}}></iframe>
        </noscript>

        <Header />
        {children}
        {/* <Whatsapp /> */}
        <Contact />
        <Footer />
      </body>
    </html>
  );
}
