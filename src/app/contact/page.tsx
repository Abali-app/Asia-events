"use client";
import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");

    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());

    const res = await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      setStatus("sent");
      e.currentTarget.reset();
      return;
    }

    const data = await res.json().catch(() => null);
    setStatus("error");
    setError(data?.error ?? "Something went wrong");
  }

  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-semibold">צור קשר</h1>
      <p className="mt-2 text-neutral-600">השאר פרטים ונחזור אליך בהקדם.</p>

      <form onSubmit={onSubmit} className="mt-8 space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <input name="name" required placeholder="שם מלא *" className="h-11 rounded-md border px-3" />
          <input name="email" type="email" required placeholder="אימייל *" className="h-11 rounded-md border px-3" />
        </div>

        <input name="phone" placeholder="טלפון" className="h-11 w-full rounded-md border px-3" />

        <textarea name="message" required rows={6} placeholder="הודעה *" className="w-full rounded-md border p-3" />

        <button disabled={status === "sending"} className="h-11 rounded-md bg-black px-5 text-white disabled:opacity-60">
          {status === "sending" ? "שולח..." : "שלח"}
        </button>

        {status === "sent" && <p className="text-sm">✅ נשלח. נדבר בקרוב.</p>}
        {status === "error" && <p className="text-sm text-red-600">❌ {error}</p>}
      </form>
    </main>
  );
}
