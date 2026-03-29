/**
 * Homepage – /
 * Composed of three server-rendered sections:
 *  1. HeroSection      – full-viewport background image + headline + CTA
 *  2. ValueProps       – 3 USP cards (shipping, fair trade, organic)
 *  3. FeaturedProducts – grid of the 3 bestselling coffees
 */

import HeroSection from "@/components/home/HeroSection";
import ValueProps from "@/components/home/ValueProps";
import FeaturedProducts from "@/components/home/FeaturedProducts";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ValueProps />
      <FeaturedProducts />
    </>
  );
}
