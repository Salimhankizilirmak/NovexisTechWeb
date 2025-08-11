import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import LoadingOverlay from "@/components/layout/LoadingOverlay";

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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-red-50 text-red-950 dark:bg-red-950 dark:text-red-50`}>
        <LoadingOverlay />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
