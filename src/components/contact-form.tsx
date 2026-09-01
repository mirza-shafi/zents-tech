"use client";

import { useState } from "react";
import { Loader2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { contact } from "@/lib/site-data";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage(null);

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-start gap-3 rounded-lg border border-primary/40 bg-primary/10 p-6">
        <CheckCircle2 className="size-6 text-primary" />
        <h3 className="font-display text-lg font-bold">Message received.</h3>
        <p className="text-sm text-muted-foreground">
          We reply to every inquiry personally, usually within one business
          day. If it&rsquo;s urgent, message us on{" "}
          <a
            href={contact.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline underline-offset-2"
          >
            WhatsApp
          </a>{" "}
          or email{" "}
          <a href={`mailto:${contact.email}`} className="text-primary underline underline-offset-2">
            {contact.email}
          </a>{" "}
          directly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" required autoComplete="name" />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" required autoComplete="email" />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="company">Company (optional)</Label>
        <Input id="company" name="company" autoComplete="organization" />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="message">
          What&rsquo;s manual today that shouldn&rsquo;t be?
        </Label>
        <Textarea id="message" name="message" rows={5} required />
      </div>

      {/* Honeypot: hidden from real visitors, catches basic bots that auto-fill every field. */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-destructive">{errorMessage}</p>
      )}

      <Button type="submit" size="lg" disabled={status === "submitting"} className="w-fit">
        {status === "submitting" && <Loader2 className="size-4 animate-spin" />}
        Send
      </Button>
    </form>
  );
}
