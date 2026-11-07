export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export const FAQS: FaqItem[] = [
  {
    category: "About Zentara Realty",
    question: "What services does Zentara Realty provide in Gurgaon?",
    answer:
      "Zentara Realty is an independent residential real estate consultancy based in Gurugram, Haryana. The firm specializes exclusively in discovering, curating, and advising on primary residential developments, including pre-launch residential projects, newly launched luxury condominiums, and upcoming residential communities across Gurgaon's prime growth axes.",
  },
  {
    category: "Project Phases",
    question: "What is the difference between pre-launch and new launch residential projects?",
    answer:
      "Pre-launch residential projects are in the initial development phase where qualified buyers can submit an Expression of Interest (EOI) for early unit allocation and preferential inventory selection. New launch residential projects have received statutory regulatory approvals, have officially debuted to the market, and provide finalized architectural floor plans, sanctioned configurations, and scheduled construction milestones.",
  },
  {
    category: "Gurugram Corridors",
    question: "Which residential corridors in Gurgaon does Zentara Realty cover?",
    answer:
      "Zentara Realty provides focused advisory across Gurugram's leading residential growth corridors: Golf Course Extension Road (ultra-luxury and high-end residences), Dwarka Expressway / Northern Peripheral Road (airport-connected master-planned townships), Southern Peripheral Road / SPR (low-density forest-themed enclaves), and New Gurgaon (self-contained contemporary communities with seamless NH-48 connectivity).",
  },
  {
    category: "Advisory Mandate",
    question: "Does Zentara Realty deal with resale houses, rental leasing, or commercial properties?",
    answer:
      "No. Zentara Realty operates under a strict primary residential mandate. We exclusively advise on newly developed residential projects and luxury condominiums. We strictly do not engage in second-hand resale houses, tenant rental leasing, commercial office spaces, retail shops, or house-flipping brokerages.",
  },
  {
    category: "Due Diligence & RERA",
    question: "How does Zentara Realty verify project legitimacy and Haryana RERA compliance?",
    answer:
      "Zentara Realty conducts objective due diligence on developer completion track records, past delivery velocity, sanctioned master plans, and Haryana Real Estate Regulatory Authority (HARERA) project registration filings. We advise clients to inspect official HARERA certificates before finalizing any property acquisition.",
  },
  {
    category: "Consultation Process",
    question: "How can homebuyers schedule a residential consultation with Zentara Realty?",
    answer:
      "Homebuyers can schedule a residential consultation by completing the structured consultation form on our website, calling our advisory desk directly at +91 7303437659, or emailing zentararealty@gmail.com. Consultations are independent, transparent, and pressure-free.",
  },
];

