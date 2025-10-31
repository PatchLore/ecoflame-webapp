import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AuthRecoveryRedirect from "@/components/AuthRecoveryRedirect";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EcoFlame Heating - Professional Boiler & Heating Services",
  description: "Expert boiler installation, repairs, and heating services. Get an instant quote for your heating needs with transparent pricing.",
  metadataBase: new URL("https://www.ecoflame.co.uk"),
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
    ],
    apple: [
      { url: "/icon.png", type: "image/png" },
    ],
  },
  openGraph: {
    title: "EcoFlame Heating - Professional Boiler & Heating Services",
    description: "Expert boiler installation, repairs, and heating services. Get an instant quote for your heating needs with transparent pricing.",
    url: "https://www.ecoflame.co.uk",
    siteName: "EcoFlame Heating",
    images: [
      {
        url: "/images/og-ecoflame.png",
        width: 1200,
        height: 630,
        alt: "EcoFlame Heating Services",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EcoFlame Heating - Professional Boiler & Heating Services",
    description: "Expert boiler installation, repairs, and heating services. Get an instant quote for your heating needs with transparent pricing.",
    images: ["/images/og-ecoflame.png"],
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
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthRecoveryRedirect />
        {children}
      </body>
    </html>
  );
}
