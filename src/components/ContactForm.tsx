"use client";

import { useState } from "react";

type ContactFormProps = {
  labels: {
    name: string;
    email: string;
    phone: string;
    message: string;
    submit: string;
    sending: string;
    success: string;
    error: string;
  };
};

export default function ContactForm({ labels }: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");

    const formEl = e.currentTarget;
    const form = new FormData(formEl);
    const payload = Object.fromEntries(form.entries());

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
          <span>{labels.email}</span>
          <input
            name="email"
            type="email"
            required
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
          className="h-11 rounded-full bg-[color:var(--accent)] px-6 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--text)] transition hover:bg-[color:var(--accent-strong)] disabled:opacity-60"
        >
          {status === "sending" ? labels.sending : labels.submit}
        </button>
        {status === "sent" ? <p className="text-sm text-[color:var(--accent)]">{labels.success}</p> : null}
        {status === "error" ? <p className="text-sm text-red-400">{error}</p> : null}
      </div>
    </form>
  );
}
