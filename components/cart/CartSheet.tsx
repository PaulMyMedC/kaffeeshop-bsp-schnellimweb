"use client";

/**
 * CartSheet – Slide-out shopping cart panel
 * Uses shadcn/ui Sheet component for the drawer behaviour.
 * Features:
 *  - Lists cart items with quantity controls
 *  - Shows subtotal
 *  - Checkout CTA navigates to /checkout
 *  - Empty state illustration
 */

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button, buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/contexts/CartContext";
import { cn } from "@/lib/utils";

export default function CartSheet() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalPrice } =
    useCart();

  return (
    <Sheet open={isOpen} onOpenChange={(open) => !open && closeCart()}>
      <SheetContent
        side="right"
        className="w-full sm:max-w-md flex flex-col p-0 bg-[#fdf8f0] border-l border-[#dfc9a8]"
      >
        {/* ── Header ───────────────────────────────────────── */}
        <SheetHeader className="px-6 py-5 border-b border-[#dfc9a8] bg-[#1a0e08]">
          <SheetTitle className="flex items-center gap-2 text-white">
            <ShoppingBag className="h-5 w-5 text-[#c9a84c]" />
            Warenkorb
            {items.length > 0 && (
              <span className="ml-auto text-sm font-normal text-[#c9a84c]">
                {items.reduce((s, i) => s + i.quantity, 0)} Artikel
              </span>
            )}
          </SheetTitle>
        </SheetHeader>

        {/* ── Content ──────────────────────────────────────── */}
        {items.length === 0 ? (
          /* Empty state */
          <div className="flex-1 flex flex-col items-center justify-center gap-4 px-6 text-center">
            <div className="h-20 w-20 rounded-full bg-[#f5ecd7] flex items-center justify-center">
              <ShoppingBag className="h-9 w-9 text-[#a67c5b]" />
            </div>
            <div>
              <p className="font-semibold text-[#2c1810] text-lg">
                Ihr Warenkorb ist leer
              </p>
              <p className="text-sm text-[#8b5a3a] mt-1">
                Entdecken Sie unsere Kaffeespezialitäten.
              </p>
            </div>
            <Link
              href="/shop"
              onClick={closeCart}
              className={cn(buttonVariants(), "bg-[#2c1810] hover:bg-[#4a2518] text-[#f5ecd7] mt-2")}
            >
              Zum Shop
            </Link>
          </div>
        ) : (
          <>
            {/* Item list */}
            <ul className="flex-1 overflow-y-auto divide-y divide-[#dfc9a8] px-6">
              {items.map(({ product, quantity }) => (
                <li key={product.id} className="py-4 flex gap-4">
                  {/* Thumbnail */}
                  <div className="relative h-20 w-20 rounded-lg overflow-hidden shrink-0 bg-[#f5ecd7]">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-[#2c1810] text-sm leading-tight line-clamp-2">
                      {product.name}
                    </p>
                    <p className="text-xs text-[#8b5a3a] mt-0.5">
                      {product.weight} · {product.roastLevel} Roast
                    </p>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() =>
                          updateQuantity(product.id, quantity - 1)
                        }
                        className="h-7 w-7 rounded-full border border-[#dfc9a8] flex items-center justify-center text-[#6b3a2a] hover:bg-[#f5ecd7] transition-colors"
                        aria-label="Menge verringern"
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="text-sm font-medium text-[#2c1810] w-5 text-center">
                        {quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(product.id, quantity + 1)
                        }
                        className="h-7 w-7 rounded-full border border-[#dfc9a8] flex items-center justify-center text-[#6b3a2a] hover:bg-[#f5ecd7] transition-colors"
                        aria-label="Menge erhöhen"
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>
                  </div>

                  {/* Price + remove */}
                  <div className="flex flex-col items-end justify-between shrink-0">
                    <p className="font-semibold text-[#2c1810] text-sm">
                      €{(product.price * quantity).toFixed(2)}
                    </p>
                    <button
                      onClick={() => removeItem(product.id)}
                      className="text-[#a67c5b] hover:text-[#6b3a2a] transition-colors"
                      aria-label={`${product.name} entfernen`}
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            {/* ── Footer ──────────────────────────────────────── */}
            <div className="px-6 py-5 border-t border-[#dfc9a8] bg-white/60 space-y-4">
              {/* Subtotal */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm text-[#6b3a2a]">
                  <span>Zwischensumme</span>
                  <span>€{totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-xs text-[#a67c5b]">
                  <span>Versand</span>
                  <span>Wird berechnet</span>
                </div>
                <Separator className="bg-[#dfc9a8]" />
                <div className="flex justify-between font-bold text-[#1a0e08]">
                  <span>Gesamt</span>
                  <span>€{totalPrice.toFixed(2)}</span>
                </div>
              </div>

              {/* CTA */}
              <Link
                href="/checkout"
                onClick={closeCart}
                className={cn(buttonVariants({ size: "lg" }), "w-full bg-[#c9a84c] hover:bg-[#b8963e] text-[#1a0e08] font-semibold gap-2 h-12 text-base justify-center")}
              >
                Zur Kasse
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Button
                variant="ghost"
                className="w-full text-[#8b5a3a] hover:text-[#2c1810] hover:bg-[#f5ecd7] text-sm"
                onClick={closeCart}
              >
                Weiter einkaufen
              </Button>

              <p className="text-xs text-center text-[#a67c5b]">
                Kostenloser Versand ab €50 · Faire Preise · Bio-zertifiziert
              </p>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
