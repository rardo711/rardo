"use client";

import { useEffect, useRef, useState } from "react";
import { AlertCircle, ArrowRight, ArrowUpRight, Check } from "lucide-react";

const FORM_ENDPOINT = "https://formsubmit.co/ajax/gerardoj2001@outlook.com";

type Status = "idle" | "sending" | "sent" | "error";
type Field = "name" | "contact" | "message";
type Errors = Partial<Record<Field, string>>;

export const SCOPE_OPTIONS = [
  {
    id: "One-Page Business Website",
    code: "01",
    label: "One-Page Business Website",
    sub: "Hours, story, location & tap-to-call",
    prompt:
      "Tell me what your business sells or does, your town/hours, and what customers ask you most on the phone.",
  },
  {
    id: "Ordering & Contact Form System",
    code: "02",
    label: "Ordering & Contact Form System",
    sub: "Customer orders sent straight to your inbox",
    prompt:
      "Tell me what items or services customers order from you, and how you currently take orders (text, phone, DM, paper).",
  },
  {
    id: "Self-Editable Website + Admin Panel",
    code: "03",
    label: "Self-Editable Website + Admin Panel",
    sub: "Update prices, photos & hours yourself",
    prompt:
      "Tell me what changes most often in your business (seasonal items, prices, hours, photos) that you want to edit yourself.",
  },
  {
    id: "Site Inspired by RaeMa's Remedies",
    code: "04",
    label: "Site Inspired by RaeMa's Remedies",
    sub: "Product catalog + inbox checkout + owner panel",
    prompt:
      "I’d like a storefront and direct inbox ordering setup similar to RaeMa’s Remedies. Here is what we make/sell:",
  },
  {
    id: "Site Inspired by Better Than Gold Tallow Co.",
    code: "05",
    label: "Site Inspired by Better Than Gold Tallow Co.",
    sub: "Farm/maker story + product ledger + direct contact",
    prompt:
      "I’d like a one-page brand & product showcase similar to Better Than Gold Tallow Co. Here is our story and product line:",
  },
  {
    id: "Software / Custom Web Application",
    code: "06",
    label: "Software / Custom Web Application",
    sub: "Custom interactive tool or study/business app",
    prompt:
      "Tell me about the custom web tool, directory, or workflow you want to build and who will use it.",
  },
] as const;

const inputCls =
  "w-full min-h-12 rounded-[2px] border border-field bg-paper px-4 py-3 text-base text-ink placeholder:text-ink-mute transition-colors hover:border-ink focus-visible:border-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent aria-[invalid=true]:border-2 aria-[invalid=true]:border-accent-deep";

const labelCls =
  "font-tech text-eyebrow font-semibold uppercase text-ink";

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
  const [status, setStatus] = useState<Status>("idle");
  const [selectedScope, setSelectedScope] = useState<string>(initialScope);
  const [contextBanner, setContextBanner] = useState<string | null>(null);
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Partial<Record<Field, boolean>>>({});
  const formRef = useRef<HTMLFormElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);
  const successRef = useRef<HTMLDivElement>(null);

  // Wire URL query param (?scope=... or ?product=...) and global [data-inquire-product] clicks
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const fromQuery = params.get("scope") ?? params.get("product");
    if (fromQuery) {
      const matched = SCOPE_OPTIONS.find(
        (o) => o.id.toLowerCase() === fromQuery.toLowerCase()
      );
      const val = matched ? matched.id : fromQuery;
      setSelectedScope(val);
      setContextBanner(`Pre-selected from your click: ${val}`);
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
        setSelectedScope(product);
        setContextBanner(`Selected Scope: ${product}`);
        const reduce = window.matchMedia(
          "(prefers-reduced-motion: reduce)"
        ).matches;
        targetSection.scrollIntoView({
          behavior: reduce ? "auto" : "smooth",
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
      <div
        ref={successRef}
        tabIndex={-1}
        role="status"
        className="rounded-[2px] border border-ink bg-surface p-8 sm:p-12 outline-none"
      >
        <p className="font-tech text-xs font-semibold uppercase text-accent-deep">
          DISPATCH CONFIRMED · SCOPE: {selectedScope}
        </p>
        <p className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink">
          Your project brief is in my inbox.
        </p>
        <p className="mt-4 max-w-lg leading-relaxed text-ink-soft">
          I review every inquiry personally in Glennville and will reply within
          one business day with plain-talk answers and next steps for your free
          working mockup.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 inline-flex items-center gap-2 rounded-[2px] border border-ink bg-paper px-4 py-2 font-tech text-xs font-semibold uppercase text-ink hover:bg-wash"
        >
          Send another note
        </button>
      </div>
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
      className="flex flex-col gap-6 rounded-[2px] border border-ink bg-surface p-6 sm:p-8"
    >
      {/* Form Dossier Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-line pb-4">
        <div>
          <p className="font-tech text-xs font-semibold uppercase text-accent-deep">
            FORM NO. 01 · DIRECT PROJECT &amp; MOCKUP BRIEF
          </p>
          <p className="mt-1 text-sm text-ink-soft">
            No toggle gates. Pick what you need and send your note straight to my inbox.
          </p>
        </div>
        <span className="rounded-[2px] border border-line-strong bg-wash px-2.5 py-1 font-tech text-[0.6875rem] font-semibold uppercase tabular-nums text-ink">
          $0 Upfront Mockup
        </span>
      </div>

      {/* Live Contextual Status Banner when triggered by an item CTA */}
      {contextBanner && (
        <div
          role="status"
          aria-live="polite"
          className="flex items-center justify-between gap-3 rounded-[2px] border border-accent bg-wash px-4 py-3 text-xs font-semibold text-ink"
        >
          <span className="flex items-center gap-2">
            <Check size={15} className="shrink-0 text-accent-deep" aria-hidden />
            <span className="font-tech uppercase">{contextBanner}</span>
          </span>
          <button
            type="button"
            onClick={() => setContextBanner(null)}
            className="font-tech text-[0.6875rem] uppercase underline text-ink-soft hover:text-ink"
          >
            Dismiss
          </button>
        </div>
      )}

      {/* Interactive Scope / Product Selector */}
      <fieldset className="flex flex-col gap-2.5">
        <legend className={labelCls}>
          01 · What kind of build are you inquiring about?
        </legend>
        <input type="hidden" name="scope" value={selectedScope} />
        <div className="mt-1 grid gap-2 sm:grid-cols-2">
          {SCOPE_OPTIONS.map((option) => {
            const active = selectedScope === option.id;
            return (
              <button
                key={option.id}
                type="button"
                aria-pressed={active}
                onClick={() => {
                  setSelectedScope(option.id);
                  setContextBanner(`Selected Scope: ${option.label}`);
                }}
                className={`flex flex-col items-start justify-between rounded-[2px] border p-3 text-left transition-colors ${
                  active
                    ? "border-ink bg-ink text-paper"
                    : "border-line-strong bg-paper text-ink hover:border-ink hover:bg-wash/60"
                }`}
              >
                <div className="flex w-full items-center justify-between gap-2">
                  <span
                    className={`font-tech text-[0.6875rem] font-semibold uppercase ${
                      active ? "text-accent" : "text-accent-deep"
                    }`}
                  >
                    SCOPE {option.code}
                  </span>
                  {active && (
                    <span className="font-tech text-[0.625rem] uppercase tracking-wider text-paper/80">
                      SELECTED
                    </span>
                  )}
                </div>
                <span className="mt-1 font-display text-sm font-semibold leading-snug">
                  {option.label}
                </span>
                <span
                  className={`mt-0.5 text-xs ${
                    active ? "text-paper/75" : "text-ink-soft"
                  }`}
                >
                  {option.sub}
                </span>
              </button>
            );
          })}
        </div>
      </fieldset>

      {/* Contact Inputs */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="f-name" className={labelCls}>
            02 · Your Name{" "}
            <span className="font-normal normal-case tracking-normal text-ink-soft">
              (required)
            </span>
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
            03 · Business &amp; Town{" "}
            <span className="font-normal normal-case tracking-normal text-ink-soft">
              (optional)
            </span>
          </label>
          <input
            id="f-business"
            name="business"
            autoComplete="organization"
            enterKeyHint="next"
            placeholder="Doe's Feed & Seed — Glennville, GA"
            className={inputCls}
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="f-contact" className={labelCls}>
          04 · Email or Phone Number{" "}
          <span className="font-normal normal-case tracking-normal text-ink-soft">
            (required)
          </span>
        </label>
        <input
          id="f-contact"
          name="contact"
          required
          autoCapitalize="none"
          spellCheck={false}
          enterKeyHint="next"
          placeholder="you@business.com or (912) 555-0140"
          aria-invalid={errors.contact ? true : undefined}
          aria-describedby={errors.contact ? "f-contact-err" : undefined}
          onBlur={onBlur("contact")}
          onChange={onChange("contact")}
          className={inputCls}
        />
        <FieldError id="f-contact-err" message={errors.contact} />
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <label htmlFor="f-message" className={labelCls}>
            05 · Project Particulars{" "}
            <span className="font-normal normal-case tracking-normal text-ink-soft">
              (required)
            </span>
          </label>
          <span className="font-tech text-[0.6875rem] uppercase text-accent-deep">
            Prompt tailored for: {activeScopeObj.label}
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
          Please complete {errorCount === 1 ? "1 required field" : `${errorCount} required fields`} before sending.
        </p>
      )}
      {status === "error" && (
        <p role="alert" className="text-sm font-medium text-accent-deep">
          Network error sending that brief — please{" "}
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
          className="group inline-flex min-h-13 flex-1 items-center justify-center gap-2 rounded-[2px] border border-ink bg-ink px-7 py-3.5 text-base font-semibold text-paper transition-colors hover:border-accent-deep hover:bg-accent-deep aria-disabled:opacity-60"
        >
          <span>
            {sending
              ? "Dispatching Brief…"
              : `Send Brief · ${activeScopeObj.code}`}
          </span>
          <ArrowRight
            size={18}
            aria-hidden
            className="transition-transform group-hover:translate-x-1"
          />
        </button>
        <a
          href="https://x.com/gerardocasta711"
          target="_blank"
          rel="noreferrer"
          className="group inline-flex min-h-13 items-center justify-center gap-2 rounded-[2px] border border-ink bg-paper px-5 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-wash"
        >
          <span>DM @gerardocasta711</span>
          <span className="sr-only"> on X (opens in a new tab)</span>
          <ArrowUpRight size={16} aria-hidden />
        </a>
      </div>

      <p className="border-t border-line pt-3 font-tech text-xs uppercase text-ink-soft">
        Direct Email:{" "}
        <a
          href="mailto:gerardoj2001@outlook.com"
          className="font-semibold text-ink underline decoration-accent decoration-2 underline-offset-4"
        >
          gerardoj2001@outlook.com
        </a>{" "}
        · Replies within 24 hours · Free mockup before any invoice
      </p>
    </form>
  );
}
