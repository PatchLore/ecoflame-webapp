import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AuthRecoveryRedirect from "@/components/AuthRecoveryRedirect";
import EcoFlameLayout from "@/components/EcoFlameLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EcoFlame Heating & Plumbing",
  description:
    "Gas Safe registered heating and plumbing specialists for London and Surrey. Instant quotes, boiler installations, repairs, and servicing.",
  metadataBase: new URL("https://www.ecoflame.co.uk"),
  icons: {
    icon: [
      { url: "/flame-logo.png", type: "image/png" },
      { url: "/EcoFlameNew.png", type: "image/png" },
    ],
    apple: [
      { url: "/EcoFlameNew.png", type: "image/png" },
    ],
  },
  openGraph: {
    title: "EcoFlame Heating & Plumbing",
    description:
      "Professional heating and plumbing services. Boiler installs, servicing, and emergency repairs across London and Surrey.",
    url: "https://www.ecoflame.co.uk",
    siteName: "EcoFlame Heating",
    images: [
      {
        url: "/EcoFlameNew.png",
        width: 1200,
        height: 630,
        alt: "EcoFlame Heating engineers",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EcoFlame Heating & Plumbing",
    description:
      "Trusted boiler and plumbing specialists providing fast, reliable service throughout London and Surrey.",
    images: ["/EcoFlameNew.png"],
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
        <EcoFlameLayout>
          {children}
        </EcoFlameLayout>
      </body>
    </html>
  );
}
