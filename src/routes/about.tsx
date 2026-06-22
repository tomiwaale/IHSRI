import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { Reveal } from "@/components/site/Reveal";
import { Compass, HeartHandshake, Leaf, Lightbulb, ShieldCheck } from "lucide-react";
import solomon from "@/assets/team/solomon.jpeg";
import edem from "@/assets/team/edem.jpeg";
import rapheal from "@/assets/team/rapheal.jpeg";
import igbor from "@/assets/team/igbor.jpeg";
import ekam from "@/assets/team/ekam.jpeg";
import emem from "@/assets/team/emem.jpeg";
import ayodele from "@/assets/team/ayodele.jpeg";
import agnes from "@/assets/team/agnes.jpeg";
import henshaw from "@/assets/team/henshaw.jpeg";
import blessing from "@/assets/team/blessing.jpeg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — IHSRI" },
      { name: "description", content: "Learn about IHSRI's vision, mission and the values driving integrated rehabilitation in primary health care." },
      { property: "og:title", content: "About IHSRI" },
      { property: "og:description", content: "Our story, vision and values — building inclusive rehabilitation into primary health care." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { Icon: HeartHandshake, t: "Dignity", d: "Every person deserves rehabilitation that restores agency and choice." },
  { Icon: Compass, t: "Equity", d: "We prioritize underserved communities and remove barriers to care." },
  { Icon: Lightbulb, t: "Evidence", d: "Programs are designed, measured, and improved with rigorous data." },
  { Icon: Leaf, t: "Sustainability", d: "Solutions belong to communities and outlast our presence." },
  { Icon: ShieldCheck, t: "Safety", d: "Quality and safeguarding are non-negotiable in every program." },
];

const team = [
  {
    name: "Solomon Ekpenyong Inyang",
    role: "Founder / Executive Director",
    bio: "National Health Fellow, Physiotherapist and development practitioner with expertise spanning rehabilitation, public health systems and SDG 3. Focused on disability inclusion, health innovation, equitable access to care and advocacy for policy reform in rehabilitation, with experience supporting health interventions alongside global and national partners, committed to advancing evidence informed rehabilitation that improves lives and strengthens communities.",
    image: solomon,
  },
  {
    name: "Edem Cyril Archibong",
    role: "Program Coordinator",
    bio: "Resourceful and detail-oriented Physiotherapist with strong skills in leadership, project management and communication. A Millennium Fellow with the Millennium Campus Network, committed to advancing the UN SDGs. Passionate about SDG 3 (Good Health and Well-being), with experience supporting initiatives in health, education and youth development through active volunteering.",
    image: edem,
  },
  {
    name: "Etta Raphael Emmanuel",
    role: "Monitoring & Evaluation Officer",
    bio: "A Physiotherapist committed to driving meaningful community impact by blending clinical insight, data-driven monitoring, and teamwork to design, track and improve interventions that transform lives and uplift communities.",
    image: rapheal,
  },
  {
    name: "Igbor Efa Ikoi",
    role: "Advocacy and Partnership Officer",
    bio: "A passionate physiotherapist and purpose-driven humanitarian committed to fostering healing, empowerment, and meaningful human connection through advocacy, service, and community impact.",
    image: igbor,
  },
  {
    name: "Ekam Mfoniso Simeon",
    role: "Resource Mobilization Officer",
    bio: "A passionate physiotherapist committed to rehabilitation, community impact and holistic well-being. Dedicated to fostering meaningful partnerships, promoting physical and mental wellness, and contributing to initiatives that create lasting positive change.",
    image: ekam,
  },
  {
    name: "Emem Akpabio",
    role: "Volunteer Coordinator",
    bio: "A dedicated Physiotherapist committed to advancing community health through structured volunteer engagement, health campaigns, and outreach programs. She coordinates and supports volunteer efforts aimed at promoting health awareness, improving access to care, and strengthening community impact. Passionate about service and community development, she brings organization, teamwork, and leadership to every initiative she supports.",
    image: emem,
  },
  {
    name: "Ayodele Awanebi",
    role: "Assistant Volunteer Coordinator",
    bio: "A dedicated physiotherapist passionate about rehabilitation, mental wellbeing, and supporting lives through care, advocacy, and impact.",
    image: ayodele,
  },
  {
    name: "Edem, Agnes-Theresa Etim",
    role: "Financial Officer",
    bio: "An aspiring biochemist passionate about service, volunteerism, and community impact. Skilled in financial management, with strong organizational and leadership abilities. Committed to supporting initiatives that improve lives and create lasting change.",
    image: agnes,
  },
  {
    name: "Henshaw Christy Ernest",
    role: "Assistant Communications & Media Officer",
    bio: "A dedicated Physiotherapist passionate about advancing community health, rehabilitation, and wellbeing. Skilled in clinical care, health communication, and health promotion, with a focus on inclusive and preventive physiotherapy practice. Committed to health education, empowerment, and improving access to quality rehabilitation services for all.",
    image: henshaw,
  },
  {
    name: "Blessing Owai",
    role: "Community Engagement & Outreach Coordinator",
    bio: "A passionate advocate for community health and social impact, dedicated to fostering meaningful change through outreach, engagement, and compassionate service.",
    image: blessing,
  },
];

function AboutPage() {
  return (
    <SiteShell>
      <section className="bg-secondary">
        <Reveal className="container-x py-20 md:py-28">
          <span className="eyebrow">About IHSRI</span>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-[1.05] text-foreground md:text-6xl">
            We exist so that rehabilitation is no longer an afterthought.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Integrated Health Systems &amp; Rehabilitation Initiative is a not-for-profit
            building practical pathways for rehabilitation to live inside primary health
            care — where people first seek help, close to home.
          </p>
        </Reveal>
      </section>

      <section className="section-pad">
        <div className="container-x grid gap-12 md:grid-cols-2">
          <Reveal direction="left">
            <span className="eyebrow">Our story</span>
            <h2 className="mt-3 font-display text-3xl font-semibold text-foreground md:text-4xl">
              From clinic corridors to community systems.
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground">
              <p>
                IHSRI was founded by clinicians, researchers, and community advocates who
                kept meeting the same problem: rehabilitation that arrived too late, too
                far, or not at all.
              </p>
              <p>
                We work alongside ministries of health, district teams, and local partners
                to redesign referral pathways, train multidisciplinary teams, and supply
                the assistive technologies people need to live full lives.
              </p>
              <p>
                Our approach is integrated by design — rehabilitation is woven into the
                fabric of primary health care, not bolted on.
              </p>
            </div>
          </Reveal>
          <Reveal direction="right" delay={120} className="rounded-3xl border border-border bg-card p-10 shadow-card">
            <h3 className="font-display text-xl font-semibold text-foreground">By the numbers</h3>
            <dl className="mt-6 grid grid-cols-2 gap-6">
              {[
                ["12+", "Districts served"],
                ["3,400", "People reached annually"],
                ["180", "Health workers trained"],
                ["28", "Local partners"],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="font-display text-3xl font-bold text-primary">{k}</dt>
                  <dd className="mt-1 text-sm text-muted-foreground">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-[var(--gradient-band)]">
        <div className="container-x">
          <Reveal>
            <span className="eyebrow">What we stand for</span>
            <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold text-foreground md:text-4xl">
              Five values that shape every decision.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {values.map(({ Icon, t, d }, i) => (
              <Reveal key={t} delay={(i % 3) * 100} className="group rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-forest transition-transform duration-300 group-hover:scale-110">
                  <Icon size={20} />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-foreground">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-x">
          <Reveal>
            <span className="eyebrow">Our team</span>
            <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold text-foreground md:text-4xl">
              The people driving change on the ground.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {team.map(({ name, role, bio, image }, i) => (
              <Reveal key={name} delay={(i % 2) * 100} className="group flex gap-5 rounded-2xl border border-border bg-card p-5">
                <div className="h-28 w-28 shrink-0 overflow-hidden rounded-xl bg-muted sm:h-32 sm:w-32">
                  <img
                    src={image}
                    alt={name}
                    loading="lazy"
                    width={256}
                    height={256}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground">{name}</h3>
                  <p className="mt-1 text-sm font-medium text-primary">{role}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{bio}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
