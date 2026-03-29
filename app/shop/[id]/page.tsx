"use client";

/**
 * Product Detail Page – /shop/[id]
 * Client component to handle:
 *  - Image gallery (thumbnail click switches main image)
 *  - "Add to Cart" with toast notification
 *  - Quantity selector
 *
 * Displays:
 *  - Image gallery
 *  - Product metadata (name, origin, roast, process, altitude, flavor notes)
 *  - Price + Add to Cart
 *  - Customer reviews with star ratings
 */

import { useParams, notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ShoppingCart,
  Star,
  ChevronLeft,
  Minus,
  Plus,
  MapPin,
  Mountain,
  Flame,
  Droplets,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";
import { useCart } from "@/contexts/CartContext";
import { getProductById, roastLevelLabel } from "@/data/products";

/** Renders 1–5 filled/empty stars */
function StarRating({ rating, size = "sm" }: { rating: number; size?: "sm" | "md" }) {
  const starSize = size === "md" ? "h-5 w-5" : "h-3.5 w-3.5";
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`${starSize} ${
            i < Math.round(rating)
              ? "fill-[#c9a84c] text-[#c9a84c]"
              : "fill-transparent text-[#dfc9a8]"
          }`}
        />
      ))}
    </div>
  );
}

export default function ProductDetailPage() {
  const params = useParams();
  const product = getProductById(params.id as string);

  // Call hooks before any early returns
  const { addItem, openCart } = useCart();
  const [activeImage, setActiveImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    notFound();
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product);
    }
    toast.success(`${quantity}× ${product.name} zum Warenkorb hinzugefügt`, {
      description: `€${(product.price * quantity).toFixed(2)}`,
      action: { label: "Warenkorb", onClick: openCart },
      duration: 4000,
    });
  };

  const metaItems = [
    { icon: MapPin, label: "Herkunft", value: product.region },
    { icon: Mountain, label: "Höhenlage", value: product.altitude },
    { icon: Flame, label: "Röstgrad", value: roastLevelLabel[product.roastLevel] },
    { icon: Droplets, label: "Aufbereitung", value: product.process },
  ];

  return (
    <div className="min-h-screen bg-[#fdf8f0]">
      {/* ── Breadcrumb ────────────────────────────────────── */}
      <div className="bg-[#1a0e08] pt-20 pb-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-white/50">
            <Link href="/" className="hover:text-white/80 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/shop" className="hover:text-white/80 transition-colors">
              Shop
            </Link>
            <span>/</span>
            <span className="text-[#c9a84c] line-clamp-1">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Back link */}
        <Link
          href="/shop"
          className="inline-flex items-center gap-1.5 text-sm text-[#8b5a3a] hover:text-[#2c1810] mb-8 transition-colors group"
        >
          <ChevronLeft className="h-4 w-4 group-hover:-translate-x-0.5 transition-transform" />
          Zurück zum Shop
        </Link>

        {/* ── Main Content ──────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* ── Image Gallery ──── */}
          <div className="space-y-4">
            {/* Main image */}
            <div className="relative aspect-square rounded-3xl overflow-hidden bg-[#f5ecd7] shadow-lg">
              <Image
                src={product.images[activeImage]}
                alt={`${product.name} – Bild ${activeImage + 1}`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-opacity duration-300"
                priority
              />
              {/* Roast badge */}
              <Badge
                className={`absolute top-4 left-4 text-sm border font-medium ${
                  product.roastLevel === "Light"
                    ? "bg-amber-100 text-amber-800 border-amber-200"
                    : product.roastLevel === "Medium"
                    ? "bg-orange-100 text-orange-800 border-orange-200"
                    : "bg-stone-800 text-stone-100 border-stone-700"
                }`}
              >
                {roastLevelLabel[product.roastLevel]}
              </Badge>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3">
              {product.images.map((src, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`relative h-20 w-20 rounded-xl overflow-hidden border-2 transition-all duration-200 ${
                    activeImage === i
                      ? "border-[#c9a84c] shadow-md scale-105"
                      : "border-[#e8d9c0] hover:border-[#c9a84c]/50 opacity-70 hover:opacity-100"
                  }`}
                  aria-label={`Bild ${i + 1} anzeigen`}
                >
                  <Image
                    src={src}
                    alt={`${product.name} Thumbnail ${i + 1}`}
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* ── Product Info ──── */}
          <div className="flex flex-col">
            {/* Origin */}
            <p className="text-[#a67c5b] text-sm font-semibold uppercase tracking-wider mb-2">
              {product.origin} · {product.region}
            </p>

            {/* Name */}
            <h1 className="text-3xl sm:text-4xl font-bold text-[#1a0e08] leading-tight mb-3">
              {product.name}
            </h1>

            {/* Tagline */}
            <p className="text-[#6b3a2a] text-base italic mb-4">
              "{product.tagline}"
            </p>

            {/* Rating row */}
            <div className="flex items-center gap-3 mb-6">
              <StarRating rating={product.rating} size="md" />
              <span className="font-semibold text-[#2c1810]">
                {product.rating.toFixed(1)}
              </span>
              <span className="text-[#a67c5b] text-sm">
                ({product.reviewCount} Bewertungen)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-4xl font-bold text-[#1a0e08]">
                €{product.price.toFixed(2)}
              </span>
              <span className="text-[#8b5a3a] text-base">/ {product.weight}</span>
            </div>

            {/* Description */}
            <p className="text-[#4a2518] leading-relaxed text-sm mb-6">
              {product.description}
            </p>

            {/* Flavor notes */}
            <div className="flex flex-wrap gap-2 mb-6">
              {product.flavorNotes.map((note) => (
                <span
                  key={note}
                  className="text-xs px-3 py-1 rounded-full bg-[#f5ecd7] text-[#6b3a2a] border border-[#dfc9a8] font-medium"
                >
                  {note}
                </span>
              ))}
            </div>

            <Separator className="bg-[#e8d9c0] mb-6" />

            {/* Metadata grid */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {metaItems.map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="flex items-start gap-2.5 p-3 bg-white rounded-xl border border-[#e8d9c0]"
                >
                  <Icon className="h-4 w-4 text-[#c9a84c] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs text-[#a67c5b] font-medium">{label}</p>
                    <p className="text-sm font-semibold text-[#2c1810]">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quantity + Add to Cart */}
            <div className="flex items-center gap-4">
              {/* Qty stepper */}
              <div className="flex items-center border border-[#dfc9a8] rounded-xl overflow-hidden bg-white">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="h-12 w-12 flex items-center justify-center text-[#6b3a2a] hover:bg-[#f5ecd7] transition-colors"
                  aria-label="Menge verringern"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-10 text-center font-semibold text-[#1a0e08]">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="h-12 w-12 flex items-center justify-center text-[#6b3a2a] hover:bg-[#f5ecd7] transition-colors"
                  aria-label="Menge erhöhen"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>

              {/* Add to cart button */}
              <Button
                onClick={handleAddToCart}
                size="lg"
                className="flex-1 h-12 bg-[#c9a84c] hover:bg-[#b8963e] text-[#1a0e08] font-bold gap-2 shadow-md shadow-[#c9a84c]/30 transition-all duration-200 hover:scale-[1.02]"
              >
                <ShoppingCart className="h-5 w-5" />
                In den Warenkorb · €{(product.price * quantity).toFixed(2)}
              </Button>
            </div>

            <p className="text-xs text-[#a67c5b] mt-3 text-center">
              ✓ Versand in 24h · ✓ Kostenlose Rücksendung · ✓ Bio-zertifiziert
            </p>
          </div>
        </div>

        {/* ── Reviews Section ───────────────────────────────── */}
        <div className="mt-20">
          <Separator className="bg-[#e8d9c0] mb-12" />

          <div className="flex flex-col sm:flex-row sm:items-end gap-6 mb-10">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1a0e08]">
                Kundenbewertungen
              </h2>
              <p className="text-[#8b5a3a] mt-1 text-sm">
                {product.reviewCount} verifizierte Bewertungen
              </p>
            </div>
            {/* Overall rating summary */}
            <div className="flex items-center gap-3 sm:ml-auto bg-white border border-[#e8d9c0] rounded-2xl px-5 py-3">
              <span className="text-4xl font-bold text-[#1a0e08]">
                {product.rating.toFixed(1)}
              </span>
              <div>
                <StarRating rating={product.rating} size="md" />
                <p className="text-xs text-[#a67c5b] mt-1">
                  von 5 Sternen
                </p>
              </div>
            </div>
          </div>

          {/* Review cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {product.reviews.map((review) => (
              <article
                key={review.id}
                className="bg-white border border-[#e8d9c0] rounded-2xl p-6 space-y-3"
              >
                {/* Header */}
                <div className="flex items-center gap-3">
                  {/* Avatar */}
                  <div className="h-10 w-10 rounded-full bg-[#2c1810] flex items-center justify-center shrink-0">
                    <span className="text-[#c9a84c] text-xs font-bold">
                      {review.avatar}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-[#1a0e08] text-sm">
                      {review.author}
                    </p>
                    <p className="text-xs text-[#a67c5b]">{review.date}</p>
                  </div>
                </div>

                {/* Stars */}
                <StarRating rating={review.rating} />

                {/* Review text */}
                <div>
                  <p className="font-semibold text-[#2c1810] text-sm mb-1">
                    {review.title}
                  </p>
                  <p className="text-sm text-[#4a2518] leading-relaxed">
                    {review.body}
                  </p>
                </div>

                {/* Verified badge */}
                <p className="text-xs text-green-700 bg-green-50 border border-green-200 rounded-full px-2 py-0.5 inline-block">
                  ✓ Verifizierter Kauf
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
