import {
  CalendarCheck,
  ClipboardCheck,
  DraftingCompass,
  Eye,
  HardHat,
  HeartHandshake,
  KeyRound,
  MessagesSquare,
  Ruler,
  ScanSearch,
  ShieldCheck,
  Users,
  type LucideIcon,
} from "lucide-react";

type Item = { number: string; title: string; description: string; icon: LucideIcon };

export const aboutPillars = [
  { title: "Quality First", description: "Materials and workmanship checked at every stage of construction." },
  { title: "Professional Execution", description: "Organised sites, clear communication and disciplined planning." },
  { title: "Timely Delivery", description: "Realistic schedules, tracked closely from start to handover." },
] as const;

export const whyChooseUs: Item[] = [
  {
    number: "01",
    title: "Quality Craftsmanship",
    description: "Skilled trades and careful supervision produce work that holds up for decades.",
    icon: ShieldCheck,
  },
  {
    number: "02",
    title: "Experienced Team",
    description: "Engineers, supervisors and craftsmen who understand how buildings come together.",
    icon: Users,
  },
  {
    number: "03",
    title: "Transparent Process",
    description: "Clear estimates, regular progress updates and no surprises along the way.",
    icon: Eye,
  },
  {
    number: "04",
    title: "Timely Delivery",
    description: "Schedules planned in detail and managed actively to keep your project on time.",
    icon: CalendarCheck,
  },
  {
    number: "05",
    title: "Attention to Detail",
    description: "From reinforcement spacing to final finishes, the details are where quality lives.",
    icon: Ruler,
  },
  {
    number: "06",
    title: "Customer Satisfaction",
    description: "We measure success by how confident you feel in the finished result.",
    icon: HeartHandshake,
  },
];

export const processSteps: Item[] = [
  { number: "01", title: "Consultation", description: "Understanding your requirements.", icon: MessagesSquare },
  { number: "02", title: "Planning", description: "Developing the project strategy.", icon: ClipboardCheck },
  { number: "03", title: "Design & Engineering", description: "Turning ideas into practical solutions.", icon: DraftingCompass },
  { number: "04", title: "Construction", description: "Executing with precision and quality.", icon: HardHat },
  { number: "05", title: "Quality Inspection", description: "Ensuring every detail meets standards.", icon: ScanSearch },
  { number: "06", title: "Handover", description: "Delivering the completed project.", icon: KeyRound },
];

/**
 * ⚠ PLACEHOLDER TESTIMONIALS — illustrative only.
 * Replace with genuine client feedback (with the client's permission) before launch.
 */
export const testimonials = [
  {
    quote:
      "The team was organised from day one. We always knew what was happening on site, and the finished quality of our home exceeded what we expected.",
    name: "Client Name",
    role: "Homeowner",
    project: "Private Residence",
    rating: 5,
  },
  {
    quote:
      "Clear timelines, honest communication and a site that was always well managed. They handled our commercial build with real professionalism.",
    name: "Client Name",
    role: "Director",
    project: "Commercial Building",
    rating: 5,
  },
  {
    quote:
      "Our renovation was completed with minimal disruption. The attention to detail in the finishing work is something we notice every day.",
    name: "Client Name",
    role: "Property Owner",
    project: "Renovation",
    rating: 5,
  },
] as const;
