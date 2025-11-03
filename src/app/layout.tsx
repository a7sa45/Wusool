import type { Metadata } from "next";
import { Analytics } from "@/components/Analytics";
import { StructuredData } from "@/components/StructuredData";
import "./globals.css";

export const metadata: Metadata = {
  title: "وصول - خدمات النقل الخاص | Wusool Private Transport Services",
  description: "احجز سائقًا خاصًا في أبها والمناطق السياحية. خدمة نقل فاخرة وآمنة مع سائقين محترفين. Book private drivers in Abha and tourist areas with professional, luxury transport services.",
  keywords: "وصول، سائق خاص، أبها، نقل، سيارة، الطائف، الباحة، Wusool, private driver, Abha, transport, car service, Taif, Baha",
  authors: [{ name: "Wusool" }],
  creator: "Wusool",
  publisher: "Wusool",
  robots: "index, follow",
  alternates: {
    canonical: "https://wusool.sa",
  },
  openGraph: {
    title: "وصول - خدمات النقل الخاص",
    description: "احجز سائقًا خاصًا في أبها والمناطق السياحية. خدمة نقل فاخرة وآمنة مع سائقين محترفين.",
    url: "https://wusool.sa",
    siteName: "Wusool",
    locale: "ar_SA",
    type: "website",
    images: [
      {
        url: "https://wusool.sa/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "وصول - خدمات النقل الخاص",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "وصول - خدمات النقل الخاص",
    description: "احجز سائقًا خاصًا في أبها والمناطق السياحية. خدمة نقل فاخرة وآمنة مع سائقين محترفين.",
    images: ["https://wusool.sa/og-image.jpg"],
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#D4AF37",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        <StructuredData />
        <Analytics />
        {children}
      </body>
    </html>
  );
}
