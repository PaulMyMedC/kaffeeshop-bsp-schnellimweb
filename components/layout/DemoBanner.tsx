/**
 * DemoBanner – Fixed bottom bar crediting schnell-im-web.at
 * Server component (no interactivity needed).
 */

import Link from "next/link";
import { ExternalLink } from "lucide-react";

export default function DemoBanner() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 bg-[#1a0e08] text-white/90 text-[10px] sm:text-xs py-2.5 px-4 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 border-t border-[#c9a84c]/20 shadow-[0_-4px_20px_rgba(0,0,0,0.4)] backdrop-blur-sm"
      role="banner"
      aria-label="Demo-Website Hinweis"
    >
      <div className="flex items-center gap-2 text-center">
        {/* Pulse indicator */}
        <span className="relative flex h-2 w-2 shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c9a84c] opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#c9a84c]" />
        </span>
        <p className="leading-tight">
          Dies ist eine <span className="text-[#c9a84c] font-medium">Beispiel-Website</span> von Schnell im Web.
          Alle Inhalte, Leistungen und Preise dienen ausschließlich Demonstrationszwecken.
        </p>
      </div>

      <Link
        href="https://schnell-im-web.at"
        className="shrink-0 flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#c9a84c] text-[#1a0e08] font-bold hover:bg-[#b8963e] transition-all duration-200 hover:scale-105 text-[10px] uppercase tracking-wider"
      >
        Zurück zur Hauptseite
        <ExternalLink className="h-3 w-3" />
      </Link>
    </div>
  );
}
