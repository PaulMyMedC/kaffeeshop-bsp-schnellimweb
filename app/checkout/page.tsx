"use client";

/**
 * Checkout Page – /checkout
 * Demo checkout form with:
 *  - Order summary (reads from cart)
 *  - Shipping details form
 *  - Payment placeholder (no real processing)
 *  - "Complete Order" → redirects to /order-success and clears cart
 */

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, Lock, CreditCard, Truck } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/contexts/CartContext";
import { cn } from "@/lib/utils";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  street: string;
  city: string;
  zip: string;
  country: string;
  cardNumber: string;
  expiry: string;
  cvv: string;
  nameOnCard: string;
}

const initialForm: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  street: "",
  city: "",
  zip: "",
  country: "Österreich",
  cardNumber: "",
  expiry: "",
  cvv: "",
  nameOnCard: "",
};

export default function CheckoutPage() {
  const router = useRouter();
  const { items, totalPrice, clearCart } = useCart();
  const [form, setForm] = useState<FormData>(initialForm);
  const [loading, setLoading] = useState(false);

  const shipping = totalPrice >= 50 ? 0 : 4.9;
  const total = totalPrice + shipping;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    clearCart();
    router.push("/order-success");
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-[#fdf8f0] flex items-center justify-center px-4">
        <div className="text-center space-y-4">
          <p className="text-2xl font-bold text-[#1a0e08]">
            Ihr Warenkorb ist leer
          </p>
          <Link href="/shop" className={cn(buttonVariants(), "bg-[#2c1810] hover:bg-[#4a2518] text-[#f5ecd7]")}>
            Zum Shop
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fdf8f0]">
      {/* ── Header ────────────────────────────────────────── */}
      <div className="bg-[#1a0e08] pt-20 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link
            href="/shop"
            className="inline-flex items-center gap-1.5 text-sm text-white/60 hover:text-white transition-colors group"
          >
            <ChevronLeft className="h-4 w-4 group-hover:-translate-x-0.5 transition-transform" />
            Zurück zum Shop
          </Link>
          <div className="flex items-center gap-1.5 text-[#c9a84c] text-sm font-medium">
            <Lock className="h-4 w-4" />
            Sichere Verbindung
          </div>
        </div>
        <div className="max-w-5xl mx-auto mt-4">
          <h1 className="text-3xl font-bold text-white">Kasse</h1>
        </div>
      </div>

      {/* ── Layout ────────────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* ── Left: Form ──────────────────────────────── */}
            <div className="lg:col-span-3 space-y-8">
              {/* Shipping details */}
              <section className="bg-white rounded-2xl border border-[#e8d9c0] p-6">
                <div className="flex items-center gap-2 mb-6">
                  <Truck className="h-5 w-5 text-[#c9a84c]" />
                  <h2 className="text-lg font-bold text-[#1a0e08]">Lieferadresse</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field
                    label="Vorname"
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    required
                    placeholder="Max"
                  />
                  <Field
                    label="Nachname"
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    required
                    placeholder="Mustermann"
                  />
                  <Field
                    label="E-Mail"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="max@beispiel.at"
                    className="sm:col-span-2"
                  />
                  <Field
                    label="Telefon"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+43 1 234 5678"
                    className="sm:col-span-2"
                  />
                  <Field
                    label="Straße & Hausnummer"
                    name="street"
                    value={form.street}
                    onChange={handleChange}
                    required
                    placeholder="Hauptstraße 12"
                    className="sm:col-span-2"
                  />
                  <Field
                    label="PLZ"
                    name="zip"
                    value={form.zip}
                    onChange={handleChange}
                    required
                    placeholder="1010"
                  />
                  <Field
                    label="Stadt"
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    required
                    placeholder="Wien"
                  />

                  {/* Country select */}
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-[#6b3a2a] mb-1.5">
                      Land <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="country"
                      value={form.country}
                      onChange={handleChange}
                      required
                      className="w-full h-11 px-3 rounded-xl border border-[#dfc9a8] bg-white text-[#1a0e08] text-sm focus:outline-none focus:ring-2 focus:ring-[#c9a84c]/50 focus:border-[#c9a84c]"
                    >
                      <option>Österreich</option>
                      <option>Deutschland</option>
                      <option>Schweiz</option>
                    </select>
                  </div>
                </div>
              </section>

              {/* Payment */}
              <section className="bg-white rounded-2xl border border-[#e8d9c0] p-6">
                <div className="flex items-center gap-2 mb-6">
                  <CreditCard className="h-5 w-5 text-[#c9a84c]" />
                  <h2 className="text-lg font-bold text-[#1a0e08]">Zahlungsinformationen</h2>
                  <span className="ml-auto text-xs text-[#a67c5b] bg-[#f5ecd7] px-2 py-0.5 rounded-full border border-[#dfc9a8]">
                    Demo – keine echte Zahlung
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field
                    label="Name auf der Karte"
                    name="nameOnCard"
                    value={form.nameOnCard}
                    onChange={handleChange}
                    placeholder="Max Mustermann"
                    className="sm:col-span-2"
                  />
                  <Field
                    label="Kartennummer"
                    name="cardNumber"
                    value={form.cardNumber}
                    onChange={handleChange}
                    placeholder="4242 4242 4242 4242"
                    className="sm:col-span-2"
                  />
                  <Field
                    label="Ablaufdatum"
                    name="expiry"
                    value={form.expiry}
                    onChange={handleChange}
                    placeholder="MM/JJ"
                  />
                  <Field
                    label="CVV"
                    name="cvv"
                    value={form.cvv}
                    onChange={handleChange}
                    placeholder="123"
                  />
                </div>

                <p className="text-xs text-[#a67c5b] mt-4 flex items-center gap-1.5">
                  <Lock className="h-3 w-3" />
                  Ihre Zahlungsdaten werden verschlüsselt übertragen. (Demo-Modus)
                </p>
              </section>
            </div>

            {/* ── Right: Order Summary ──────────────────────── */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl border border-[#e8d9c0] p-6 sticky top-24 space-y-4">
                <h2 className="text-lg font-bold text-[#1a0e08]">Bestellübersicht</h2>

                {/* Items */}
                <ul className="divide-y divide-[#f0e0c8] space-y-1">
                  {items.map(({ product, quantity }) => (
                    <li key={product.id} className="flex gap-3 py-3">
                      <div className="relative h-14 w-14 rounded-lg overflow-hidden bg-[#f5ecd7] shrink-0">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          sizes="56px"
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-[#1a0e08] line-clamp-1">
                          {product.name}
                        </p>
                        <p className="text-xs text-[#8b5a3a]">
                          {product.weight} · ×{quantity}
                        </p>
                      </div>
                      <p className="text-sm font-semibold text-[#2c1810] shrink-0">
                        €{(product.price * quantity).toFixed(2)}
                      </p>
                    </li>
                  ))}
                </ul>

                <Separator className="bg-[#e8d9c0]" />

                {/* Totals */}
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-[#6b3a2a]">
                    <span>Zwischensumme</span>
                    <span>€{totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-[#6b3a2a]">
                    <span>Versand</span>
                    <span>
                      {shipping === 0 ? (
                        <span className="text-green-700 font-medium">Kostenlos</span>
                      ) : (
                        `€${shipping.toFixed(2)}`
                      )}
                    </span>
                  </div>
                  <Separator className="bg-[#e8d9c0]" />
                  <div className="flex justify-between font-bold text-[#1a0e08] text-base">
                    <span>Gesamt</span>
                    <span>€{total.toFixed(2)}</span>
                  </div>
                  <p className="text-xs text-[#a67c5b]">inkl. 20% MwSt.</p>
                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full h-12 bg-[#c9a84c] hover:bg-[#b8963e] text-[#1a0e08] font-bold text-base gap-2 mt-2 disabled:opacity-70"
                >
                  {loading ? (
                    <>
                      <span className="animate-spin h-4 w-4 border-2 border-[#1a0e08]/30 border-t-[#1a0e08] rounded-full" />
                      Verarbeitung…
                    </>
                  ) : (
                    <>
                      <Lock className="h-4 w-4" />
                      Bestellung abschließen
                    </>
                  )}
                </Button>

                <p className="text-xs text-center text-[#a67c5b]">
                  Demo-Website · Keine echte Bestellung
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

// ─── Reusable form field ─────────────────────────────────────────────────────

interface FieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
}

function Field({
  label,
  name,
  value,
  onChange,
  type = "text",
  placeholder,
  required,
  className = "",
}: FieldProps) {
  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="block text-xs font-semibold text-[#6b3a2a] mb-1.5"
      >
        {label}
        {required && <span className="text-red-500 ml-0.5">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full h-11 px-3 rounded-xl border border-[#dfc9a8] bg-white text-[#1a0e08] text-sm placeholder:text-[#c4a882] focus:outline-none focus:ring-2 focus:ring-[#c9a84c]/50 focus:border-[#c9a84c] transition-colors"
      />
    </div>
  );
}
