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

