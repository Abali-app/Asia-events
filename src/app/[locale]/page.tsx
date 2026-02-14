import Image from "next/image";
import Link from "next/link";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import HeroParallax from "@/components/HeroParallax";
import HeroBackgroundSlider from "@/components/HeroBackgroundSlider";
import SponsorWallVideo from "@/components/SponsorWallVideo";
import EventHero from "@/components/EventHero";
import { getDictionary } from "@/lib/i18n";
import { buildMetadata } from "@/lib/seo";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  if (locale !== "en" && locale !== "ar") {
    return {};
  }
  const dict = getDictionary(locale);
  return buildMetadata({
    locale,
    pathname: `/${locale}`,
    title: dict.metadata.home.title,
    description: dict.metadata.home.description,
  });
}

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params;
  if (locale !== "en" && locale !== "ar") {
    return null;
  }
  const dict = getDictionary(locale);
  const isEventMode = process.env.NEXT_PUBLIC_EVENT_MODE === "true";


  const brandHero =
    locale === "ar"
      ? {
          title: "أزيا",
          subtitle: "للترفيه الحي",
          line1: "إنتاج موسيقي ضخم قيد الإعداد حالياً،",
          line2: "وفرص الشراكة الاستراتيجية متاحة الآن.",
          cta: "استكشف فرص الشراكة",
        }
      : {
          title: "AZIA",
          subtitle: "Live Entertainment",
          line1: "A major live music production currently in development.",
          line2: "Strategic partnership opportunities now open.",
          cta: "Explore Partnership Opportunities",
        };

  const eventContent =
    locale === "ar"
      ? {
          eventName: "أزيا لايف: الحفل الرئيسي",
          venue: "القاعة الرئيسية",
          city: "الرياض",
          date: "قريباً",
          heroImage: "/brand/hero/crowd.jpg",
          ticketUrl: `/${locale}/contact#contact-form`,
          ticketLabel: "احجز التذاكر",
          overviewTitle: "تفاصيل الحدث",
          overviewText:
            "إنتاج رئيسي ضمن برنامج أزيا المنتقى بعناية على مدار العام. يركز الحدث على تقديم تجربة موسيقية جماهيرية عالية المستوى مع إطار تجاري منظم.",
          eventMeta: "التاريخ: قريباً · المكان: القاعة الرئيسية",
          secondaryCtaLabel: "عرض تفاصيل الحدث",
          ticketsTitle: "التذاكر",
          ticketsText: "الحجز متاح حالياً ضمن دفعات محدودة.",
          ticketsCtaLabel: "احجز التذاكر",
        }
      : {
          eventName: "Azia Live: Flagship Arena Night",
          venue: "Flagship Arena",
          city: "Riyadh",
          date: "Coming Soon",
          heroImage: "/brand/hero/crowd.jpg",
          ticketUrl: `/${locale}/contact#contact-form`,
          ticketLabel: "GET TICKETS",
          overviewTitle: "Event Details",
          overviewText:
            "A flagship arena production within Azia's curated annual slate. The event is structured for premium audience experience and disciplined commercial integration.",
          eventMeta: "Date: Coming Soon · Venue: Flagship Arena",
          secondaryCtaLabel: "View Event Details",
          ticketsTitle: "Tickets",
          ticketsText: "Ticketing is now open in limited release batches.",
          ticketsCtaLabel: "GET TICKETS",
        };

  const operatingModel =
    locale === "ar"
      ? {
          title: "نموذج التشغيل",
          bullets: [
            "برنامج إنتاج سنوي منتقى",
            "تخطيط نطاق واضح لكل إنتاج رئيسي",
            "تنسيق تشغيلي متكامل مع القاعات",
            "تسليم تنفيذي منضبط لكل حدث",
          ],
        }
      : {
          title: "Operating Model",
          bullets: [
            "Curated annual production calendar",
            "Defined scale framework per flagship production",
            "Integrated operational alignment with venues",
            "Disciplined execution delivery across each event",
          ],
        };

  const commercialIntegration =
    locale === "ar"
      ? {
          title: "الدمج التجاري",
          text: "تبني أزيا إطار شراكة واضح يربط بين نطاق الحدث، تموضع الجمهور، ومتطلبات العلامة التجارية ضمن نموذج تسليم قابل للقياس.",
          bullets: ["هيكلة حقوق واضحة", "نقاط ظهور متدرجة", "تنسيق تشغيلي وتجاري متكامل"],
        }
      : {
          title: "Commercial Integration",
          text: "Azia structures partnership frameworks around event scale, audience positioning, and brand requirements within a measurable delivery model.",
          bullets: [
            "Defined rights architecture",
            "Tiered visibility touchpoints",
            "Integrated operational and commercial delivery",
          ],
        };


  const productionStatus =
    locale === "ar"
      ? {
          title: "حالة الإنتاج",
          lines: [
            "تأكيد الفنان في مراحله النهائية.",
            "تم تأمين موقع الحفل.",
            "الإطار التجاري قيد التنفيذ.",
          ],
        }
      : {
          title: "Production Status",
          lines: [
            "Artist confirmation in final stage.",
            "Venue secured.",
            "Commercial framework in place.",
          ],
        };

  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: dict.metadata.home.title,
    url: `https://azia.events/${locale}`,
    inLanguage: locale,
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />

      {isEventMode ? (
        <EventHero
          locale={locale}
          eventName={eventContent.eventName}
          venue={eventContent.venue}
          city={eventContent.city}
          date={eventContent.date}
          heroImage={eventContent.heroImage}
          ticketUrl={eventContent.ticketUrl}
          ticketLabel={eventContent.ticketLabel}
        />
      ) : (
        <section id="hero" className="relative min-h-[90vh] overflow-hidden">
          <div id="hero-bg" className="absolute inset-0">
            <HeroBackgroundSlider />
            <div className="absolute inset-0 bg-black/35" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(200,167,106,0.22),_transparent_60%)]" />
            <div className="pointer-events-none absolute inset-0 hero-sweep" />
            <div className="pointer-events-none absolute inset-0 hero-noise" />
          </div>
          <HeroParallax />
          <div className="relative mx-auto flex min-h-[90vh] w-full max-w-5xl flex-col items-center justify-center gap-6 px-4 pb-12 pt-6 text-center text-white sm:gap-8 sm:px-6 sm:pb-0 sm:pt-0 lg:px-8">
            <div className="absolute inset-0 mx-auto h-[68%] w-[90%] max-w-[42rem] rounded-[48px] bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.65)_0%,_rgba(0,0,0,0.4)_50%,_transparent_75%)] sm:h-[62%]" />
            <div className="relative flex w-full max-w-[44ch] flex-col items-center gap-3">
              <h1 className="hero-title text-balance text-white text-[clamp(2.4rem,4.2vw,4rem)] font-semibold leading-tight">
                <span className="hero-line delay-1">{brandHero.title}</span>
              </h1>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/80">
                <span className="hero-line delay-2">{brandHero.subtitle}</span>
              </p>
              <p className="type-subhead text-measure text-white/90">
                <span className="hero-line delay-3">{brandHero.line1}</span>
              </p>
              <p className="text-sm text-white/80">
                <span className="hero-line delay-3">{brandHero.line2}</span>
              </p>
              <Link
                href={`/${locale}/partnerships`}
                className="btn-primary mt-2 rounded-sm bg-[color:var(--accent)] px-12 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--text)]"
              >
                {brandHero.cta}
              </Link>
            </div>
          </div>
        </section>
      )}

      {isEventMode ? (
        <>
          <Section id="event-overview" title={eventContent.overviewTitle} subtitle={eventContent.overviewText}>
            <div className="divider-top flex flex-col gap-4 pt-6 text-sm text-[color:var(--text-soft)]">
              <p>{eventContent.eventMeta}</p>
              <div>
                <Link
                  href={eventContent.ticketUrl}
                  className="btn-outline rounded-sm border border-[color:var(--border)] px-6 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--text)]"
                >
                  {eventContent.secondaryCtaLabel}
                </Link>
              </div>
            </div>
          </Section>

          <Section id="tickets" title={eventContent.ticketsTitle} subtitle={eventContent.ticketsText}>
            <div className="pt-2">
              <Link
                href={eventContent.ticketUrl}
                className="btn-primary rounded-sm bg-[color:var(--accent)] px-10 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--text)]"
              >
                {eventContent.ticketsCtaLabel}
              </Link>
            </div>
          </Section>
        </>
      ) : null}


      <Section id="production-status" title={productionStatus.title}>
        <ul className="grid gap-4 text-sm text-[color:var(--text-soft)]">
          {productionStatus.lines.map((line) => (
            <li key={line} className="divider-top pt-4">
              {line}
            </li>
          ))}
        </ul>
      </Section>
      <Section id="operating-model" title={operatingModel.title}>
        <ul className="grid gap-4 text-sm text-[color:var(--text-soft)]">
          {operatingModel.bullets.map((item) => (
            <li key={item} className="divider-top pt-4">
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <Section id="commercial-integration" title={commercialIntegration.title} subtitle={commercialIntegration.text}>
        <ul className="grid gap-4 text-sm text-[color:var(--text-soft)]">
          {commercialIntegration.bullets.map((item) => (
            <li key={item} className="divider-top pt-4">
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <Section
        id="sponsor-presence"
        title={dict.home.sponsorPresence.title}
        subtitle={dict.home.sponsorPresence.description}
      >
        <SponsorWallVideo />
      </Section>

      <Section
        id="partnerships"
        eyebrow={dict.home.sponsors.eyebrow}
        title={dict.home.sponsors.title}
        subtitle={dict.home.sponsors.subtitle}
      >
        <div className="grid gap-10 lg:grid-cols-3">
          {dict.home.sponsors.items.map((item) => (
            <article key={item.title} className="divider-top pt-6">
              <h3 className="text-lg font-semibold text-[color:var(--text)]">{item.title}</h3>
              <p className="mt-3 text-sm text-[color:var(--text-soft)]">{item.description}</p>
            </article>
          ))}
        </div>
        <div className="pt-8">
          <Link
            href={`/${locale}/contact#contact-form`}
            className="btn-primary rounded-md bg-[color:var(--accent)] px-10 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--text)]"
          >
            {dict.home.sponsors.cta}
          </Link>
        </div>
      </Section>

      <Section
        id="atmosphere"
        eyebrow={dict.home.atmosphere.title}
        title={dict.home.atmosphere.title}
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="overflow-hidden rounded-3xl border border-[color:var(--border)]">
            <div className="relative aspect-[4/3]">
              <Image
                src="/brand/hero/crowd.jpg"
                alt=""
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
            <div className="px-5 py-4 text-sm text-[color:var(--text-soft)]">
              {dict.home.atmosphere.caption}
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl border border-[color:var(--border)]">
            <div className="relative aspect-[4/3]">
              <Image
                src="/brand/hero/stage-v2.jpg"
                alt=""
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
            <div className="px-5 py-4 text-sm text-[color:var(--text-soft)]">
              {dict.home.atmosphere.caption}
            </div>
          </div>
        </div>
      </Section>

      <section className="section-shell">
        <Reveal>
          <div className="container-shell flex w-full max-w-4xl flex-col items-center gap-5 text-center">
            <p className="text-2xl font-semibold text-[color:var(--text)] sm:text-3xl">
              {dict.home.stayTuned.title}
            </p>
            <div className="text-base font-semibold text-[color:var(--text)] sm:text-lg">
              <p>{dict.home.stayTuned.lines[0]}</p>
              <p>{dict.home.stayTuned.lines[1]}</p>
            </div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--accent)]">
              {dict.home.stayTuned.cta}
            </p>
          </div>
        </Reveal>
      </section>

      <Section eyebrow={dict.home.faq.eyebrow} title={dict.home.faq.title} subtitle={dict.home.faq.subtitle}>
        <div className="grid gap-8 lg:grid-cols-2">
          {dict.home.faq.items.map((item) => (
            <div key={item.q} className="divider-top pt-6">
              <p className="text-base font-semibold text-[color:var(--text)]">{item.q}</p>
              <p className="mt-3 text-sm text-[color:var(--text-soft)]">{item.a}</p>
            </div>
          ))}
        </div>
      </Section>

      {dict.home.microTeaser ? (
        <div className="py-6 text-center text-sm font-semibold text-[color:var(--text-soft)]">
          {dict.home.microTeaser}
        </div>
      ) : null}
    </div>
  );
}
