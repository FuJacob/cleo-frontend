import type { Metadata } from "next";
import { Instrument_Serif, Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SmoothCursor } from "@/components/ui/smooth-cursor";

import "./globals.css";

const instrumentSerif = Instrument_Serif({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-instrument-serif",
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Cleo - Your Personal AI Assistant for macOS",
  description:
    "Get instant explanations, track your focus, and build your knowledge base—all from your menu bar. Free, open-source, and privacy-first.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Analytics />
      <body
        className={`${instrumentSerif.variable} ${poppins.variable} antialiased cursor-none`}
      >
        <SmoothCursor />
        {children}
      </body>
    </html>
  );
}
