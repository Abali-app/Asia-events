# Asia Events Group Website

Premium bilingual corporate website for Asia Events Group (English + Arabic) built with Next.js App Router, TypeScript, and Tailwind.

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000/en` or `http://localhost:3000/ar`.

## Environment Variables

Copy `.env.example` into `.env.local` and fill in values:

- `RESEND_API_KEY`
- `LEADS_TO_EMAIL` (currently `aisar.daghash@gmail.com`)
- `LEADS_FROM_EMAIL`
- `NEXT_PUBLIC_SITE_URL` (set to `https://azia.events`)

## Build

```bash
npm run build
npm run start
```

## Routes

- `/en`, `/en/about`, `/en/services`, `/en/portfolio`, `/en/contact`
- `/ar`, `/ar/about`, `/ar/services`, `/ar/portfolio`, `/ar/contact`

## Notes

- No database is used.
- Leads are sent via `/api/lead` using Resend.
- Canonical domain is `https://azia.events`.

## Cloudflare + Vercel Checklist

- DNS: point apex `azia.events` and `www` to Vercel (CNAME or A/ALIAS per Vercel instructions).
- SSL/TLS: use Full (strict) in Cloudflare, keep Vercel certificates active.
- Security: enable WAF + Bot Fight Mode as needed.
- Force HTTPS: handled by Vercel + redirect in `next.config.ts`.

## Email DNS (Production Setup)

If using a professional mail provider, add their records plus the following baseline protections:

- MX: provider-specific.
- SPF: `v=spf1 include:PROVIDER-SEND -all`
- DKIM: provider-specific (usually `selector._domainkey` TXT).
- DMARC: `v=DMARC1; p=quarantine; rua=mailto:postmaster@azia.events; ruf=mailto:postmaster@azia.events; fo=1`

Replace `PROVIDER-SEND` and add provider-specific values from your email service dashboard.
