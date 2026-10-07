/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  PROJECTS
 *
 *  ⚠ SAMPLE DATA. These four projects are placeholders so the project system
 *  works out of the box. Their names, locations, figures and photos are NOT
 *  real Rukesh Construction projects — replace them with your own before launch.
 *
 *  To add a project: copy one object below, give it a unique `slug`
 *  (it becomes the URL: /projects/<slug>), and put its images in
 *  /public/images/projects/. The project page, listing and sitemap update
 *  automatically.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export type ProjectCategory = "Residential" | "Commercial" | "Industrial";

export type Project = {
  slug: string;
  name: string;
  category: ProjectCategory;
  /** One-line description shown on cards. */
  tagline: string;
  location: string;
  year: string;
  status: "Completed" | "Ongoing";
  /** Cover image — used on cards and as the detail page hero. */
  cover: string;
  gallery: { src: string; alt: string }[];
  overview: string[];
  scope: string[];
  highlights: string[];
  stats: { label: string; value: string }[];
  /** Show on the home page "Featured Projects" section. */
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "luxury-residence",
    name: "Luxury Residence",
    category: "Residential",
    tagline: "Modern residential construction",
    location: "City, State", // REPLACE
    year: "2025",
    status: "Completed",
    cover: "/images/projects/luxury-residence-1.jpg",
    gallery: [
      { src: "/images/projects/luxury-residence-1.jpg", alt: "Contemporary residence exterior with pool at dusk" },
      { src: "/images/projects/luxury-residence-2.jpg", alt: "Residence facade with timber cladding and landscaped lawn" },
      { src: "/images/projects/luxury-residence-3.jpg", alt: "Light-filled living room with natural materials" },
      { src: "/images/projects/luxury-residence-4.jpg", alt: "Rear elevation with pool deck and palms" },
    ],
    overview: [
      "A contemporary private residence designed around open living spaces, natural light and a seamless connection to the outdoors.",
      "The project combined a reinforced concrete frame with large-span glazing, requiring precise structural coordination and careful sequencing of finishing trades.",
    ],
    scope: [
      "Foundation and RCC structural framework",
      "Masonry, plastering and waterproofing",
      "Large-format glazing installation",
      "Swimming pool construction",
      "Interior finishing and landscaping coordination",
    ],
    highlights: [
      "Column-free living area with long-span beams",
      "Integrated pool and outdoor deck",
      "Premium finishes with detailed quality checks",
    ],
    stats: [
      { label: "Built-up Area", value: "6,500 sq.ft" },
      { label: "Floors", value: "G + 2" },
      { label: "Duration", value: "14 Months" },
      { label: "Type", value: "Private Residence" },
    ],
    featured: true,
  },
  {
    slug: "commercial-complex",
    name: "Commercial Complex",
    category: "Commercial",
    tagline: "Contemporary commercial development",
    location: "City, State", // REPLACE
    year: "2024",
    status: "Completed",
    cover: "/images/projects/commercial-complex-1.jpg",
    gallery: [
      { src: "/images/projects/commercial-complex-1.jpg", alt: "Glass commercial towers viewed from street level" },
      { src: "/images/projects/commercial-complex-2.jpg", alt: "Commercial tower under construction with cranes" },
      { src: "/images/projects/commercial-complex-3.jpg", alt: "Finished office interior with glass partitions" },
      { src: "/images/projects/commercial-complex-4.jpg", alt: "White modular facade detail" },
    ],
    overview: [
      "A multi-storey commercial development combining office floors with ground-level retail frontage.",
      "Work was phased to allow early handover of retail units while upper office floors were completed, keeping the client's leasing programme on schedule.",
    ],
    scope: [
      "Deep foundations and basement parking",
      "RCC frame and post-tensioned slabs",
      "Facade and curtain-wall coordination",
      "MEP services coordination",
      "Office and retail shell-and-core fit-out",
    ],
    highlights: [
      "Phased handover to support early occupancy",
      "Efficient floor plates with minimal internal columns",
      "Coordinated MEP routing for flexible tenant layouts",
    ],
    stats: [
      { label: "Built-up Area", value: "85,000 sq.ft" },
      { label: "Floors", value: "B + G + 8" },
      { label: "Duration", value: "26 Months" },
      { label: "Type", value: "Office & Retail" },
    ],
    featured: true,
  },
  {
    slug: "industrial-facility",
    name: "Industrial Facility",
    category: "Industrial",
    tagline: "Large-scale industrial construction",
    location: "City, State", // REPLACE
    year: "2024",
    status: "Completed",
    cover: "/images/projects/industrial-facility-1.jpg",
    gallery: [
      { src: "/images/projects/industrial-facility-1.jpg", alt: "Large warehouse interior with high-bay racking" },
      { src: "/images/projects/industrial-facility-2.jpg", alt: "Warehouse aisle with pallet storage" },
      { src: "/images/projects/industrial-facility-3.jpg", alt: "Steel fabrication with welding sparks" },
      { src: "/images/projects/industrial-facility-4.jpg", alt: "Earthworks and site preparation with excavators" },
    ],
    overview: [
      "A large-span warehousing and logistics facility built for high-bay storage and heavy vehicle movement.",
      "The project involved extensive site development, a pre-engineered steel superstructure and heavy-duty industrial flooring designed for racking loads.",
    ],
    scope: [
      "Site grading and earthworks",
      "Isolated and combined footings",
      "Pre-engineered steel building erection",
      "FM2-grade industrial flooring",
      "Loading docks and external roads",
    ],
    highlights: [
      "Clear-span structure for flexible storage layouts",
      "Heavy-duty flooring for high-bay racking",
      "Coordinated truck circulation and loading bays",
    ],
    stats: [
      { label: "Built-up Area", value: "1,20,000 sq.ft" },
      { label: "Clear Height", value: "12 m" },
      { label: "Duration", value: "11 Months" },
      { label: "Type", value: "Warehousing" },
    ],
    featured: true,
  },
  {
    slug: "villa-project",
    name: "Villa Project",
    category: "Residential",
    tagline: "Premium residential development",
    location: "City, State", // REPLACE
    year: "2025",
    status: "Ongoing",
    cover: "/images/projects/villa-project-1.jpg",
    gallery: [
      { src: "/images/projects/villa-project-1.jpg", alt: "Modern villa with infinity pool" },
      { src: "/images/projects/villa-project-2.jpg", alt: "Villa facade with timber and white render" },
      { src: "/images/projects/villa-project-3.jpg", alt: "White villa with landscaped front garden" },
      { src: "/images/projects/villa-project-4.jpg", alt: "Contemporary villa illuminated at dusk" },
    ],
    overview: [
      "A gated development of premium villas, each designed with private outdoor space and contemporary architecture.",
      "Standardised structural details across units allowed efficient construction while preserving individual character in finishes and landscaping.",
    ],
    scope: [
      "Master site development and internal roads",
      "Villa foundations and RCC structures",
      "Facade cladding and external finishes",
      "Private pools and landscaped courtyards",
      "Common amenities and boundary works",
    ],
    highlights: [
      "Repeatable structural system for consistent quality",
      "Private pool and garden for every villa",
      "Coordinated infrastructure across the development",
    ],
    stats: [
      { label: "Villas", value: "12 Units" },
      { label: "Site Area", value: "3.5 Acres" },
      { label: "Duration", value: "20 Months" },
      { label: "Type", value: "Villa Community" },
    ],
    featured: true,
  },
];

export const projectCategories: ProjectCategory[] = ["Residential", "Commercial", "Industrial"];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProject(slug: string) {
  const i = projects.findIndex((p) => p.slug === slug);
  return projects[(i + 1) % projects.length];
}
