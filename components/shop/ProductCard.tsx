"use client";

/**
 * ProductCard – Reusable card for shop grid and featured section.
 * Shows product image, roast badge, name, origin, price and quick-add button.
 * Triggers a sonner toast on add-to-cart.
 */

import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useCart } from "@/contexts/CartContext";
import { Product, roastLevelLabel } from "@/data/products";
import { cn } from "@/lib/utils";

// Roast level → colour mapping
const roastColors: Record<string, string> = {
  Light: "bg-amber-100 text-amber-800 border-amber-200",
  Medium: "bg-orange-100 text-orange-800 border-orange-200",
  Dark: "bg-stone-800 text-stone-100 border-stone-700",
};

interface ProductCardProps {
  product: Product;
  /** When true, card renders in a smaller, horizontal-friendly layout */
  compact?: boolean;
}

export default function ProductCard({ product, compact = false }: ProductCardProps) {
  const { addItem, openCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault(); // don't navigate to PDP when clicking the card
    addItem(product);
    toast.success(`${product.name} zum Warenkorb hinzugefügt`, {
      description: `${product.weight} · ${roastLevelLabel[product.roastLevel]}`,
      action: {
        label: "Warenkorb",
        onClick: openCart,
      },
      duration: 3000,
    });
  };

  return (
    <Link
      href={`/shop/${product.id}`}
      className={cn(
        "group relative flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-[#e8d9c0] hover:border-[#c9a84c]/50",
        compact && "flex-row"
      )}
    >
      {/* ── Image ─────────────────────────────────────────── */}
      <div
        className={cn(
          "relative overflow-hidden bg-[#f5ecd7] shrink-0",
          compact ? "w-28 h-28" : "aspect-[4/3] w-full"
        )}
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes={compact ? "112px" : "(max-width: 768px) 100vw, 33vw"}
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Roast badge overlay */}
        <Badge
          className={cn(
            "absolute top-2 left-2 text-xs border font-medium",
            roastColors[product.roastLevel]
          )}
        >
          {roastLevelLabel[product.roastLevel]}
        </Badge>
      </div>

      {/* ── Body ──────────────────────────────────────────── */}
      <div className={cn("flex flex-col flex-1 p-4", compact && "py-3")}>
        {/* Origin tag */}
        <p className="text-xs text-[#a67c5b] font-medium uppercase tracking-wide mb-1">
          {product.region}
        </p>

        {/* Name */}
        <h3
          className={cn(
            "font-semibold text-[#2c1810] leading-tight group-hover:text-[#6b3a2a] transition-colors",
            compact ? "text-sm line-clamp-1" : "text-base"
          )}
        >
          {product.name}
        </h3>

        {/* Flavor notes */}
        {!compact && (
          <p className="text-xs text-[#8b5a3a] mt-1.5 line-clamp-1">
            {product.flavorNotes.join(" · ")}
          </p>
        )}

        {/* Rating */}
        <div className="flex items-center gap-1 mt-2">
          <Star className="h-3.5 w-3.5 fill-[#c9a84c] text-[#c9a84c]" />
          <span className="text-xs font-semibold text-[#2c1810]">
            {product.rating.toFixed(1)}
          </span>
          <span className="text-xs text-[#a67c5b]">
            ({product.reviewCount})
          </span>
        </div>

        {/* Price + CTA */}
        <div
          className={cn(
            "flex items-center justify-between mt-auto",
            compact ? "mt-2" : "mt-3 pt-3 border-t border-[#f0e0c8]"
          )}
        >
          <div>
            <span className="font-bold text-[#2c1810] text-base">
              €{product.price.toFixed(2)}
            </span>
            <span className="text-xs text-[#a67c5b] ml-1">/ {product.weight}</span>
          </div>

          <Button
            size="sm"
            onClick={handleAddToCart}
            className="h-8 gap-1.5 bg-[#2c1810] hover:bg-[#c9a84c] hover:text-[#1a0e08] text-[#f5ecd7] transition-all duration-200 text-xs"
            aria-label={`${product.name} in den Warenkorb`}
          >
            <ShoppingCart className="h-3.5 w-3.5" />
            {!compact && "Kaufen"}
          </Button>
        </div>
      </div>
    </Link>
  );
}
