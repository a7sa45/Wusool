import type { Metadata } from "next";
import { Analytics } from "@/components/Analytics";
import "./globals.css";

export const metadata: Metadata = {
  title: "وصول - خدمات النقل الخاص | Wusool Private Transport Services",
  description: "احجز سائقًا خاصًا في أبها والمناطق السياحية. خدمة نقل فاخرة وآمنة مع سائقين محترفين. Book private drivers in Abha and tourist areas with professional, luxury transport services.",
  keywords: "وصول، سائق خاص، أبها، نقل، سيارة، Wusool, private driver, Abha, transport, car service",
  authors: [{ name: "Wusool" }],
  creator: "Wusool",
  publisher: "Wusool",
  robots: "index, follow",
  openGraph: {
    title: "وصول - خدمات النقل الخاص",
    description: "احجز سائقًا خاصًا في أبها والمناطق السياحية. خدمة نقل فاخرة وآمنة مع سائقين محترفين.",
    url: "https://wusool.sa",
    siteName: "Wusool",
    locale: "ar_SA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "وصول - خدمات النقل الخاص",
    description: "احجز سائقًا خاصًا في أبها والمناطق السياحية. خدمة نقل فاخرة وآمنة مع سائقين محترفين.",
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#D4AF37",
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
        <Analytics />
        {children}
      </body>
    </html>
  );
}
