import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteShell } from "@/components/site/SiteShell";
import { Reveal } from "@/components/site/Reveal";
import { Facebook, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact - IHESRI" },
      { name: "description", content: "Contact Integrated Health Systems and Rehabilitation Initiative by email, phone, LinkedIn or Facebook." },
      { property: "og:title", content: "Contact IHESRI" },
      { property: "og:description", content: "Reach the IHESRI team about partnerships, programs, media or general questions." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <SiteShell>
      <section className="bg-secondary">
        <Reveal className="container-x py-20 md:py-28">
          <span className="eyebrow">Contact</span>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-[1.05] text-foreground md:text-6xl">
            Let's build inclusive rehabilitation together.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Partnerships, programs, media or general questions — we'd love to hear from you.
          </p>
        </Reveal>
      </section>

      <section className="section-pad">
        <div className="container-x grid gap-12 md:grid-cols-5">
          <div className="md:col-span-2 space-y-6">
            {[
              { Icon: MapPin, t: "Address", v: "No. 3 Destiny Valley Estate, Calabar, Cross River State." },
              { Icon: Mail, t: "Email", v: "integratedhsri@gmail.com" },
              { Icon: Phone, t: "Phone", v: "+2349138715016" },
              { Icon: Linkedin, t: "LinkedIn", v: "IHESRI" },
              { Icon: Facebook, t: "Facebook", v: "Integrated Health Systems And Rehabilitation Initiative" },
            ].map(({ Icon, t, v }, i) => (
              <Reveal key={t} direction="left" delay={i * 100} className="group flex gap-4 rounded-2xl border border-border bg-card p-5 transition hover:-translate-y-0.5">
                <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent text-forest transition-transform duration-300 group-hover:scale-110">
                  <Icon size={20} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{t}</div>
                  <div className="mt-1 font-medium text-foreground">{v}</div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal
            as="form"
            direction="right"
            delay={150}
            className="md:col-span-3 rounded-3xl border border-border bg-card p-8 shadow-card"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            {sent ? (
              <div className="animate-in fade-in-0 zoom-in-95 py-12 text-center duration-500">
                <h3 className="font-display text-2xl font-semibold text-foreground">Thank you</h3>
                <p className="mt-2 text-muted-foreground">
                  We received your message and will be in touch shortly.
                </p>
              </div>
            ) : (
              <div className="grid gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Your name" name="name" />
                  <Field label="Email" name="email" type="email" />
                </div>
                <Field label="Organization (optional)" name="org" />
                <Field label="Subject" name="subject" />
                <div>
                  <label className="text-sm font-medium text-foreground">Message</label>
                  <textarea
                    required
                    rows={5}
                    className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/30"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 self-start rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
                >
                  Send message <Send size={16} />
                </button>
              </div>
            )}
          </Reveal>
        </div>
      </section>
    </SiteShell>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-medium text-foreground">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required={type !== "text" || name !== "org"}
        className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/30"
      />
    </div>
  );
}
