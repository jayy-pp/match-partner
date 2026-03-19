import type { Metadata } from "next";
import Link from "next/link";
import WaitlistForm from "@/components/WaitlistForm";
import Image from "next/image";

export const metadata: Metadata = {
  title: "MatchPartner — #1 Trusted Hindu Matrimony Site | Verified Profiles",
  description:
    "Find your perfect Hindu life partner on MatchPartner. 10,000+ Aadhaar-verified profiles, AI-powered matchmaking, horoscope compatibility & family collaboration tools. Join free today!",
  keywords: [
    "Hindu matrimony",
    "Hindu marriage",
    "Indian matchmaking",
    "matrimonial site",
    "verified profiles",
    "NRI matrimony",
    "bride groom search",
    "Brahmin matrimony",
    "Gujarati matrimony",
    "Tamil matrimony",
    "Marathi matrimony",
    "MatchPartner",
    "Aadhaar verified matrimony",
    "AI matchmaking",
    "horoscope matching",
    "kundali matching",
  ],
  openGraph: {
    title: "MatchPartner — #1 Trusted Hindu Matrimony Site",
    description:
      "10,000+ Aadhaar-verified profiles. AI-powered matchmaking. Horoscope compatibility. Join free!",
    url: "https://matchpartner.in",
  },
  alternates: {
    canonical: "https://matchpartner.in",
  },
};

const faqItems = [
  {
    q: "How does MatchPartner verify profiles?",
    a: "Every profile on MatchPartner goes through a 100% verification process including Aadhaar-based identity verification, phone number confirmation, and photo authentication. This ensures you only connect with genuine, verified individuals seeking meaningful relationships.",
  },
  {
    q: "Is MatchPartner only for Hindu families?",
    a: "MatchPartner is designed specifically for Hindu families seeking matrimonial matches. We understand Hindu traditions, community preferences, and cultural values, which helps us provide more relevant match recommendations than general matrimony platforms.",
  },
  {
    q: "How does the AI match recommendation work?",
    a: "Our AI analyzes over 50 compatibility factors including community preferences, education, career, family values, horoscope compatibility, and lifestyle choices. It learns from your interactions to continuously improve match suggestions over time.",
  },
  {
    q: "Can my family members help in the search?",
    a: "Yes, MatchPartner offers family-assisted matchmaking tools. You can invite up to 5 family members to collaborate on your profile, review matches, and vote on shortlisted candidates — all while maintaining privacy controls.",
  },
  {
    q: "What privacy controls does MatchPartner offer?",
    a: "You have granular control over who sees your profile, photos, and contact details. Options include verified-members-only visibility, photo access on request, hidden contact details, and the ability to block specific profiles or communities.",
  },
  {
    q: "How much does MatchPartner cost?",
    a: "MatchPartner offers a free basic profile that lets you browse matches. Premium plans start at just ₹999 for 3 months, with Gold (₹2,499/6 months) and Elite (₹4,999/12 months) tiers offering additional features like a dedicated relationship manager.",
  },
];

const communities = [
  {
    name: "Brahmin Matrimony",
    href: "/browse?community=brahmin",
    icon: "🙏",
    profiles: "2,500+",
  },
  {
    name: "Patel Matrimony",
    href: "/browse?community=patel",
    icon: "🌾",
    profiles: "1,800+",
  },
  {
    name: "Gujarati Matrimony",
    href: "/browse?community=gujarati",
    icon: "🎭",
    profiles: "2,200+",
  },
  {
    name: "Marathi Matrimony",
    href: "/browse?community=marathi",
    icon: "🏛️",
    profiles: "1,900+",
  },
  {
    name: "Tamil Matrimony",
    href: "/browse?community=tamil",
    icon: "🌺",
    profiles: "1,600+",
  },
  {
    name: "Telugu Matrimony",
    href: "/browse?community=telugu",
    icon: "💎",
    profiles: "1,400+",
  },
  {
    name: "Bengali Matrimony",
    href: "/browse?community=bengali",
    icon: "🎨",
    profiles: "1,100+",
  },
  {
    name: "Punjabi Matrimony",
    href: "/browse?community=punjabi",
    icon: "🎵",
    profiles: "1,300+",
  },
  {
    name: "Rajput Matrimony",
    href: "/browse?community=rajput",
    icon: "🏰",
    profiles: "900+",
  },
  {
    name: "Agarwal Matrimony",
    href: "/browse?community=agarwal",
    icon: "📿",
    profiles: "800+",
  },
  {
    name: "Kayastha Matrimony",
    href: "/browse?community=kayastha",
    icon: "📜",
    profiles: "700+",
  },
  {
    name: "NRI Matrimony",
    href: "/browse?community=nri",
    icon: "✈️",
    profiles: "1,500+",
  },
];

const featuredProfiles = [
  {
    name: "Ananya S.",
    age: 26,
    education: "MBA, IIM Bangalore",
    profession: "Product Manager",
    location: "Bangalore",
    community: "Brahmin",
    verified: true,
  },
  {
    name: "Vikram R.",
    age: 29,
    education: "B.Tech, IIT Delhi",
    profession: "Software Engineer",
    location: "Mumbai",
    community: "Gujarati",
    verified: true,
  },
  {
    name: "Priya M.",
    age: 25,
    education: "MBBS, AIIMS",
    profession: "Doctor",
    location: "Delhi",
    community: "Rajput",
    verified: true,
  },
  {
    name: "Arjun K.",
    age: 31,
    education: "MS, Stanford",
    profession: "Data Scientist",
    location: "USA (NRI)",
    community: "Tamil Brahmin",
    verified: true,
  },
  {
    name: "Meera D.",
    age: 27,
    education: "CA",
    profession: "Finance Manager",
    location: "Pune",
    community: "Marathi",
    verified: true,
  },
  {
    name: "Rahul P.",
    age: 28,
    education: "B.Tech, NIT",
    profession: "Civil Engineer",
    location: "Ahmedabad",
    community: "Patel",
    verified: true,
  },
];

const cities = [
  { name: "Mumbai", profiles: "2,100+" },
  { name: "Delhi NCR", profiles: "1,900+" },
  { name: "Bangalore", profiles: "1,700+" },
  { name: "Ahmedabad", profiles: "1,500+" },
  { name: "Pune", profiles: "1,200+" },
  { name: "Chennai", profiles: "1,100+" },
  { name: "Hyderabad", profiles: "1,000+" },
  { name: "Kolkata", profiles: "900+" },
  { name: "Jaipur", profiles: "800+" },
  { name: "Surat", profiles: "750+" },
  { name: "Lucknow", profiles: "600+" },
  { name: "USA / UK / Canada", profiles: "1,500+" },
];

const successStories = [
  {
    couple: "Priya & Amit",
    location: "Delhi → Mumbai",
    story:
      "We both were skeptical about online matrimony, but MatchPartner's verification process gave us confidence. The AI matching was spot-on!",
    duration: "Matched in 6 months",
    community: "Brahmin",
  },
  {
    couple: "Sunita & Rajesh",
    location: "Bangalore → Chennai",
    story:
      "Being from different states, we never thought we'd find each other. MatchPartner's family collaboration feature helped our families connect beautifully.",
    duration: "Matched in 3 months",
    community: "Rajput",
  },
  {
    couple: "Anjali & Vikram",
    location: "Pune → Hyderabad",
    story:
      "The horoscope matching feature was perfect for our families. Our parents were impressed with the detailed compatibility analysis.",
    duration: "Matched in 4 months",
    community: "Gujarati",
  },
];

function CheckIcon() {
  return (
    <svg
      className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5"
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

export default function Home() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  const matrimonyJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "MatchPartner",
    url: "https://matchpartner.in",
    applicationCategory: "Matrimony",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
      description: "Free profile creation with premium plans starting at ₹999",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "2500",
      bestRating: "5",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(matrimonyJsonLd) }}
      />

      {/* ===== SECTION 1: HERO WITH SEARCH ===== */}
      <section className="relative bg-gradient-to-br from-secondary via-secondary to-primary/90 pt-16 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/wedding/hero-indian-couple.jpg"
            alt=""
            fill
            className="object-cover opacity-[0.08]"
            priority
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Hero Copy */}
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white/90 text-sm font-medium mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                #1 Trusted Hindu Matrimony Platform
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-white leading-tight mb-6">
                Find Your Perfect{" "}
                <span className="text-accent">Life Partner</span> with Trust &
                Tradition
              </h1>
              <p className="text-lg text-white/80 mb-8 max-w-lg">
                10,000+ Aadhaar-verified profiles. AI-powered matchmaking.
                Horoscope compatibility. Family collaboration tools. Start your
                journey today — it&apos;s free.
              </p>

              {/* Trust badges */}
              <div className="flex flex-wrap items-center gap-6 mb-8">
                {[
                  { icon: "✓", text: "100% Verified" },
                  { icon: "🔒", text: "Privacy Protected" },
                  { icon: "🤖", text: "AI Matching" },
                ].map((badge) => (
                  <div
                    key={badge.text}
                    className="flex items-center gap-2 text-white/80 text-sm"
                  >
                    <span className="text-lg">{badge.icon}</span>
                    <span>{badge.text}</span>
                  </div>
                ))}
              </div>

              <WaitlistForm />
            </div>

            {/* Right: Quick Search Form */}
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <h2 className="text-2xl font-bold text-secondary mb-2">
                Find Your Match
              </h2>
              <p className="text-text-muted text-sm mb-6">
                Search from 10,000+ verified profiles
              </p>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-secondary mb-1">
                    I&apos;m looking for
                  </label>
                  <select className="w-full border border-border rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none">
                    <option>Bride</option>
                    <option>Groom</option>
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-secondary mb-1">
                      Age From
                    </label>
                    <select className="w-full border border-border rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none">
                      {Array.from({ length: 23 }, (_, i) => i + 18).map(
                        (age) => (
                          <option key={age} value={age}>
                            {age} years
                          </option>
                        ),
                      )}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-secondary mb-1">
                      Age To
                    </label>
                    <select className="w-full border border-border rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none">
                      {Array.from({ length: 23 }, (_, i) => i + 18).map(
                        (age) => (
                          <option key={age} value={age}>
                            {age} years
                          </option>
                        ),
                      )}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-secondary mb-1">
                    Community
                  </label>
                  <select className="w-full border border-border rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none">
                    <option>All Communities</option>
                    <option>Brahmin</option>
                    <option>Patel</option>
                    <option>Gujarati</option>
                    <option>Marathi</option>
                    <option>Tamil</option>
                    <option>Telugu</option>
                    <option>Bengali</option>
                    <option>Punjabi</option>
                    <option>Rajput</option>
                    <option>Agarwal</option>
                    <option>Kayastha</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-secondary mb-1">
                    City / Location
                  </label>
                  <select className="w-full border border-border rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none">
                    <option>Any Location</option>
                    <option>Mumbai</option>
                    <option>Delhi NCR</option>
                    <option>Bangalore</option>
                    <option>Ahmedabad</option>
                    <option>Pune</option>
                    <option>Chennai</option>
                    <option>Hyderabad</option>
                    <option>Kolkata</option>
                    <option>USA / UK / Canada (NRI)</option>
                  </select>
                </div>
                <Link
                  href="/browse"
                  className="block w-full bg-primary text-white text-center py-3.5 rounded-lg font-semibold hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20"
                >
                  Search Profiles →
                </Link>
                <p className="text-xs text-text-muted text-center">
                  Free to search • 100% verified profiles • No spam
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 2: TRUST STRIP ===== */}
      <section className="bg-white border-b border-border py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "10,000+", label: "Verified Profiles" },
              { value: "500+", label: "Successful Marriages" },
              { value: "50+", label: "Compatibility Factors" },
              { value: "4.8★", label: "User Rating" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-extrabold text-primary">
                  {stat.value}
                </div>
                <p className="text-sm text-text-muted mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 3: BROWSE BY COMMUNITY ===== */}
      <section className="bg-surface py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">
              Browse by Community
            </h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              Find matches within your community. We understand the diversity of
              Hindu traditions and provide specialized matchmaking for every
              community.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {communities.map((community) => (
              <Link
                key={community.name}
                href={community.href}
                className="group bg-white rounded-xl border border-border p-5 hover:shadow-lg hover:border-primary/30 transition-all"
              >
                <span className="text-3xl mb-3 block">{community.icon}</span>
                <h3 className="font-semibold text-secondary group-hover:text-primary transition-colors">
                  {community.name}
                </h3>
                <p className="text-sm text-text-muted mt-1">
                  {community.profiles} profiles
                </p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/browse"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
            >
              View All Communities
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== SECTION 4: FEATURED PROFILES ===== */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              New Profiles
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">
              Featured Verified Profiles
            </h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              Browse recently joined, Aadhaar-verified profiles from
              professionals across India and abroad.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProfiles.map((profile, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-border hover:shadow-lg transition-all overflow-hidden group"
              >
                <div className="h-48 bg-gradient-to-br from-primary/10 via-accent/5 to-surface relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-white shadow-lg flex items-center justify-center text-4xl">
                      {index % 2 === 0 ? "👩" : "👨"}
                    </div>
                  </div>
                  {profile.verified && (
                    <div className="absolute top-3 right-3 bg-green-500 text-white px-2.5 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                      <svg
                        className="w-3 h-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Verified
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-secondary">
                      {profile.name}
                    </h3>
                    <span className="text-sm text-text-muted">
                      {profile.age} yrs
                    </span>
                  </div>
                  <div className="space-y-1.5 text-sm text-text-muted">
                    <p className="flex items-center gap-2">
                      <svg
                        className="w-4 h-4 text-primary flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      {profile.profession}
                    </p>
                    <p className="flex items-center gap-2">
                      <svg
                        className="w-4 h-4 text-primary flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                        />
                      </svg>
                      {profile.education}
                    </p>
                    <p className="flex items-center gap-2">
                      <svg
                        className="w-4 h-4 text-primary flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      {profile.location}
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                    <span className="text-xs bg-primary/10 text-primary px-2.5 py-1 rounded-full font-medium">
                      {profile.community}
                    </span>
                    <Link
                      href="/browse"
                      className="text-primary text-sm font-semibold hover:underline"
                    >
                      View Profile
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/browse"
              className="inline-flex bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20"
            >
              Browse All Profiles →
            </Link>
          </div>
        </div>
      </section>

      {/* ===== SECTION 5: SUCCESS STORIES ===== */}
      <section className="bg-surface py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              Real Love Stories
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">
              Thousands of Happy Couples
            </h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              Discover how Hindu families have found their perfect matches
              through MatchPartner&apos;s trusted platform.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-border overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="h-40 bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-2 shadow-md">
                      <span className="text-3xl">💑</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-bold text-secondary">
                      {story.couple}
                    </h3>
                    <span className="text-xs bg-primary/10 text-primary px-2.5 py-1 rounded-full font-medium">
                      {story.community}
                    </span>
                  </div>
                  <p className="text-sm text-text-muted mb-1">
                    {story.location}
                  </p>
                  <p className="text-sm text-text-muted italic mt-3">
                    &ldquo;{story.story}&rdquo;
                  </p>
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                    <span className="text-xs text-accent font-semibold">
                      {story.duration}
                    </span>
                    <div className="flex gap-0.5">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          className="w-4 h-4 text-accent"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/success-stories"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
            >
              Read More Success Stories
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== SECTION 6: WHY CHOOSE US ===== */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">
              Why Choose MatchPartner?
            </h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              Every feature is designed to help you find a genuine, compatible
              life partner faster and safer.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "🛡️",
                title: "100% Aadhaar Verified",
                desc: "Every profile undergoes government ID verification. Zero fake profiles, zero scams.",
              },
              {
                icon: "🤖",
                title: "AI-Powered Matching",
                desc: "Our AI analyzes 50+ compatibility factors including values, horoscope, and lifestyle.",
              },
              {
                icon: "👨‍👩‍👧‍👦",
                title: "Family Collaboration",
                desc: "Invite parents and siblings to review matches and shortlist together as a family.",
              },
              {
                icon: "🔒",
                title: "Complete Privacy",
                desc: "Control who sees your profile, photos, and contact details. Your privacy, your rules.",
              },
              {
                icon: "🕉️",
                title: "Community Aware",
                desc: "Understands Hindu traditions, sub-communities, Gotra, and cultural preferences.",
              },
              {
                icon: "📊",
                title: "Kundali Matching",
                desc: "Built-in horoscope compatibility scoring for traditional Hindu marriage compatibility.",
              },
              {
                icon: "💬",
                title: "Secure Communication",
                desc: "End-to-end encrypted messaging, video calls, and voice notes with your matches.",
              },
              {
                icon: "⭐",
                title: "Premium Matchmaking",
                desc: "Dedicated relationship managers for personalized, white-glove matchmaking service.",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="p-6 rounded-xl border border-border hover:shadow-lg hover:border-primary/20 transition-all"
              >
                <span className="text-3xl mb-4 block">{feature.icon}</span>
                <h3 className="text-lg font-semibold text-secondary mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-text-muted">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 7: HOW IT WORKS ===== */}
      <section className="bg-surface py-20 relative overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Simple 4-Step Process
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">
              From Profile to Partner — Here&apos;s How It Works
            </h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              Getting started takes just 5 minutes. Our guided process helps you
              create a compelling profile and start meeting matches right away.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: 1,
                title: "Create Profile",
                desc: "Sign up free, tell us about yourself and your partner preferences.",
                detail: "5 min setup",
                icon: "📝",
              },
              {
                step: 2,
                title: "Get Verified",
                desc: "Complete Aadhaar verification to earn the trusted Verified badge.",
                detail: "100% secure",
                icon: "✅",
              },
              {
                step: 3,
                title: "Discover Matches",
                desc: "Browse AI-recommended profiles and shortlist with your family.",
                detail: "AI-powered",
                icon: "💕",
              },
              {
                step: 4,
                title: "Connect & Meet",
                desc: "Message, video call, and meet your match on your own terms.",
                detail: "At your pace",
                icon: "🤝",
              },
            ].map((item) => (
              <div key={item.step} className="relative text-center">
                <div className="flex flex-col items-center">
                  <div className="relative mb-4">
                    <div className="w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center text-3xl">
                      {item.icon}
                    </div>
                    <span className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center shadow">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-secondary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-text-muted mb-3">{item.desc}</p>
                  <span className="inline-block text-xs bg-green-50 text-green-700 px-3 py-1 rounded-full font-medium">
                    {item.detail}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 8: BROWSE BY CITY ===== */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">
              Find Matches in Your City
            </h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              Browse verified Hindu matrimony profiles from major cities across
              India and abroad.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {cities.map((city) => (
              <Link
                key={city.name}
                href={`/browse?city=${city.name.toLowerCase().replace(/\s+/g, "-")}`}
                className="group bg-surface rounded-xl p-5 hover:bg-primary hover:shadow-lg transition-all text-center"
              >
                <h3 className="font-semibold text-secondary group-hover:text-white transition-colors">
                  {city.name}
                </h3>
                <p className="text-sm text-text-muted group-hover:text-white/80 transition-colors mt-1">
                  {city.profiles} profiles
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 9: COMMUNITIES (Dark) ===== */}
      <section className="bg-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Serving Hindu Communities Worldwide
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              MatchPartner understands the diversity within Hindu traditions and
              provides community-specific matching for families across the
              globe.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Brahmin Matrimony",
                desc: "Specialized matching with Gotra and Pravara awareness.",
                icon: "🙏",
              },
              {
                name: "Gujarati Matrimony",
                desc: "Dedicated profiles for Patel, Jain, and Gujarati families.",
                icon: "🎭",
              },
              {
                name: "Tamil Matrimony",
                desc: "Nakshatram and Rasi compatibility for Tamil families.",
                icon: "🌺",
              },
              {
                name: "NRI Matrimony",
                desc: "Connecting NRI families in USA, UK, Canada with homeland.",
                icon: "✈️",
              },
              {
                name: "Marathi Matrimony",
                desc: "Community-specific profiles for Marathi traditions.",
                icon: "🏛️",
              },
              {
                name: "Bengali Matrimony",
                desc: "Culturally aware matching with Gotro consideration.",
                icon: "🎨",
              },
              {
                name: "Punjabi Matrimony",
                desc: "Profiles for Punjabi Hindu families including Khatri.",
                icon: "🎵",
              },
              {
                name: "Telugu Matrimony",
                desc: "Matching with caste and sub-caste awareness.",
                icon: "💎",
              },
            ].map((item) => (
              <Link
                key={item.name}
                href={`/browse?community=${item.name.split(" ")[0].toLowerCase()}`}
                className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"
              >
                <span className="text-3xl mb-3 block">{item.icon}</span>
                <h3 className="text-white font-semibold mb-2 group-hover:text-accent transition-colors">
                  {item.name}
                </h3>
                <p className="text-white/60 text-sm">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 10: APP DOWNLOAD + TESTIMONIALS ===== */}
      <section className="bg-surface py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Testimonials */}
            <div>
              <h2 className="text-3xl font-bold text-secondary mb-8">
                What Our Members Say
              </h2>
              <div className="space-y-6">
                {[
                  {
                    quote:
                      "The family collaboration feature was a game-changer. My wife and I could review profiles together while our daughter had final say.",
                    name: "Mohan S.",
                    role: "Father, Hyderabad",
                    metric: "Found match in 8 weeks",
                  },
                  {
                    quote:
                      "Living in London, I needed a platform that understood both modern expectations and traditional values. MatchPartner nailed it.",
                    name: "Deepa R.",
                    role: "Finance Manager, London UK",
                    metric: "3x more compatible matches",
                  },
                  {
                    quote:
                      "The AI recommendations saved me hours of browsing. Every suggestion was genuinely relevant to what I was looking for.",
                    name: "Arjun T.",
                    role: "Product Manager, Bangalore",
                    metric: "Engaged in 3 months",
                  },
                ].map((t) => (
                  <div
                    key={t.name}
                    className="bg-white p-6 rounded-xl border border-border"
                  >
                    <div className="flex gap-0.5 mb-3">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <svg
                          key={s}
                          className="w-4 h-4 text-accent"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-sm text-text-muted italic mb-3">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-secondary text-sm">
                          {t.name}
                        </p>
                        <p className="text-xs text-text-muted">{t.role}</p>
                      </div>
                      <span className="text-xs font-semibold text-accent bg-accent/10 px-2.5 py-1 rounded-full">
                        {t.metric}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* App Download */}
            <div className="text-center lg:text-left">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                Coming Soon
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">
                MatchPartner on Your Phone
              </h2>
              <p className="text-text-muted mb-6 max-w-md mx-auto lg:mx-0">
                Get instant notifications for new matches, chat on the go, and
                manage your profile from anywhere. The MatchPartner app is
                launching soon!
              </p>
              <ul className="space-y-3 mb-8 max-w-md mx-auto lg:mx-0">
                {[
                  "Instant match notifications",
                  "Chat and video call on the go",
                  "Quick profile management",
                  "Secure and private",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckIcon />
                    <span className="text-sm text-text-muted">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <div className="bg-secondary text-white px-6 py-3 rounded-lg flex items-center gap-3 shadow-lg">
                  <svg
                    className="w-8 h-8"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      d="M17.523 2.146l-5.478 5.478L6.567 2.146 1.089 7.624l5.478 5.478-5.478 5.478 5.478 5.478 5.478-5.478 5.478 5.478 5.478-5.478-5.478-5.478 5.478-5.478z"
                      opacity="0.3"
                    />
                    <path d="M3.002 22.002l6.5-10.998L3.002 2.002l2 0 5.5 9.002-5.5 8.998zM12.502 11.004L19.002 2l2 0-7.5 11 7.5 11-2 0z" />
                  </svg>
                  <div className="text-left">
                    <p className="text-[10px] text-white/60">Coming soon on</p>
                    <p className="text-sm font-semibold">Google Play</p>
                  </div>
                </div>
                <div className="bg-secondary text-white px-6 py-3 rounded-lg flex items-center gap-3 shadow-lg">
                  <svg
                    className="w-8 h-8"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83" />
                    <path d="M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  <div className="text-left">
                    <p className="text-[10px] text-white/60">Coming soon on</p>
                    <p className="text-sm font-semibold">App Store</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 11: FAQ ===== */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              Everything you need to know about MatchPartner. Can&apos;t find
              the answer?{" "}
              <Link href="/contact" className="text-primary hover:underline">
                Contact our team
              </Link>
              .
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {faqItems.map((item) => (
              <div
                key={item.q}
                className="p-6 rounded-xl bg-surface border border-border"
              >
                <h3 className="font-semibold text-secondary mb-3">{item.q}</h3>
                <p className="text-sm text-text-muted">{item.a}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
            >
              View All FAQs
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== SECTION 12: FINAL CTA ===== */}
      <section className="bg-gradient-to-r from-primary to-secondary py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Your Perfect Hindu Match is Waiting
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Join 10,000+ verified profiles on India&apos;s most trusted Hindu
            matrimony platform. Aadhaar-verified. AI-powered. Family-friendly.
          </p>
          <WaitlistForm variant="dark" />
          <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-sm text-white/60">
            <Link href="/pricing" className="hover:text-white transition">
              View Pricing
            </Link>
            <Link href="/about" className="hover:text-white transition">
              About Us
            </Link>
            <Link
              href="/success-stories"
              className="hover:text-white transition"
            >
              Success Stories
            </Link>
            <Link href="/safety" className="hover:text-white transition">
              Safety Tips
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
