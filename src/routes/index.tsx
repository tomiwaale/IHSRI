import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, HeartPulse, Users, Sparkles, ShieldCheck, GraduationCap, Accessibility, Lightbulb, Megaphone } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { Reveal } from "@/components/site/Reveal";
import brand from "@/assets/ihsri-brand.jpeg.asset.json";
import heroImg from "@/assets/hero-section.jpg";
import event01 from "@/assets/gallery/gallery-02.jpeg";
import event02 from "@/assets/gallery/gallery-06.jpeg";
import event03 from "@/assets/gallery/gallery-10.jpeg";
import event04 from "@/assets/gallery/gallery-14.jpeg";
import event05 from "@/assets/gallery/gallery-18.jpeg";
import event06 from "@/assets/gallery/gallery-22.jpeg";
import event07 from "@/assets/gallery/gallery-26.jpeg";
import event08 from "@/assets/gallery/gallery-30.jpeg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "IHESRI - Restoring Function. Strengthening Systems. Transforming Lives." },
      {
        name: "description",
        content:
          "IHESRI advances rehabilitation, disability inclusion and community health by strengthening health systems, expanding access to assistive technologies, and inspiring rehabilitation professionals.",
      },
      { property: "og:title", content: "IHESRI - Restoring Function. Strengthening Systems. Transforming Lives." },
      {
        property: "og:description",
        content:
          "Restoring function, strengthening systems, and transforming lives through rehabilitation, disability inclusion, and community health.",
      },
    ],
  }),
  component: HomePage,
});

const eventPhotos = [event01, event02, event03, event04, event05, event06, event07, event08].map(
  (src, i) => ({ src, alt: `IHESRI event photo ${i + 1}` }),
);

function HomePage() {
  return (
    <SiteShell>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-cream/50 via-background to-accent/30">
        <div className="absolute inset-0 -z-10 opacity-[0.08] mix-blend-overlay [background:radial-gradient(60%_60%_at_20%_10%,white,transparent_60%)]" />
        <div className="container-x grid gap-12 py-20 text-neutral-900 md:grid-cols-12 md:py-28">
          <Reveal direction="up" className="md:col-span-7">
            <span className="eyebrow">
              <span className="h-px w-8 bg-primary/40" /> Restoring Function. Strengthening Systems. Transforming Lives.
            </span>
            <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] sm:text-5xl md:text-6xl text-foreground">
              Advancing rehabilitation, disability inclusion and community health.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              IHESRI strengthens health systems, expands access to assistive technologies,
              and inspires the next generation of rehabilitation professionals.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/get-involved"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5 hover:bg-forest"
              >
                Support our work <ArrowRight size={16} />
              </Link>
              <Link
                to="/programs"
                className="inline-flex items-center gap-2 rounded-full border border-primary/30 px-6 py-3 text-sm font-semibold text-primary hover:bg-primary/5"
              >
                Explore our programs
              </Link>
            </div>
          </Reveal>

          <Reveal direction="right" delay={150} className="md:col-span-5">
            <div className="relative">
              <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-leaf/30 blur-2xl" />
              <div className="overflow-hidden rounded-[2rem] border border-cream/15 shadow-soft">
                <img
                  src={heroImg}
                  alt="A young child taking confident steps with the support of two rehabilitation health workers"
                  width={1600}
                  height={1100}
                  className="aspect-[5/6] w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-background p-4 shadow-card md:flex md:items-center md:gap-3">
                <img src={brand.url} alt="" className="h-12 w-12 rounded-full" width={48} height={48} />
                <div className="text-left">
                  <div className="font-display text-sm font-semibold text-foreground">Integrated. Inclusive.</div>
                  <div className="text-xs text-muted-foreground">Rehabilitation for dignified lives</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOCUS AREAS */}
      <section className="border-y border-border bg-secondary">
        <div className="container-x grid gap-8 py-12 md:grid-cols-4">
          {[
            { k: "Advocacy", v: "Promoting rehabilitation as part of quality healthcare" },
            { k: "Outreach", v: "Taking preventive health education into communities" },
            { k: "Inclusion", v: "Creating equal opportunities for people with disabilities" },
            { k: "Systems", v: "Strengthening rehabilitation services and health systems" },
          ].map((s, i) => (
            <Reveal key={s.k} delay={i * 100}>
              <div className="font-display text-2xl font-bold text-primary md:text-3xl">{s.k}</div>
              <div className="mt-1 text-sm text-secondary-foreground/80">{s.v}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* MISSION / VISION */}
      <section className="section-pad">
        <div className="container-x grid gap-8 md:grid-cols-2">
          <Reveal direction="left" as="article" className="relative overflow-hidden rounded-3xl border border-border bg-card p-10 shadow-card">
            <div className="absolute right-0 top-0 h-32 w-32 -translate-y-12 translate-x-12 rounded-full bg-accent/60 blur-2xl" />
            <span className="eyebrow">Vision</span>
            <h2 className="mt-3 font-display text-2xl font-semibold leading-snug text-foreground md:text-3xl">
              Rehabilitation should never be an afterthought.
            </h2>
            <p className="mt-4 text-muted-foreground">
              We work for a future where everyone has the opportunity to live healthier,
              more independent and dignified lives.
            </p>
          </Reveal>
          <Reveal direction="right" delay={120} as="article" className="relative overflow-hidden rounded-3xl bg-primary p-10 text-primary-foreground shadow-soft">
            <div className="absolute right-0 top-0 h-40 w-40 -translate-y-16 translate-x-16 rounded-full bg-leaf/40 blur-2xl" />
            <span className="eyebrow !text-cream/80">Mission</span>
            <h2 className="mt-3 font-display text-2xl font-semibold leading-snug md:text-3xl">
              Stronger systems. Inclusive communities. Skilled people.
            </h2>
            <p className="mt-4 text-cream/85">
              We advance rehabilitation through advocacy, community outreach, research,
              disability inclusion, assistive technology, and health systems strengthening.
            </p>
          </Reveal>
        </div>
      </section>

      {/* PILLARS */}
      <section className="section-pad bg-[var(--gradient-band)]">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <span className="eyebrow">What we do</span>
            <h2 className="mt-3 font-display text-3xl font-semibold text-foreground md:text-4xl">
              Practical work that brings rehabilitation closer to people.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { Icon: Megaphone, t: "Rehabilitation Advocacy", d: "Promoting rehabilitation as a fundamental component of primary healthcare." },
              { Icon: HeartPulse, t: "Community Outreach", d: "Taking rehabilitation education and preventive health services directly into communities." },
              { Icon: Users, t: "Disability Inclusion", d: "Creating inclusive communities where everyone has equal opportunities." },
              { Icon: Accessibility, t: "Assistive Technology", d: "Advocating for equitable access to prosthetic, orthotic and mobility devices." },
              { Icon: Lightbulb, t: "Research & Innovation", d: "Generating evidence that strengthens rehabilitation services and health systems." },
              { Icon: GraduationCap, t: "Capacity Building", d: "Mentoring students and developing the next generation of rehabilitation leaders." },
            ].map(({ Icon, t, d }, i) => (
              <Reveal
                key={t}
                delay={i * 100}
                className="group rounded-2xl border border-border bg-card p-6 shadow-card transition hover:-translate-y-1"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-forest transition-transform duration-300 group-hover:scale-110">
                  <Icon size={20} />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-foreground">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* EVENTS / GALLERY PREVIEW */}
      <section className="section-pad">
        <div className="container-x">
          <Reveal className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-2xl">
              <span className="eyebrow">From the field</span>
              <h2 className="mt-3 font-display text-3xl font-semibold text-foreground md:text-4xl">
                Moments from our events and outreach.
              </h2>
            </div>
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-forest"
            >
              View full gallery <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {eventPhotos.map((photo, i) => (
              <Reveal key={photo.src} delay={(i % 4) * 80}>
                <Link
                  to="/gallery"
                  className="group block aspect-square overflow-hidden rounded-2xl bg-muted"
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad">
        <div className="container-x">
          <Reveal className="relative overflow-hidden rounded-3xl bg-forest px-8 py-16 text-cream md:px-16">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-leaf/30 blur-3xl" />
            <div className="relative grid items-center gap-8 md:grid-cols-2">
              <div>
                <span className="eyebrow !text-cream/80"><Sparkles size={14} /> Join us</span>
                <h2 className="mt-3 font-display text-3xl font-semibold md:text-4xl">
                  Help us bring rehabilitation closer to home.
                </h2>
                <p className="mt-4 max-w-lg text-cream/80">
                  Whether you partner, volunteer, or give — your support directly funds
                  assistive devices, training, and community programs.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 md:justify-end">
                <Link to="/get-involved" className="inline-flex items-center gap-2 rounded-full bg-cream px-6 py-3 text-sm font-semibold text-forest transition-transform hover:-translate-y-0.5">
                  Get involved <ArrowRight size={16} />
                </Link>
                <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-cream/30 px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-cream/10">
                  <ShieldCheck size={16} /> Partner with us
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteShell>
  );
}
