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
      headline: "We don’t organize events.",
      subheadline: "We create demand.",
      supporting:
        "Concert promotion. Artist-led shows. Ticketed live experiences across the Arab world.",
      primaryCta: "Contact Us",
    },
    servicesPreview: {
      eyebrow: "Focus",
      title: "Promoter-first work",
      subtitle: "Built around artists, venues, and ticketed demand.",
      items: [
        {
          title: "Artist Partnerships",
          description: "Artists we believe in and audiences who show up.",
        },
        {
          title: "Venue Booking",
          description: "The right room for the right night.",
        },
        {
          title: "Event Promotion",
          description: "Promotion that turns interest into sold-out rooms.",
        },
      ],
    },
  },
  about: {
    title: "About Asia Events Group",
    story:
      "We are a concert promoter in the Arab world. We create, own, and market ticketed live music events.",
    missionTitle: "Mission",
    mission:
      "Create live music moments people talk about the next day.",
    valuesTitle: "Values",
    values: [
      { title: "Artist First", description: "Creative intent comes first." },
      { title: "Audience Trust", description: "Clear tickets. Smooth entry." },
      { title: "Partner Ready", description: "Venue and sponsor alignment." },
    ],
    approachTitle: "Approach",
    approach: [
      { title: "Curate", description: "Artists that fit the market." },
      { title: "Promote", description: "Momentum before doors open." },
      { title: "Deliver", description: "Night-of execution, no noise." },
    ],
  },
  servicesPage: {
    title: "What We Do",
    subtitle: "The promoter’s core work.",
    categories: [
      {
        title: "Artist Partnerships",
        description: "Tour routing, collaboration, and long-term relationships.",
      },
      {
        title: "Venue Booking",
        description: "Venue sourcing, negotiation, and date strategy.",
      },
      {
        title: "Event Promotion",
        description: "Branding, media planning, and campaigns.",
      },
      {
        title: "Ticket Sales",
        description: "Pricing strategy and sales channels.",
      },
      {
        title: "Sponsorship Partnerships",
        description: "Aligned sponsors that elevate the night.",
      },
      {
        title: "Show Operations",
        description: "Show-day operations and guest flow.",
      },
    ],
  },
  contact: {
    title: "Contact",
    subtitle: "For artist, venue, and sponsorship partnerships.",
    detailsTitle: "Contact Details",
    details: [
      { label: "Email", value: "hello@asiaeventsgroup.com" },
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
      "Concert promoter behind ticketed live music events across the Arab world.",
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
      title: "Asia Events Group | Live Music Events",
      description:
        "We create and promote major live music events across the Arab world.",
    },
    about: {
      title: "About | Asia Events Group",
      description:
        "Learn about Asia Events Group, an event organizer and concert promoter.",
    },
    services: {
      title: "What We Do | Asia Events Group",
      description:
        "Artist partnerships, venue booking, promotion, ticket sales, and sponsorships.",
    },
    contact: {
      title: "Contact | Asia Events Group",
      description: "Get in touch for artist, venue, and sponsorship partnerships.",
    },
  },
} as const;
