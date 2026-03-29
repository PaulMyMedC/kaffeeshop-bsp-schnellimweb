/**
 * FeaturedProducts – Homepage grid of 3 top-selling coffees.
 * Server component – imports data directly.
 */

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { featuredProducts } from "@/data/products";
import ProductCard from "@/components/shop/ProductCard";

export default function FeaturedProducts() {
  return (
    <section
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
      aria-labelledby="featured-heading"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <p className="text-[#c9a84c] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
              Bestseller
            </p>
            <h2
              id="featured-heading"
              className="text-3xl sm:text-4xl font-bold text-[#1a0e08]"
            >
              Unsere Favoriten
            </h2>
          </div>
          <Link
            href="/shop"
            className="group flex items-center gap-1.5 text-sm font-medium text-[#6b3a2a] hover:text-[#c9a84c] transition-colors"
          >
            Alle Kaffees
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
