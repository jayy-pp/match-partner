import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Communities We Serve — MatchPartner",
  description:
    "MatchPartner serves diverse Hindu communities including Brahmin, Marathi, Tamil, Gujarati, Bengali, Punjabi, Telugu, and Kayastha families with culturally aware matchmaking.",
  openGraph: {
    title: "Communities We Serve — MatchPartner",
    description:
      "Culturally aware matchmaking for diverse Hindu communities. Brahmin, Marathi, Tamil, Gujarati, Bengali, Punjabi, Telugu, and Kayastha families.",
    url: "https://matchpartner.in/industries",
  },
};

const communities = [
  {
    emoji: "\uD83D\uDD49\uFE0F",
    name: "Brahmin",
    description:
      "Dedicated matchmaking for Brahmin families across all sub-communities, including Iyer, Iyengar, Saraswat, Maithil, and Kanyakubja. We understand the importance of gotra verification, Vedic traditions, and vegetarian lifestyle preferences in Brahmin matrimony.",
    challenges: [
      "Gotra and pravara verification to ensure compatible matches",
      "Sub-community specific filters across 20+ Brahmin sub-groups",
      "Vegetarian lifestyle and traditional value alignment",
      "Vedic horoscope (Kundli) matching with Manglik compatibility",
    ],
  },
  {
    emoji: "\uD83C\uDFDB\uFE0F",
    name: "Marathi",
    description:
      "Purpose-built for Marathi families including Deshastha, Kokanastha (CKP), Maratha, and Saraswat communities. MatchPartner respects the unique cultural nuances of Marathi matrimony, from family background preferences to regional customs.",
    challenges: [
      "Caste and sub-caste filtering within Marathi communities",
      "Regional preference matching across Maharashtra districts",
      "Family background and kuldevta compatibility checks",
      "Bilingual profiles supporting Marathi and English",
    ],
  },
  {
    emoji: "\uD83C\uDF3A",
    name: "Tamil",
    description:
      "Tailored matchmaking for Tamil families spanning Iyer, Iyengar, Mudaliar, Nadar, Gounder, and Chettiar communities. Our platform honors Tamil traditions including star-based matching, family values, and the importance of education and professional standing.",
    challenges: [
      "Nakshatra (birth star) and rasi-based compatibility matching",
      "Dosham verification including Sevvai dosham analysis",
      "Professional and educational background emphasis in filters",
      "Support for both Tamil Nadu and global Tamil diaspora profiles",
    ],
  },
  {
    emoji: "\uD83C\uDFE0",
    name: "Gujarati",
    description:
      "Comprehensive matchmaking for Gujarati families including Patel, Jain, Brahmin, Lohana, and Bania communities. We cater to the business-oriented and culturally vibrant Gujarati community with features that respect family values and entrepreneurial backgrounds.",
    challenges: [
      "Business family background and financial compatibility filters",
      "Community-specific dietary and lifestyle preference matching",
      "Joint family and nuclear family preference settings",
      "NRI Gujarati community support across US, UK, and East Africa",
    ],
  },
  {
    emoji: "\uD83C\uDF1F",
    name: "Bengali",
    description:
      "Thoughtful matchmaking for Bengali families including Brahmin, Kayastha, Baidya, and Mahishya communities. MatchPartner appreciates the Bengali emphasis on education, culture, and intellectual compatibility alongside traditional matchmaking criteria.",
    challenges: [
      "Educational and intellectual compatibility scoring",
      "Clan (gotra) and kulin status verification for Brahmin families",
      "Cultural preference matching including arts and literary interests",
      "Cross-border matching for Bangladeshi and Indian Bengali families",
    ],
  },
  {
    emoji: "\uD83C\uDF3E",
    name: "Punjabi",
    description:
      "Vibrant matchmaking for Punjabi families including Khatri, Arora, Jatt, and Saini communities. Our platform understands the Punjabi tradition of family-driven matchmaking, community respect, and the significance of family reputation in matrimonial decisions.",
    challenges: [
      "Family reputation and community standing assessment tools",
      "NRI Punjabi community support across Canada, UK, and Australia",
      "Joint family compatibility and lifestyle preference matching",
      "Sikh and Hindu Punjabi community distinction and filtering",
    ],
  },
  {
    emoji: "\uD83C\uDFAD",
    name: "Telugu",
    description:
      "Specialized matchmaking for Telugu families including Reddy, Kamma, Brahmin, Velama, and Kapu communities. MatchPartner addresses the specific needs of Telugu matrimony, from caste preferences and family landholding to horoscope matching and NRI connections.",
    challenges: [
      "Caste and sub-caste filtering with community-specific fields",
      "Property and family background documentation support",
      "Horoscope matching with Telugu panchangam compatibility",
      "Strong AP and Telangana regional preference distinction",
    ],
  },
  {
    emoji: "\uD83D\uDCDC",
    name: "Kayastha",
    description:
      "Refined matchmaking for Kayastha families across Chitraguptvanshi, Mathur, Saxena, Srivastava, and Bhatnagar sub-communities. We understand the Kayastha emphasis on education, professional accomplishment, and progressive yet tradition-respecting values.",
    challenges: [
      "Sub-community specific matching across all Kayastha groups",
      "Professional accomplishment and career trajectory emphasis",
      "Progressive value alignment with respect for family traditions",
      "Pan-India and NRI Kayastha community network support",
    ],
  },
];

export default function IndustriesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Communities We Serve — MatchPartner",
    description:
      "MatchPartner serves diverse Hindu communities with culturally aware matchmaking solutions.",
    url: "https://matchpartner.in/industries",
    provider: {
      "@type": "Organization",
      name: "MatchPartner",
      url: "https://matchpartner.in",
    },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: communities.length,
      itemListElement: communities.map((community, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Service",
          name: `${community.name} Matrimony`,
          description: community.description,
          provider: {
            "@type": "Organization",
            name: "MatchPartner",
          },
        },
      })),
    },
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
            Culturally Aware Matchmaking
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            Communities We
            <span className="text-primary-light"> Proudly Serve</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            MatchPartner is built for the rich diversity of Hindu traditions. Each
            community has unique customs, values, and matchmaking criteria, and our
            platform is designed to honor every one of them.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {communities.map((community) => (
              <span
                key={community.name}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium"
              >
                <span className="text-base">{community.emoji}</span>
                {community.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Communities Grid */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
              Matchmaking Designed for Your Community
            </h2>
            <p className="text-text-muted text-lg max-w-2xl mx-auto">
              Every community comes with its own matchmaking traditions and challenges.
              Here is how MatchPartner addresses each one.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {communities.map((community) => (
              <article
                key={community.name}
                className="bg-white rounded-2xl border border-border p-8 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex items-center gap-4 mb-5">
                  <span className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-3xl">
                    {community.emoji}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-text">
                      {community.name} Matrimony
                    </h3>
                  </div>
                </div>
                <p className="text-text-muted leading-relaxed mb-6">
                  {community.description}
                </p>
                <div className="bg-surface rounded-xl p-5">
                  <h4 className="text-sm font-bold text-text uppercase tracking-wide mb-3">
                    How We Help
                  </h4>
                  <ul className="space-y-2.5">
                    {community.challenges.map((challenge, i) => (
                      <li key={i} className="flex items-start gap-3">
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
                        <span className="text-sm text-text-muted leading-snug">
                          {challenge}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Your Community. Your Traditions. Your Match.
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-4">
            Join thousands of families from your community who have already found
            meaningful connections through MatchPartner.
          </p>
          <p className="text-accent font-medium text-sm mb-8">
            100% verified profiles. Community-specific filters. Free to get started.
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
              href="/solutions"
              className="inline-flex items-center gap-2 text-white font-semibold px-8 py-4 rounded-xl border border-white/20 hover:bg-white/10 transition-colors duration-200"
            >
              Explore Solutions
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <Link href="/solutions" className="hover:text-white transition-colors">
              Matchmaking Solutions
            </Link>
            <Link href="/pricing" className="hover:text-white transition-colors">
              Pricing Plans
            </Link>
            <Link href="/blog" className="hover:text-white transition-colors">
              Matchmaking Blog
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
