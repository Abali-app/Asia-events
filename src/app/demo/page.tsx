import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import PortfolioGridComponent from "@/components/PortfolioGridComponent";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import ProcessTimeline from "@/components/ProcessTimeline";
import CTABanner from "@/components/CTABanner";
import FooterComponent from "@/components/FooterComponent";

export default function DemoPage() {
  // Sample data for LTR (English)
  const heroData = {
    headline: "Crafting Signature Experiences Across the Arab World",
    subheadline:
      "Asia Events Group delivers world-class corporate events, concerts, and celebrations with meticulous planning, premium production, and a luxury guest experience.",
    primaryCta: "Start a Brief",
    secondaryCta: "See Our Work",
  };

  const servicesData = {
    title: "Full-Scope Event Production",
    subtitle: "From concept to flawless execution, we manage every detail.",
    services: [
      {
        title: "Corporate Events",
        description: "Executive summits, gala dinners, product launches, and brand showcases.",
      },
      {
        title: "Concerts & Festivals",
        description: "Large-scale live experiences with stage design, artist management, and crowd flow.",
      },
      {
        title: "Conferences",
        description: "Multi-day programs with registration, speaker support, and broadcast-ready production.",
      },
      {
        title: "Weddings",
        description: "Luxury celebrations with bespoke decor, lighting, and guest journey design.",
      },
      {
        title: "Brand Activations",
        description: "Immersive activations that translate brand identity into unforgettable moments.",
      },
      {
        title: "Staging, Lighting & Sound",
        description: "Premium technical production with precision engineering and crew supervision.",
      },
    ],
  };

  const portfolioData = {
    title: "Portfolio Highlights",
    subtitle: "A curated view of signature productions delivered across the region.",
    items: [
      { title: "Executive Summit Riyadh", type: "Corporate" },
      { title: "Desert Nights Concert", type: "Concert" },
      { title: "Tech Leaders Forum", type: "Conference" },
      { title: "Royal Garden Wedding", type: "Wedding" },
      { title: "Brand Immersion Pavilion", type: "Corporate" },
      { title: "Innovation Week Live", type: "Conference" },
    ],
  };

  const testimonialsData = {
    eyebrow: "Testimonials",
    title: "Client Experiences",
    testimonials: [
      {
        quote:
          "Asia Events Group delivered an extraordinary guest experience with flawless logistics and premium production.",
        name: "Head of Communications",
        company: "Regional Investment Authority",
      },
      {
        quote:
          "Their attention to detail and ability to manage complex stakeholders made our summit a standout.",
        name: "Events Director",
        company: "Global Technology Firm",
      },
      {
        quote:
          "From concept to execution, every element was crafted with precision and luxury in mind.",
        name: "Marketing Director",
        company: "International Brand",
      },
    ],
  };

  const processData = {
    eyebrow: "Process",
    title: "A Proven Production Method",
    steps: [
      { title: "Concept", description: "Strategic vision, creative direction, and experience design." },
      { title: "Planning", description: "Budgets, suppliers, schedules, and risk management." },
      { title: "Production", description: "Technical build, staging, lighting, and rehearsals." },
      { title: "Execution", description: "On-ground delivery, guest flow, and live control room." },
    ],
  };

  const ctaData = {
    title: "Ready to produce your next signature event?",
    subtitle: "Tell us about your vision and we will craft a tailored proposal.",
    primaryCta: "Request a Proposal",
    secondaryCta: "Contact Our Team",
  };

  const footerData = {
    siteName: "Asia Events Group",
    summary:
      "Premium event production across the Arab world. We craft experiences that define brands and captivate audiences.",
    contactTitle: "Contact",
    contactDetails: [
      { label: "Email", value: "hello@asiaeventsgroup.com" },
      { label: "Phone", value: "+971 000 000 000" },
      { label: "Locations", value: "Riyadh, Dubai, Doha, Amman" },
    ],
    socialTitle: "Social",
    socials: [
      { label: "Instagram", href: "#" },
      { label: "LinkedIn", href: "#" },
      { label: "YouTube", href: "#" },
    ],
    quickLinksTitle: "Quick Links",
    quickLinks: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Contact", href: "/contact" },
    ],
    copyright: "© 2026 Asia Events Group. All rights reserved.",
  };

  return (
    <div className="min-h-screen">
      {/* LTR Version */}
      <Hero {...heroData} dir="ltr" />
      <ServicesGrid {...servicesData} dir="ltr" />
      <PortfolioGridComponent {...portfolioData} dir="ltr" />
      <TestimonialsCarousel {...testimonialsData} dir="ltr" />
      <ProcessTimeline {...processData} dir="ltr" />
      <CTABanner {...ctaData} dir="ltr" />
      <FooterComponent {...footerData} dir="ltr" />

      {/* Divider */}
      <div className="my-20 border-t-4 border-[color:var(--gold)]">
        <div className="mx-auto max-w-4xl px-4 py-12 text-center">
          <h2 className="mb-4 text-3xl font-light text-white">RTL Version (Arabic)</h2>
          <p className="text-[color:var(--muted)]">Below is the same content with RTL support</p>
        </div>
      </div>

      {/* RTL Version */}
      <Hero
        headline="صناعة تجارب مميزة عبر العالم العربي"
        subheadline="تقدم مجموعة آسيا للفعاليات فعاليات عالمية المستوى للشركات والحفلات والاحتفالات مع تخطيط دقيق وإنتاج متميز وتجربة فاخرة للضيوف."
        primaryCta="ابدأ موجزًا"
        secondaryCta="شاهد أعمالنا"
        dir="rtl"
      />
      <ServicesGrid
        title="إنتاج شامل للفعاليات"
        subtitle="من المفهوم إلى التنفيذ الخالي من العيوب، نحن ندير كل التفاصيل."
        services={servicesData.services}
        dir="rtl"
      />
      <PortfolioGridComponent {...portfolioData} dir="rtl" />
      <TestimonialsCarousel {...testimonialsData} dir="rtl" />
      <ProcessTimeline {...processData} dir="rtl" />
      <CTABanner
        title="هل أنت مستعد لإنتاج فعاليتك المميزة القادمة؟"
        subtitle="أخبرنا عن رؤيتك وسنقوم بصياغة اقتراح مخصص."
        primaryCta="طلب اقتراح"
        secondaryCta="اتصل بفريقنا"
        dir="rtl"
      />
      <FooterComponent {...footerData} dir="rtl" />
    </div>
  );
}
