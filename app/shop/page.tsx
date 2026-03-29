"use client";

/**
 * Shop Page – /shop
 * Client component because filters update URL params (uses router hooks).
 * Reads active filters from URL searchParams and filters the product list.
 *
 * Layout:
 *  - Top: page header + filter bar
 *  - Body: responsive product grid (2–4 columns)
 *  - Empty state when no products match filters
 */

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { products, RoastLevel, Origin } from "@/data/products";
import ProductCard from "@/components/shop/ProductCard";
import ProductFilters from "@/components/shop/ProductFilters";
import { Coffee } from "lucide-react";

function ShopContent() {
  const searchParams = useSearchParams();
  const roastFilter = searchParams.get("roast") as RoastLevel | null;
  const originFilter = searchParams.get("origin") as Origin | null;

  const filtered = products.filter((p) => {
    if (roastFilter && p.roastLevel !== roastFilter) return false;
    if (originFilter && p.origin !== originFilter) return false;
    return true;
  });

  return (
    <>
      {/* ── Filters ──────────────────────────────────────── */}
      <div className="mb-8">
        <ProductFilters />
      </div>

      {/* ── Result count ─────────────────────────────────── */}
      <p className="text-sm text-[#8b5a3a] mb-4">
        {filtered.length} {filtered.length === 1 ? "Kaffee" : "Kaffees"} gefunden
      </p>

      {/* ── Grid ─────────────────────────────────────────── */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        /* Empty state */
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <div className="h-20 w-20 rounded-full bg-[#f5ecd7] flex items-center justify-center mb-4">
            <Coffee className="h-9 w-9 text-[#a67c5b]" />
          </div>
          <h3 className="text-lg font-semibold text-[#2c1810] mb-2">
            Keine Kaffees gefunden
          </h3>
          <p className="text-sm text-[#8b5a3a]">
            Passen Sie Ihre Filter an oder setzen Sie sie zurück.
          </p>
        </div>
      )}
    </>
  );
}

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-[#fdf8f0]">
      {/* ── Page Header ──────────────────────────────────── */}
      <div className="bg-[#1a0e08] pt-28 pb-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#c9a84c] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            Unser Sortiment
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Alle Kaffees
          </h1>
          <p className="text-white/60 max-w-xl">
            Von hellen Filterkaffees bis zum kräftigen Espresso – entdecken Sie
            unsere handverlesene Auswahl aus den besten Anbaugebieten der Welt.
          </p>
        </div>
      </div>

      {/* ── Content ──────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Suspense required because useSearchParams is inside */}
        <Suspense
          fallback={
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl border border-[#e8d9c0] overflow-hidden animate-pulse"
                >
                  <div className="aspect-[4/3] bg-[#f0e0c8]" />
                  <div className="p-4 space-y-2">
                    <div className="h-3 bg-[#f0e0c8] rounded w-1/2" />
                    <div className="h-4 bg-[#f0e0c8] rounded w-3/4" />
                    <div className="h-3 bg-[#f0e0c8] rounded w-full" />
                  </div>
                </div>
              ))}
            </div>
          }
        >
          <ShopContent />
        </Suspense>
      </div>
    </div>
  );
}
