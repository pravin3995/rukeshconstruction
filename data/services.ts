import {
  Building2,
  ClipboardList,
  Hammer,
  House,
  Layers,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  number: string;
  title: string;
  /** Short name used in the footer and filters. */
  shortTitle: string;
  summary: string;
  description: string;
  scope: string[];
  icon: LucideIcon;
  /** REPLACE: swap with your own photography in /public/images/services. */
  image: string;
};

export const services: Service[] = [
  {
    slug: "residential-construction",
    number: "01",
    title: "Residential Construction",
    shortTitle: "Residential",
    summary: "Homes, villas and residential buildings built for comfort, safety and longevity.",
    description:
      "From independent homes to multi-unit residential buildings, we manage construction end to end — foundations, structure, finishes and handover — with a focus on build quality and liveable design.",
    scope: ["Independent houses & villas", "Residential buildings", "Turnkey construction", "Interior finishing"],
    icon: House,
    image: "/images/services/residential.jpg",
  },
  {
    slug: "commercial-construction",
    number: "02",
    title: "Commercial Construction",
    shortTitle: "Commercial",
    summary: "Offices, retail and mixed-use spaces delivered to schedule and specification.",
    description:
      "We build commercial spaces that work hard for the businesses inside them — efficient layouts, durable materials and disciplined site management to keep programmes on track.",
    scope: ["Office buildings", "Retail & showrooms", "Mixed-use developments", "Fit-outs"],
    icon: Building2,
    image: "/images/services/commercial.jpg",
  },
  {
    slug: "renovation-remodeling",
    number: "03",
    title: "Renovation & Remodeling",
    shortTitle: "Renovation",
    summary: "Upgrades and transformations that add value to existing spaces.",
    description:
      "Whether it is a structural upgrade or a complete interior transformation, we plan renovations carefully to minimise disruption and maximise the value of your property.",
    scope: ["Structural repairs", "Home & office remodeling", "Facade upgrades", "Extensions"],
    icon: Hammer,
    image: "/images/services/renovation.jpg",
  },
  {
    slug: "project-management",
    number: "04",
    title: "Project Management",
    shortTitle: "Project Management",
    summary: "Planning, coordination and oversight from first estimate to final handover.",
    description:
      "Our project management keeps cost, quality and time under control — clear schedules, transparent reporting and a single point of accountability for your project.",
    scope: ["Planning & scheduling", "Cost estimation", "Contractor coordination", "Site supervision"],
    icon: ClipboardList,
    image: "/images/services/project-management.jpg",
  },
  {
    slug: "structural-civil-works",
    number: "05",
    title: "Structural & Civil Works",
    shortTitle: "Civil Works",
    summary: "RCC frameworks, foundations and civil works executed with precision.",
    description:
      "The strength of every building starts below the surface. We execute foundations, RCC frames and civil works with strict attention to engineering drawings and quality checks.",
    scope: ["Foundations & excavation", "RCC structures", "Retaining walls", "Site development"],
    icon: Layers,
    image: "/images/services/structural.jpg",
  },
];
