import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Services — MatchPartner Features",
  description:
    "Explore MatchPartner's matchmaking services: Aadhaar profile verification, AI match recommendations, privacy controls, family collaboration tools, premium matchmaking, and NRI services.",
};

function CheckIcon() {
  return (
    <svg
      className="w-5 h-5 text-primary flex-shrink-0 mt-0.5"
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

const services = [
  {
    id: "profile-verification",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Profile Verification",
    description:
      "Every profile on MatchPartner goes through our rigorous three-step verification process. We ensure that every person you connect with is genuine, so you can focus on finding the right match instead of worrying about authenticity.",
    features: [
      "Aadhaar-based identity verification for all members",
      "Live photo authentication with AI-powered face matching",
      "Phone number confirmation via OTP verification",
      "Manual review by our trust and safety team",
      "Verified badge displayed prominently on profiles",
      "Re-verification every 12 months to maintain accuracy",
    ],
    cta: { label: "Start Verification", href: "/pricing" },
  },
  {
    id: "ai-match-recommendations",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "AI Match Recommendations",
    description:
      "Our proprietary compatibility engine analyses over 50 factors — from community preferences and horoscope alignment to education, career goals, and lifestyle values — to deliver matches that truly resonate with your family's expectations.",
    features: [
      "50+ compatibility factors analysed per match",
      "Horoscope and Kundli compatibility scoring",
      "Community and sub-community preference matching",
      "Learning algorithm that improves with your feedback",
      "Daily curated match suggestions delivered to your inbox",
      "Compatibility percentage breakdown for every recommendation",
    ],
    cta: { label: "See How It Works", href: "/about" },
  },
  {
    id: "privacy-controls",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: "Privacy & Visibility Controls",
    description:
      "Your personal information is yours to share on your terms. MatchPartner gives you granular control over every aspect of your profile visibility, so you always feel safe and in control.",
    features: [
      "Show photos only to verified members or on request",
      "Hide contact details until you choose to share them",
      "Block specific profiles or entire communities",
      "Incognito browsing mode to view profiles anonymously",
      "Activity status visibility toggle (online/offline)",
      "End-to-end encrypted messaging for all conversations",
    ],
    cta: { label: "Learn About Privacy", href: "/privacy-policy" },
  },
  {
    id: "family-collaboration",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Family Collaboration Tools",
    description:
      "Marriage is a family decision. Our collaboration features let parents, siblings, and trusted family members participate meaningfully in the search — reviewing profiles, shortlisting candidates, and making decisions together.",
    features: [
      "Invite up to 5 family members to collaborate on your profile",
      "Shared shortlist with voting and commenting features",
      "Family member roles with customisable permission levels",
      "Real-time notifications when matches are reviewed",
      "Separate family dashboard for parents and guardians",
      "Joint profile creation option for family-led searches",
    ],
    cta: { label: "Explore Plans", href: "/pricing" },
  },
  {
    id: "premium-matchmaking",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
    title: "Premium Matchmaking",
    description:
      "For families seeking a white-glove experience, our Elite plan pairs you with a dedicated relationship manager who personally curates matches, coordinates introductions, and guides you through every step of the journey.",
    features: [
      "Dedicated relationship manager assigned to your search",
      "Hand-picked matches based on in-depth preference interviews",
      "Background and reference checks on shortlisted profiles",
      "Coordinated virtual or in-person introduction meetings",
      "Priority customer support with a direct phone line",
      "Quarterly progress review and strategy adjustment",
    ],
    cta: { label: "View Premium Plans", href: "/pricing" },
  },
  {
    id: "nri-matchmaking",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "NRI Matchmaking Services",
    description:
      "Finding the right match across borders comes with unique challenges. Our NRI services are tailored for Hindu families abroad — bridging time zones, cultural contexts, and immigration complexities to make the process seamless.",
    features: [
      "Timezone-aware scheduling for cross-border communications",
      "Profiles tagged with visa status and relocation preferences",
      "Verified NRI profiles with overseas document authentication",
      "Cultural compatibility insights for diaspora families",
      "Support for inter-country introduction coordination",
      "Guidance on spousal visa processes and documentation",
    ],
    cta: { label: "Get Started", href: "/pricing" },
  },
];

const navPills = services.map((s) => ({
  id: s.id,
  label: s.title.replace("&", "&"),
}));

export default function ServicesPage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "MatchPartner Matrimony Services",
    provider: {
      "@type": "Organization",
      name: "MatchPartner",
      url: "https://matchpartner.in",
    },
    description:
      "Comprehensive Hindu matchmaking services including profile verification, AI matching, family collaboration, premium matchmaking, and NRI services.",
    areaServed: {
      "@type": "Place",
      name: "Worldwide",
    },
    serviceType: "Matrimony / Matchmaking",
  };

  const offerCatalogJsonLd = {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name: "MatchPartner Services",
    itemListElement: services.map((service, index) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
        description: service.description,
        url: `https://matchpartner.in/services#${service.id}`,
      },
      position: index + 1,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offerCatalogJsonLd) }}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-secondary via-secondary to-[#2a2540] py-20 lg:py-28">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-80 h-80 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-20 w-64 h-64 bg-accent rounded-full blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white/80 mb-6">
            Everything You Need for a Meaningful Match
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
            Services Built for{" "}
            <span className="text-primary-light">Hindu Families</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70 leading-relaxed">
            From Aadhaar-verified profiles to AI-powered recommendations and dedicated
            relationship managers — every service is designed to help your family find the
            right match with confidence.
          </p>

          {/* Anchor-link navigation pills */}
          <nav className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {navPills.map((pill) => (
              <a
                key={pill.id}
                href={`#${pill.id}`}
                className="rounded-full border border-white/20 bg-white/5 px-5 py-2 text-sm font-medium text-white/80 transition hover:bg-white/15 hover:text-white"
              >
                {pill.label}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* Service Sections */}
      {services.map((service, index) => {
        const isAlt = index % 2 !== 0;
        return (
          <section
            key={service.id}
            id={service.id}
            className={`py-20 ${isAlt ? "bg-surface" : "bg-white"} scroll-mt-20`}
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                {/* Text content */}
                <div className={index % 2 !== 0 ? "lg:order-2" : ""}>
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-6">
                    {service.icon}
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">
                    {service.title}
                  </h2>
                  <p className="text-text-muted text-lg leading-relaxed mb-8">
                    {service.description}
                  </p>
                  <Link
                    href={service.cta.href}
                    className="inline-flex items-center rounded-xl bg-primary px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition hover:bg-primary-dark"
                  >
                    {service.cta.label}
                    <svg
                      className="ml-2 w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                </div>

                {/* Features list */}
                <div
                  className={`rounded-2xl border border-border bg-white p-8 lg:p-10 ${
                    index % 2 !== 0 ? "lg:order-1" : ""
                  }`}
                >
                  <h3 className="text-lg font-bold text-secondary mb-6">
                    Key Features
                  </h3>
                  <ul className="space-y-4">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckIcon />
                        <span className="text-text-muted leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-dark">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Ready to Find Your Perfect Match?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/70">
            Join thousands of Hindu families who trust MatchPartner to deliver verified,
            culturally compatible matches. Your journey starts with a free profile.
          </p>
          <div className="mt-10">
            <Link
              href="/pricing"
              className="inline-flex items-center rounded-xl bg-white px-10 py-4 text-base font-bold text-primary shadow-lg transition hover:bg-surface"
            >
              Create Your Free Profile
            </Link>
            <p className="mt-4 text-sm text-white/60">
              Free forever on Basic. No credit card needed. Set up in under 5 minutes.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-white/70">
            <Link href="/about" className="underline underline-offset-2 hover:text-white transition">
              About MatchPartner
            </Link>
            <span className="text-white/30">|</span>
            <Link href="/pricing" className="underline underline-offset-2 hover:text-white transition">
              Compare Plans
            </Link>
            <span className="text-white/30">|</span>
            <Link href="/faq" className="underline underline-offset-2 hover:text-white transition">
              FAQs
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
