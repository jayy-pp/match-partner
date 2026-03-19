import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About MatchPartner — Our Story & Mission",
  description:
    "Discover how MatchPartner became India's most trusted Hindu matchmaking platform. Aadhaar-verified profiles, AI-powered matching, and a community of 10,000+ families finding meaningful connections.",
};

function CheckIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}

const timelineItems = [
  {
    year: "2022",
    title: "Founded",
    description:
      "MatchPartner launched with a mission to bring trust and cultural sensitivity back to Hindu matchmaking.",
  },
  {
    year: "2023",
    title: "1,000 Verified Profiles",
    description:
      "Crossed our first milestone with 1,000 fully Aadhaar-verified profiles and introduced family collaboration tools.",
  },
  {
    year: "2024",
    title: "AI Matching Launched",
    description:
      "Rolled out our AI-powered compatibility engine analysing 50+ factors including horoscope, values, and lifestyle preferences.",
  },
  {
    year: "2025",
    title: "10,000+ Profiles & 1,500+ Matches",
    description:
      "Grew to a thriving community across 20+ countries, celebrating over 1,500 successful matches and counting.",
  },
];

const values = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Trust & Verification",
    description:
      "Every profile undergoes Aadhaar-based identity verification, phone confirmation, and photo authentication. No fakes, no catfishing — just real people seeking real connections.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    title: "Cultural Sensitivity",
    description:
      "We understand that Hindu matrimony is rooted in tradition. Our platform respects community preferences, horoscope compatibility, and family values at every step.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Family First",
    description:
      "Marriage is a union of families. Our collaboration tools let parents and siblings participate in the search, review matches, and support decisions — together.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: "Privacy & Security",
    description:
      "Granular visibility controls let you decide who sees your photos, contact details, and profile. Your data is encrypted and never shared with third parties.",
  },
];

const stats = [
  { value: "10,000+", label: "Verified Profiles" },
  { value: "1,500+", label: "Successful Matches" },
  { value: "20+", label: "Countries" },
  { value: "94%", label: "Satisfaction Rate" },
];

export default function AboutPage() {
  const aboutJsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About MatchPartner",
    description:
      "Learn about MatchPartner, India's trusted Hindu matchmaking platform with 10,000+ verified profiles.",
    url: "https://matchpartner.in/about",
    mainEntity: {
      "@type": "Organization",
      name: "MatchPartner",
      url: "https://matchpartner.in",
      logo: "https://matchpartner.in/logo.png",
      description:
        "MatchPartner is India's most trusted Hindu matrimony platform offering Aadhaar-verified profiles, AI-powered matching, and family collaboration tools.",
      foundingDate: "2022",
      sameAs: [
        "https://www.facebook.com/matchpartner",
        "https://www.instagram.com/matchpartner",
        "https://twitter.com/matchpartner",
      ],
      numberOfEmployees: {
        "@type": "QuantitativeValue",
        value: 25,
      },
      areaServed: {
        "@type": "Place",
        name: "Worldwide",
      },
    },
  };

  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "MatchPartner",
    url: "https://matchpartner.in",
    logo: "https://matchpartner.in/logo.png",
    description:
      "Trusted Hindu matrimony platform with Aadhaar-verified profiles, AI matching, and family-assisted matchmaking tools.",
    foundingDate: "2022",
    founder: [
      {
        "@type": "Person",
        name: "Arjun Mehta",
        jobTitle: "Co-Founder & CEO",
      },
      {
        "@type": "Person",
        name: "Priya Sharma",
        jobTitle: "Co-Founder & CTO",
      },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "support@matchpartner.in",
      availableLanguage: ["English", "Hindi"],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-secondary via-secondary to-[#2a2540] py-20 lg:py-28">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white/80 mb-6">
            Trusted by 10,000+ Hindu Families Worldwide
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
            Where Hindu Traditions Meet{" "}
            <span className="text-primary-light">Trusted Matchmaking</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70 leading-relaxed">
            MatchPartner was founded with a single purpose — to bring verification,
            cultural understanding, and family values back to the heart of Hindu
            matrimony. We believe every match should start with trust.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-xl bg-primary px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-primary/25 transition hover:bg-primary-dark"
            >
              Get in Touch
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center rounded-xl border border-white/20 bg-white/5 px-8 py-3.5 text-base font-semibold text-white transition hover:bg-white/10"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">
              Our Story
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-8">
              Built by Families, for Families
            </h2>
            <div className="space-y-5 text-text-muted leading-relaxed text-lg">
              <p>
                MatchPartner was born out of a deeply personal experience. In 2022, our
                co-founders Arjun Mehta and Priya Sharma watched their own families
                struggle with mainstream matrimony platforms — profiles that turned out to
                be fake, algorithms that ignored cultural nuances, and interfaces that felt
                more like dating apps than tools for building lifelong partnerships.
              </p>
              <p>
                They envisioned a platform purpose-built for Hindu families: one where every
                profile is Aadhaar-verified, where community preferences and horoscope
                compatibility are first-class features, and where parents can participate in
                the search alongside their children. MatchPartner was the result.
              </p>
              <p>
                From a small office in Pune with just 200 profiles, we have grown into a
                community of over 10,000 verified members spanning 20+ countries. Our
                AI-powered matching engine analyses over 50 compatibility factors, but we
                never lose sight of what matters most — genuine human connection rooted in
                shared values.
              </p>
              <p>
                Today, MatchPartner is more than a matrimony platform. We are a community
                of families who believe that the right match changes everything. Every
                feature we build, every verification step we take, and every recommendation
                we make is guided by a single question: would we trust this for our own
                family?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">
              Our Journey
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary">
              Milestones That Define Us
            </h2>
          </div>
          <div className="relative mx-auto max-w-3xl">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border lg:left-1/2 lg:-translate-x-px" />
            <div className="space-y-12">
              {timelineItems.map((item, index) => (
                <div
                  key={item.year}
                  className={`relative flex items-start gap-6 lg:gap-12 ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-8 lg:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-surface z-10" />
                  {/* Content */}
                  <div
                    className={`ml-16 lg:ml-0 lg:w-1/2 ${
                      index % 2 === 0 ? "lg:pr-16 lg:text-right" : "lg:pl-16"
                    }`}
                  >
                    <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-bold text-primary mb-2">
                      {item.year}
                    </span>
                    <h3 className="text-xl font-bold text-secondary mb-2">
                      {item.title}
                    </h3>
                    <p className="text-text-muted leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">
              What We Stand For
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary">
              Our Core Values
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-text-muted text-lg">
              These four pillars guide every decision we make, every feature we build,
              and every family we serve.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="group rounded-2xl border border-border bg-white p-8 transition hover:shadow-lg hover:border-primary/20"
              >
                <div className="mb-5 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-white">
                  {value.icon}
                </div>
                <h3 className="text-lg font-bold text-secondary mb-3">
                  {value.title}
                </h3>
                <p className="text-text-muted leading-relaxed text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Band — DARK background */}
      <section className="bg-secondary py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl sm:text-5xl font-bold text-white">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm font-medium text-white/60 uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">
              The People Behind MatchPartner
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary">
              Meet Our Founders
            </h2>
          </div>
          <div className="mx-auto max-w-4xl grid gap-8 sm:grid-cols-2">
            {/* Arjun */}
            <div className="rounded-2xl border border-border bg-white p-8 text-center">
              <div className="mx-auto mb-5 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-dark text-white text-3xl font-bold">
                AM
              </div>
              <h3 className="text-xl font-bold text-secondary">Arjun Mehta</h3>
              <p className="mt-1 text-sm font-medium text-primary">
                Co-Founder &amp; CEO
              </p>
              <p className="mt-4 text-text-muted leading-relaxed text-sm">
                A product leader with 12 years at leading technology companies, Arjun
                brings deep expertise in building consumer platforms at scale. His own
                family&rsquo;s search for a verified matrimony platform inspired
                MatchPartner&rsquo;s founding mission.
              </p>
            </div>
            {/* Priya */}
            <div className="rounded-2xl border border-border bg-white p-8 text-center">
              <div className="mx-auto mb-5 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent-dark text-white text-3xl font-bold">
                PS
              </div>
              <h3 className="text-xl font-bold text-secondary">Priya Sharma</h3>
              <p className="mt-1 text-sm font-medium text-primary">
                Co-Founder &amp; CTO
              </p>
              <p className="mt-4 text-text-muted leading-relaxed text-sm">
                An AI and machine-learning engineer with a background at top research
                labs, Priya designed MatchPartner&rsquo;s proprietary compatibility engine.
                She is passionate about applying technology to preserve cultural traditions.
              </p>
            </div>
          </div>
          <p className="mx-auto mt-10 max-w-2xl text-center text-text-muted leading-relaxed">
            Backed by a team of 25 professionals across engineering, product, customer
            success, and relationship management — all working from our offices in Pune
            and Bengaluru to help Hindu families find meaningful matches.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-dark">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Join Our Growing Community
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/70">
            Be part of a trusted network where verified profiles and cultural values come
            first. Your perfect match could be one step away.
          </p>
          <div className="mt-10">
            <Link
              href="/pricing"
              className="inline-flex items-center rounded-xl bg-white px-10 py-4 text-base font-bold text-primary shadow-lg transition hover:bg-surface"
            >
              Create Your Free Profile
            </Link>
            <p className="mt-4 text-sm text-white/60">
              No credit card required. Set up your profile in under 5 minutes. Trusted by
              10,000+ families.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-white/70">
            <Link href="/services" className="underline underline-offset-2 hover:text-white transition">
              Explore Our Services
            </Link>
            <span className="text-white/30">|</span>
            <Link href="/faq" className="underline underline-offset-2 hover:text-white transition">
              Read FAQs
            </Link>
            <span className="text-white/30">|</span>
            <Link href="/contact" className="underline underline-offset-2 hover:text-white transition">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
