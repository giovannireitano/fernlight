import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";

import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Fernlight — Digital Marketing & Web Design Studio",
  description:
    "Fernlight is a digital marketing and website building studio. We design fast, beautiful websites and run marketing that helps small businesses grow.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body>
        {children}
        {/* LeadConnector (GoHighLevel) chat widget. Rendered as a plain <script>
            so the tag is present in the server-rendered HTML for GoHighLevel's
            compliance scanner (a JS-injected next/script tag is invisible to it). */}
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script
          src="https://widgets.leadconnectorhq.com/loader.js"
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="6a3095e2b48bf7b6a317c7f2"
          data-source="WEB_USER"
        ></script>
      </body>
    </html>
  );
}
