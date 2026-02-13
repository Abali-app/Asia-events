"use client";

import { useEffect, useState } from "react";

type ContactFormProps = {
  labels: {
    name: string;
    company: string;
    role: string;
    email: string;
    phone: string;
    message: string;
    submit: string;
    copyEmail: string;
    copied: string;
    sending: string;
    success: string;
    error: string;
  };
  locale: "en" | "ar";
  source: "contact" | "partnerships";
  context?: "company_profile" | "partnerships";
};

export default function ContactForm({ labels, locale, source, context }: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);
  const emailAddress = "partnerships@azia.events";
  const [localContext, setLocalContext] = useState<ContactFormProps["context"]>(context);

  useEffect(() => {
    if (context) {
      setLocalContext(context);
      return;
    }
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const queryContext = params.get("context");
    if (queryContext === "company_profile") {
      setLocalContext("company_profile");
    }
  }, [context]);
  async function onCopyEmail() {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");

    const formEl = e.currentTarget;
    const form = new FormData(formEl);
    const payload = {
      ...Object.fromEntries(form.entries()),
      locale,
      source,
      context: localContext,
    };

    const res = await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      setStatus("sent");
      formEl.reset();
      return;
    }

    const data = await res.json().catch(() => null);
    if (data?.error) {
      console.log("lead_error", data.error);
    }
    setStatus("error");
    setError(labels.error);
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <label className="hidden">
        <span>Company website</span>
        <input name="company_website" tabIndex={-1} autoComplete="off" />
      </label>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm text-[color:var(--text-soft)]">
          <span>{labels.name}</span>
          <input
            name="name"
            required
            className="h-11 rounded-md border border-[color:var(--border)] bg-[color:var(--surface)] px-3 text-[color:var(--text)] outline-none transition focus:border-[color:var(--accent)]"
          />
        </label>
        <label className="flex flex-col gap-2 text-sm text-[color:var(--text-soft)]">
          <span>{labels.company}</span>
          <input
            name="company"
            className="h-11 rounded-md border border-[color:var(--border)] bg-[color:var(--surface)] px-3 text-[color:var(--text)] outline-none transition focus:border-[color:var(--accent)]"
          />
        </label>
        <label className="flex flex-col gap-2 text-sm text-[color:var(--text-soft)]">
          <span>{labels.email}</span>
          <input
            name="email"
            type="email"
            required
            className="h-11 rounded-md border border-[color:var(--border)] bg-[color:var(--surface)] px-3 text-[color:var(--text)] outline-none transition focus:border-[color:var(--accent)]"
          />
        </label>
        <label className="flex flex-col gap-2 text-sm text-[color:var(--text-soft)]">
          <span>{labels.role}</span>
          <input
            name="role"
            className="h-11 rounded-md border border-[color:var(--border)] bg-[color:var(--surface)] px-3 text-[color:var(--text)] outline-none transition focus:border-[color:var(--accent)]"
          />
        </label>
      </div>
      <label className="flex flex-col gap-2 text-sm text-[color:var(--text-soft)]">
        <span>{labels.phone}</span>
        <input
          name="phone"
          className="h-11 rounded-md border border-[color:var(--border)] bg-[color:var(--surface)] px-3 text-[color:var(--text)] outline-none transition focus:border-[color:var(--accent)]"
        />
      </label>
      <label className="flex flex-col gap-2 text-sm text-[color:var(--text-soft)]">
        <span>{labels.message}</span>
        <textarea
          name="message"
          required
          rows={6}
          className="rounded-md border border-[color:var(--border)] bg-[color:var(--surface)] p-3 text-[color:var(--text)] outline-none transition focus:border-[color:var(--accent)]"
        />
      </label>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          disabled={status === "sending"}
          className="btn-primary h-11 rounded-full bg-[color:var(--accent)] px-6 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--text)] disabled:opacity-60"
        >
          {status === "sending" ? labels.sending : labels.submit}
        </button>
        <div className="flex flex-wrap items-center gap-3 text-xs text-[color:var(--text-soft)]">
          <a
            href={`mailto:${emailAddress}`}
            className="btn-outline rounded-full border border-[color:var(--border)] px-4 py-2 uppercase tracking-[0.2em] text-[color:var(--text)]"
          >
            {emailAddress}
          </a>
          <button
            type="button"
            onClick={onCopyEmail}
            className="btn-outline rounded-full border border-[color:var(--border)] px-4 py-2 uppercase tracking-[0.2em] text-[color:var(--text)]"
            aria-label={labels.copyEmail}
          >
            {copied ? labels.copied : labels.copyEmail}
          </button>
        </div>
        {status === "sent" ? <p className="text-sm text-[color:var(--accent)]">{labels.success}</p> : null}
        {status === "error" ? <p className="text-sm text-red-400">{error}</p> : null}
      </div>
    </form>
  );
}
