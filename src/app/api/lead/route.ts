import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const rateLimitWindowMs = 60_000;
const rateLimitMax = 3;
const rateMap = new Map<string, { count: number; ts: number }>();
const expectedMailDomain = "azia.events";

function getClientIp(req: Request) {
  const forwarded = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  return forwarded || req.headers.get("x-real-ip") || "unknown";
}

function isRateLimited(ip: string) {
  const now = Date.now();
  const entry = rateMap.get(ip);
  if (!entry || now - entry.ts > rateLimitWindowMs) {
    rateMap.set(ip, { count: 1, ts: now });
    return false;
  }
  entry.count += 1;
  if (entry.count > rateLimitMax) {
    return true;
  }
  return false;
}

function getEmailDomain(value: string) {
  const parts = value.split("@");
  return parts.length === 2 ? parts[1].toLowerCase() : "";
}

function getErrorDetails(error: unknown) {
  if (error instanceof Error) {
    const asAny = error as Error & {
      statusCode?: number;
      code?: string;
      response?: unknown;
    };
    return {
      name: asAny.name,
      message: asAny.message,
      code: asAny.code,
      statusCode: asAny.statusCode,
      response: asAny.response,
    };
  }
  return { unknown: error };
}

export async function POST(req: Request) {
  try {
    const { name, email, phone, message, company, role, company_website, locale, source } =
      await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 });
    }

    if (company_website) {
      return NextResponse.json({ ok: false, error: "spam" }, { status: 400 });
    }

    const ip = getClientIp(req);
    if (isRateLimited(ip)) {
      return NextResponse.json({ ok: false, error: "rate_limited" }, { status: 429 });
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
    const toDomain = getEmailDomain(toAddress);
    const fromDomain = getEmailDomain(fromAddress);
    const localeValue = locale === "ar" || locale === "en" ? locale : "unknown";
    const sourceValue = source === "contact" || source === "partnerships" ? source : "unknown";
    const subject =
      sourceValue === "partnerships"
        ? "Partnership Inquiry - Asia Events Group"
        : "New Website Lead - Asia Events Group";

    console.log("lead_resend_debug", {
      runtime,
      expectedMailDomain,
      fromAddress,
      toAddress,
      fromDomain,
      toDomain,
      fromUsesExpectedDomain: fromDomain === expectedMailDomain,
      toUsesExpectedDomain: toDomain === expectedMailDomain,
    });

    try {
      const resendResponse = await resend.emails.send({
        from: fromAddress,
        to: toAddress,
        replyTo: email,
        subject,
        text: [
          `Name: ${name}`,
          `Email: ${email}`,
          phone ? `Phone: ${phone}` : "",
          company ? `Company: ${company}` : "",
          role ? `Role: ${role}` : "",
          "",
          "Message:",
          message,
          "",
          `Locale: ${localeValue}`,
          `Source: ${sourceValue}`,
          "",
          "Source: Website contact form",
        ]
          .filter(Boolean)
          .join("\n"),
      });

      console.log("lead_resend_send_ok", {
        data: resendResponse?.data,
        error: resendResponse?.error,
      });
      if (resendResponse?.error) {
        console.error("lead_resend_send_failed", resendResponse.error);
        return NextResponse.json({ ok: false, error: "resend_failed" }, { status: 502 });
      }
    } catch (error) {
      console.error("lead_resend_send_failed", getErrorDetails(error));
      return NextResponse.json({ ok: false, error: "resend_failed" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("lead_route_unhandled_error", getErrorDetails(error));
    return NextResponse.json({ ok: false, error: "resend_failed" }, { status: 502 });
  }
}
