"use client";

import Link from "next/link";
import { Coffee, Globe } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1a0e08] text-white/70 py-12 px-4 sm:px-6 lg:px-8 border-t border-white/5 mt-auto pb-24 sm:pb-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & About */}
        <div className="md:col-span-2 space-y-6">
          <Link href="/" className="flex items-center gap-2 group">
            <Coffee className="h-6 w-6 text-[#c9a84c]" />
            <span className="font-bold text-lg tracking-tight text-white">
              Aroma<span className="text-[#c9a84c]">Röstung</span>
            </span>
          </Link>
          <p className="max-w-sm text-sm leading-relaxed">
            Spezialitätenkaffee aus nachhaltigem Anbau, frisch geröstet in Wien. 
            Wahrer Genuss beginnt bei der Verantwortung gegenüber Mensch und Natur.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" className="hover:text-[#c9a84c] transition-colors"><Globe className="h-5 w-5" /></Link>
            <Link href="#" className="hover:text-[#c9a84c] transition-colors"><Globe className="h-5 w-5" /></Link>
            <Link href="#" className="hover:text-[#c9a84c] transition-colors"><Globe className="h-5 w-5" /></Link>
          </div>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-white font-bold mb-4">Erkunden</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link href="/shop" className="hover:text-white transition-colors">Shop</Link></li>
            <li><Link href="/ueber-uns" className="hover:text-white transition-colors">Über uns</Link></li>
          </ul>
        </div>

        {/* Legal Links (Showcase) */}
        <div>
          <h3 className="text-white font-bold mb-4">Rechtliches</h3>
          <ul className="space-y-2 text-sm font-medium">
            <li>
              <Link href="/impressum" className="text-[#c9a84c] hover:underline underline-offset-4">
                Impressum & Datenschutz (Showcase)
              </Link>
            </li>
            <li>
              <Link href="/datenschutz" className="hover:text-white transition-colors">
                Datenschutzerklärung
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        <p>© {currentYear} AromaRöstung. Alle Rechte vorbehalten.</p>
        <p className="text-white/30 italic">
          Entwickelt von <a href="https://schnell-im-web.at" target="_blank" rel="noopener" className="underline hover:text-[#c9a84c]">schnell-im-web.at</a>
        </p>
      </div>
    </footer>
  );
}
