import type { Metadata, Viewport } from "next";
import { Archivo, Inter } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Providers } from "@/components/Providers";
import { site } from "@/data/site";
import "./globals.css";

// Headings: Archivo (variable width axis for an expanded, architectural feel).
const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  axes: ["wdth"],
  display: "swap",
});

// Body: Inter — clean, highly legible sans-serif.
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Rukesh Construction | Building the Future",
    template: "%s | Rukesh Construction",
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "Rukesh Construction",
    "construction company",
    "residential construction",
    "commercial construction",
    "renovation",
    "civil works",
    "project management",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    title: "Rukesh Construction | Building the Future",
    description: site.description,
    url: "/",
    locale: "en_IN",
    images: [{ url: "/images/site/hero.jpg", width: 2200, height: 1467, alt: "Rukesh Construction" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rukesh Construction | Building the Future",
    description: site.description,
    images: ["/images/site/hero.jpg"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: site.name,
  description: site.description,
  url: site.url,
  telephone: site.contact.phone,
  email: site.contact.email,
  image: `${site.url}/images/site/hero.jpg`,
  address: {
    "@type": "PostalAddress",
    streetAddress: `${site.contact.address.line1}, ${site.contact.address.line2}`,
    addressLocality: site.contact.address.city,
    addressRegion: site.contact.address.region,
    postalCode: site.contact.address.postalCode,
    addressCountry: site.contact.address.country,
  },
  sameAs: Object.values(site.social),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${archivo.variable} ${inter.variable} antialiased`}>
      <body className="flex min-h-svh flex-col">
        <a
          href="#main"
          className="fixed left-4 top-4 z-[100] -translate-y-24 bg-gold px-4 py-3 text-sm font-semibold text-ink transition-transform focus:translate-y-0"
        >
          Skip to content
        </a>
        <Providers>
          <Navbar />
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer />
        </Providers>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
