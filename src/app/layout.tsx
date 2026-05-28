import type { Metadata } from "next";
import { Roboto, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aditya Rao — Builder, Founder, Technical Operator",
  description:
    "Co-founder and technical operator at Yaro AI. Building Yaro, an AI-native CRM for real estate. Finance and ML at Georgia Tech. Atlanta.",
  openGraph: {
    title: "Aditya Rao — Builder, Founder, Technical Operator",
    description:
      "Building software, ML systems, and AI-driven products. Currently building Yaro, an AI-native CRM for real estate.",
    url: "https://adityarao.com",
    siteName: "Aditya Rao",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aditya Rao",
    description:
      "Co-founder and technical operator at Yaro AI. Building Yaro, an AI-native CRM for real estate.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${roboto.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
