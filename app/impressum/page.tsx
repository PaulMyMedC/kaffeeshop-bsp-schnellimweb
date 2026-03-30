/**
 * Impressum – /impressum
 * Legal notice for the showcase website.
 */

import Link from "next/link";
import { ChevronLeft, Info, ExternalLink } from "lucide-react";

export const metadata = {
  title: "Impressum (Showcase)",
  description: "Rechtliche Informationen zur Demonstrations-Website.",
  robots: { index: false, follow: false },
};

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-[#fdf8f0]">
      {/* ── Header ────────────────────────────────────────── */}
      <div className="bg-[#1a0e08] pt-28 pb-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-max mx-auto text-center">
          <p className="text-[#c9a84c] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            Rechtliches
          </p>
          <h1 className="text-4xl font-bold text-white mb-4">
            Impressum (Showcase)
          </h1>
        </div>
      </div>

      {/* ── Content ──────────────────────────────────────── */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-[#8b5a3a] hover:text-[#2c1810] mb-8 transition-colors group"
        >
          <ChevronLeft className="h-4 w-4 group-hover:-translate-x-0.5 transition-transform" />
          Zurück zur Startseite
        </Link>

        <div className="bg-white rounded-3xl border border-[#e8d9c0] p-8 sm:p-12 shadow-sm space-y-10">
          {/* Showcase Notice */}
          <section className="bg-amber-50 border border-amber-200 rounded-2xl p-6 flex gap-4">
            <Info className="h-6 w-6 text-amber-700 shrink-0 mt-0.5" />
            <div className="space-y-2">
              <h2 className="font-bold text-amber-900">Demonstrationszwecke</h2>
              <p className="text-sm text-amber-800 leading-relaxed">
                Diese Website wird zu Demonstrationszwecken betrieben. Alle dargestellten 
                Produkte, Angebote und Preise sind fiktiv und dienen lediglich der 
                Veranschaulichung der technischen Möglichkeiten. Eine Bestellung 
                oder Leistungserbringung findet nicht statt.
              </p>
            </div>
          </section>

          {/* Betreiber */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#1a0e08]">Angaben gemäß § 5 TMG</h2>
            <div className="text-[#4a2518] space-y-1 leading-relaxed">
              <p className="font-semibold text-lg">Schnell im Web – Paul Dirschlmayer</p>
              <p>Steyrergasse 63</p>
              <p>8010 Graz, Österreich</p>
              <p className="mt-4"><strong>Rechtsform:</strong> Einzelunternehmen</p>
            </div>
          </section>

          {/* Contact Agency */}
          <section className="space-y-4 pt-4 border-t border-[#f0e0c8]">
            <h2 className="text-xl font-bold text-[#1a0e08]">Vollständige Informationen</h2>
            <p className="text-[#4a2518] text-sm leading-relaxed">
              Für das vollständige Impressum und die detaillierte Datenschutzerklärung 
              der Agentur besuchen Sie bitte unsere offizielle Website:
            </p>
            <a
              href="https://schnell-im-web.at/impressum"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#2c1810] text-[#f5ecd7] font-bold hover:bg-[#4a2518] transition-all duration-200"
            >
              Impressum von schnell-im-web.at
              <ExternalLink className="h-4 w-4" />
            </a>
          </section>

          {/* Contact Placeholder */}
          <section className="space-y-4 pt-4 border-t border-[#f0e0c8]">
            <h2 className="text-xl font-bold text-[#1a0e08]">Kontakt</h2>
            <p className="text-[#4a2518] text-sm">
              Bei Fragen zu dieser Beispiel-Website kontaktieren Sie uns unter:
            </p>
            <p className="font-medium text-[#1a0e08]">beispiel@schnell-im-web.at</p>
          </section>
        </div>
      </div>
    </div>
  );
}
