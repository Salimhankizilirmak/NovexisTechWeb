import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WaveDivider from "@/components/ui/WaveDivider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Hitit Yalıtım | Hitpor",
  description:
    "Isı yalıtım ürünleri, strafor koruyucular ve ısıtma panellerinde modern üretim ve yüksek kalite.",
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
  openGraph: {
    title: "Hitit Yalıtım | Hitpor",
    description:
      "Isı yalıtım ürünleri, strafor koruyucular ve ısıtma panellerinde modern üretim ve yüksek kalite.",
    images: [
      {
        url: "/images/logo.png",
        width: 512,
        height: 512,
        alt: "Hitit Yalıtım Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hitit Yalıtım | Hitpor",
    description:
      "Isı yalıtım ürünleri, strafor koruyucular ve ısıtma panellerinde modern üretim ve yüksek kalite.",
    images: ["/images/logo.png"],
  },
} as const;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        {children}
        <WaveDivider />
        <Footer />
      </body>
    </html>
  );
}
