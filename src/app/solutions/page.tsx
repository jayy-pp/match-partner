import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Matchmaking Solutions — MatchPartner",
  description:
    "Tailored matchmaking solutions for brides, grooms, parents, and NRI families. MatchPartner offers personalized Hindu matrimony tools designed for every family member involved in the search.",
  openGraph: {
    title: "Matchmaking Solutions — MatchPartner",
    description:
      "Tailored matchmaking solutions for brides, grooms, parents, and NRI families. Personalized Hindu matrimony tools for every family member.",
    url: "https://matchpartner.in/solutions",
  },
};

const solutions = [
  {
    id: "brides",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
      </svg>
    ),
    title: "For Brides",
    subtitle: "Your Journey, Your Terms",
    description:
      "Take charge of your matrimonial search with tools designed to give you full control. From self-managed profiles to career-aware matching, MatchPartner empowers brides to find a partner who truly complements their life.",
    benefits: [
      "Self-managed profile with granular privacy settings",
      "AI-powered match recommendations based on 50+ compatibility factors",
      "Career-aware matching that values professional ambitions",
      "Privacy controls for photos, contact details, and profile visibility",
      "Preference filters for education, lifestyle, and family values",
      "In-app chat with read receipts and block controls",
    ],
    useCases: [
      "Working professionals seeking partners who respect their career goals",
      "Women who want to manage their own search with optional family involvement",
      "Brides looking for matches within specific community and location preferences",
    ],
    cta: "Create Your Bride Profile",
  },
  {
    id: "grooms",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
      </svg>
    ),
    title: "For Grooms",
    subtitle: "Verified Matches, Meaningful Connections",
    description:
      "Connect with verified, genuine profiles backed by Aadhaar verification. MatchPartner supports family involvement, horoscope compatibility, and community-based filtering so you can find the right match with confidence.",
    benefits: [
      "100% Aadhaar-verified profiles for trust and authenticity",
      "Family involvement tools to include parents in your search",
      "Horoscope compatibility (Kundli matching) with detailed reports",
      "Community and sub-community filtering for precise matches",
      "Income and education verified badges for transparency",
      "Dedicated relationship manager on premium plans",
    ],
    useCases: [
      "Grooms seeking verified matches within their community",
      "Families looking to collaborate and shortlist matches together",
      "Men who value horoscope compatibility and traditional matching criteria",
    ],
    cta: "Create Your Groom Profile",
  },
  {
    id: "parents",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>
    ),
    title: "For Parents",
    subtitle: "Actively Involved, Fully Supported",
    description:
      "MatchPartner gives parents dedicated tools to search, shortlist, and coordinate matches for their children. From a parent-specific dashboard to family shortlist sharing, every feature is built to make your involvement seamless.",
    benefits: [
      "Parent-specific dashboard with simplified navigation",
      "Shortlist sharing with family members for collaborative decisions",
      "Background verification requests for added peace of mind",
      "Dedicated family coordinator on premium plans",
      "Community-based search with detailed family background filters",
      "Private notes and comparison tools for shortlisted profiles",
    ],
    useCases: [
      "Parents actively searching for a match on behalf of their son or daughter",
      "Families who want to compare and shortlist profiles collaboratively",
      "Parents seeking verified background details before taking conversations forward",
    ],
    cta: "Start Searching as a Parent",
  },
  {
    id: "nri",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5a17.92 17.92 0 0 1-8.716-2.247m0 0A8.966 8.966 0 0 1 3 12c0-1.264.26-2.466.729-3.559" />
      </svg>
    ),
    title: "For NRI Families",
    subtitle: "Bridging Distances, Preserving Culture",
    description:
      "Finding a match across borders is uniquely challenging. MatchPartner offers timezone-aware communication, cultural bridge profiles, and video-first meeting tools designed specifically for NRI families who want to stay rooted in tradition while living abroad.",
    benefits: [
      "Cross-border matching with India-based and global profiles",
      "Timezone-aware communication scheduling for convenient conversations",
      "Cultural bridge profiles highlighting both heritage and current lifestyle",
      "Video-first meeting tools with built-in scheduling and reminders",
      "NRI-verified badges for profiles living or working abroad",
      "Multi-currency support for premium plan payments",
    ],
    useCases: [
      "NRI families in the US, UK, or Gulf seeking matches back in India",
      "Second-generation Indians looking for culturally compatible partners",
      "Families coordinating matchmaking across multiple time zones",
    ],
    cta: "Start Your NRI Search",
  },
];

function CheckIcon() {
  return (
    <svg
      className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5"
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

export default function SolutionsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "MatchPartner Matchmaking Solutions",
    description:
      "Tailored matchmaking solutions for brides, grooms, parents, and NRI families on MatchPartner.",
    url: "https://matchpartner.in/solutions",
    numberOfItems: solutions.length,
    itemListElement: solutions.map((solution, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: solution.title,
        description: solution.description,
        provider: {
          "@type": "Organization",
          name: "MatchPartner",
          url: "https://matchpartner.in",
        },
        url: `https://matchpartner.in/solutions#${solution.id}`,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="bg-secondary py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-accent font-semibold text-sm tracking-widest uppercase mb-4">
            Tailored for Every Family Member
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            Matchmaking Solutions Built
            <br className="hidden sm:block" />
            <span className="text-primary-light"> Around You</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            Whether you are a bride, groom, parent, or NRI family member, MatchPartner
            offers purpose-built tools and features designed for your unique role in the
            matchmaking journey.
          </p>

          {/* Anchor Nav Pills */}
          <nav className="flex flex-wrap justify-center gap-3" aria-label="Jump to solution">
            {solutions.map((solution) => (
              <a
                key={solution.id}
                href={`#${solution.id}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 text-white font-medium text-sm hover:bg-primary hover:text-white transition-colors duration-200"
              >
                {solution.title}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* Solution Sections */}
      {solutions.map((solution, index) => (
        <section
          key={solution.id}
          id={solution.id}
          className={`py-20 ${index % 2 === 0 ? "bg-white" : "bg-surface"}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* Left: Info */}
              <div className={index % 2 !== 0 ? "lg:order-2" : ""}>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-6">
                  {solution.icon}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-text mb-3">
                  {solution.title}
                </h2>
                <p className="text-lg font-semibold text-primary mb-4">
                  {solution.subtitle}
                </p>
                <p className="text-text-muted text-lg leading-relaxed mb-8">
                  {solution.description}
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-3.5 rounded-xl transition-colors duration-200"
                >
                  {solution.cta}
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>

              {/* Right: Benefits & Use Cases */}
              <div className={index % 2 !== 0 ? "lg:order-1" : ""}>
                <div className="bg-white rounded-2xl border border-border p-8 shadow-sm mb-8">
                  <h3 className="text-lg font-bold text-text mb-5">
                    Key Benefits
                  </h3>
                  <ul className="space-y-3.5">
                    {solution.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckIcon />
                        <span className="text-text-muted leading-snug">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-secondary/5 rounded-2xl p-8">
                  <h3 className="text-lg font-bold text-text mb-5">
                    Ideal For
                  </h3>
                  <ul className="space-y-4">
                    {solution.useCases.map((useCase, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-accent/15 text-accent text-sm font-bold flex-shrink-0 mt-0.5">
                          {i + 1}
                        </span>
                        <span className="text-text-muted leading-snug">{useCase}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="bg-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Find Your Perfect Match?
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-4">
            Join 10,000+ verified profiles and let MatchPartner guide your matrimonial
            journey with tools tailored for your needs.
          </p>
          <p className="text-accent font-medium text-sm mb-8">
            Free profile creation. No credit card required. Cancel anytime.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-4 rounded-xl text-lg transition-colors duration-200"
            >
              Create Your Free Profile
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 text-white font-semibold px-8 py-4 rounded-xl border border-white/20 hover:bg-white/10 transition-colors duration-200"
            >
              View Pricing Plans
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <Link href="/industries" className="hover:text-white transition-colors">
              Communities We Serve
            </Link>
            <Link href="/services" className="hover:text-white transition-colors">
              Our Services
            </Link>
            <Link href="/blog" className="hover:text-white transition-colors">
              Matchmaking Blog
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
