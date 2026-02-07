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
      headline: "We don’t produce events. We build moments people line up for.",
      subheadline: "We are concert promoters behind ticketed live music events across the Arab world.",
      primaryCta: "Contact Us",
    },
    servicesPreview: {
      eyebrow: "Focus",
      title: "Promoter-level ownership",
      subtitle: "We create and promote what we put on stage.",
      items: [
        {
          title: "Artist Partnerships",
          description: "Programming built around artists, audiences, and culture.",
        },
        {
          title: "Venue Booking",
          description: "Right rooms, right nights, right scale.",
        },
        {
          title: "Event Promotion",
          description: "Campaigns that move tickets and build anticipation.",
        },
      ],
    },
  },
  about: {
    title: "About Asia Events Group",
    story:
      "We are an event organizer and concert promoter focused on the Arab world. We create, own, and market ticketed live music events.",
    missionTitle: "Mission",
    mission:
      "Create live music moments that feel essential and unforgettable.",
    valuesTitle: "Values",
    values: [
      { title: "Artist First", description: "Performance quality and creative intent." },
      { title: "Audience Trust", description: "Clear ticketing and smooth entry." },
      { title: "Partner Ready", description: "Aligned sponsors and venue partners." },
    ],
    approachTitle: "Approach",
    approach: [
      { title: "Curate", description: "Lineups that match the market." },
      { title: "Promote", description: "Momentum before doors open." },
      { title: "Deliver", description: "Night-of execution that feels effortless." },
    ],
  },
  servicesPage: {
    title: "What We Do",
    subtitle: "Our core activities as a concert promoter.",
    categories: [
      {
        title: "Artist Partnerships",
        description: "Tour routing, collaboration, and relationships.",
      },
      {
        title: "Venue Booking",
        description: "Sourcing, negotiation, and date strategy.",
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
    subtitle: "Artist, venue, and sponsorship partnerships.",
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
      "Event organizer and concert promoter behind ticketed live music events across the Arab world.",
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
