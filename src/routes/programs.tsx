import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { Reveal } from "@/components/site/Reveal";
import { ArrowRight } from "lucide-react";
import physio from "@/assets/program-physio.jpg";
import assistive from "@/assets/program-assistive.jpg";
import training from "@/assets/program-training.jpg";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Programs — IHSRI" },
      { name: "description", content: "Integrated rehabilitation, assistive technology access, community-based services and workforce development programs from IHSRI." },
      { property: "og:title", content: "IHSRI Programs" },
      { property: "og:description", content: "Our integrated rehabilitation programs across health systems, assistive technology and workforce development." },
    ],
  }),
  component: ProgramsPage,
});

const programs = [
  {
    img: physio,
    tag: "Health Systems",
    title: "Rehabilitation in Primary Care",
    body: "We embed assessment, therapy and referral pathways into primary health facilities so people get rehabilitation early — before disability deepens.",
    points: ["Clinical protocols", "Referral pathways", "Outcome measurement"],
  },
  {
    img: assistive,
    tag: "Assistive Technology",
    title: "Equitable Access to Devices",
    body: "From wheelchairs to prosthetics and low-vision aids, we work with local providers to make assistive technology affordable, appropriate and well-fitted.",
    points: ["Local provisioning", "Fitting & follow-up", "Repair networks"],
  },
  {
    img: training,
    tag: "Workforce",
    title: "Training the Next Generation",
    body: "We mentor students and upskill practicing professionals through structured curricula, clinical placements and continuing education.",
    points: ["University partnerships", "Clinical mentorship", "CPD programs"],
  },
];

function ProgramsPage() {
  return (
    <SiteShell>
      <section className="bg-secondary">
        <Reveal className="container-x py-20 md:py-28">
          <span className="eyebrow">Our programs</span>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-[1.05] text-foreground md:text-6xl">
            Integrated rehabilitation, end to end.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Each program is designed to interlock with the next — strengthening systems,
            expanding access, and developing the people who deliver care.
          </p>
        </Reveal>
      </section>

      <section className="section-pad">
        <div className="container-x space-y-20">
          {programs.map((p, i) => (
            <Reveal
              key={p.title}
              as="article"
              direction={i % 2 === 1 ? "right" : "left"}
              className={`grid items-center gap-10 md:grid-cols-2 ${i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""}`}
            >
              <div className="overflow-hidden rounded-3xl border border-border shadow-card">
                <img src={p.img} alt={p.title} width={1200} height={900} loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105" />
              </div>
              <div>
                <span className="eyebrow">{p.tag}</span>
                <h2 className="mt-3 font-display text-3xl font-semibold text-foreground md:text-4xl">{p.title}</h2>
                <p className="mt-4 text-muted-foreground">{p.body}</p>
                <ul className="mt-6 grid gap-2 text-sm text-foreground">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" /> {pt}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all hover:gap-3"
                >
                  Partner on this program <ArrowRight size={16} />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
