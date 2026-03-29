/**
 * ValueProps – Three USPs displayed as unique, handcrafted cards.
 * Server component.
 */

import { Truck, Award, Leaf } from "lucide-react";

const values = [
  {
    id: "versand",
    title: "Schneller Versand",
    description:
      "Wir versenden Ihre Bestellung innerhalb von 24 Stunden. Kostenloser Versand ab €50.",
    icon: Truck,
    accent: "#c9a84c",
  },
  {
    id: "fair",
    title: "Fairer Handel",
    description:
      "Direkte Partnerschaften mit Kleinbauern sichern faire Preise und nachhaltige Qualität.",
    icon: Award,
    accent: "#8b5a3a",
  },
  {
    id: "bio",
    title: "100% Bio",
    description:
      "Alle unsere Kaffees sind EU-bio-zertifiziert – ohne Pestizide, ohne Kompromisse.",
    icon: Leaf,
    accent: "#5a7a3a",
  },
];

export default function ValueProps() {
  return (
    <section
      className="py-20 px-4 sm:px-6 lg:px-8 bg-[#fdf8f0]"
      aria-labelledby="values-heading"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="text-[#c9a84c] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            Warum AromaRöstung
          </p>
          <h2
            id="values-heading"
            className="text-3xl sm:text-4xl font-bold text-[#1a0e08]"
          >
            Qualität spricht für sich
          </h2>
          <p className="mt-4 text-[#6b3a2a] max-w-xl mx-auto leading-relaxed">
            Hinter jeder Bohne steckt eine Geschichte. Wir erzählen sie mit
            jedem Röstvorgang.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map(({ id, title, description, icon: Icon, accent }, index) => (
            <div
              key={id}
              className={`group relative p-8 bg-white transition-all duration-500 hover:shadow-xl`}
              style={{
                borderRadius: index % 2 === 0 ? "4px 24px 4px 24px" : "24px 4px 24px 4px",
                borderColor: `${accent}40`,
                borderWidth: "1px",
                borderStyle: "solid",
              }}
            >
              {/* Icon */}
              <div
                className="h-12 w-12 mx-auto mb-6 relative rounded-xl flex items-center justify-center"
                style={{ backgroundColor: `${accent}15`, color: accent }}
              >
                <Icon className="h-6 w-6" strokeWidth={1.5} />
              </div>

              <h3
                className={`font-bold text-[#1a0e08] text-xl mb-3 ${
                  index === 0 ? "mt-2" : ""
                }`}
              >
                {title}
              </h3>
              <p className="text-[#6b3a2a] text-sm leading-relaxed">
                {description}
              </p>

              {/* Decorative element */}
              <div
                className="absolute top-4 right-4 w-3 h-3 rounded-full opacity-40"
                style={{ backgroundColor: accent }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
