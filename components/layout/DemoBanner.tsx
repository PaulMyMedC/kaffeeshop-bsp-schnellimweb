/**
 * DemoBanner – Fixed bottom bar crediting schnell-im-web.at
 * Server component (no interactivity needed).
 */

import Link from "next/link";
import { ExternalLink } from "lucide-react";

export default function DemoBanner() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 bg-[#1a0e08] text-[#e0cc8e] text-xs py-2 px-4 flex items-center justify-center gap-2 shadow-[0_-2px_12px_rgba(0,0,0,0.3)]"
      role="banner"
      aria-label="Demo-Website Hinweis"
    >
      {/* Pulse indicator */}
      <span className="relative flex h-2 w-2 shrink-0">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c9a84c] opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#c9a84c]" />
      </span>

      <p className="text-center leading-tight">
        Dies ist eine Demo-Website erstellt von{" "}
        <Link
          href="https://schnell-im-web.at"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-[#c9a84c] hover:text-[#e0cc8e] underline-offset-2 hover:underline transition-colors inline-flex items-center gap-0.5"
        >
          schnell-im-web.at
          <ExternalLink className="h-3 w-3" />
        </Link>{" "}
        – Ihr Partner für hochperformante Websites.
      </p>
    </div>
  );
}
