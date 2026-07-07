import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { Reveal } from "@/components/site/Reveal";
import {
  ArrowRight,
  GraduationCap,
  HeartPulse,
  Megaphone,
  School,
  ShieldCheck,
  Sprout,
  Users,
} from "lucide-react";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Programs - IHESRI" },
      {
        name: "description",
        content:
          "Explore IHESRI programs in community rehabilitation, school health, disability awareness, physiotherapy outreach, inclusive community projects, health systems strengthening, leadership development and volunteer training.",
      },
      { property: "og:title", content: "IHESRI Programs" },
      {
        property: "og:description",
        content:
          "Programs that strengthen rehabilitation, disability inclusion and community health.",
      },
    ],
  }),
  component: ProgramsPage,
});

const programs = [
  {
    Icon: HeartPulse,
    title: "Community Rehabilitation",
    body: "Bringing rehabilitation education, prevention and support closer to the people who need it.",
  },
  {
    Icon: School,
    title: "School Health Programs",
    body: "Supporting healthier school communities through education, screening and early awareness.",
  },
  {
    Icon: Megaphone,
    title: "Disability Awareness Campaigns",
    body: "Promoting inclusion, dignity and equal opportunity for people with disabilities.",
  },
  {
    Icon: ShieldCheck,
    title: "Physiotherapy Outreach",
    body: "Taking practical physiotherapy education and preventive health services into communities.",
  },
  {
    Icon: Users,
    title: "Inclusive Community Projects",
    body: "Creating community spaces and systems where everyone can participate fully.",
  },
  {
    Icon: Sprout,
    title: "Health Systems Strengthening",
    body: "Advancing rehabilitation as a fundamental part of primary healthcare and community development.",
  },
  {
    Icon: GraduationCap,
    title: "Leadership Development",
    body: "Developing the next generation of rehabilitation and community health leaders.",
  },
  {
    Icon: Users,
    title: "Volunteer Academy",
    body: "Mentoring students and volunteers for service, innovation and community impact.",
  },
];

function ProgramsPage() {
  return (
    <SiteShell>
      <section className="bg-secondary">
        <Reveal className="container-x py-20 md:py-28">
          <span className="eyebrow">Our programs</span>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-[1.05] text-foreground md:text-6xl">
            Programs that strengthen systems and transform lives.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            IHESRI works across community rehabilitation, school health, disability
            inclusion, physiotherapy outreach, health systems strengthening and leadership
            development.
          </p>
        </Reveal>
      </section>

      <section className="section-pad">
        <div className="container-x">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {programs.map(({ Icon, title, body }, i) => (
              <Reveal
                key={title}
                delay={(i % 4) * 80}
                className="group rounded-2xl border border-border bg-card p-6 shadow-card transition hover:-translate-y-1"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-forest transition-transform duration-300 group-hover:scale-110">
                  <Icon size={20} />
                </div>
                <h2 className="mt-5 font-display text-lg font-semibold text-foreground">
                  {title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12 rounded-3xl bg-forest px-8 py-12 text-cream md:px-12">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <span className="eyebrow !text-cream/80">Partner with IHESRI</span>
                <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold md:text-4xl">
                  Help expand rehabilitation access in more communities.
                </h2>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-cream px-6 py-3 text-sm font-semibold text-forest transition-transform hover:-translate-y-0.5"
              >
                Contact us <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteShell>
  );
}
