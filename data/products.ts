/**
 * AromaRöstung – Mock Product Data
 * 8 realistische Spezialitätenkaffee-Produkte mit vollständigen Metadaten.
 * Bilder von Unsplash (kostenlos nutzbar, kein API-Key nötig).
 */

export type RoastLevel = "Light" | "Medium" | "Dark";
export type Origin = "Africa" | "South America" | "Asia";

/** Displaynamen für Röstgrade auf Deutsch */
export const roastLevelLabel: Record<RoastLevel, string> = {
  Light: "Helle Röstung",
  Medium: "Mittlere Röstung",
  Dark: "Dunkle Röstung",
};

export interface Review {
  id: number;
  author: string;
  avatar: string;
  rating: number;
  date: string;
  title: string;
  body: string;
}

export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: number;          // EUR
  weight: string;         // z.B. "250g"
  roastLevel: RoastLevel;
  origin: Origin;
  region: string;         // spezifische Region/Farm
  altitude: string;       // Anbauhoehe
  process: string;        // Aufbereitungsmethode
  flavorNotes: string[];
  rating: number;         // 0–5
  reviewCount: number;
  image: string;          // Unsplash URL
  images: string[];       // Galerie-Bilder
  featured: boolean;
  inStock: boolean;
  reviews: Review[];
}

export const products: Product[] = [
  {
    id: "ethiopia-yirgacheffe",
    name: "Ethiopian Yirgacheffe",
    tagline: "Heidelbeere & Jasmin – Ein florales Meisterwerk",
    description:
      "Angebaut in den nebelbedeckten Hochlagen von Yirgacheffe auf über 2.000 Metern Höhe, ist dieser gewaschene Single-Origin der Maßstab ostafrikanischer Kaffeekunst. Erwarten Sie lebendige Heidelbeer- und Johannisbeerennoten in der Nase, eine seidene Jasminblüte und einen reinen, teeartigen Abgang, der noch lange nach dem letzten Schluck nachhallt.",
    price: 16.9,
    weight: "250g",
    roastLevel: "Light",
    origin: "Africa",
    region: "Yirgacheffe, Äthiopien",
    altitude: "1.800 – 2.200 m",
    process: "Gewaschen",
    flavorNotes: ["Heidelbeere", "Jasmin", "Zitronenschale", "Schwarzer Tee"],
    rating: 4.9,
    reviewCount: 128,
    image:
      "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800&q=80",
      "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&q=80",
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80",
    ],
    featured: true,
    inStock: true,
    reviews: [
      {
        id: 1,
        author: "Sophie M.",
        avatar: "SM",
        rating: 5,
        date: "12. März 2025",
        title: "Absolut begeistert!",
        body: "Dieser Kaffee hat mein Verständnis von Filterkaffee völlig auf den Kopf gestellt. Die Blaubeernoten sind nicht künstlich – sie kommen ganz natürlich aus der Bohne. Ein Erlebnis!",
      },
      {
        id: 2,
        author: "Tobias R.",
        avatar: "TR",
        rating: 5,
        date: "3. März 2025",
        title: "Mein neuer Morgenkaffee",
        body: "Fruchtig, komplex und dabei unglaublich sanft. Perfekt für die French Press oder den V60. Kaufe ich immer wieder.",
      },
      {
        id: 3,
        author: "Lea K.",
        avatar: "LK",
        rating: 4,
        date: "18. Februar 2025",
        title: "Sehr aromatisch, etwas säurebetont",
        body: "Wer lebendige Säure liebt, ist hier goldrichtig. Der florale Charakter ist wirklich außergewöhnlich. Für Espresso nehme ich lieber den Brasilianer – aber als Filterkaffee unschlagbar.",
      },
    ],
  },
  {
    id: "colombia-huila",
    name: "Colombian Huila Reserve",
    tagline: "Dunkle Schokolade & Karamell – Seide aus den Anden",
    description:
      "Von kleinen Familienbetrieben im Huila-Departement, eingebettet zwischen den Zentralen und Östlichen Anden. Dieser mittlere Röstgrad zeigt das Beste des kolumbianischen Terroirs: reichhaltige Vollmilchschokoladensüße, einen buttrigen Karamellkörper und einen sanften Haselnussabgang, der jeden Schluck tief befriedigend macht.",
    price: 15.5,
    weight: "250g",
    roastLevel: "Medium",
    origin: "South America",
    region: "Huila, Kolumbien",
    altitude: "1.600 – 1.900 m",
    process: "Honig-Aufbereitung",
    flavorNotes: ["Vollmilchschokolade", "Karamell", "Haselnuss", "Roter Apfel"],
    rating: 4.7,
    reviewCount: 94,
    image:
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&q=80",
      "https://images.unsplash.com/photo-1512568400610-62da28bc8a13?w=800&q=80",
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800&q=80",
    ],
    featured: true,
    inStock: true,
    reviews: [
      {
        id: 1,
        author: "Markus W.",
        avatar: "MW",
        rating: 5,
        date: "20. März 2025",
        title: "Perfekt für Einsteiger und Kenner",
        body: "Ausgewogen, süß, schokoladig – dieser Kaffee gefällt wirklich jedem. Für mich ist er der sichere Hafen unter den Spezialitätenkaffees.",
      },
      {
        id: 2,
        author: "Anna B.",
        avatar: "AB",
        rating: 5,
        date: "11. März 2025",
        title: "Mein Lieblingskaffee seit 6 Monaten",
        body: "Die Karamellsüße ist unglaublich. Schmeckt fast wie ein Dessert – ohne Zucker! Kauf ich in der Großpackung.",
      },
      {
        id: 3,
        author: "Felix H.",
        avatar: "FH",
        rating: 4,
        date: "28. Februar 2025",
        title: "Sehr gut als Espresso",
        body: "Cremige Crema, kaum Bitterstoffe, langer Nachklang. Ein wirklich gelungener Röstgrad für den Vollautomaten.",
      },
    ],
  },
  {
    id: "sumatra-mandheling",
    name: "Sumatra Mandheling",
    tagline: "Dunkel & erdig – Kraftvoller Charakter aus dem Dschungel",
    description:
      "Ein legendärer indonesischer Single-Origin aus den Batak-Hochlagen von Nord-Sumatra, aufbereitet nach der traditionellen Nassenthülsung (Giling Basah) – einer für diese Insel einzigartigen Methode. Das Ergebnis ist ein vollmundiger, säurearmer Kaffee mit tiefen Zedernholz-, Zartbitterschokoladen- und erdigen Noten – ideal für Espresso-Liebhaber, die Intensität suchen.",
    price: 17.5,
    weight: "250g",
    roastLevel: "Dark",
    origin: "Asia",
    region: "Nord-Sumatra, Indonesien",
    altitude: "1.200 – 1.600 m",
    process: "Nassenthülsung (Giling Basah)",
    flavorNotes: ["Zartbitterschokolade", "Zedernholz", "Tabak", "Rohrzucker"],
    rating: 4.6,
    reviewCount: 77,
    image:
      "https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?w=800&q=80",
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80",
      "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&q=80",
    ],
    featured: true,
    inStock: true,
    reviews: [
      {
        id: 1,
        author: "Dieter S.",
        avatar: "DS",
        rating: 5,
        date: "5. März 2025",
        title: "Genau das, was ich gesucht habe",
        body: "Kräftig, würzig, mit einer erdigen Tiefe. Dieser Kaffee ist nichts für Weicheier – und ich meine das als Kompliment. Mein neues Morgentier.",
      },
      {
        id: 2,
        author: "Claudia F.",
        avatar: "CF",
        rating: 4,
        date: "24. Februar 2025",
        title: "Ungewohnt, aber interessant",
        body: "Hatte erwartet, dass ein dunkler Röstgrad = bitter bedeutet. Aber dieser hier ist überraschend komplex. Die Zedernholznoten sind wirklich charakteristisch.",
      },
      {
        id: 3,
        author: "Benjamin N.",
        avatar: "BN",
        rating: 5,
        date: "10. Februar 2025",
        title: "Bester Espresso den ich je getrunken habe",
        body: "Als Doppelespresso ein absolutes Kraftpaket. Dicker Crema, langer Abgang. Unbedingt empfehlen!",
      },
    ],
  },
  {
    id: "kenya-aa",
    name: "Kenya AA Kirinyaga",
    tagline: "Johannisbeere & Grapefruit – Kenianische Präzision",
    description:
      "Von Kleinbauern rund um den Kirinyaga County am Mount Kenya bezogen, als AA-Qualität für seine großen, dichten Bohnen eingestuft. Kenias SL28- und SL34-Varietäten erzeugen eine unverkennbare, lebendige Säure, markante Schwarze-Johannisbeeren- und Grapefruitnoten sowie einen komplexen, weinigen Abgang – ein wahrer Kaffee für den abenteuerlustigen Gaumen.",
    price: 18.9,
    weight: "250g",
    roastLevel: "Light",
    origin: "Africa",
    region: "Kirinyaga, Kenia",
    altitude: "1.700 – 2.100 m",
    process: "Gewaschen",
    flavorNotes: ["Schwarze Johannisbeere", "Grapefruit", "Tomate", "Dunkler Honig"],
    rating: 4.8,
    reviewCount: 61,
    image:
      "https://images.unsplash.com/photo-1442550528053-c431ecb55509?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1442550528053-c431ecb55509?w=800&q=80",
      "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800&q=80",
      "https://images.unsplash.com/photo-1512568400610-62da28bc8a13?w=800&q=80",
    ],
    featured: false,
    inStock: true,
    reviews: [
      {
        id: 1,
        author: "Julia P.",
        avatar: "JP",
        rating: 5,
        date: "14. März 2025",
        title: "Intensiv und einzigartig",
        body: "Ich war skeptisch bei so viel Säure – aber es ist eine lebendige, fruchtige Säure. Erinnert fast an Cranberry-Saft. Ein Highlight!",
      },
      {
        id: 2,
        author: "Stefan L.",
        avatar: "SL",
        rating: 5,
        date: "2. März 2025",
        title: "Das Beste aus Afrika",
        body: "Kenya AA ist immer ein Genuss, aber diese spezifische Röstung ist besonders gelungen. Deutliche Beerenfrucht, langer Nachhall.",
      },
      {
        id: 3,
        author: "Nina G.",
        avatar: "NG",
        rating: 4,
        date: "19. Februar 2025",
        title: "Polarisierend – aber positiv",
        body: "Die hohe Säure ist nicht für jeden. Aber wer damit umgehen kann, erlebt einen der komplexesten Kaffees überhaupt. Top Qualität.",
      },
    ],
  },
  {
    id: "brazil-cerrado",
    name: "Brazil Cerrado Naturale",
    tagline: "Vollmilchschokolade & Trockenfrüchte – Brasilianischer Genuss",
    description:
      "Von den Hochebenen der Cerrado Mineiro-Region in Minas Gerais stammt dieser natürlich aufbereitete Kaffee, der noch in der Kirsche an der Sonne trocknet und so reichhaltige Fruchtzucker aufnimmt. Das Ergebnis ist ein runder, vollmundiger Kaffee mit Noten von getrockneter Feige, Kakaopulver und gerösteter Mandel – unendlich zugänglich und wohltuend.",
    price: 13.9,
    weight: "250g",
    roastLevel: "Medium",
    origin: "South America",
    region: "Cerrado Mineiro, Brasilien",
    altitude: "950 – 1.250 m",
    process: "Natürlich",
    flavorNotes: ["Getrocknete Feige", "Kakaopulver", "Geröstete Mandel", "Rohrzucker"],
    rating: 4.5,
    reviewCount: 112,
    image:
      "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&q=80",
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&q=80",
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800&q=80",
    ],
    featured: false,
    inStock: true,
    reviews: [
      {
        id: 1,
        author: "Georg T.",
        avatar: "GT",
        rating: 5,
        date: "22. März 2025",
        title: "Preis-Leistungs-Sieger",
        body: "Für knapp 14 Euro ein Kaffee dieser Qualität – unschlagbar. Süß, rund, perfekt für den Espresso-Automaten.",
      },
      {
        id: 2,
        author: "Sandra V.",
        avatar: "SV",
        rating: 4,
        date: "8. März 2025",
        title: "Alltags-Espresso vom Feinsten",
        body: "Mein täglicher Begleiter. Nicht so komplex wie die Äthiopier, aber perfekt ausgewogen und immer lecker.",
      },
      {
        id: 3,
        author: "Klaus B.",
        avatar: "KB",
        rating: 5,
        date: "25. Februar 2025",
        title: "Familie liebt es",
        body: "Kaufe das für die ganze Familie. Alle sind begeistert – vom Espresso-Fan bis zum Filterkaffee-Trinker.",
      },
    ],
  },
  {
    id: "rwanda-bourbon",
    name: "Rwanda Red Bourbon",
    tagline: "Pfirsich & Orangenblüte – Raffinesse aus den Großen Seen",
    description:
      "Hergestellt von der Kopakama-Waschstation in der Westprovinz Ruandas, ist diese Red-Bourbon-Varietät ein verborgenes Juwel des afrikanischen Kaffees. Eine sanfte, abgerundete Säure trägt Noten von weißem Pfirsich, Orangenblüte und karamellisiertem Zucker. Eine delikate, elegante Tasse – ideal für die Pour-Over-Zubereitung.",
    price: 17.9,
    weight: "250g",
    roastLevel: "Light",
    origin: "Africa",
    region: "Westprovinz, Ruanda",
    altitude: "1.650 – 1.900 m",
    process: "Gewaschen",
    flavorNotes: ["Weißer Pfirsich", "Orangenblüte", "Karamell", "Bergamotte"],
    rating: 4.7,
    reviewCount: 45,
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80",
      "https://images.unsplash.com/photo-1442550528053-c431ecb55509?w=800&q=80",
      "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800&q=80",
    ],
    featured: false,
    inStock: true,
    reviews: [
      {
        id: 1,
        author: "Petra A.",
        avatar: "PA",
        rating: 5,
        date: "16. März 2025",
        title: "Eine Offenbarung",
        body: "Dieser Kaffee riecht wie ein Frühlingsblumengarten. Der Geschmack ist ebenso poetisch – sanft, fruchtig, langanhaltend.",
      },
      {
        id: 2,
        author: "Oliver M.",
        avatar: "OM",
        rating: 4,
        date: "4. März 2025",
        title: "Sehr elegant",
        body: "Für den V60 ideal. Die Bergamott-Note erinnert mich an Earl Grey Tee – aber als Kaffee. Sehr ungewöhnlich und gut.",
      },
      {
        id: 3,
        author: "Hannah S.",
        avatar: "HS",
        rating: 5,
        date: "22. Februar 2025",
        title: "Wunderbar",
        body: "Habe diesen Kaffee als Geschenk bekommen und war sofort verliebt. Jetzt kaufe ich ihn regelmäßig selbst.",
      },
    ],
  },
  {
    id: "guatemala-antigua",
    name: "Guatemala Antigua",
    tagline: "Bitterschokolade & Gewürze – Vulkanische Tiefe",
    description:
      "Auf den Vulkanhängen rund um die Kolonialstadt Antigua angebaut, profitiert dieser Kaffee vom mineralreichen Boden dreier nahegelegener Vulkane. Der mitteldunkle Röstgrad betont einen herben Zartbitterschokoladekern, wärmendes Zimtgewürz und eine Rohrzuckersüße mit gerade genug Helligkeit, um ihn lebendig zu halten.",
    price: 15.9,
    weight: "250g",
    roastLevel: "Dark",
    origin: "South America",
    region: "Antigua, Guatemala",
    altitude: "1.500 – 1.700 m",
    process: "Gewaschen",
    flavorNotes: ["Zartbitterschokolade", "Zimt", "Rohrzucker", "Getrocknete Pflaume"],
    rating: 4.6,
    reviewCount: 83,
    image:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800&q=80",
      "https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?w=800&q=80",
      "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&q=80",
    ],
    featured: false,
    inStock: true,
    reviews: [
      {
        id: 1,
        author: "Roland K.",
        avatar: "RK",
        rating: 5,
        date: "17. März 2025",
        title: "Winterkaffee vom Feinsten",
        body: "Die Zimtnote ist subtil aber präsent. Wunderbar als Café au Lait im Winter. Warm, sättigend, komplex.",
      },
      {
        id: 2,
        author: "Christine W.",
        avatar: "CW",
        rating: 4,
        date: "6. März 2025",
        title: "Guter Allrounder",
        body: "Weder zu stark noch zu mild. Gut für die Moka-Kanne, gut für den Vollautomaten. Ein verlässlicher Kaffee.",
      },
      {
        id: 3,
        author: "Michael Z.",
        avatar: "MZ",
        rating: 5,
        date: "23. Februar 2025",
        title: "Wie Schokolade zum Trinken",
        body: "Sehr voller Körper, kaum Säure, lange Schokoladennote. Mein Partner liebt ihn als Cappuccino-Basis.",
      },
    ],
  },
  {
    id: "vietnam-dalat",
    name: "Vietnam Da Lat Highland",
    tagline: "Kräftiger Dunkelröstung – Robusta trifft Raffinesse",
    description:
      "Vom kühlen Plateau von Da Lat im zentralen Hochland Vietnams stammt diese seltene Spezialitäts-Robusta, die alle Vorurteile in Frage stellt. Sorgfältig selektiert und langsam dunkel geröstet, offenbart sie eine unerwartete Komplexität: dunklen Kakao, Walnuss und einen rauchigen Abgang, der wunderbar mit gesüßter Kondensmilch im traditionellen vietnamesischen Stil harmoniert.",
    price: 12.9,
    weight: "250g",
    roastLevel: "Dark",
    origin: "Asia",
    region: "Da Lat, Vietnam",
    altitude: "1.400 – 1.600 m",
    process: "Natürlich",
    flavorNotes: ["Dunkler Kakao", "Walnuss", "Rauch", "Melasse"],
    rating: 4.4,
    reviewCount: 56,
    image:
      "https://images.unsplash.com/photo-1512568400610-62da28bc8a13?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1512568400610-62da28bc8a13?w=800&q=80",
      "https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?w=800&q=80",
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80",
    ],
    featured: false,
    inStock: true,
    reviews: [
      {
        id: 1,
        author: "Kai H.",
        avatar: "KH",
        rating: 5,
        date: "21. März 2025",
        title: "Vietnamese Style – zu Hause",
        body: "Mit gezuckerter Kondensmilch und Eis ist das einfach der beste Cold Brew den ich je gemacht habe. Authentisch!",
      },
      {
        id: 2,
        author: "Mia R.",
        avatar: "MR",
        rating: 4,
        date: "9. März 2025",
        title: "Mutig und interessant",
        body: "Ich trinke sonst nur Arabica aber wollte mal etwas anderes probieren. Robusta ist wirklich eine andere Welt – kräftig, aber mit Tiefe.",
      },
      {
        id: 3,
        author: "Lars T.",
        avatar: "LT",
        rating: 4,
        date: "26. Februar 2025",
        title: "Gut für Cold Brew",
        body: "Der rauchige Charakter ist beim Cold Brew fantastisch. Etwas ungewohnt für den Espresso, aber als Kaltgetränk top.",
      },
    ],
  },
];

/** Gibt die 3 Featured-Produkte für die Startseite zurück */
export const featuredProducts = products.filter((p) => p.featured);

/** Gibt ein Produkt anhand seiner ID zurück */
export const getProductById = (id: string): Product | undefined =>
  products.find((p) => p.id === id);
