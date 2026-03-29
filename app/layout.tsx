import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/contexts/CartContext";
import Navbar from "@/components/layout/Navbar";
import CartSheet from "@/components/cart/CartSheet";
import DemoBanner from "@/components/layout/DemoBanner";
import CookieBanner from "@/components/layout/CookieBanner";
import { Toaster } from "@/components/ui/sonner";

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
    default: "AromaRöstung – Spezialitätenkaffee aus Wien",
    template: "%s | AromaRöstung",
  },
  description:
    "Handverlesene Arabica-Bohnen, schonend geröstet. Entdecken Sie Single-Origins aus Äthiopien, Kolumbien, Sumatra und mehr.",
  keywords: ["Kaffee", "Spezialitätenkaffee", "Kafferösterei", "Wien", "Bio", "Fair Trade"],
  openGraph: {
    title: "AromaRöstung – Spezialitätenkaffee aus Wien",
    description: "Handverlesene Arabica-Bohnen, schonend geröstet.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#fdf8f0]">
        {/* Cart context wraps everything so Navbar + Sheet share state */}
        <CartProvider>
          <Navbar />
          <main className="flex-1 pb-10">{children}</main>
          <CartSheet />

          {/* Sonner toast container */}
          <Toaster
            position="top-right"
            toastOptions={{
              classNames: {
                toast:
                  "bg-white border border-[#dfc9a8] text-[#2c1810] shadow-lg",
                title: "font-semibold text-[#1a0e08]",
                description: "text-[#6b3a2a] text-xs",
                actionButton:
                  "bg-[#2c1810] text-[#f5ecd7] hover:bg-[#4a2518] text-xs font-medium",
              },
            }}
          />

          <CookieBanner />

          {/* Fixed bottom demo banner (adds 32px padding to avoid overlap) */}
          <DemoBanner />
        </CartProvider>
      </body>
    </html>
  );
}
