import { createFileRoute, Link } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useEffect, useState } from "react";
import { z } from "zod";
import { CheckCircle2, Loader2, XCircle } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { verifyDonation } from "@/lib/api/paystack.functions";

const searchSchema = z.object({
  reference: z.string().optional(),
  trxref: z.string().optional(),
});

export const Route = createFileRoute("/donate/callback")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [{ title: "Donation status — IHSRI" }],
  }),
  component: DonateCallbackPage,
});

type State = "checking" | "success" | "failed" | "error";

function DonateCallbackPage() {
  const { reference, trxref } = Route.useSearch();
  const verifyDonationFn = useServerFn(verifyDonation);
  const ref = reference ?? trxref;

  const [state, setState] = useState<State>("checking");
  const [amountNaira, setAmountNaira] = useState<number | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    if (!ref) {
      setState("error");
      setMessage("No transaction reference was provided.");
      return;
    }
    verifyDonationFn({ data: { reference: ref } })
      .then((result) => {
        if (result.status === "success") {
          setAmountNaira(result.amountNaira);
          setState("success");
        } else {
          setMessage(`Payment status: ${result.status}.`);
          setState("failed");
        }
      })
      .catch((err) => {
        setMessage(err instanceof Error ? err.message : "Could not verify this transaction.");
        setState("error");
      });
  }, [ref]);

  return (
    <SiteShell>
      <section className="section-pad">
        <div className="container-x flex justify-center">
          <div className="w-full max-w-md rounded-3xl border border-border bg-card p-10 text-center shadow-card">
            {state === "checking" && (
              <>
                <Loader2 className="mx-auto animate-spin text-primary" size={36} />
                <h1 className="mt-6 font-display text-2xl font-semibold text-foreground">
                  Confirming your donation…
                </h1>
                <p className="mt-2 text-sm text-muted-foreground">
                  Please wait while we verify your payment with Paystack.
                </p>
              </>
            )}

            {state === "success" && (
              <>
                <CheckCircle2 className="mx-auto text-primary" size={36} />
                <h1 className="mt-6 font-display text-2xl font-semibold text-foreground">
                  Thank you for your gift
                </h1>
                <p className="mt-2 text-sm text-muted-foreground">
                  We received your donation of ₦{amountNaira?.toLocaleString()}.
                </p>
                <Link
                  to="/"
                  className="mt-8 inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
                >
                  Back to home
                </Link>
              </>
            )}

            {(state === "failed" || state === "error") && (
              <>
                <XCircle className="mx-auto text-destructive" size={36} />
                <h1 className="mt-6 font-display text-2xl font-semibold text-foreground">
                  We couldn't confirm this payment
                </h1>
                <p className="mt-2 text-sm text-muted-foreground">{message}</p>
                <Link
                  to="/donate"
                  className="mt-8 inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
                >
                  Try again
                </Link>
              </>
            )}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
