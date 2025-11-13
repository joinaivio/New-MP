
// FIX: Import React to resolve the 'React' namespace for types like React.ReactNode.
import React from 'react';
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Master P Barbershop | Midrand",
  description: "Premium barbershop in Midrand. Precision fades, classic cuts, beard work. Walk-ins welcome. Call +27 62 481 3420.",
  openGraph: {
    title: "Master P Barbershop | Midrand",
    description: "Premium barbershop in Midrand. Precision fades, classic cuts, beard work.",
    images: [{ url: "https://picsum.photos/seed/og/1200/630" }],
    url: "https://masterpbarbershop.com",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
      "@context": "https://schema.org",
      "@type": "BarberShop",
      "name": "Master P Barbershop",
      "description": "Premium barbershop in Midrand. Precision fades, classic cuts, beard work. Walk-ins welcome.",
      "telephone": "+27624813420",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "88 Richards Drive, Halfway House",
        "addressLocality": "Midrand",
        "postalCode": "1685",
        "addressRegion": "Gauteng",
        "addressCountry": "ZA"
      },
      "image": "https://picsum.photos/seed/og/1200/630",
      "url": "https://masterpbarbershop.com",
      "priceRange": "R150 - R500",
      "sameAs": [
        "https://www.facebook.com/masterpbarbershop/?hl=en",
        "https://www.instagram.com/masterpbarbershop/?hl=en"
      ],
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [ "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Monday" ],
          "opens": "09:00",
          "closes": "18:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Sunday",
          "opens": "09:00",
          "closes": "16:00"
        }
      ]
    };

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-brand-white text-brand-dark font-sans leading-relaxed">{children}</body>
    </html>
  );
}
