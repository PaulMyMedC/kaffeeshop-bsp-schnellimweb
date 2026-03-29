"use client";

/**
 * ProductFilters – Filter bar for the Shop page.
 * Manages roast level + origin filters via URL search params
 * so filters persist on page refresh and are shareable.
 *
 * Uses controlled state synced with the URL; parent reads filters
 * from searchParams on the server but filters are handled client-side
 * for instant UI updates.
 */

import { useCallback } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { Filter, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { RoastLevel, Origin } from "@/data/products";
import { cn } from "@/lib/utils";

const ROAST_LEVELS: RoastLevel[] = ["Light", "Medium", "Dark"];
const ORIGINS: Origin[] = ["Africa", "South America", "Asia"];

const roastLabel: Record<RoastLevel, string> = {
  Light: "Hell",
  Medium: "Medium",
  Dark: "Dunkel",
};
const originLabel: Record<Origin, string> = {
  Africa: "Afrika",
  "South America": "Südamerika",
  Asia: "Asien",
};

export default function ProductFilters() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const selectedRoast = searchParams.get("roast") as RoastLevel | null;
  const selectedOrigin = searchParams.get("origin") as Origin | null;
  const activeCount = (selectedRoast ? 1 : 0) + (selectedOrigin ? 1 : 0);

  /** Helper: update a single search param, keeping others */
  const updateFilter = useCallback(
    (key: string, value: string | null) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value === null || params.get(key) === value) {
        params.delete(key); // toggle off
      } else {
        params.set(key, value);
      }
      router.push(`${pathname}?${params.toString()}`, { scroll: false });
    },
    [router, pathname, searchParams]
  );

  const clearAll = () => {
    router.push(pathname, { scroll: false });
  };

  return (
    <div className="bg-white/70 backdrop-blur-sm border border-[#dfc9a8] rounded-2xl p-4 space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-[#6b3a2a]" />
          <span className="font-semibold text-[#2c1810] text-sm">Filter</span>
          {activeCount > 0 && (
            <Badge className="bg-[#c9a84c] text-[#1a0e08] text-xs h-5 px-1.5">
              {activeCount}
            </Badge>
          )}
        </div>
        {activeCount > 0 && (
          <button
            onClick={clearAll}
            className="flex items-center gap-1 text-xs text-[#8b5a3a] hover:text-[#2c1810] transition-colors"
          >
            <RotateCcw className="h-3 w-3" />
            Zurücksetzen
          </button>
        )}
      </div>

      {/* ── Roast Level ──────────────────────────────────── */}
      <div>
        <p className="text-xs font-medium text-[#a67c5b] uppercase tracking-wide mb-2">
          Röstgrad
        </p>
        <div className="flex flex-wrap gap-2">
          {ROAST_LEVELS.map((level) => (
            <Button
              key={level}
              size="sm"
              variant="outline"
              onClick={() => updateFilter("roast", level)}
              className={cn(
                "h-8 rounded-full text-xs border transition-all",
                selectedRoast === level
                  ? "bg-[#2c1810] text-[#f5ecd7] border-[#2c1810] hover:bg-[#4a2518]"
                  : "border-[#dfc9a8] text-[#6b3a2a] hover:border-[#c9a84c] hover:bg-[#fdf8f0]"
              )}
            >
              {roastLabel[level]}
            </Button>
          ))}
        </div>
      </div>

      {/* ── Origin ───────────────────────────────────────── */}
      <div>
        <p className="text-xs font-medium text-[#a67c5b] uppercase tracking-wide mb-2">
          Herkunft
        </p>
        <div className="flex flex-wrap gap-2">
          {ORIGINS.map((origin) => (
            <Button
              key={origin}
              size="sm"
              variant="outline"
              onClick={() => updateFilter("origin", origin)}
              className={cn(
                "h-8 rounded-full text-xs border transition-all",
                selectedOrigin === origin
                  ? "bg-[#2c1810] text-[#f5ecd7] border-[#2c1810] hover:bg-[#4a2518]"
                  : "border-[#dfc9a8] text-[#6b3a2a] hover:border-[#c9a84c] hover:bg-[#fdf8f0]"
              )}
            >
              {originLabel[origin]}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
