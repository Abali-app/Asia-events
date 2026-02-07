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

    if (!resendKey || !to || !from) {
      return NextResponse.json({ ok: false, error: "Server env not set" }, { status: 500 });
    }

    const resend = new Resend(resendKey);

    await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `New Lead — ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        phone ? `Phone: ${phone}` : "",
        "",
        "Message:",
        message,
      ].filter(Boolean).join("\n"),
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "Failed" }, { status: 500 });
  }
}
