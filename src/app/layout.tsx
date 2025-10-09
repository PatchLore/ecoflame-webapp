import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FixBlox Custom QuoteFlow Solution",
  description: "Get your brand new website setup with our customised QuoteFlow solution including WhatsApp link and QR code integration.",
  metadataBase: new URL("https://www.fixblox.com"),
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
    ],
    apple: [
      { url: "/icon.png", type: "image/png" },
    ],
  },
  openGraph: {
    title: "FixBlox Custom QuoteFlow Solution",
    description: "Get your brand new website setup with our customised QuoteFlow solution including WhatsApp link and QR code integration.",
    url: "https://www.fixblox.com",
    siteName: "FixBlox",
    images: [
      {
        url: "/images/og-fixblox.png",
        width: 1200,
        height: 630,
        alt: "FixBlox Custom QuoteFlow Solution",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FixBlox Custom QuoteFlow Solution",
    description: "Get your brand new website setup with our customised QuoteFlow solution including WhatsApp link and QR code integration.",
    images: ["/images/og-fixblox.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
