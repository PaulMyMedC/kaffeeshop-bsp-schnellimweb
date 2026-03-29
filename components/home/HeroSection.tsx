/**
 * HeroSection – Full-viewport hero on the homepage.
 * Server component.
 * Features a dark-overlaid coffee background image, headline, subline, and CTA.
 */

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown, CheckCircle2 } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero"
    >
      {/* ── Background Image ─────────────────────────────── */}
      <Image
        src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1600&q=85"
        alt="Nahaufnahme von frisch gerösteten Kaffeebohnen"
        fill
        priority
        sizes="100vw"
        className="object-cover scale-105"
        quality={85}
      />

      {/* Dark + warm gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a0e08]/90 via-[#2c1810]/70 to-[#1a0e08]/85" />

      {/* Gold bokeh accent (CSS circle) */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#c9a84c]/10 rounded-full blur-3xl pointer-events-none" />

      {/* ── Content ──────────────────────────────────────── */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        {/* Eyebrow */}
        <p className="text-[#c9a84c] text-sm font-semibold tracking-[0.25em] uppercase mb-4 animate-fade-in">
          Spezialitätenkaffee aus Wien
        </p>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
          Jede Tasse{" "}
          <span className="text-gold-gradient relative">
            ein Erlebnis
          </span>
          .
        </h1>

        {/* Subline */}
        <p className="text-lg sm:text-xl text-white/75 max-w-2xl mx-auto mb-10 leading-relaxed">
          Wir rösten handverlesene Arabica-Bohnen aus den besten Anbaugebieten
          der Welt – mit Leidenschaft, Präzision und Respekt vor dem Ursprung.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/shop"
            className="inline-flex items-center justify-center gap-2 rounded-lg font-semibold px-8 py-3 text-base bg-[#c9a84c] hover:bg-[#b8963e] text-[#1a0e08] shadow-lg shadow-[#c9a84c]/30 transition-all duration-200 hover:scale-105"
          >
            Jetzt entdecken
            <ArrowRight className="h-4 w-4" />
          </Link>

          <Link
            href="/shop"
            className="inline-flex items-center justify-center rounded-lg px-8 py-3 text-base border border-white/30 text-white bg-white/5 hover:bg-white/15 hover:border-white/50 backdrop-blur-sm transition-all duration-200"
          >
            Unser Sortiment
          </Link>
        </div>

        {/* Trust indicators */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-white/50 text-xs">
          <span className="flex items-center gap-1">
            <CheckCircle2 className="h-3 w-3 text-[#c9a84c]" />
            Bio-zertifiziert
          </span>
          <span className="flex items-center gap-1">
            <CheckCircle2 className="h-3 w-3 text-[#c9a84c]" />
            Fair Trade
          </span>
          <span className="flex items-center gap-1">
            <CheckCircle2 className="h-3 w-3 text-[#c9a84c]" />
            Frisch geröstet
          </span>
          <span className="flex items-center gap-1">
            <CheckCircle2 className="h-3 w-3 text-[#c9a84c]" />
            Versand in 24h
          </span>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 animate-bounce">
        <ChevronDown className="h-6 w-6" />
      </div>
    </section>
  );
}
