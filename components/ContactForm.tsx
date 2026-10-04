"use client";

import { useRef, useState } from "react";
import { AlertCircle, ArrowRight, ArrowUpRight } from "lucide-react";

// Form submissions land here via FormSubmit (free). First submission sends
// an activation email to this address — click it once and the form goes live.
const FORM_ENDPOINT = "https://formsubmit.co/ajax/gerardoj2001@outlook.com";

type Status = "idle" | "sending" | "sent" | "error";
type Field = "name" | "contact" | "message";
type Errors = Partial<Record<Field, string>>;

const inputCls =
  "w-full min-h-12 border border-field bg-paper px-4 py-3 text-base text-ink placeholder:text-ink-mute transition-colors hover:border-ink-soft focus-visible:border-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent aria-[invalid=true]:border-2 aria-[invalid=true]:border-accent-deep";

const labelCls =
  "font-tech text-eyebrow uppercase text-ink-soft";

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
  return v ? undefined : "Tell me a little about your project — a sentence is enough.";
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

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Partial<Record<Field, boolean>>>({});
  const formRef = useRef<HTMLFormElement>(null);
  const successRef = useRef<HTMLDivElement>(null);

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
      // Once a field has shown an error (or been visited), keep it honest as they type.
      if (touched[field] || errors[field]) checkField(field, e.currentTarget.value);
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
      // Honeypot filled: pretend success, send nothing.
      setStatus("sent");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: "New project inquiry — rardo site",
          _honey: "",
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
        className="border border-line bg-wash px-8 py-14 text-center outline-none"
      >
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

  const errorCount = FIELD_ORDER.filter((f) => errors[f]).length;
  const sending = status === "sending";

  return (
    <form
      ref={formRef}
      onSubmit={onSubmit}
      noValidate
      className="flex flex-col gap-5"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="f-name" className={labelCls}>
            Your name <span className="normal-case tracking-normal">(required)</span>
          </label>
          <input
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
            Business name <span className="normal-case tracking-normal">(optional)</span>
          </label>
          <input
            id="f-business"
            name="business"
            autoComplete="organization"
            enterKeyHint="next"
            placeholder="Doe's Bakery"
            className={inputCls}
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="f-contact" className={labelCls}>
          Email or phone <span className="normal-case tracking-normal">(required)</span>
        </label>
        <input
          id="f-contact"
          name="contact"
          required
          autoCapitalize="none"
          spellCheck={false}
          enterKeyHint="next"
          placeholder="Where do I reply?"
          aria-invalid={errors.contact ? true : undefined}
          aria-describedby={errors.contact ? "f-contact-err" : undefined}
          onBlur={onBlur("contact")}
          onChange={onChange("contact")}
          className={inputCls}
        />
        <FieldError id="f-contact-err" message={errors.contact} />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="f-message" className={labelCls}>
          About your project <span className="normal-case tracking-normal">(required)</span>
        </label>
        <textarea
          id="f-message"
          name="message"
          required
          rows={5}
          placeholder="What do you do, who is it for, and what should your website do for you?"
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? "f-message-err" : undefined}
          onBlur={onBlur("message")}
          onChange={onChange("message")}
          className={`${inputCls} resize-y`}
        />
        <FieldError id="f-message-err" message={errors.message} />
      </div>

      {/* Honeypot: real people never see or fill this. */}
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
          Please fix {errorCount === 1 ? "1 field" : `${errorCount} fields`} to send.
        </p>
      )}
      {status === "error" && (
        <p role="alert" className="text-sm font-medium text-accent-deep">
          Something went wrong sending that —{" "}
          <a
            href="https://x.com/gerardocasta711"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-2"
          >
            message me on X instead
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
          .
        </p>
      )}
      <button
        type="submit"
        aria-disabled={sending}
        aria-busy={sending}
        className="group mt-2 inline-flex min-h-14 w-full items-center justify-center gap-2 border border-transparent bg-ink px-8 py-4 text-base font-semibold text-paper transition-all hover:bg-accent-deep active:scale-[0.98] aria-disabled:opacity-60"
      >
        {sending ? "Sending…" : "Send it"}
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
        className="group inline-flex min-h-12 items-center justify-center gap-2 border border-ink px-8 py-3 text-base font-semibold transition-all hover:bg-ink hover:text-paper active:scale-[0.98]"
      >
        Or message me on X
        <span className="sr-only"> (opens in a new tab)</span>
        <ArrowUpRight size={18} aria-hidden />
      </a>
      <p className="text-center text-sm text-ink-soft">
        Or email{" "}
        <a
          href="mailto:gerardoj2001@outlook.com"
          className="inline-flex min-h-11 items-center font-medium text-ink underline decoration-accent decoration-2 underline-offset-4"
        >
          gerardoj2001@outlook.com
        </a>
      </p>
    </form>
  );
}
