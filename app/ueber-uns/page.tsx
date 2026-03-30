/**
 * Über uns – /ueber-uns
 * Informationsseite über die Rösterei, Bio-Zertifizierung,
 * Fair Trade, Nachhaltigkeit und Unternehmensgeschichte.
 * Server component.
 */

import Image from "next/image";
import Link from "next/link";
import {
  Leaf,
  Heart,
  Globe,
  Award,
  Recycle,
  Users,
  Coffee,
  ArrowRight,
  CheckCircle2,
  TreePine,
  Droplets,
  Sun,
} from "lucide-react";

export const metadata = {
  title: "Über uns",
  description:
    "Erfahren Sie mehr über AromaRöstung – unsere Geschichte, Bio-Zertifizierung, Fair-Trade-Engagement und Nachhaltigkeitsversprechen.",
};

export default function UeberUnsPage() {
  return (
    <div className="min-h-screen bg-[#fdf8f0]">
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative bg-[#1a0e08] pt-28 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1600&q=80"
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a0e08]/80 to-[#1a0e08]" />
        <div className="relative max-w-4xl mx-auto text-center">
          <p className="text-[#c9a84c] text-sm font-semibold tracking-[0.25em] uppercase mb-4">
            Unsere Geschichte
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Kaffee mit{" "}
            <span className="text-[#c9a84c]">Gewissen</span>
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Seit 2011 rösten wir handverlesene Arabica-Bohnen in Wien – mit Leidenschaft
            für Qualität, Respekt vor den Produzenten und Verantwortung gegenüber unserem Planeten.
          </p>
        </div>
      </section>

      {/* ── Fakten-Leiste ─────────────────────────────────────── */}
      <section className="bg-[#c9a84c] py-8 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {[
            { value: "seit 2011", label: "Gegründet in Wien" },
            { value: "23+", label: "Herkunftsländer" },
            { value: "100 %", label: "Bio-zertifiziert" },
            { value: "8.200+", label: "Glückliche Kunden" },
          ].map(({ value, label }) => (
            <div key={label}>
              <p className="text-3xl font-bold text-[#1a0e08]">{value}</p>
              <p className="text-sm text-[#1a0e08]/70 font-medium mt-1">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Unsere Geschichte ─────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div className="space-y-6">
            <div>
              <p className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest mb-3">
                Wie alles begann
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1a0e08] leading-tight">
                Eine Leidenschaft wird zur Berufung
              </h2>
            </div>
            <p className="text-[#4a2518] leading-relaxed">
              Was 2011 als kleines Experiment in einer Wiener Altbauküche begann, ist heute eine
              der renommiertesten Mikro-Röstereien Österreichs. Gründerin <strong>Maria Hofmann</strong> entdeckte
              auf einer Reise nach Äthiopien die faszinierende Welt des Spezialitätenkaffees –
              und kehrte mit einem Koffer voller Bohnen und einem Kopf voller Ideen zurück.
            </p>
            <p className="text-[#4a2518] leading-relaxed">
              Heute reisen wir jährlich zu unseren Partnerbetrieben in Äthiopien, Kenia, Kolumbien,
              Indonesien und mehr, um persönliche Beziehungen zu pflegen und die besten Ernten
              direkt an der Quelle auszuwählen. Kein Mittelmann, kein Kompromiss bei der Qualität.
            </p>
            <p className="text-[#4a2518] leading-relaxed">
              Unser kleines Team von sieben Röstmeistern und Kaffeeexperten teilt eine Überzeugung:
              <em> Eine außergewöhnliche Tasse Kaffee ist das Ergebnis von Fürsorge – auf jeder
              Stufe der Reise, von der Pflanze bis zur Tasse.</em>
            </p>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?w=800&q=80"
                alt="Kaffeebohnen beim Rösten"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-[#1a0e08] rounded-2xl p-5 shadow-xl max-w-[200px]">
              <Coffee className="h-7 w-7 text-[#c9a84c] mb-2" />
              <p className="text-white font-bold text-lg leading-tight">Frisch geröstet</p>
              <p className="text-white/60 text-xs mt-1">Versand innerhalb 24h nach der Röstung</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Bio-Zertifizierung ────────────────────────────────── */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
              <Leaf className="h-8 w-8 text-green-700" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a0e08] mb-4">
              Bio-zertifiziert – ohne Kompromisse
            </h2>
            <p className="text-[#6b3a2a] max-w-2xl mx-auto leading-relaxed">
              Alle unsere Bohnen sind EU-Bio-zertifiziert (AT-BIO-301). Das bedeutet: keine
              synthetischen Pestizide, kein künstlicher Dünger, kein genetisch verändertes Saatgut.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Sun,
                title: "Natürlicher Anbau",
                body: "Unsere Partnerbauern bewirtschaften ihre Felder nach überlieferten Methoden: Kompostierung, Fruchtwechsel und natürliche Schädlingsbekämpfung erhalten die Bodengesundheit über Generationen.",
              },
              {
                icon: Droplets,
                title: "Schonende Aufbereitung",
                body: "Ob Washed, Natural oder Honey – alle Aufbereitungsmethoden erfolgen ohne chemische Zusätze. Das Abwasser wird aufgefangen und als Dünger wiederverwendet.",
              },
              {
                icon: TreePine,
                title: "Schattenkaffee",
                body: "Viele unserer Arabica-Sorten wachsen unter dem natürlichen Schatten von Bäumen. Das schützt die Artenvielfalt, verbessert die Qualität der Bohne und bindet CO₂.",
              },
            ].map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="bg-[#fdf8f0] rounded-2xl border border-[#e8d9c0] p-7 space-y-4"
              >
                <div className="h-12 w-12 rounded-xl bg-green-100 flex items-center justify-center">
                  <Icon className="h-6 w-6 text-green-700" />
                </div>
                <h3 className="font-bold text-[#1a0e08] text-lg">{title}</h3>
                <p className="text-[#6b3a2a] text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>

          {/* Zertifikat-Hinweis */}
          <div className="mt-10 bg-green-50 border border-green-200 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <CheckCircle2 className="h-8 w-8 text-green-700 shrink-0" />
            <div>
              <p className="font-bold text-green-900">Zertifizierungsnummer: AT-BIO-301</p>
              <p className="text-green-800 text-sm mt-1">
                Unsere Bio-Zertifizierung wird jährlich durch unabhängige Kontrollstellen überprüft.
                Auf Anfrage stellen wir Ihnen gerne Kopien unserer aktuellen Zertifikate zur Verfügung.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Fair Trade ───────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1a0e08]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-[#c9a84c]/20 border border-[#c9a84c]/40">
                <Heart className="h-7 w-7 text-[#c9a84c]" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
                Fair Trade –{" "}
                <span className="text-[#c9a84c]">mehr als ein Siegel</span>
              </h2>
              <p className="text-white/70 leading-relaxed">
                Für uns bedeutet faire Bezahlung nicht, den gesetzlichen Mindestpreis zu zahlen.
                Wir zahlen unseren Partnerbauern <strong className="text-white">30–60 % über dem
                Fair-Trade-Referenzpreis</strong> – weil gute Arbeit guten Lohn verdient.
              </p>
              <p className="text-white/70 leading-relaxed">
                Darüber hinaus investieren wir jährlich 5 % unseres Gewinns direkt in
                Bildungsprojekte und Infrastruktur in den Anbauregionen: Schulgebäude in
                Äthiopien, Trinkwasserbrunnen in Kenia, Solarpanele für eine kolumbianische
                Kooperative.
              </p>
              <ul className="space-y-3">
                {[
                  "Direkthandel ohne Zwischenhändler",
                  "Langfristige Lieferverträge (min. 3 Jahre)",
                  "Vorfinanzierung der Ernte auf Wunsch",
                  "Sozialprämie für Gemeinschaftsprojekte",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-white/80 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-[#c9a84c] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Users, value: "14", label: "Partnerkooperativen weltweit" },
                { icon: Globe, value: "9", label: "Anbauländer" },
                { icon: Award, value: "+52 %", label: "Über Fair-Trade-Preis" },
                { icon: Heart, value: "€ 48.000", label: "Sozialinvestitionen 2024" },
              ].map(({ icon: Icon, value, label }) => (
                <div
                  key={label}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors"
                >
                  <Icon className="h-6 w-6 text-[#c9a84c] mx-auto mb-3" />
                  <p className="text-2xl font-bold text-white">{value}</p>
                  <p className="text-white/50 text-xs mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Röstphilosophie ──────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#fdf8f0]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest mb-3">
              Handwerk
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a0e08] mb-4">
              Unsere Röstphilosophie
            </h2>
            <p className="text-[#6b3a2a] max-w-2xl mx-auto leading-relaxed">
              Jede Bohne hat ihre eigene Persönlichkeit. Unsere Aufgabe ist es, sie zur
              Entfaltung zu bringen – nicht zu überdecken.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 rounded-3xl overflow-hidden border border-[#e8d9c0] shadow-lg">
            {[
              {
                level: "Helle Röstung",
                temp: "195 – 205 °C",
                color: "bg-amber-50",
                accent: "text-amber-700",
                border: "border-amber-200",
                body: "Helle Röstungen bewahren die charakteristischen Herkunftsnoten der Bohne. Lebendige Säure, florale oder fruchtige Aromen – ideal für Filter, V60 und Chemex.",
              },
              {
                level: "Mittlere Röstung",
                temp: "210 – 220 °C",
                color: "bg-orange-50",
                accent: "text-orange-700",
                border: "border-orange-200",
                body: "Die goldene Mitte: Herkunftsnoten und Röstaromen halten die Balance. Vollmundige Süße, runde Säure – der vielseitigste Röstgrad für Espresso und Filter.",
              },
              {
                level: "Dunkle Röstung",
                temp: "225 – 235 °C",
                color: "bg-stone-800",
                accent: "text-stone-200",
                border: "border-stone-700",
                body: "Dunkle Röstungen betonen Röstaromen: Schokolade, Karamell, Tabak. Wenig Säure, voller Körper – klassisch für Espresso, Moka und Vollautomaten.",
              },
            ].map(({ level, temp, color, accent, border, body }) => (
              <div
                key={level}
                className={`${color} border-r last:border-r-0 ${border} p-8 space-y-4`}
              >
                <p className={`text-xs font-bold uppercase tracking-widest ${accent}`}>{temp}</p>
                <h3 className={`text-xl font-bold ${accent}`}>{level}</h3>
                <p className={`text-sm leading-relaxed ${accent} opacity-80`}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Nachhaltigkeit ───────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-emerald-100 mb-4">
              <Recycle className="h-8 w-8 text-emerald-700" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a0e08] mb-4">
              Nachhaltigkeit in jeder Entscheidung
            </h2>
            <p className="text-[#6b3a2a] max-w-2xl mx-auto leading-relaxed">
              Umweltverantwortung hört nicht beim Kaffeeanbau auf. Von der Verpackung
              bis zum letzten Kaffeesatz denken wir in Kreisläufen.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Leaf,
                title: "Kompostierbare Verpackung",
                body: "Unsere Kaffeebeutel bestehen zu 95 % aus nachwachsenden Rohstoffen und sind industriell kompostierbar.",
              },
              {
                icon: Sun,
                title: "100 % Ökostrom",
                body: "Unsere Rösterei in Wien läuft seit 2019 vollständig mit österreichischem Ökostrom aus Wind- und Wasserkraft.",
              },
              {
                icon: Recycle,
                title: "Citylogistik per Lastenrad",
                body: "Innerhalb Wiens liefern wir auf dem letzten Kilometer mit CO₂-freien Lastenfahrrädern unseres Partnerdienstes.",
              },
              {
                icon: Recycle,
                title: "Kaffeesatz-Recycling",
                body: "Verbrauchter Kaffeesatz wird zu Biomasse-Briketts verarbeitet oder an lokale Kompostierwerke weitergegeben.",
              },
            ].map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="bg-[#fdf8f0] rounded-2xl border border-[#e8d9c0] p-6 space-y-3"
              >
                <div className="h-10 w-10 rounded-xl bg-emerald-100 flex items-center justify-center">
                  <Icon className="h-5 w-5 text-emerald-700" />
                </div>
                <h3 className="font-bold text-[#1a0e08]">{title}</h3>
                <p className="text-[#6b3a2a] text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>

          {/* CO₂-Hinweis */}
          <div className="mt-10 bg-emerald-50 border border-emerald-200 rounded-2xl p-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <TreePine className="h-10 w-10 text-emerald-700 shrink-0" />
              <div>
                <p className="font-bold text-emerald-900 text-lg">CO₂-neutral seit 2022</p>
                <p className="text-emerald-800 text-sm mt-1 leading-relaxed">
                  Unsere unvermeidbaren Emissionen (Transport, Logistik) kompensieren wir durch
                  zertifizierte Aufforstungsprojekte in Kenia und Kolumbien – den Ursprungsregionen
                  unserer Bohnen. Wir pflanzen pro verkauftem Kilogramm Kaffee einen Baum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="bg-[#1a0e08] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold text-white">
            Überzeugt? Dann entdecken Sie unsere Bohnen.
          </h2>
          <p className="text-white/60 leading-relaxed">
            Jede Tüte erzählt eine Geschichte – von den Menschen, die den Kaffee angebaut haben,
            und von der Sorgfalt, mit der wir ihn für Sie geröstet haben.
          </p>
          <Link
            href="/shop"
            className="inline-flex items-center justify-center gap-2 rounded-lg font-bold px-8 py-3 text-base bg-[#c9a84c] hover:bg-[#b8963e] text-[#1a0e08] transition-all duration-200 hover:scale-105 shadow-lg shadow-[#c9a84c]/20"
          >
            Jetzt im Shop stöbern
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
      {/* ── Demo Disclaimer ───────────────────────────────────── */}
      <section className="py-8 px-4 bg-[#fdf8f0] border-t border-[#e8d9c0]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[10px] text-[#a67c5b] uppercase tracking-widest mb-2">Showcase Projekt</p>
          <p className="text-sm text-[#8b5a3a] leading-relaxed italic">
            Hinweis: AromaRöstung ist eine fiktive Marke für diese Beispiel-Website. 
            Alle Personen, Geschichten und Daten dienen ausschließlich Demonstrationszwecken 
            von Schnell im Web.
          </p>
        </div>
      </section>
    </div>
  );
}
