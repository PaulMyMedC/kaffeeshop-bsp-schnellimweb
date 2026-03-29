"use client";

/**
 * CookieBanner – DSGVO-konformes Cookie-Einwilligungsbanner.
 * Erscheint beim ersten Besuch, verschwindet nach Auswahl.
 * Speichert die Entscheidung im localStorage.
 */

import { useState, useEffect } from "react";
import Link from "next/link";
import { Cookie, X } from "lucide-react";
import { cn } from "@/lib/utils";

const STORAGE_KEY = "aromaroestung_cookie_consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Nur anzeigen, wenn noch keine Entscheidung getroffen wurde
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) {
      // Kurze Verzögerung damit das Banner nicht sofort aufploppt
      const t = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(t);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem(STORAGE_KEY, "essential");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie-Einwilligung"
      aria-live="polite"
      className={cn(
        // Sitzt oberhalb der DemoBanner (bottom-0, ~32px hoch) → bottom-10
        "fixed bottom-10 left-0 right-0 z-[45] px-4 pb-2 pointer-events-none",
        "flex justify-center"
      )}
    >
      <div className="pointer-events-auto w-full max-w-3xl bg-[#1a0e08] border border-[#c9a84c]/30 rounded-2xl shadow-2xl shadow-black/50 p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-5">
        {/* Icon */}
        <div className="h-10 w-10 rounded-full bg-[#c9a84c]/15 border border-[#c9a84c]/30 flex items-center justify-center shrink-0">
          <Cookie className="h-5 w-5 text-[#c9a84c]" />
        </div>

        {/* Text */}
        <div className="flex-1 min-w-0">
          <p className="text-white font-semibold text-sm">
            Wir verwenden Cookies
          </p>
          <p className="text-white/60 text-xs mt-1 leading-relaxed">
            Wir nutzen Cookies, um Ihnen das beste Erlebnis zu bieten und unsere Website
            zu verbessern. Technisch notwendige Cookies sind immer aktiv.{" "}
            <Link
              href="/datenschutz"
              className="text-[#c9a84c] hover:underline underline-offset-2"
            >
              Datenschutzerklärung
            </Link>
          </p>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto">
          <button
            onClick={decline}
            className="flex-1 sm:flex-none h-9 px-4 rounded-lg text-xs font-medium border border-white/20 text-white/70 hover:text-white hover:border-white/40 transition-colors"
          >
            Nur notwendige
          </button>
          <button
            onClick={accept}
            className="flex-1 sm:flex-none h-9 px-5 rounded-lg text-xs font-bold bg-[#c9a84c] hover:bg-[#b8963e] text-[#1a0e08] transition-colors"
          >
            Alle akzeptieren
          </button>
        </div>

        {/* Close */}
        <button
          onClick={decline}
          className="hidden sm:flex absolute top-3 right-3 h-7 w-7 items-center justify-center rounded-full text-white/40 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Schließen"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
