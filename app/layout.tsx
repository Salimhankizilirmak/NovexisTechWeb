import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Yalıtım Fabrikası",
    template: "%s",
  },
  description:
    "Yalıtım Fabrikası: Isı, ses ve yangın yalıtımı ürünlerinde modern üretim ve yüksek kalite.",
  metadataBase: new URL("https://www.yalitimfabrikasi.com"),
  alternates: { canonical: "/" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-slate-900`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
