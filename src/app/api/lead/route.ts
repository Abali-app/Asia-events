import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 });
    }

    const resendKey = process.env.RESEND_API_KEY;
    const to = process.env.LEADS_TO_EMAIL;
    const from = process.env.LEADS_FROM_EMAIL;

    const hasKey = Boolean(resendKey);
    const hasTo = Boolean(to);
    const hasFrom = Boolean(from);

    if (!hasKey || !hasTo || !hasFrom) {
      console.error("lead_env_missing", { hasKey, hasTo, hasFrom });
      return NextResponse.json({ ok: false, error: "env_missing" }, { status: 500 });
    }

    const resend = new Resend(resendKey);
    const toAddress = to as string;
    const fromAddress = from as string;

    try {
      await resend.emails.send({
        from: fromAddress,
        to: toAddress,
        replyTo: email,
        subject: "New Website Lead – Asia Events Group",
        text: [
          `Name: ${name}`,
          `Email: ${email}`,
          phone ? `Phone: ${phone}` : "",
          "",
          "Message:",
          message,
          "",
          "Source: Website contact form",
        ]
          .filter(Boolean)
          .join("\n"),
      });
    } catch {
      return NextResponse.json({ ok: false, error: "resend_failed" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "resend_failed" }, { status: 502 });
  }
}
