"use client";

import { useEffect, useRef, useState } from "react";
import { AlertCircle, ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

const FORM_ENDPOINT = "https://formsubmit.co/ajax/gerardoj2001@outlook.com";

type Status = "idle" | "sending" | "sent" | "error";
type Field = "name" | "contact" | "message";
type Errors = Partial<Record<Field, string>>;

const EASE = [0.16, 1, 0.3, 1] as const;

export const SCOPE_OPTIONS = [
  {
    id: "One-Page Business Website",
    label: "One-Page Business Website",
    sub: "Hours, story, location & tap-to-call",
    prompt:
      "Tell me what your business does, your town and hours, and what customers ask you most on the phone.",
  },
  {
    id: "Ordering & Contact Form System",
    label: "Ordering & Contact System",
    sub: "Customer orders sent straight to your inbox",
    prompt:
      "Tell me what items or services customers order from you, and how you currently take orders (phone, text, DM).",
  },
  {
    id: "Self-Editable Website + Admin Panel",
    label: "Self-Editable Site",
    sub: "Update prices, photos & hours yourself",
    prompt:
      "Tell me what changes most often in your shop (seasonal items, prices, hours, photos) that you'd like to edit on your own.",
  },
  {
    id: "Site Inspired by RaeMa's Remedies",
    label: "Like RaeMa’s Remedies",
    sub: "Product catalog + inbox orders + edit panel",
    prompt:
      "I’d love a storefront and inbox ordering setup similar to RaeMa’s Remedies. Here is what we make or sell:",
  },
  {
    id: "Site Inspired by Better Than Gold Tallow Co.",
    label: "Like Better Than Gold",
    sub: "Farm/maker story + product showcase",
    prompt:
      "I’d love a one-page brand & product showcase similar to Better Than Gold Tallow Co. Here is our story and what we offer:",
  },
  {
    id: "Software / Custom Web Application",
    label: "Custom Project / Not Sure Yet",
    sub: "Plain-talk advice & free mockup",
    prompt:
      "Tell me a little about your business or idea — even a sentence or two is plenty to get started.",
  },
] as const;

const inputCls =
  "w-full min-h-12 rounded-xl border border-line-strong bg-paper/70 px-4 py-3 text-base text-ink placeholder:text-ink-mute transition-all duration-200 hover:border-field focus:bg-surface focus-visible:border-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent aria-[invalid=true]:border-2 aria-[invalid=true]:border-accent-deep";

const labelCls = "text-sm font-semibold text-ink";

const FIELD_ORDER: Field[] = ["name", "contact", "message"];

function validate(field: Field, value: string): string | undefined {
  const v = value.trim();
  if (field === "name") {
    return v ? undefined : "Please add your name.";
  }
  if (field === "contact") {
    if (!v) return "Add an email or phone number so I can reply.";
    const looksEmail = /^\S+@\S+\.\S+$/.test(v);
    const looksPhone = v.replace(/\D/g, "").length >= 7;
    return looksEmail || looksPhone
      ? undefined
      : "That doesn't look like an email or phone number — please check it.";
  }
  return v
    ? undefined
    : "Tell me a little about your business — a sentence or two is plenty.";
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p
      id={id}
      className="flex items-start gap-1.5 text-sm font-medium text-accent-deep"
    >
      <AlertCircle size={16} aria-hidden className="mt-0.5 shrink-0" />
      {message}
    </p>
  );
}

export default function ContactForm({
  initialScope = "One-Page Business Website",
}: {
  initialScope?: string;
}) {
  const reduce = useReducedMotion();
  const [status, setStatus] = useState<Status>("idle");
  const [selectedScope, setSelectedScope] = useState<string>(initialScope);
  const [contextBanner, setContextBanner] = useState<string | null>(null);
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Partial<Record<Field, boolean>>>({});
  const formRef = useRef<HTMLFormElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);
  const successRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const fromQuery = params.get("scope") ?? params.get("product");
    if (fromQuery) {
      const matched = SCOPE_OPTIONS.find(
        (o) => o.id.toLowerCase() === fromQuery.toLowerCase()
      );
      const val = matched ? matched.id : fromQuery;
      setSelectedScope(val);
      setContextBanner(`Selected: ${matched ? matched.label : val}`);
    }

    function handleInquireClick(e: MouseEvent) {
      const trigger = (e.target as Element | null)?.closest?.(
        "[data-inquire-product]"
      ) as HTMLElement | null;
      if (!trigger) return;
      const product = trigger.getAttribute("data-inquire-product");
      if (!product) return;

      const targetSection =
        document.getElementById("inquire") ??
        document.getElementById("contact-form");
      if (targetSection) {
        e.preventDefault();
        const matched = SCOPE_OPTIONS.find((o) => o.id === product);
        setSelectedScope(product);
        setContextBanner(
          `Selected: ${matched ? matched.label : product}`
        );
        const prefersReduced = window.matchMedia(
          "(prefers-reduced-motion: reduce)"
        ).matches;
        targetSection.scrollIntoView({
          behavior: prefersReduced ? "auto" : "smooth",
          block: "start",
        });
        window.setTimeout(() => {
          nameInputRef.current?.focus({ preventScroll: true });
        }, 450);
      }
    }

    document.addEventListener("click", handleInquireClick);
    return () => document.removeEventListener("click", handleInquireClick);
  }, []);

  const activeScopeObj =
    SCOPE_OPTIONS.find((o) => o.id === selectedScope) ?? SCOPE_OPTIONS[0];

  function checkField(field: Field, value: string) {
    setErrors((prev) => ({ ...prev, [field]: validate(field, value) }));
  }

  function onBlur(field: Field) {
    return (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setTouched((t) => ({ ...t, [field]: true }));
      checkField(field, e.currentTarget.value);
    };
  }

  function onChange(field: Field) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      if (touched[field] || errors[field]) {
        checkField(field, e.currentTarget.value);
      }
    };
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;
    const data = new FormData(e.currentTarget);

    const next: Errors = {};
    for (const f of FIELD_ORDER) {
      const msg = validate(f, String(data.get(f) ?? ""));
      if (msg) next[f] = msg;
    }
    setErrors(next);
    setTouched({ name: true, contact: true, message: true });
    const invalid = FIELD_ORDER.filter((f) => next[f]);
    if (invalid.length > 0) {
      formRef.current
        ?.querySelector<HTMLElement>(`[name="${invalid[0]}"]`)
        ?.focus();
      return;
    }

    if (data.get("_honey")) {
      setStatus("sent");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `New project inquiry (${selectedScope}) — Gerardo Castaneda`,
          _honey: "",
          scope: selectedScope,
          name: data.get("name"),
          business: data.get("business"),
          contact: data.get("contact"),
          message: data.get("message"),
        }),
      });
      if (!res.ok) throw new Error("send failed");
      setStatus("sent");
      requestAnimationFrame(() => successRef.current?.focus());
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <motion.div
        ref={successRef}
        tabIndex={-1}
        role="status"
        initial={reduce ? false : { opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: EASE }}
        className="card-editorial rounded-2xl p-8 sm:p-12 outline-none"
      >
        <span className="inline-flex items-center gap-1.5 rounded-lg bg-wash px-3.5 py-1.5 font-tech text-xs font-medium uppercase text-accent-deep">
          <Check size={14} aria-hidden />
          Message Received
        </span>
        <p className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink">
          Got it — thank you.
        </p>
        <p className="mt-3 max-w-lg leading-relaxed text-ink-soft">
          Your note landed straight in my inbox in Glennville. I&apos;ll read it
          personally and get back to you within a day with plain-talk next steps
          for your free mockup.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-7 inline-flex min-h-11 items-center gap-2 rounded-xl border border-line-strong bg-paper px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-ink hover:bg-wash"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  const errorCount = FIELD_ORDER.filter((f) => errors[f]).length;
  const sending = status === "sending";

  return (
    <form
      id="contact-form"
      ref={formRef}
      onSubmit={onSubmit}
      noValidate
      className="card-editorial flex flex-col gap-6 rounded-2xl p-6 sm:p-9"
    >
      {/* Smooth Contextual Banner when triggered from a card */}
      <AnimatePresence>
        {contextBanner && (
          <motion.div
            role="status"
            aria-live="polite"
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: -6 }}
            transition={{ duration: 0.25, ease: EASE }}
            className="flex items-center justify-between gap-3 rounded-xl border border-accent/35 bg-wash/90 px-4 py-3 text-xs font-medium text-ink"
          >
            <span className="flex items-center gap-2">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-ink text-paper">
                <Check size={12} aria-hidden />
              </span>
              <span>{contextBanner}</span>
            </span>
            <button
              type="button"
              onClick={() => setContextBanner(null)}
              className="text-xs text-ink-soft underline-offset-2 hover:text-ink hover:underline"
            >
              Clear
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Tactile Scope / Project Selector */}
      <fieldset className="flex flex-col gap-3">
        <legend className={labelCls}>
          What would you like to build?{" "}
          <span className="font-normal text-ink-mute">(pick one)</span>
        </legend>
        <input type="hidden" name="scope" value={selectedScope} />
        <div className="grid gap-2.5 sm:grid-cols-2">
          {SCOPE_OPTIONS.map((option) => {
            const active = selectedScope === option.id;
            return (
              <button
                key={option.id}
                type="button"
                aria-pressed={active}
                onClick={() => {
                  setSelectedScope(option.id);
                  setContextBanner(null);
                }}
                className={`group relative flex h-full flex-col items-start justify-between rounded-xl border p-3.5 text-left transition-all duration-200 ${
                  active
                    ? "border-accent bg-wash/90 shadow-xs"
                    : "border-line bg-paper/55 hover:border-line-strong hover:bg-wash/40"
                }`}
              >
                <div className="flex w-full items-center justify-between gap-2">
                  <span className="font-display text-sm font-semibold text-ink">
                    {option.label}
                  </span>
                  <span
                    aria-hidden
                    className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border transition-colors ${
                      active
                        ? "border-ink bg-ink text-paper"
                        : "border-line-strong bg-surface"
                    }`}
                  >
                    {active && <Check size={10} strokeWidth={3} />}
                  </span>
                </div>
                <span className="mt-1 text-xs text-ink-soft">{option.sub}</span>
              </button>
            );
          })}
        </div>
      </fieldset>

      {/* Name & Business */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="f-name" className={labelCls}>
            Your name{" "}
            <span className="font-normal text-ink-mute">(required)</span>
          </label>
          <input
            ref={nameInputRef}
            id="f-name"
            name="name"
            required
            autoComplete="name"
            autoCapitalize="words"
            enterKeyHint="next"
            placeholder="Jane Doe"
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={errors.name ? "f-name-err" : undefined}
            onBlur={onBlur("name")}
            onChange={onChange("name")}
            className={inputCls}
          />
          <FieldError id="f-name-err" message={errors.name} />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="f-business" className={labelCls}>
            Business &amp; town{" "}
            <span className="font-normal text-ink-mute">(optional)</span>
          </label>
          <input
            id="f-business"
            name="business"
            autoComplete="organization"
            enterKeyHint="next"
            placeholder="Doe’s Bakery · Glennville, GA"
            className={inputCls}
          />
        </div>
      </div>

      {/* Contact Info */}
      <div className="flex flex-col gap-2">
        <label htmlFor="f-contact" className={labelCls}>
          Email or phone number{" "}
          <span className="font-normal text-ink-mute">(required)</span>
        </label>
        <input
          id="f-contact"
          name="contact"
          required
          autoCapitalize="none"
          spellCheck={false}
          enterKeyHint="next"
          placeholder="jane@bakery.com or (912) 555-0142"
          aria-invalid={errors.contact ? true : undefined}
          aria-describedby={errors.contact ? "f-contact-err" : undefined}
          onBlur={onBlur("contact")}
          onChange={onChange("contact")}
          className={inputCls}
        />
        <FieldError id="f-contact-err" message={errors.contact} />
      </div>

      {/* Project Description */}
      <div className="flex flex-col gap-2">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <label htmlFor="f-message" className={labelCls}>
            About your business{" "}
            <span className="font-normal text-ink-mute">(required)</span>
          </label>
          <span className="font-display text-xs italic text-accent-deep">
            {activeScopeObj.label}
          </span>
        </div>
        <textarea
          id="f-message"
          name="message"
          required
          rows={4}
          placeholder={activeScopeObj.prompt}
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? "f-message-err" : undefined}
          onBlur={onBlur("message")}
          onChange={onChange("message")}
          className={`${inputCls} resize-y`}
        />
        <FieldError id="f-message-err" message={errors.message} />
      </div>

      {/* Honeypot */}
      <input
        type="text"
        name="_honey"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="sr-only"
      />

      {errorCount > 0 && (
        <p role="alert" className="text-sm font-medium text-accent-deep">
          Please check {errorCount === 1 ? "1 field" : `${errorCount} fields`} above before sending.
        </p>
      )}
      {status === "error" && (
        <p role="alert" className="text-sm font-medium text-accent-deep">
          Something went wrong sending that — please{" "}
          <a
            href="mailto:gerardoj2001@outlook.com"
            className="underline underline-offset-2"
          >
            email gerardoj2001@outlook.com
          </a>{" "}
          or{" "}
          <a
            href="https://x.com/gerardocasta711"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-2"
          >
            message me on X
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
          .
        </p>
      )}

      <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center">
        <button
          type="submit"
          aria-disabled={sending}
          aria-busy={sending}
          className="group inline-flex min-h-13 flex-1 items-center justify-center gap-2 rounded-xl bg-ink px-7 py-3.5 text-base font-semibold text-paper shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-deep active:translate-y-0 aria-disabled:opacity-60"
        >
          <span>{sending ? "Sending your note…" : "Send message"}</span>
          <ArrowRight
            size={18}
            aria-hidden
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </button>
        <a
          href="https://x.com/gerardocasta711"
          target="_blank"
          rel="noreferrer"
          className="group inline-flex min-h-13 items-center justify-center gap-2 rounded-xl border border-line-strong bg-paper px-5 py-3.5 text-sm font-semibold text-ink transition-colors duration-300 hover:border-ink hover:bg-wash"
        >
          <span>Message on X</span>
          <span className="sr-only"> (opens in a new tab)</span>
          <ArrowUpRight
            size={16}
            aria-hidden
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </a>
      </div>

      <p className="text-center text-xs text-ink-soft sm:text-left">
        Or email directly at{" "}
        <a
          href="mailto:gerardoj2001@outlook.com"
          className="font-semibold text-ink underline decoration-accent/70 decoration-1 underline-offset-4 transition-colors hover:text-accent-deep"
        >
          gerardoj2001@outlook.com
        </a>{" "}
        — English &amp; Español welcome. I reply within a day, and the mockup is
        always free.
      </p>
    </form>
  );
}
