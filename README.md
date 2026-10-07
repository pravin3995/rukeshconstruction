# Rukesh Construction — Website

Marketing website for Rukesh Construction, built with Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, Framer Motion and Lucide icons.

## Quick start

Requires **Node.js 20.9+** (tested on 22.17).

```bash
npm install        # install dependencies
npm run dev        # development server → http://localhost:3000
npm run build      # production build
npm start          # serve the production build
npm run lint       # ESLint
```

## Folder structure

```
app/
  layout.tsx              Root layout: fonts, SEO metadata, JSON-LD, navbar, footer
  page.tsx                Home page (composes the section components)
  globals.css             Design tokens (colours, fonts) + shared CSS classes
  about/  services/  projects/  contact/  privacy-policy/  terms/
  projects/[slug]/page.tsx  Dynamic project detail pages
  api/contact/route.ts    Contact form endpoint (validates; connect email here)
  sitemap.ts  robots.ts  icon.svg  not-found.tsx
components/
  Navbar, Hero, Stats, About, Services, Projects, ProjectCard, ProjectsGrid,
  ProjectGallery, WhyChooseUs, Process, Testimonials, CTA, ContactSection,
  ContactForm, Footer, Logo, LegalPage, Providers
  ui/  Button, Reveal, SectionHeading, PageHero, TowerLines, SocialIcons
data/
  site.ts       Company info, contact, social links, stats, nav, form options
  services.ts   The six services
  projects.ts   Projects (sample data)
  content.ts    About pillars, Why Choose Us, process steps, testimonials
lib/
  utils.ts      cn() helper, easing curve
  contact.ts    Shared form validation (client + server)
public/images/
  brand/  site/  services/  projects/
```

## What to replace before launch

Search the codebase for `REPLACE` to find every placeholder.

| What | Where |
| --- | --- |
| Phone, email, address, business hours | `data/site.ts` → `contact` |
| Social media URLs | `data/site.ts` → `social` |
| Company statistics (10+, 50+ …) | `data/site.ts` → `stats` |
| Production domain (SEO, sitemap) | `data/site.ts` → `url` |
| Budget ranges / project types in the form | `data/site.ts` |
| Project information (**currently sample data**) | `data/projects.ts` |
| Testimonials (**currently placeholders**) | `data/content.ts` |
| About page mission / vision copy | `app/about/page.tsx` |
| Privacy Policy & Terms text | `app/privacy-policy/page.tsx`, `app/terms/page.tsx` |
| Logo | `components/Logo.tsx` (vector redraw). Original file: `public/images/brand/logo-original.jpg` |
| Favicon | `app/icon.svg` |

### Images

All photography is local, in `public/images/`. The current photos are from Unsplash (free licence) and are placeholders, not Rukesh Construction projects. To replace one, overwrite the file and keep the same name, or update the path in the data file.

- `site/hero.jpg` is the home hero. `site/about.jpg` is the About section. `site/cta.jpg` is the CTA background. `site/structure.jpg` appears in Why Choose Us and the About hero. `site/page-*.jpg` are the inner page heroes.
- `services/*.jpg`: paths are set in `data/services.ts`.
- `projects/<slug>-1..4.jpg`: paths are set in `data/projects.ts`.

Use landscape images of at least 1600px wide (2000px+ for heroes). `next/image` optimises them automatically.

### Logo

`components/Logo.tsx` holds an SVG redraw of the supplied logo, so it stays sharp and works on dark and light backgrounds. If you get an official SVG/PNG from your designer, put it in `public/images/brand/` and render it with `next/image` inside `LogoMark`.

## Editing colours & fonts

- **Colours:** edit the variables at the top of `app/globals.css` (`--black`, `--charcoal`, `--dark-gray`, `--gold`, `--light-gold`, `--off-white` …). Tailwind utilities (`bg-gold`, `text-ink`, `border-graphite` …) follow automatically.
- **Fonts:** set in `app/layout.tsx`. Headings use Archivo (expanded width) and body text uses Inter.

## Adding a project

1. Add images to `public/images/projects/` (e.g. `my-project-1.jpg` … `-4.jpg`).
2. In `data/projects.ts`, copy an existing project object and give it a unique `slug`. That slug becomes `/projects/my-project`.
3. Fill in the name, category, location, overview, scope, highlights, stats and gallery.
4. Set `featured: true` to show it on the home page. The editorial grid uses the first four featured projects.

The listing page, detail page, "next project" link and sitemap all update automatically.

## Contact form

The form validates in the browser and again in `app/api/contact/route.ts`. Right now valid inquiries are only **logged to the server console**. To receive them, add an email provider in that route, for example [Resend](https://resend.com) or Nodemailer. Keep API keys in environment variables.

## Deploying to Vercel

1. Push this folder to a GitHub, GitLab or Bitbucket repository.
2. At [vercel.com/new](https://vercel.com/new), import the repository. Vercel detects Next.js automatically, so the default settings are correct.
3. Click **Deploy**.
4. Under **Settings → Domains**, add your domain, then update `site.url` in `data/site.ts` to match.
5. Add any email-provider keys under **Settings → Environment Variables**.

CLI alternative: `npm i -g vercel && vercel` (and `vercel --prod` for production).
