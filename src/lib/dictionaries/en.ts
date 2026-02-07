export const en = {
  locale: "en",
  direction: "ltr",
  siteName: "Asia Events Group",
  nav: {
    home: "Home",
    about: "About",
    services: "Services",
    contact: "Contact",
  },
  common: {
    ctaPrimary: "Start a Brief",
    ctaSecondary: "View Services",
    learnMore: "Learn More",
    exploreServices: "Explore Services",
    viewAll: "View All",
    languageSwitchLabel: "Switch language",
  },
  home: {
    hero: {
      headline: "Corporate production with a calm, exacting standard.",
      subheadline:
        "We support corporate teams with clear planning, reliable coordination, and a refined finish across every touchpoint.",
      primaryCta: "Start a Brief",
      secondaryCta: "View Services",
      card: {
        eyebrow: "Overview",
        title: "A focused production partner",
        items: [
          "Strategic planning aligned with brand priorities.",
          "Steady on-site coordination from setup to wrap.",
          "Post-production support with clean handoff.",
        ],
      },
    },
    servicesPreview: {
      eyebrow: "Services",
      title: "Focused capabilities",
      subtitle: "Flexible support across planning, production, and delivery.",
      items: [
        {
          title: "Production Strategy",
          description: "Scoping, timelines, and resourcing built around your objectives.",
        },
        {
          title: "Creative Direction",
          description: "Unified visuals, tone, and messaging across the experience.",
        },
        {
          title: "Delivery & Handoff",
          description: "Reliable execution with clear documentation and final assets.",
        },
      ],
    },
    process: {
      eyebrow: "Process",
      title: "A clear working rhythm",
      steps: [
        { title: "Discover", description: "Align on goals, audience, and constraints." },
        { title: "Plan", description: "Define scope, schedule, and ownership." },
        { title: "Deliver", description: "Execute with oversight and measured feedback." },
      ],
    },
    cta: {
      title: "Ready to align on your next production?",
      subtitle: "Share a brief and we will respond with a clear plan.",
      primaryCta: "Contact Us",
      secondaryCta: "Start a Brief",
    },
  },
  about: {
    title: "About Asia Events Group",
    story:
      "We are a production company supporting corporate teams with structured planning, thoughtful coordination, and dependable delivery.",
    missionTitle: "Mission",
    mission: "Provide reliable production support that protects brand consistency and stakeholder trust.",
    valuesTitle: "Values",
    values: [
      { title: "Clarity", description: "Clear expectations, clear handoffs, and clean documentation." },
      { title: "Care", description: "Every detail is reviewed with intention and respect." },
      { title: "Accountability", description: "Ownership at every step and transparent communication." },
    ],
    approachTitle: "Approach",
    approach: [
      { title: "Listen", description: "Understand context, priorities, and constraints." },
      { title: "Structure", description: "Build a plan that keeps teams aligned." },
      { title: "Deliver", description: "Execute steadily with a refined finish." },
    ],
  },
  servicesPage: {
    title: "Services",
    subtitle: "Service areas tailored to corporate teams and premium brands.",
    categories: [
      {
        title: "Production Strategy",
        description: "Scoping, planning, and ownership models that keep delivery aligned.",
      },
      {
        title: "Creative Direction",
        description: "Visual systems, messaging, and experience design across channels.",
      },
      {
        title: "Pre-Production",
        description: "Schedules, vendor coordination, and logistical readiness.",
      },
      {
        title: "On-Site Production",
        description: "Run-of-show management, crew oversight, and live coordination.",
      },
      {
        title: "Post-Production",
        description: "Editing, revisions, and final asset delivery.",
      },
      {
        title: "Content Management",
        description: "Archiving, version control, and distribution support.",
      },
    ],
  },
  contact: {
    title: "Contact",
    subtitle: "Share your brief and we will follow up with next steps.",
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
    message: "Tell us about your project",
    submit: "Send Request",
    sending: "Sending...",
    success: "Thank you. We will be in touch shortly.",
    error: "Something went wrong. Please try again.",
  },
  footer: {
    summary:
      "A corporate production partner focused on clarity, quality, and composed execution.",
    socialTitle: "Social",
    socials: [
      { label: "LinkedIn", href: "#" },
      { label: "Vimeo", href: "#" },
      { label: "YouTube", href: "#" },
    ],
    copyright: "© Asia Events Group. All rights reserved.",
  },
  metadata: {
    home: {
      title: "Asia Events Group | Corporate Production Partner",
      description:
        "Corporate production partner providing structured planning, coordinated execution, and refined delivery.",
    },
    about: {
      title: "About | Asia Events Group",
      description:
        "Learn about Asia Events Group, a corporate production company focused on clarity and dependable delivery.",
    },
    services: {
      title: "Services | Asia Events Group",
      description:
        "Corporate production services spanning strategy, creative direction, on-site production, and post-production.",
    },
    contact: {
      title: "Contact | Asia Events Group",
      description: "Get in touch with Asia Events Group to discuss your next production.",
    },
  },
} as const;
