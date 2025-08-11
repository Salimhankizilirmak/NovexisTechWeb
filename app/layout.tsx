import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LoadingOverlay from "@/components/LoadingOverlay";

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
    default: "Hitit Yalıtım",
    template: "%s",
  },
  description:
    "Hitit Yalıtım: Isı, ses ve yangın yalıtımı ürünlerinde modern üretim ve yüksek kalite.",
  metadataBase: new URL("https://www.hitityalitim.com"),
  alternates: { canonical: "/" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-slate-900`}> 
        <LoadingOverlay />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
