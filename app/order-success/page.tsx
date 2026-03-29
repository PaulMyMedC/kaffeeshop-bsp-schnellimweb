/**
 * Order Success Page – /order-success
 * Shown after a demo checkout is completed.
 * Server component (no state needed).
 */

import Link from "next/link";
import { CheckCircle2, Coffee, ArrowRight, Package } from "lucide-react";

export default function OrderSuccessPage() {
  const orderNumber = `AR-${Math.floor(10000 + Math.random() * 90000)}`;

  return (
    <div className="min-h-screen bg-[#fdf8f0] flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center space-y-8">
        {/* Success icon */}
        <div className="relative inline-flex">
          <div className="h-28 w-28 rounded-full bg-[#f5ecd7] border-4 border-[#c9a84c]/30 flex items-center justify-center mx-auto">
            <CheckCircle2 className="h-14 w-14 text-[#c9a84c]" strokeWidth={1.5} />
          </div>
          {/* Coffee accent */}
          <div className="absolute -bottom-2 -right-2 h-10 w-10 rounded-full bg-[#1a0e08] flex items-center justify-center shadow-md">
            <Coffee className="h-5 w-5 text-[#c9a84c]" />
          </div>
        </div>

        {/* Heading */}
        <div>
          <h1 className="text-4xl font-bold text-[#1a0e08] mb-3">
            Vielen Dank!
          </h1>
          <p className="text-[#6b3a2a] text-lg leading-relaxed">
            Ihre (Demo-)Bestellung wurde erfolgreich aufgegeben. Wir rösten
            Ihren Kaffee frisch und versenden ihn innerhalb von 24 Stunden.
          </p>
        </div>

        {/* Order details card */}
        <div className="bg-white rounded-2xl border border-[#e8d9c0] p-6 text-left space-y-4">
          <div className="flex items-center gap-2">
            <Package className="h-5 w-5 text-[#c9a84c]" />
            <span className="font-semibold text-[#1a0e08]">Bestelldetails</span>
          </div>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div>
              <p className="text-[#a67c5b] text-xs font-medium">Bestellnummer</p>
              <p className="font-bold text-[#1a0e08] font-mono">{orderNumber}</p>
            </div>
            <div>
              <p className="text-[#a67c5b] text-xs font-medium">Status</p>
              <p className="font-semibold text-green-700">Bestätigt</p>
            </div>
            <div>
              <p className="text-[#a67c5b] text-xs font-medium">Lieferung</p>
              <p className="font-semibold text-[#2c1810]">1–2 Werktage</p>
            </div>
            <div>
              <p className="text-[#a67c5b] text-xs font-medium">Bestätigungs-E-Mail</p>
              <p className="font-semibold text-[#2c1810]">Demo (nicht gesendet)</p>
            </div>
          </div>
        </div>

        {/* What's next */}
        <div className="bg-[#1a0e08] rounded-2xl p-5 text-left space-y-3">
          <p className="text-[#c9a84c] text-sm font-semibold uppercase tracking-wide">
            Was passiert als nächstes?
          </p>
          {[
            "Bestellbestätigung per E-Mail (Demo)",
            "Röstung Ihrer Bohnen am nächsten Werktag",
            "Versand mit Trackingnummer",
            "Genuss in der Tasse!",
          ].map((step, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="h-5 w-5 rounded-full bg-[#c9a84c]/20 border border-[#c9a84c]/40 text-[#c9a84c] text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                {i + 1}
              </span>
              <p className="text-white/80 text-sm">{step}</p>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/shop"
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-base font-bold bg-[#c9a84c] hover:bg-[#b8963e] text-[#1a0e08] transition-colors"
          >
            Weiter einkaufen
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/"
            className="flex-1 inline-flex items-center justify-center rounded-lg px-6 py-3 text-base border border-[#dfc9a8] text-[#6b3a2a] hover:bg-[#f5ecd7] transition-colors"
          >
            Zur Startseite
          </Link>
        </div>

        {/* Demo note */}
        <p className="text-xs text-[#a67c5b]">
          Dies ist eine Demo-Website. Es wurde keine echte Bestellung aufgegeben.
        </p>
      </div>
    </div>
  );
}
