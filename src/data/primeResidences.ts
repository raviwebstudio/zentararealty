export interface ConfigurationItem {
  id: string;
  title: string;
  typology: string;
  totalArea: string;
  superAreaSqFt: number;
  privateBasementArea: string;
  priceStarting: string;
  priceNumericCr: number;
  bookingAmount: string;
  paymentPlan: string;
  description: string;
  highlights: string[];
}

export interface SpecificationCategory {
  title: string;
  spec: string;
  description: string;
  iconName: string;
}

export interface AmenityCategory {
  category: string;
  items: string[];
}

export interface LocationHighlight {
  title: string;
  description: string;
  category: "landmark" | "connectivity" | "future-transit";
}

export interface PrimeResidencesData {
  projectName: string;
  developer: string;
  tagline: string;
  location: {
    sector: string;
    city: string;
    state: string;
    corridor: string;
    fullLocation: string;
  };
  projectType: string;
  landArea: string;
  totalResidences: number;
  structure: string;
  possession: string;
  bookingAmount: string;
  paymentPlan: string;
  priceDisclaimer: string;
  overviewSummary: string;
  projectHighlights: string[];
  configurations: ConfigurationItem[];
  specifications: SpecificationCategory[];
  clubPrime: {
    name: string;
    sizeSqFt: string;
    exclusivity: string;
    summary: string;
    categories: AmenityCategory[];
  };
  locationAdvantages: {
    summary: string;
    landmarks: string[];
    connectivity: string[];
    upcomingTransit: string[];
  };
  statutoryDisclaimer: string;
}

export const PRIME_RESIDENCES_DATA: PrimeResidencesData = {
  projectName: "PRIME RESIDENCES",
  developer: "PRIME Developments",
  tagline: "The Fresh Face of Luxury Living",
  location: {
    sector: "Sector 65",
    city: "Gurugram",
    state: "Haryana",
    corridor: "Golf Course Extension Road Corridor",
    fullLocation: "Sector 65, Gurugram, Haryana",
  },
  projectType: "Boutique low-rise gated residential community",
  landArea: "5 acres",
  totalResidences: 308,
  structure: "B+S+4", // Basement + Stilt + 4 Floors
  possession: "End of 2027",
  bookingAmount: "₹10 Lakhs",
  paymentPlan: "Construction-Linked Plan (25:25:50)",
  priceDisclaimer: "Prices are subject to change; GST and applicable charges are additional.",
  overviewSummary:
    "Welcome to PRIME RESIDENCES, a boutique low-rise gated community of 2 & 3 BHK VRV Homes, where luxury and comfort come together in perfect harmony. Set amidst 5 acres in Sector 65, Gurugram, this exclusive enclave of 308 residences brings you refined living with VRV air-conditioning systems, smart home features, and premium finishes.",

  projectHighlights: [
    "Sprawling 5-Acre Gated Community — A low-density community designed for maximum privacy, comfort, and serene living.",
    "Premium Low-Rise Architecture — Elegant B+S+4 configuration, offering independence and exclusivity.",
    "Only 308 Residences — Intimate, secure, and community-driven.",
    "Seamless Living — Backed by 100% power backup and round-the-clock security.",
    "Peace of Mind — Advanced 4-Tier Security System with access-controlled entry & CCTV surveillance.",
  ],

  configurations: [
    {
      id: "2bhk-basement",
      title: "2 BHK + Private Basement",
      typology: "2 BHK VRV Home",
      totalArea: "1,275 Sq.Ft.",
      superAreaSqFt: 1275,
      privateBasementArea: "339~441 Sq.Ft.",
      priceStarting: "₹2.42 Cr",
      priceNumericCr: 2.42,
      bookingAmount: "₹10 Lakhs",
      paymentPlan: "Construction-Linked Plan (25:25:50)",
      description:
        "Thoughtfully designed 2 BHK residence paired with an exclusive, fully air-conditioned private basement suitable for a personal work office, private fitness gym, or entertainment lounge.",
      highlights: [
        "1,275 Sq.Ft. efficient layout with zero wasted corridor space",
        "Private air-conditioned basement (339–441 Sq.Ft.)",
        "Imported marble in living/dining; wooden flooring in bedrooms",
        "Advanced VRV air conditioning with PM 2.5 filtration",
        "Fully modular kitchen with premium chimney and hob",
        "Modular wardrobes in all bedrooms",
        "Digital main door lock and smart video doorbell",
        "One covered car parking per unit",
      ],
    },
    {
      id: "3bhk-basement",
      title: "3 BHK + Private Basement",
      typology: "3 BHK VRV Home",
      totalArea: "1,740 Sq.Ft.",
      superAreaSqFt: 1740,
      privateBasementArea: "339~441 Sq.Ft.",
      priceStarting: "₹3.30 Cr",
      priceNumericCr: 3.30,
      bookingAmount: "₹10 Lakhs",
      paymentPlan: "Construction-Linked Plan (25:25:50)",
      description:
        "Generously proportioned 3 BHK boutique home with expansive living zones, dedicated ensuite bedrooms, and a private air-conditioned basement for customized family pursuits.",
      highlights: [
        "1,740 Sq.Ft. expansive low-rise floor layout",
        "Private air-conditioned basement (339–441 Sq.Ft.)",
        "Imported marble in living/dining; wooden flooring in all bedrooms",
        "Advanced VRV air conditioning with PM 2.5 filtration",
        "Fully modular kitchen with chimney and hob",
        "Custom modular wardrobes in all bedrooms",
        "Digital main door lock and smart video doorbell",
        "One covered car parking per unit",
      ],
    },
  ],

  specifications: [
    {
      title: "Flooring",
      spec: "Imported Marble & Wooden Flooring",
      description: "Imported marble in living and dining areas; warm wooden flooring in all bedrooms.",
      iconName: "Layers",
    },
    {
      title: "Kitchen",
      spec: "Fully Modular Kitchen",
      description: "Equipped with premium chimney and hob, precision cabinetry, and quartz countertops.",
      iconName: "Utensils",
    },
    {
      title: "Wardrobes",
      spec: "Custom Modular Wardrobes",
      description: "Built-in custom modular wardrobes fitted across all bedrooms.",
      iconName: "FolderHeart",
    },
    {
      title: "Climate Control",
      spec: "Advanced VRV Air Conditioning",
      description: "Energy-efficient VRV systems with integrated PM 2.5 air-purification filters.",
      iconName: "Wind",
    },
    {
      title: "Smart & Secure",
      spec: "Digital Door Lock & Smart Video Doorbell",
      description: "Keyless access digital main door lock paired with an app-integrated smart video doorbell.",
      iconName: "Lock",
    },
    {
      title: "Private Basement",
      spec: "339 ~ 441 Sq.Ft. Air-Conditioned Space",
      description: "Dedicated fully air-conditioned basement space ideal for a home office, private gym, or private lounge.",
      iconName: "SquareStack",
    },
    {
      title: "Dedicated Parking",
      spec: "One Covered Car Park per Unit",
      description: "Guaranteed allocated covered parking space protected from weather.",
      iconName: "Car",
    },
    {
      title: "Power & Security",
      spec: "100% Power Backup & 4-Tier Security",
      description: "Uninterrupted 100% power backup and 4-tier security with access-controlled entry & CCTV surveillance.",
      iconName: "ShieldCheck",
    },
  ],

  clubPrime: {
    name: "Club Prime",
    sizeSqFt: "40,000 Sq.Ft.",
    exclusivity: "Exclusively for 308 families",
    summary:
      "A grand 40,000 Sq.Ft. lifestyle and wellness sanctuary curated exclusively for the 308 families of Prime Residences.",
    categories: [
      {
        category: "Health & Wellness",
        items: [
          "Swimming Pool & Deck",
          "Fully Equipped Gym",
          "Sauna & Spa",
          "Health & Wellness Center",
          "Jogging Track",
        ],
      },
      {
        category: "Entertainment & Social",
        items: [
          "25-Seater Luxury Mini Theatre",
          "VR Gaming & Indoor Games",
          "Banquet & Multipurpose Halls",
          "Restaurant cum Bar & Meeting Pods",
        ],
      },
      {
        category: "Family & Outdoors",
        items: [
          "Kids' Play Area",
          "Landscaped Gardens",
        ],
      },
      {
        category: "Security & Access",
        items: [
          "4-Tier Security with Access-Controlled Entry",
          "Round-the-clock CCTV surveillance & manned barriers",
        ],
      },
    ],
  },

  locationAdvantages: {
    summary:
      "Perfectly placed in Sector 65, PRIME RESIDENCES ensures unmatched connectivity and lifestyle convenience at the heart of Gurugram's prime growth corridor.",
    landmarks: [
      "DLF The Arbour",
      "M3M Route 65",
      "Worldmark Mall",
      "Trump Towers",
      "Emerald Hills",
    ],
    connectivity: [
      "Just minutes from Golf Course Road",
      "Direct signal-free connectivity to Sohna Road",
      "Fast arterial transit to National Highway 48 (NH-48)",
    ],
    upcomingTransit: [
      "Upcoming Metro Corridor for even better accessibility and long-term capital appreciation",
    ],
  },

  statutoryDisclaimer:
    "Statutory Disclaimer: Zentara Realty is an independent residential real estate consultancy presenting PRIME RESIDENCES, developed by PRIME Developments in Sector 65, Gurugram. Zentara Realty is not the developer. All project specifications, dimensions, amenities, and timelines are sourced directly from official developer information. Prices are subject to change without prior notice; GST and statutory applicable government charges are additional. Prospective buyers are advised to independently verify all statutory certificates, sanctioned building plans, and regulatory details prior to any financial transaction.",
};
