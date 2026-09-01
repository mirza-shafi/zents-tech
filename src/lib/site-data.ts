export const nav = [
  { href: "/systems", label: "Systems" },
  { href: "/process", label: "Process" },
  { href: "/career", label: "Career" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const contact = {
  email: "hello@zentstech.com",
  whatsappNumber: "+880 1938-820835",
  whatsappHref: "https://wa.me/8801938820835",
  facebookHref: "https://www.facebook.com/profile.php?id=61585824459385",
};

export const legalNav = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
];

export type ServiceCategory = {
  tag: string;
  name: string;
  description: string;
  items: string[];
  margin: string;
  entry: string;
  recurring: string;
};

export const serviceCategories: ServiceCategory[] = [
  {
    tag: "The flagship",
    name: "AI Systems",
    description:
      "Agents and assistants wired into how your business actually operates — not a chatbot bolted onto a website.",
    items: [
      "AI agents & agentic workflows",
      "Customer support & sales agents",
      "Knowledge assistants (RAG)",
      "Voice AI receptionists",
    ],
    margin: "Highest margin: custom agents wired into proprietary data.",
    entry: "Easiest entry: a scoped AI Customer Support pilot.",
    recurring: "Recurring: monthly agent monitoring & improvement.",
  },
  {
    tag: "The flagship's twin",
    name: "Business Automation",
    description:
      "The workflows, integrations, and routing that connect the tools you already run — so nothing falls through a spreadsheet again.",
    items: [
      "Workflow & CRM automation",
      "Lead capture & routing",
      "API / SaaS integrations",
      "Marketing & ops automation",
    ],
    margin: "Highest margin: multi-system integrations (CRM + payments + inventory).",
    entry: "Easiest entry: lead-to-CRM automation.",
    recurring: "Recurring: automation monitoring & maintenance.",
  },
  {
    tag: "The credibility layer",
    name: "Software Engineering",
    description:
      "When no off-the-shelf tool fits the workflow, we build it — internal tools, dashboards, and the software your systems run on.",
    items: [
      "Internal tools & dashboards",
      "SaaS & product engineering",
      "Web applications",
      "API & systems architecture",
    ],
    margin: "Highest margin: internal tools unique to one client's workflow.",
    entry: "Sold as an upsell once an automation or agent is already live.",
    recurring: "Recurring: software maintenance & hosting.",
  },
];

export type ProductizedService = {
  name: string;
  audience: string;
  problem: string;
  timeline: string;
  priceBDT: string;
  priceUSD: string;
};

export const productizedServices: ProductizedService[] = [
  {
    name: "AI Customer Support System",
    audience: "E-commerce & service businesses",
    problem: "Support tickets and DMs piling up faster than a team can answer them.",
    timeline: "3–5 weeks",
    priceBDT: "৳1.5–4L one-time + ৳20–40k/mo",
    priceUSD: "$4k–12k one-time + $400–1,200/mo",
  },
  {
    name: "Lead-to-CRM Automation",
    audience: "Real estate, education, clinics, financial agents",
    problem: "Leads live in WhatsApp threads and a notebook — nothing is routed or followed up.",
    timeline: "2–4 weeks",
    priceBDT: "৳80k–2.5L",
    priceUSD: "$2k–7k",
  },
  {
    name: "AI Sales / Qualification Agent",
    audience: "High inbound-volume businesses",
    problem: "Slow first response kills conversion; staff waste time on unqualified leads.",
    timeline: "4–6 weeks",
    priceBDT: "৳2–5L + ৳25–50k/mo",
    priceUSD: "$5k–15k + $600–2,000/mo",
  },
  {
    name: "AI & Automation Readiness Audit",
    audience: "Any business unsure where to start",
    problem: "\"We should be doing something with AI\" — with no roadmap or priority.",
    timeline: "1–2 weeks",
    priceBDT: "৳25–60k",
    priceUSD: "$750–2,500",
  },
  {
    name: "Internal AI Knowledge Assistant",
    audience: "Service businesses with tribal knowledge",
    problem: "SOPs, pricing, and policy live in one person's head — answers are inconsistent.",
    timeline: "3–5 weeks",
    priceBDT: "৳1.5–3.5L + ৳15–30k/mo",
    priceUSD: "$3.5k–10k + $300–1,000/mo",
  },
  {
    name: "Business Automation System",
    audience: "Mid-market businesses on 3+ disconnected tools",
    problem: "Manual data re-entry, no single source of truth across the business.",
    timeline: "6–10 weeks",
    priceBDT: "৳3–8L",
    priceUSD: "$8k–30k + $500–2,500/mo",
  },
  {
    name: "AI Voice Receptionist",
    audience: "Clinics, real estate offices, service businesses",
    problem: "Missed calls are missed revenue, especially after hours.",
    timeline: "3–5 weeks",
    priceBDT: "৳1.5–3L + ৳20–35k/mo",
    priceUSD: "$4k–10k + $500–1,500/mo",
  },
  {
    name: "Internal Tool / Mini-SaaS Build",
    audience: "Any workflow that doesn't fit an off-the-shelf tool",
    problem: "\"We run this whole process across fourteen spreadsheets.\"",
    timeline: "6–12 weeks",
    priceBDT: "৳3–10L",
    priceUSD: "$8k–35k",
  },
];

export const lifecycle = [
  { step: "Audit", detail: "A scoped diagnostic — low commitment, high clarity." },
  { step: "Quick Win", detail: "One small automation that proves the model works." },
  { step: "Automation / AI System", detail: "The core build: an agent or automation live in production." },
  { step: "Software", detail: "Internal tools where no off-the-shelf system fits." },
  { step: "Monthly Support", detail: "Monitoring and fixing what breaks when an API changes." },
  { step: "Product", detail: "The workflow we've now built three times becomes a product." },
];
