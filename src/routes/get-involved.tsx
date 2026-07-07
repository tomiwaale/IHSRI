import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { Reveal } from "@/components/site/Reveal";
import { HandCoins, HeartHandshake, Landmark, Users } from "lucide-react";

export const Route = createFileRoute("/get-involved")({
  head: () => ({
    meta: [
      { title: "Get Involved - IHESRI" },
      { name: "description", content: "Become a volunteer, become a partner, donate, or sponsor a project with IHESRI." },
      { property: "og:title", content: "Get Involved with IHESRI" },
      { property: "og:description", content: "Support rehabilitation, disability inclusion and community health through IHESRI." },
    ],
  }),
  component: GetInvolvedPage,
});

const tiers = [
  { amount: 5000, label: "₦5,000", note: "Funds a follow-up therapy visit for one patient." },
  { amount: 25000, label: "₦25,000", note: "Supplies an appropriate, well-fitted assistive device." },
  { amount: 100000, label: "₦100,000", note: "Sponsors a community health worker training module." },
];

const ways = [
  { Icon: Users, t: "Become a Volunteer", d: "Lend clinical, research, communications or operational skills to community impact work." },
  { Icon: HeartHandshake, t: "Become a Partner", d: "Work with us on rehabilitation, disability inclusion, health systems and community projects." },
  { Icon: HandCoins, t: "Donate", d: "Support outreach, assistive technology access, training and community health programs." },
  { Icon: Landmark, t: "Sponsor a Project", d: "Fund a focused project that brings rehabilitation support closer to underserved communities." },
];

function GetInvolvedPage() {
  return (
    <SiteShell>
      <section className="relative overflow-hidden bg-gradient-to-br from-cream/50 via-background to-accent/30 text-neutral-900">
        <Reveal className="container-x py-20 md:py-28">
          <span className="eyebrow">Get involved</span>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-[1.05] md:text-6xl text-foreground">
            Support rehabilitation, inclusion and healthier communities.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Become a volunteer, become a partner, donate, or sponsor a project with
            IHESRI.
          </p>
        </Reveal>
      </section>

      <section className="section-pad">
        <div className="container-x grid gap-6 md:grid-cols-3">
          {tiers.map((t, i) => (
            <Reveal key={t.amount} delay={i * 100} className="rounded-3xl border border-border bg-card p-8 shadow-card transition hover:-translate-y-1">
              <div className="font-display text-5xl font-bold text-primary">{t.label}</div>
              <p className="mt-3 text-muted-foreground">{t.note}</p>
              <Link
                to="/donate"
                search={{ amount: t.amount }}
                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                Give {t.label}
              </Link>
            </Reveal>
          ))}
        </div>
        <p className="container-x mt-6 text-center text-xs text-muted-foreground">
          Donations are processed securely by Paystack — cards, bank transfer and USSD accepted.
          Prefer another way to give? <Link to="/contact" className="underline">Contact us</Link>.
        </p>
      </section>

      <section className="section-pad bg-[var(--gradient-band)]">
        <div className="container-x">
          <Reveal>
            <span className="eyebrow">More ways to help</span>
            <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold text-foreground md:text-4xl">
              Choose how you want to get involved.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {ways.map(({ Icon, t, d }, i) => (
              <Reveal key={t} delay={(i % 4) * 80} className="group rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1">
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
    </SiteShell>
  );
}
