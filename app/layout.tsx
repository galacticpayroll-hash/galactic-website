import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import HeaderBar from "./components/HeaderBar";
import Footer from "./components/Footer";
import MainNav from "./components/MainNav";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: "Galactic",
  description: "Galactic website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Script
          src="//tag.brandcdn.com/autoscript/galacticinc_vgxsumqwmtzuwgs9/Galactic_Inc.js"
          strategy="afterInteractive"
        />
        <HeaderBar />
        <header className="main-header">
          <MainNav />
        </header>
        <main className="mx-auto w-full max-w-7xl px-6 py-12">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
