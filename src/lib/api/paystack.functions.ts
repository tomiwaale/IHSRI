import { createServerFn } from "@tanstack/react-start";
import { getRequestUrl } from "@tanstack/react-start/server";
import { z } from "zod";

import { getServerConfig } from "../config.server";

const PAYSTACK_API = "https://api.paystack.co";

export const initializeDonation = createServerFn({ method: "POST" })
  .validator(
    z.object({
      name: z.string().min(1),
      email: z.string().email(),
      amountNaira: z.number().int().min(100),
    }),
  )
  .handler(async ({ data }) => {
    const { paystackSecretKey } = getServerConfig();
    if (!paystackSecretKey) {
      throw new Error("Donations aren't configured yet. Please contact us directly to give.");
    }

    const callbackUrl = new URL("/donate/callback", getRequestUrl()).toString();

    const response = await fetch(`${PAYSTACK_API}/transaction/initialize`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${paystackSecretKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: data.email,
        amount: data.amountNaira * 100, // Paystack expects kobo
        currency: "NGN",
        callback_url: callbackUrl,
        metadata: { donor_name: data.name },
      }),
    });

    const result = await response.json();
    if (!response.ok || !result.status) {
      throw new Error(result?.message ?? "Could not start the donation. Please try again.");
    }

    return {
      authorizationUrl: result.data.authorization_url as string,
      reference: result.data.reference as string,
    };
  });

export const verifyDonation = createServerFn({ method: "POST" })
  .validator(z.object({ reference: z.string().min(1) }))
  .handler(async ({ data }) => {
    const { paystackSecretKey } = getServerConfig();
    if (!paystackSecretKey) {
      throw new Error("Donations aren't configured yet.");
    }

    const response = await fetch(
      `${PAYSTACK_API}/transaction/verify/${encodeURIComponent(data.reference)}`,
      { headers: { Authorization: `Bearer ${paystackSecretKey}` } },
    );

    const result = await response.json();
    if (!response.ok || !result.status) {
      throw new Error(result?.message ?? "Could not verify this transaction.");
    }

    const tx = result.data;
    return {
      status: tx.status as "success" | "failed" | "abandoned",
      amountNaira: tx.amount / 100,
      reference: tx.reference as string,
    };
  });
