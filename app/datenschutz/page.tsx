/**
 * Datenschutzerklärung – /datenschutz
 * Demo-Datenschutzseite für die AromaRöstung-Website.
 * Server component.
 */

import Link from "next/link";
import { ChevronLeft, Shield } from "lucide-react";

export const metadata = {
  title: "Datenschutzerklärung",
  description: "Datenschutzerklärung der AromaRöstung – Demo-Website",
};

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-[#fdf8f0]">
      {/* Header */}
      <div className="bg-[#1a0e08] pt-24 pb-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-white/50 hover:text-white transition-colors group mb-6"
          >
            <ChevronLeft className="h-4 w-4 group-hover:-translate-x-0.5 transition-transform" />
            Zur Startseite
          </Link>
          <div className="flex items-center gap-3">
            <Shield className="h-8 w-8 text-[#c9a84c]" />
            <h1 className="text-3xl font-bold text-white">Datenschutzerklärung</h1>
          </div>
          <p className="text-white/50 text-sm mt-2">Demo-Seite · Keine echten Daten werden verarbeitet</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
        {/* Demo-Hinweis */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
          <p className="text-amber-800 text-sm font-medium">
            <strong>Hinweis:</strong> Dies ist eine Demo-Website, erstellt von schnell-im-web.at.
            Es werden keine echten personenbezogenen Daten erhoben, gespeichert oder verarbeitet.
            Die folgende Datenschutzerklärung dient nur zu Demonstrationszwecken.
          </p>
        </div>

        {[
          {
            title: "1. Verantwortlicher",
            body: "AromaRöstung (Demo)\nMusterstraße 1\n1010 Wien, Österreich\nE-Mail: info@aromaroestung.at (Demo, nicht aktiv)\n\nDiese Website ist ein Demoprojekt von schnell-im-web.at und hat keinen echten Betreiber.",
          },
          {
            title: "2. Welche Daten wir verarbeiten",
            body: "Da es sich um eine Demo-Website handelt, werden keine personenbezogenen Daten verarbeitet. Bestellungen, Kontaktformulare und Zahlungen sind nicht real und werden nicht gespeichert.\n\nBei einem echten Betrieb würden folgende Daten verarbeitet werden:\n• Name und Adresse für den Versand\n• E-Mail-Adresse für Bestellbestätigungen\n• Zahlungsdaten (verarbeitet durch einen Zahlungsdienstleister)\n• Server-Logfiles (technisch notwendig)",
          },
          {
            title: "3. Cookies",
            body: "Diese Website setzt technisch notwendige Cookies ein, um grundlegende Funktionen bereitzustellen (z.B. Warenkorb-Session). Optional werden Analyse-Cookies verwendet, wenn Sie dem zustimmen.\n\nSie können Ihre Cookie-Einstellungen jederzeit über den Browser ändern oder den Cookie-Banner erneut aufrufen.",
          },
          {
            title: "4. Ihre Rechte",
            body: "Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung Ihrer personenbezogenen Daten. Da diese Website eine Demo ist, gibt es keine zu löschenden Daten.\n\nBei einem echten Betrieb würden Sie das Recht haben:\n• Auskunft über gespeicherte Daten\n• Berichtigung unrichtiger Daten\n• Löschung Ihrer Daten\n• Widerspruch gegen die Verarbeitung\n• Datenübertragbarkeit",
          },
          {
            title: "5. Hosting",
            body: "Diese Demo-Website wird auf Vercel gehostet. Technische Details zum Hosting können der Datenschutzerklärung von Vercel (vercel.com/legal/privacy-policy) entnommen werden.",
          },
        ].map(({ title, body }) => (
          <section key={title} className="space-y-3">
            <h2 className="text-xl font-bold text-[#1a0e08]">{title}</h2>
            <div className="text-[#4a2518] leading-relaxed text-sm whitespace-pre-line">
              {body}
            </div>
          </section>
        ))}

        <div className="pt-4 border-t border-[#e8d9c0]">
          <p className="text-xs text-[#a67c5b]">
            Stand: März 2025 · Demo-Dokument erstellt von{" "}
            <Link
              href="https://schnell-im-web.at"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#c9a84c] hover:underline"
            >
              schnell-im-web.at
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
