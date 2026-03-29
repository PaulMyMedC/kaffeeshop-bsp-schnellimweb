"use client";

/**
 * Navbar – Site-wide navigation
 * Client component because it reads cart state and handles mobile menu toggle.
 * Features:
 *  - Logo (text-based with golden accent)
 *  - Nav links (Home, Shop, About)
 *  - Cart icon with item count badge
 *  - Mobile hamburger menu
 *  - Scroll-aware background (transparent → solid)
 */

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag, Menu, X, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/ueber-uns", label: "Über uns" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { totalItems, openCart } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* Add background on scroll */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Close mobile menu on route change */
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
        scrolled || mobileOpen
          ? "bg-[#1a0e08]/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* ── Logo ─────────────────────────────────────────── */}
        <Link
          href="/"
          className="flex items-center gap-2 group"
          aria-label="AromaRöstung – Startseite"
        >
          <Coffee className="h-6 w-6 text-[#c9a84c] group-hover:rotate-12 transition-transform duration-300" />
          <span className="font-bold text-lg tracking-tight text-white">
            Aroma<span className="text-[#c9a84c]">Röstung</span>
          </span>
        </Link>

        {/* ── Desktop Nav Links ─────────────────────────────── */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={cn(
                  "text-sm font-medium transition-colors duration-200 relative group",
                  pathname === href || (href !== "/" && pathname.startsWith(href))
                    ? "text-[#c9a84c]"
                    : "text-white/80 hover:text-white"
                )}
              >
                {label}
                {/* Underline indicator */}
                <span
                  className={cn(
                    "absolute -bottom-1 left-0 h-px bg-[#c9a84c] transition-all duration-300",
                    pathname === href || (href !== "/" && pathname.startsWith(href))
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  )}
                />
              </Link>
            </li>
          ))}
        </ul>

        {/* ── Right Actions ──────────────────────────────────── */}
        <div className="flex items-center gap-3">
          {/* Cart button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={openCart}
            className="relative text-white/90 hover:text-white hover:bg-white/10 transition-colors"
            aria-label={`Warenkorb öffnen (${totalItems} Artikel)`}
          >
            <ShoppingBag className="h-5 w-5" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 h-4.5 w-4.5 min-w-[18px] rounded-full bg-[#c9a84c] text-[#1a0e08] text-[10px] font-bold flex items-center justify-center leading-none px-0.5">
                {totalItems > 99 ? "99+" : totalItems}
              </span>
            )}
          </Button>

          {/* Mobile hamburger */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white/90 hover:text-white hover:bg-white/10"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label={mobileOpen ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </nav>

      {/* ── Mobile Menu ───────────────────────────────────────── */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
          mobileOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <ul className="px-4 pb-4 pt-2 space-y-2 bg-[#1a0e08]/95 backdrop-blur-md border-t border-white/10">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={cn(
                  "block py-2 px-3 rounded-md text-sm font-medium transition-colors",
                  pathname === href || (href !== "/" && pathname.startsWith(href))
                    ? "text-[#c9a84c] bg-white/5"
                    : "text-white/80 hover:text-white hover:bg-white/5"
                )}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
