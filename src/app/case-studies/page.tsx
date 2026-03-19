import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Success Stories — MatchPartner",
  description:
    "Read real love stories from couples who found their perfect match on MatchPartner. Over 1,500 successful Hindu matrimony matches and counting.",
};

const successStories = [
  {
    names: "Priya & Vikram",
    badge: "IT Professionals, Bangalore",
    image: "/images/couples/priya-vikram.jpg",
    challenge:
      "Both were ambitious IT professionals who struggled to find a partner who shared their career drive while also respecting traditional Hindu family values.",
    metrics: [
      { label: "Matched in", value: "3 Weeks" },
      { label: "Compatibility", value: "95%" },
      { label: "Family Approval", value: "1st Meeting" },
      { label: "Married After", value: "6 Months" },
    ],
    quote:
      "MatchPartner's AI recommendations understood exactly what we were looking for. It felt like the platform truly knew our priorities — career growth and cultural roots.",
    slug: "priya-vikram",
  },
  {
    names: "Sunita & Rahul",
    badge: "NRI Family, USA / India",
    image: "/images/couples/sunita-rahul.jpg",
    challenge:
      "Sunita's NRI parents in the USA wanted to find a well-matched groom from their homeland community, but distance made traditional matchmaking nearly impossible.",
    metrics: [
      { label: "Match Type", value: "Cross-Border" },
      { label: "Profiles Reviewed", value: "50+" },
      { label: "Family Feature", value: "Collaboration" },
      { label: "Wedding Venue", value: "Jaipur" },
    ],
    quote:
      "The family collaboration tools were a game-changer. My parents in New Jersey and relatives in Rajasthan could all participate in the search together seamlessly.",
    slug: "sunita-rahul",
  },
  {
    names: "Meera & Arjun",
    badge: "Tamil Brahmin Community",
    image: "/images/couples/meera-arjun.jpg",
    challenge:
      "Meera's family had very specific community requirements along with horoscope compatibility needs, which narrowed the search considerably on mainstream platforms.",
    metrics: [
      { label: "Kundali Match", value: "92%" },
      { label: "Matching", value: "Community-Specific" },
      { label: "Profile Review", value: "Video Enabled" },
      { label: "Engaged In", value: "4 Months" },
    ],
    quote:
      "No other platform understood our community's nuances like MatchPartner. The horoscope matching and community-specific filters made all the difference for our family.",
    slug: "meera-arjun",
  },
  {
    names: "Deepa & Amit",
    badge: "Working Professionals, Mumbai",
    image: "/images/couples/deepa-amit.jpg",
    challenge:
      "Both had demanding careers and limited free time. Deepa was also concerned about privacy, wanting to keep her profile discreet while still finding a genuine match.",
    metrics: [
      { label: "AI-Matched In", value: "2 Weeks" },
      { label: "Privacy", value: "Top-Rated" },
      { label: "Profiles", value: "100% Verified" },
      { label: "Married Within", value: "1 Year" },
    ],
    quote:
      "The privacy controls gave me confidence to be on the platform. I could control exactly who saw my profile and photos, and every match was verified — no fake profiles.",
    slug: "deepa-amit",
  },
];

function HeartIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function QuoteIcon() {
  return (
    <svg
      className="w-8 h-8 text-primary/20"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609L9.978 5.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H0z" />
    </svg>
  );
}

export default function CaseStudiesPage() {
  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "MatchPartner Success Stories",
    description:
      "Real couples who found their perfect match through MatchPartner Hindu matrimony platform.",
    numberOfItems: successStories.length,
    itemListElement: successStories.map((story, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: story.names,
      description: story.challenge,
      url: `https://matchpartner.in/case-studies/${story.slug}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />

      {/* ===== HERO SECTION ===== */}
      <section className="relative bg-gradient-to-br from-secondary via-secondary to-[#2a2540] py-20 overflow-hidden">
        {/* Background couple image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero/hero-couple.jpg"
            alt="Indian couple in traditional wedding attire"
            fill
            className="object-cover opacity-15"
            priority
          />
        </div>
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
            <HeartIcon />
            <span className="text-white text-sm font-medium">
              1,500+ Successful Matches
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            Real Couples, Real Love Stories
          </h1>

          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-8">
            Every match on MatchPartner begins with trust, tradition, and
            technology. Discover how these couples found their life partners
            through our platform.
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-white/70 text-sm">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full" />
              Verified stories from real users
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full" />
              Across communities and regions
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full" />
              AI-powered matchmaking success
            </div>
          </div>
        </div>
      </section>

      {/* ===== SUCCESS STORIES GRID ===== */}
      <section className="bg-surface py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">
              Success Stories
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">
              Matches Made with Meaning
            </h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              From cross-border connections to community-specific searches,
              these couples prove that the right platform makes all the
              difference.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {successStories.map((story) => (
              <article
                key={story.slug}
                className="bg-white rounded-2xl shadow-sm border border-border overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                {/* Couple Image */}
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={story.image}
                    alt={`${story.names} - Indian couple in traditional wedding attire`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-white">
                        {story.names}
                      </h3>
                      <span className="bg-white/15 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full">
                        {story.badge}
                      </span>
                    </div>
                    <p className="text-white/85 text-sm">{story.challenge}</p>
                  </div>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 gap-3 p-6">
                  {story.metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="bg-surface rounded-xl p-3 text-center border border-border"
                    >
                      <p className="text-xs text-text-muted font-medium mb-1">
                        {metric.label}
                      </p>
                      <p className="text-lg font-bold text-primary">
                        {metric.value}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Testimonial */}
                <div className="px-6 pb-6">
                  <div className="bg-surface rounded-xl p-4 border border-border">
                    <QuoteIcon />
                    <blockquote className="text-text-muted text-sm italic mt-2 mb-4">
                      &ldquo;{story.quote}&rdquo;
                    </blockquote>
                    <Link
                      href={`/case-studies/${story.slug}`}
                      className="inline-flex items-center gap-1.5 text-primary font-semibold text-sm hover:underline"
                    >
                      Read full story
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="bg-gradient-to-br from-primary to-[#b01048] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Your Love Story Could Be Next
          </h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8 text-lg">
            Join 10,000+ verified profiles and let our AI-powered matchmaking
            help you find your perfect life partner.
          </p>

          <div className="flex flex-col items-center gap-3">
            <Link
              href="/register"
              className="inline-flex items-center gap-2 bg-white text-primary font-bold px-8 py-4 rounded-full text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
            >
              Create Your Free Profile
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
            <p className="text-white/70 text-sm">
              Takes less than 5 minutes. No credit card required.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-6 text-white/80 text-sm">
            <Link href="/pricing" className="hover:text-white underline">
              View Premium Plans
            </Link>
            <Link href="/features" className="hover:text-white underline">
              Explore Features
            </Link>
            <Link href="/faq" className="hover:text-white underline">
              Frequently Asked Questions
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
