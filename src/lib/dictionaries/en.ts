export const en = {
  locale: "en",
  direction: "ltr",
  siteName: "Asia Events Group",
  nav: {
    home: "Home",
    about: "About",
    services: "What We Do",
    contact: "Contact",
  },
  common: {
    ctaPrimary: "Contact Us",
    ctaSecondary: "Explore Events",
    learnMore: "Learn More",
    exploreServices: "See Everything We Do",
    viewAll: "View All",
    languageSwitchLabel: "Switch language",
  },
  home: {
    hero: {
      brandLine: "ASIA EVENTS GROUP",
      headline: "We don’t follow the market — we move it.",
      subheadline: "We create, promote, and own ticketed live music events across the Arab world.",
      supporting:
        "Live entertainment with full promoter ownership.",
      primaryCta: "Let’s talk business.",
    },
    ourModel: {
      eyebrow: "Our Model",
      title: "Promoter-led by design",
      subtitle: "We control the stack and move demand.",
      items: [
        {
          title: "Artist-led partnerships",
          description: "Direct alignment with the artists that lead the market.",
        },
        {
          title: "Venue-first strategy",
          description: "Right room, right night, right capacity.",
        },
        {
          title: "Ticketed demand + sponsor integration",
          description: "Demand conversion with sponsor-ready formats.",
        },
      ],
    },
    sponsors: {
      eyebrow: "Built for Sponsors",
      title: "Sponsor-ready by default",
      subtitle: "Clear integration, clean delivery.",
      items: [
        { title: "Integration options", description: "On-site, digital, and content layers." },
        { title: "Clear deliverables", description: "Defined assets and approvals." },
        { title: "Reporting framework", description: "Post-event reporting with clean structure." },
      ],
      cta: "Request Sponsorship Brief",
    },
    stayTuned: {
      title: "The next show is already in motion.",
      lines: ["Artist. Venue. Timing.", "We’ll announce it when it’s ready."],
      cta: "Stay Tuned",
    },
    microTeaser: "",
    faq: {
      eyebrow: "FAQ",
      title: "Promoter model, clarified",
      subtitle: "Straight answers for partners and sponsors.",
      items: [
        {
          q: "Do you work as a service provider?",
          a: "No. We own the shows and control the full lifecycle.",
        },
        {
          q: "Who do you partner with?",
          a: "Artists, venues, and sponsors aligned with demand.",
        },
        {
          q: "How do sponsors engage?",
          a: "Through structured integrations and clear deliverables.",
        },
        {
          q: "Can we access a brief?",
          a: "Yes. Request a sponsorship brief via contact.",
        },
      ],
    },
  },
  about: {
    title: "Who We Are",
    story:
      "Asia Events Group is a concert promoter and live entertainment platform. We work directly with artists and venues to create high-impact shows, control the full lifecycle of the event, and turn demand into sold-out nights.",
    missionTitle: "Mission",
    mission:
      "Control the demand and deliver major live music moments at scale.",
    valuesTitle: "Values",
    values: [
      { title: "Ownership", description: "We control every critical layer." },
      { title: "Demand", description: "We build it, we convert it." },
      { title: "Execution", description: "We deliver without compromise." },
    ],
    approachTitle: "Approach",
    approach: [
      { title: "Create", description: "Artist-led show concepts with market pull." },
      { title: "Promote", description: "Demand-driven campaigns at scale." },
      { title: "Own", description: "Full lifecycle control from idea to doors." },
    ],
  },
  servicesPage: {
    title: "What We Do",
    subtitle: "Direct control of every promoter function.",
    categories: [
      {
        title: "Artist partnerships",
        description: "Direct relationships and tour routing.",
      },
      {
        title: "Venue booking & scheduling",
        description: "Sourcing, negotiation, and calendar control.",
      },
      {
        title: "Event promotion & audience demand",
        description: "Campaigns built to convert demand.",
      },
      {
        title: "Ticket sales & distribution",
        description: "Pricing strategy, channels, and conversion.",
      },
      {
        title: "Sponsorship integration",
        description: "Brand integration that scales the show.",
      },
      {
        title: "Live execution",
        description: "Show control and on-ground delivery.",
      },
    ],
  },
  contact: {
    title: "Contact",
    subtitle: "Let’s talk business.",
    detailsTitle: "Contact Details",
    details: [
      { label: "Email", value: "info@asiaeventsgroup.live" },
      { label: "Office", value: "By appointment" },
    ],
  },
  form: {
    name: "Full Name",
    email: "Email Address",
    phone: "Phone (optional)",
    message: "Tell us how you want to partner",
    submit: "Send Request",
    sending: "Sending...",
    success: "Thank you. We will be in touch shortly.",
    error: "Something went wrong. Please try again.",
  },
  footer: {
    summary:
      "Concert promoter and live entertainment platform operating across the Arab world.",
    socialTitle: "Social",
    socials: [
      { label: "Instagram", href: "#" },
      { label: "YouTube", href: "#" },
      { label: "TikTok", href: "#" },
    ],
    copyright: "© Asia Events Group. All rights reserved.",
  },
  metadata: {
    home: {
      title: "Asia Events Group | Live Entertainment",
      description:
        "We create, promote, and own major ticketed music events across the Arab world.",
    },
    about: {
      title: "Who We Are | Asia Events Group",
      description:
        "Asia Events Group is a concert promoter and live entertainment platform.",
    },
    services: {
      title: "What We Do | Asia Events Group",
      description:
        "Artist partnerships, venue booking, promotion, ticket sales, and sponsorships.",
    },
    contact: {
      title: "Contact | Asia Events Group",
      description: "Let’s talk business.",
    },
  },
} as const;
