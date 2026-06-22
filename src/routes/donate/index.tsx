import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState, type FormEvent } from "react";
import { z } from "zod";
import { Loader2, ShieldCheck } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { Reveal } from "@/components/site/Reveal";
import { initializeDonation } from "@/lib/api/paystack.functions";

const tiers = [
  { amount: 5000, note: "Funds a follow-up therapy visit for one patient." },
  { amount: 25000, note: "Supplies an appropriate, well-fitted assistive device." },
  { amount: 100000, note: "Sponsors a community health worker training module." },
];

const searchSchema = z.object({
  amount: z.number().int().positive().optional(),
});

export const Route = createFileRoute("/donate/")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "Donate — IHSRI" },
      {
        name: "description",
        content: "Make a secure donation to IHSRI via Paystack — cards, bank transfer, and USSD accepted.",
      },
    ],
  }),
  component: DonatePage,
});

function DonatePage() {
  const { amount: presetAmount } = Route.useSearch();
  const initializeDonationFn = useServerFn(initializeDonation);

  const presetTier = tiers.find((t) => t.amount === presetAmount);
  const [selected, setSelected] = useState<number | "custom">(presetTier ? presetTier.amount : presetAmount ? "custom" : tiers[0].amount);
  const [customAmount, setCustomAmount] = useState(presetAmount && !presetTier ? String(presetAmount) : "");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const amountNaira = selected === "custom" ? Number(customAmount) : selected;

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (!amountNaira || amountNaira < 100) {
      setError("Please enter an amount of at least ₦100.");
      return;
    }

    setError(null);
    setSubmitting(true);
    try {
      const result = await initializeDonationFn({ data: { name, email, amountNaira } });
      window.location.href = result.authorizationUrl;
    } catch (err) {
      setSubmitting(false);
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  return (
    <SiteShell>
      <section className="bg-secondary">
        <Reveal className="container-x py-20 md:py-28">
          <span className="eyebrow">Donate</span>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-[1.05] text-foreground md:text-6xl">
            Your gift moves people forward — literally.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Every donation becomes therapy hours, a wheelchair fitted, a trained health
            worker — and ultimately, a life lived more fully.
          </p>
        </Reveal>
      </section>

      <section className="section-pad">
        <div className="container-x grid gap-8 md:grid-cols-5">
          <Reveal direction="left" className="md:col-span-2 space-y-4">
            {tiers.map((t) => (
              <button
                key={t.amount}
                type="button"
                onClick={() => setSelected(t.amount)}
                className={`w-full rounded-2xl border p-6 text-left transition-all ${
                  selected === t.amount ? "border-primary bg-accent/40" : "border-border bg-card hover:-translate-y-0.5"
                }`}
              >
                <div className="font-display text-3xl font-bold text-primary">
                  ₦{t.amount.toLocaleString()}
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{t.note}</p>
              </button>
            ))}

            <button
              type="button"
              onClick={() => setSelected("custom")}
              className={`w-full rounded-2xl border p-6 text-left transition-colors ${
                selected === "custom" ? "border-primary bg-accent/40" : "border-border bg-card"
              }`}
            >
              <div className="font-display text-lg font-semibold text-foreground">Other amount</div>
              {selected === "custom" && (
                <div className="mt-3 flex items-center gap-2">
                  <span className="text-muted-foreground">₦</span>
                  <input
                    type="number"
                    min={100}
                    autoFocus
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                    onClick={(e) => e.stopPropagation()}
                    placeholder="Enter amount"
                    className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/30"
                  />
                </div>
              )}
            </button>
          </Reveal>

          <Reveal as="form" direction="right" delay={120} onSubmit={handleSubmit} className="md:col-span-3 rounded-3xl border border-border bg-card p-8 shadow-card">
            <div className="grid gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="text-sm font-medium text-foreground">Your name</label>
                  <input
                    id="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/30"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/30"
                  />
                </div>
              </div>

              {error && <p className="text-sm text-destructive">{error}</p>}

              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 disabled:opacity-60"
              >
                {submitting ? (
                  <>
                    <Loader2 size={16} className="animate-spin" /> Redirecting to Paystack…
                  </>
                ) : (
                  <>Give {amountNaira ? `₦${amountNaira.toLocaleString()}` : ""} securely</>
                )}
              </button>

              <p className="flex items-center gap-2 text-xs text-muted-foreground">
                <ShieldCheck size={14} /> Payments are processed securely by Paystack — cards, bank transfer and USSD accepted.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteShell>
  );
}
