# Premium Tailwind React Components for Asia Events Group

## Overview

This package contains 7 premium, production-ready React components built with Tailwind CSS for a luxury events production company website. All components support both LTR (English) and RTL (Arabic) layouts.

## Components

### 1. Hero (`src/components/Hero.tsx`)

Full-screen hero section with gradient background, subtle pattern overlay, and dual CTAs.

**Props:**
- `headline` (string): Main headline text
- `subheadline` (string): Supporting text
- `primaryCta` (string): Primary button text
- `secondaryCta` (string): Secondary button text
- `onPrimaryClick` (function, optional): Primary button click handler
- `onSecondaryClick` (function, optional): Secondary button click handler
- `dir` ("ltr" | "rtl", optional): Text direction, defaults to "ltr"

**Features:**
- Gradient background with radial glow
- Subtle SVG pattern overlay
- Animated button hover effects
- Scroll indicator
- Fully responsive

**Usage:**
```tsx
<Hero
  headline="Crafting Signature Experiences"
  subheadline="World-class event production"
  primaryCta="Start a Brief"
  secondaryCta="See Our Work"
  dir="ltr"
/>
```

---

### 2. ServicesGrid (`src/components/ServicesGrid.tsx`)

6-card grid showcasing services with inline SVG icons.

**Props:**
- `title` (string): Section title
- `subtitle` (string): Section subtitle
- `services` (array): Array of service objects with `title` and `description`
- `dir` ("ltr" | "rtl", optional): Text direction

**Features:**
- 6 unique inline SVG icons (corporate, concert, conference, wedding, brand, technical)
- Hover effects with border color change and scale animation
- Responsive grid (1 col mobile, 2 cols tablet, 3 cols desktop)
- Gradient backgrounds on cards

**Usage:**
```tsx
<ServicesGrid
  title="Full-Scope Event Production"
  subtitle="From concept to execution"
  services={[
    { title: "Corporate Events", description: "Executive summits..." },
    // ... more services
  ]}
  dir="ltr"
/>
```

---

### 3. PortfolioGridComponent (`src/components/PortfolioGridComponent.tsx`)

Responsive masonry-like portfolio grid using CSS Grid.

**Props:**
- `title` (string): Section title
- `subtitle` (string): Section subtitle
- `items` (array): Array of portfolio items with `title`, `type`, and optional `image`
- `dir` ("ltr" | "rtl", optional): Text direction

**Features:**
- Masonry layout with varied row heights
- Gradient backgrounds with pattern overlays
- Category badges
- Hover effects with scale and border animations
- "View Project" link appears on hover

**Usage:**
```tsx
<PortfolioGridComponent
  title="Portfolio Highlights"
  subtitle="Signature productions"
  items={[
    { title: "Executive Summit Riyadh", type: "Corporate" },
    // ... more items
  ]}
  dir="ltr"
/>
```

---

### 4. TestimonialsCarousel (`src/components/TestimonialsCarousel.tsx`)

Horizontal scroll carousel with snap points (no external libraries).

**Props:**
- `eyebrow` (string): Small text above title
- `title` (string): Section title
- `testimonials` (array): Array of testimonial objects with `quote`, `name`, `company`
- `dir` ("ltr" | "rtl", optional): Text direction

**Features:**
- CSS scroll-snap for smooth scrolling
- Navigation buttons with RTL support
- Quote icon
- Hover effects on cards
- Mobile-optimized card widths

**Usage:**
```tsx
<TestimonialsCarousel
  eyebrow="Testimonials"
  title="Client Experiences"
  testimonials={[
    {
      quote: "Extraordinary experience...",
      name: "John Doe",
      company: "Company Name"
    },
    // ... more testimonials
  ]}
  dir="ltr"
/>
```

---

### 5. ProcessTimeline (`src/components/ProcessTimeline.tsx`)

Vertical timeline with numbered steps and alternating layout.

**Props:**
- `eyebrow` (string): Small text above title
- `title` (string): Section title
- `steps` (array): Array of step objects with `title` and `description`
- `dir` ("ltr" | "rtl", optional): Text direction

**Features:**
- Vertical connecting line with gradient
- Numbered circles with gold border and glow
- Alternating left/right layout on desktop
- Responsive (stacked on mobile)
- RTL-aware positioning

**Usage:**
```tsx
<ProcessTimeline
  eyebrow="Process"
  title="A Proven Production Method"
  steps={[
    { title: "Concept", description: "Strategic vision..." },
    // ... more steps
  ]}
  dir="ltr"
/>
```

---

### 6. CTABanner (`src/components/CTABanner.tsx`)

Bold call-to-action section with decorative elements.

**Props:**
- `title` (string): Main CTA headline
- `subtitle` (string): Supporting text
- `primaryCta` (string): Primary button text
- `secondaryCta` (string): Secondary button text
- `onPrimaryClick` (function, optional): Primary button click handler
- `onSecondaryClick` (function, optional): Secondary button click handler
- `dir` ("ltr" | "rtl", optional): Text direction

**Features:**
- Gradient background with pattern overlay
- Radial glow effect
- Decorative corner borders
- Animated button effects
- Fully responsive

**Usage:**
```tsx
<CTABanner
  title="Ready to produce your next event?"
  subtitle="Tell us about your vision"
  primaryCta="Request a Proposal"
  secondaryCta="Contact Our Team"
  dir="ltr"
/>
```

---

### 7. FooterComponent (`src/components/FooterComponent.tsx`)

Comprehensive footer with 4 columns, social links, and newsletter signup.

**Props:**
- `siteName` (string): Company name
- `summary` (string): Company description
- `contactTitle` (string): Contact section title
- `contactDetails` (array): Array of contact objects with `label` and `value`
- `socialTitle` (string): Social section title
- `socials` (array): Array of social objects with `label` and `href`
- `quickLinksTitle` (string): Quick links section title
- `quickLinks` (array): Array of link objects with `label` and `href`
- `copyright` (string): Copyright text
- `dir` ("ltr" | "rtl", optional): Text direction

**Features:**
- 4-column layout (responsive to 1 column on mobile)
- Social media icons (Instagram, LinkedIn, YouTube, Twitter)
- Newsletter signup form
- Quick links with hover animations
- Privacy/Terms links in bottom bar
- Decorative top border gradient

**Usage:**
```tsx
<FooterComponent
  siteName="Asia Events Group"
  summary="Premium event production..."
  contactTitle="Contact"
  contactDetails={[
    { label: "Email", value: "hello@example.com" },
    // ... more details
  ]}
  socialTitle="Social"
  socials={[
    { label: "Instagram", href: "#" },
    // ... more socials
  ]}
  quickLinksTitle="Quick Links"
  quickLinks={[
    { label: "Home", href: "/" },
    // ... more links
  ]}
  copyright="© 2026 Company Name"
  dir="ltr"
/>
```

---

## Design System

### Colors (CSS Variables)

All components use CSS custom properties defined in `src/app/globals.css`:

- `--ink`: #0b0a0a (primary background)
- `--ink-soft`: #111111 (secondary background)
- `--gold`: #d3b56f (primary accent)
- `--gold-strong`: #f0d291 (hover accent)
- `--muted`: #b7b1a5 (muted text)
- `--accent`: #1f1c17 (accent background)

### Typography

- Headings: Light weight (300-400), tight tracking
- Body: Regular weight, relaxed leading
- Uppercase labels: 0.2-0.3em letter spacing

### Spacing

- Section padding: py-20 sm:py-28
- Container max-width: max-w-7xl (most sections), max-w-6xl (timeline, CTA)
- Grid gaps: gap-6 (standard), gap-12 (larger sections)

### Responsive Breakpoints

- Mobile: default
- Tablet: sm: (640px)
- Desktop: lg: (1024px)

---

## RTL Support

All components support RTL layout through the `dir` prop. Key RTL features:

- Logical properties for padding/margins (ps, pe, ms, me)
- Conditional arrow directions in SVGs
- Reversed flex/grid directions where appropriate
- RTL-aware scroll behavior in carousel

**Example:**
```tsx
// English (LTR)
<Hero headline="Welcome" dir="ltr" />

// Arabic (RTL)
<Hero headline="مرحبا" dir="rtl" />
```

---

## Accessibility

All components follow accessibility best practices:

- Semantic HTML elements
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus states on all interactive elements
- Sufficient color contrast ratios

---

## Installation & Usage

1. **Import components:**
```tsx
import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
// ... other imports
```

2. **Or use the barrel export:**
```tsx
import {
  Hero,
  ServicesGrid,
  PortfolioGridComponent,
  TestimonialsCarousel,
  ProcessTimeline,
  CTABanner,
  FooterComponent,
} from "@/components/premium";
```

3. **View the demo:**
Visit `/demo` to see all components in action with both LTR and RTL layouts.

---

## Dependencies

- **React 19+**
- **Next.js 16+**
- **Tailwind CSS 4+**
- No external UI libraries required

---

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## Performance

- All components are optimized for performance
- TestimonialsCarousel uses "use client" directive (only client component)
- CSS-only animations (no JavaScript animation libraries)
- Minimal re-renders with proper prop typing

---

## Customization

To customize the design:

1. **Colors:** Modify CSS variables in `src/app/globals.css`
2. **Spacing:** Adjust Tailwind classes in component files
3. **Typography:** Update font families in globals.css
4. **Icons:** Replace inline SVGs in ServicesGrid and FooterComponent

---

## License

All components are part of the Asia Events Group project.

---

## Support

For questions or issues, please contact the development team.
