"use client";

import { useState } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";

// Form submissions land here via FormSubmit (free). First submission sends
// an activation email to this address — click it once and the form goes live.
const FORM_ENDPOINT = "https://formsubmit.co/ajax/gerardoj2001@outlook.com";

type Status = "idle" | "sending" | "sent" | "error";

const inputCls =
  "w-full border border-line bg-paper px-4 py-3 text-base text-ink placeholder:text-ink-soft/60 transition-colors focus:border-accent focus:outline-none";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    const data = new FormData(e.currentTarget);
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: "New project inquiry — rardo site",
          name: data.get("name"),
          business: data.get("business"),
          contact: data.get("contact"),
          message: data.get("message"),
        }),
      });
      if (!res.ok) throw new Error("send failed");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="border border-line bg-wash px-8 py-14 text-center">
        <p className="font-display text-3xl font-semibold tracking-tight">
          Got it.
        </p>
        <p className="mx-auto mt-4 max-w-md leading-relaxed text-ink-soft">
          Your message landed in my inbox. I&apos;ll reply within a day —
          usually faster.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-2">
          <span className="font-tech text-[11px] uppercase tracking-[0.2em] text-ink-soft">
            Your name *
          </span>
          <input name="name" required placeholder="Jane Doe" className={inputCls} />
        </label>
        <label className="flex flex-col gap-2">
          <span className="font-tech text-[11px] uppercase tracking-[0.2em] text-ink-soft">
            Business name
          </span>
          <input name="business" placeholder="Doe's Bakery" className={inputCls} />
        </label>
      </div>
      <label className="flex flex-col gap-2">
        <span className="font-tech text-[11px] uppercase tracking-[0.2em] text-ink-soft">
          Email or phone *
        </span>
        <input
          name="contact"
          required
          placeholder="Where do I reply?"
          className={inputCls}
        />
      </label>
      <label className="flex flex-col gap-2">
        <span className="font-tech text-[11px] uppercase tracking-[0.2em] text-ink-soft">
          About your project *
        </span>
        <textarea
          name="message"
          required
          rows={6}
          placeholder="What do you do, who is it for, and what should your website do for you?"
          className={`${inputCls} resize-y`}
        />
      </label>
      {status === "error" && (
        <p className="text-sm font-medium text-accent-deep">
          Something went wrong sending that —{" "}
          <a
            href="https://x.com/gerardocasta711"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-2"
          >
            message me on X instead
          </a>
          .
        </p>
      )}
      <button
        type="submit"
        disabled={status === "sending"}
        className="group mt-2 inline-flex items-center justify-center gap-2 bg-ink px-8 py-4 text-base font-semibold text-paper transition-colors hover:bg-accent-deep disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send it"}
        <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
      </button>
      <a
        href="https://x.com/gerardocasta711"
        target="_blank"
        rel="noreferrer"
        className="group inline-flex items-center justify-center gap-2 border border-ink px-8 py-4 text-base font-semibold transition-colors hover:bg-ink hover:text-paper"
      >
        Or message me on X
        <ArrowUpRight size={18} />
      </a>
    </form>
  );
}
