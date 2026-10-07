import { ButtonLink } from "@/components/ui/Button";
import { TowerLines } from "@/components/ui/TowerLines";

export default function NotFound() {
  return (
    <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-ink pt-24">
      <div aria-hidden="true" className="blueprint-grid absolute inset-0 -z-10" />
      <TowerLines className="absolute bottom-0 right-0 -z-10 h-[70%] w-auto opacity-40" delay={0.1} />
      <div className="container-x">
        <p className="eyebrow text-gold">Error 404</p>
        <h1 className="h-display mt-6 text-5xl text-white sm:text-7xl">
          Page not <span className="text-gold">found.</span>
        </h1>
        <p className="mt-6 max-w-md text-lg text-mist">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/">Back to Home</ButtonLink>
          <ButtonLink href="/projects" variant="outline-light">
            View Projects
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
