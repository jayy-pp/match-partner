import type { Metadata } from "next";
import AnimatedCounter from "@/components/AnimatedCounter";
import ComparisonTable from "@/components/ComparisonTable";
import SocialProofNotification from "@/components/SocialProofNotification";
import HeroVisual from "@/components/visuals/HeroVisual";
import ScrollToWaitlist from "@/components/ScrollToWaitlist";
import WaitlistForm from "@/components/WaitlistForm";
import Image from "next/image";

export const metadata: Metadata = {
  title: "MatchPartner — Trusted Hindu Matrimony Platform",
  description:
    "Where Hindu Traditions Meet Trusted Matchmaking. Launching soon with Aadhaar-verified profiles, AI-powered recommendations, and family-assisted tools. Join the waitlist.",
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

function StarIcons() {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4 text-accent"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <SocialProofNotification />

      {/* ===== SECTION 1: HERO ===== */}
      <section className="relative bg-gradient-to-b from-surface via-white to-white pt-24 pb-16 overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/wedding/hero-indian-couple.jpg"
            alt=""
            fill
            className="object-cover opacity-[0.06]"
            priority
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Social proof strip */}
          <div className="flex flex-col items-center gap-3 mb-6">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {[
                  { src: "/images/profiles/ananya.jpg", alt: "Ananya" },
                  { src: "/images/profiles/vikram.jpg", alt: "Vikram" },
                  { src: "/images/profiles/meera.jpg", alt: "Meera" },
                  { src: "/images/profiles/arjun.jpg", alt: "Arjun" },
                ].map((profile, i) => (
                  <img
                    key={i}
                    src={profile.src}
                    alt={profile.alt}
                    className="w-8 h-8 rounded-full object-cover border-2 border-white"
                  />
                ))}
              </div>
              <StarIcons />
              <span className="text-sm text-text-muted">
                2,000+ families on the waitlist
              </span>
            </div>
          </div>

          {/* Eyebrow pill */}
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              For families seeking verified, meaningful connections
            </span>
          </div>

          {/* H1 */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center max-w-4xl mx-auto leading-tight mb-6">
            Finding your life partner{" "}
            <span className="text-primary">
              should feel like destiny, not a gamble.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-text-muted text-center max-w-2xl mx-auto mb-8">
            MatchPartner combines Aadhaar-verified profiles, AI-powered match
            recommendations, and family collaboration tools — so you can find
            your perfect match with confidence.
          </p>

          {/* Launching Soon Badge */}
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-accent/10 text-accent text-sm font-bold border border-accent/20">
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
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Launching Soon — Join the Waitlist
            </span>
          </div>

          {/* Waitlist Form */}
          <WaitlistForm />

          {/* Stats */}
          {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mt-12 mb-16">
            {[
              { end: 2000, suffix: "+", label: "Waitlist Signups" },
              { end: 50, suffix: "+", label: "Compatibility Factors" },
              { end: 20, suffix: "+", label: "Countries Covered" },
              { end: 100, suffix: "%", label: "Profile Verification" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-primary">
                  <AnimatedCounter end={stat.end} suffix={stat.suffix} />
                </div>
                <p className="text-sm text-text-muted mt-1">{stat.label}</p>
              </div>
            ))}
          </div> */}

          {/* Hero Visual */}
          {/* <div className="max-w-5xl mx-auto">
            <HeroVisual />
          </div> */}
        </div>
      </section>

      {/* ===== SECTION 2: TRUST STRIP ===== */}
      {/* <section className="bg-surface/50 border-y border-border py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-text-muted mb-6">
            Trusted by families across India and worldwide
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {[
              "Featured in Times of India",
              "NASSCOM Recognized",
              "ISO 27001 Certified",
              "DPIIT Registered",
              "Google Cloud Partner",
              "Aadhaar Enabled",
            ].map((name) => (
              <span
                key={name}
                className="text-text-muted/60 font-semibold text-sm tracking-wide uppercase"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section> */}

      {/* ===== SECTION 3: BENEFITS GRID ===== */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Why MatchPartner
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">
              Stop scrolling through fake profiles.
              <br />
              Start meeting verified matches.
            </h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              Every feature is designed around one goal: helping you find a
              genuine, compatible life partner faster.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ),
                color: "bg-green-100 text-green-600",
                title: "Zero Fake Profiles",
                desc: "Every single profile is Aadhaar-verified and manually reviewed. You'll never waste time on fraudulent or inactive accounts.",
              },
              {
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                ),
                color: "bg-primary/10 text-primary",
                title: "Find Matches 5x Faster",
                desc: "Our AI analyzes 50+ compatibility factors to recommend matches that align with your values, community, and preferences.",
              },
              {
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                ),
                color: "bg-blue-100 text-blue-600",
                title: "Your Privacy, Your Rules",
                desc: "Control exactly who sees your profile, photos, and contact details. Share information only when you're ready.",
              },
              {
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                ),
                color: "bg-accent/10 text-accent",
                title: "Involve Your Family",
                desc: "Invite parents and siblings to collaborate on your search. Everyone can review matches and shortlist together.",
              },
            ].map((benefit) => (
              <div
                key={benefit.title}
                className="p-6 rounded-xl border border-border hover:shadow-lg hover:border-primary/20 transition-all group"
              >
                <div
                  className={`w-12 h-12 rounded-xl ${benefit.color} flex items-center justify-center mb-4`}
                >
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-secondary mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-text-muted">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 4: FEATURES (alternating) ===== */}
      <section className="bg-surface py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {/* Feature 1 */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* <p className="text-lg italic text-text-muted mb-3">
                &ldquo;We checked 200+ profiles on other sites. Only
                MatchPartner had zero fakes.&rdquo;
              </p> */}
              <h3 className="text-2xl sm:text-3xl font-bold text-secondary mb-4">
                Aadhaar-Based Profile Verification
              </h3>
              <p className="text-text-muted mb-6">
                Every profile undergoes government ID verification, phone
                confirmation, and photo authentication. Our team manually
                reviews flagged accounts to maintain the highest trust standards
                in Indian matrimony.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "Government ID verification (Aadhaar/Passport)",
                  "Live photo verification with AI face matching",
                  "Phone number and email confirmation",
                  "Manual review of reported profiles within 24 hours",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckIcon />
                    <span className="text-sm text-text-muted">{item}</span>
                  </li>
                ))}
              </ul>
              {/* <div className="bg-white p-4 rounded-xl border border-border">
                <StarIcons />
                <p className="text-sm text-text-muted mt-2 italic">
                  &ldquo;As parents, our biggest concern was safety.
                  MatchPartner&apos;s verification gave us peace of mind.&rdquo;
                </p>
                <p className="text-sm font-semibold text-secondary mt-2">
                  Sunita & Ramesh K. — Parents from Mumbai
                </p>
              </div> */}
              <ScrollToWaitlist className="inline-flex items-center gap-1 text-primary font-medium mt-4 hover:gap-2 transition-all">
                Get early access
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
              </ScrollToWaitlist>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <div className="aspect-[4/3] relative">
                <Image
                  src="/images/wedding/indian-couple-traditional.jpg"
                  alt="Verified Indian couple in traditional wedding attire"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-green-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-secondary">
                        100% Aadhaar Verified
                      </p>
                      <p className="text-xs text-text-muted">
                        Every profile is authenticated
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative rounded-2xl overflow-hidden shadow-xl">
              <div className="aspect-[4/3] relative">
                <Image
                  src="/images/wedding/indian-wedding-couple.jpg"
                  alt="Happy Indian couple matched through AI recommendations"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-secondary">
                        95% Compatibility Match
                      </p>
                      <p className="text-xs text-text-muted">
                        AI-powered recommendations
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              {/* <p className="text-lg italic text-text-muted mb-3">
                &ldquo;Got 5 highly compatible matches in my first week — took 3
                months on other sites.&rdquo;
              </p> */}
              <h3 className="text-2xl sm:text-3xl font-bold text-secondary mb-4">
                AI-Powered Match Recommendations
              </h3>
              <p className="text-text-muted mb-6">
                Our matching algorithm goes beyond basic filters. It understands
                community preferences, family values, horoscope compatibility,
                and lifestyle choices to find genuinely compatible partners.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "50+ compatibility factors analyzed per match",
                  "Learns from your interactions and preferences",
                  "Community and sub-community aware matching",
                  "Horoscope (Kundali) compatibility scoring",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckIcon />
                    <span className="text-sm text-text-muted">{item}</span>
                  </li>
                ))}
              </ul>
              {/* <div className="bg-white p-4 rounded-xl border border-border">
                <StarIcons />
                <p className="text-sm text-text-muted mt-2 italic">
                  &ldquo;The AI recommendations were spot-on. Found my fiancee
                  within 2 months of joining.&rdquo;
                </p>
                <p className="text-sm font-semibold text-secondary mt-2">
                  Vikram D. — Software Engineer, Bangalore
                </p>
              </div> */}
              <ScrollToWaitlist className="inline-flex items-center gap-1 text-primary font-medium mt-4 hover:gap-2 transition-all">
                Join the waitlist
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
              </ScrollToWaitlist>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* <p className="text-lg italic text-text-muted mb-3">
                &ldquo;Finally, a site where I control who sees my photos and
                details.&rdquo;
              </p> */}
              <h3 className="text-2xl sm:text-3xl font-bold text-secondary mb-4">
                Privacy-Controlled Profile Visibility
              </h3>
              <p className="text-text-muted mb-6">
                Your matrimonial search is deeply personal. MatchPartner gives
                you granular control over every aspect of your profile
                visibility, so you share information only when comfortable.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "Choose who can view your profile (all, verified, shortlisted)",
                  "Photo access on request with one-click approve/deny",
                  "Hide contact details until you're ready to connect",
                  "Block specific profiles or communities silently",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckIcon />
                    <span className="text-sm text-text-muted">{item}</span>
                  </li>
                ))}
              </ul>
              {/* <div className="bg-white p-4 rounded-xl border border-border">
                <StarIcons />
                <p className="text-sm text-text-muted mt-2 italic">
                  &ldquo;I loved that I could share photos only with matches I
                  was genuinely interested in.&rdquo;
                </p>
                <p className="text-sm font-semibold text-secondary mt-2">
                  Priya M. — Teacher, Chennai
                </p>
              </div> */}
              <ScrollToWaitlist className="inline-flex items-center gap-1 text-primary font-medium mt-4 hover:gap-2 transition-all">
                Be first to try it
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
              </ScrollToWaitlist>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <div className="aspect-[4/3] relative">
                <Image
                  src="/images/wedding/romantic-indian-couple.jpg"
                  alt="Indian couple in traditional attire with privacy-controlled profiles"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-blue-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-secondary">
                        Your Privacy, Your Rules
                      </p>
                      <p className="text-xs text-text-muted">
                        Full control over who sees your profile
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative rounded-2xl overflow-hidden shadow-xl">
              <div className="aspect-[4/3] relative">
                <Image
                  src="/images/wedding/wedding-ceremony-portrait.jpg"
                  alt="Indian family celebrating traditional wedding ceremony together"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-accent"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-secondary">
                        Family Collaboration
                      </p>
                      <p className="text-xs text-text-muted">
                        Search together as a family
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              {/* <p className="text-lg italic text-text-muted mb-3">
                &ldquo;My parents and I shortlisted together — made the whole
                process so much easier.&rdquo;
              </p> */}
              <h3 className="text-2xl sm:text-3xl font-bold text-secondary mb-4">
                Family-Assisted Matchmaking Tools
              </h3>
              <p className="text-text-muted mb-6">
                Marriage is a family affair in Hindu tradition. MatchPartner
                embraces this by letting family members collaborate on the
                search, review profiles together, and make decisions as a team.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "Invite up to 5 family members to collaborate",
                  "Shared shortlist with voting and comments",
                  "Separate logins for parents with tailored views",
                  "Family preference matching (values, community, lifestyle)",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckIcon />
                    <span className="text-sm text-text-muted">{item}</span>
                  </li>
                ))}
              </ul>
              {/* <div className="bg-white p-4 rounded-xl border border-border">
                <StarIcons />
                <p className="text-sm text-text-muted mt-2 italic">
                  &ldquo;As an NRI parent, being able to help my son find a
                  match from abroad was invaluable.&rdquo;
                </p>
                <p className="text-sm font-semibold text-secondary mt-2">
                  Rajesh P. — Father, New Jersey, USA
                </p>
              </div> */}
              <ScrollToWaitlist className="inline-flex items-center gap-1 text-primary font-medium mt-4 hover:gap-2 transition-all">
                Get notified at launch
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
              </ScrollToWaitlist>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 5: HOW IT WORKS ===== */}
      <section className="bg-white py-20 relative overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Simple 4-Step Process
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">
              From profile to partner — here&apos;s how it works
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
                title: "Create Your Profile",
                desc: "Sign up free and tell us about yourself — your background, preferences, and what you're looking for in a life partner.",
                detail: "Takes just 5 minutes",
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                ),
              },
              {
                step: 2,
                title: "Get Verified",
                desc: "Complete our quick Aadhaar verification to earn the Verified badge. This unlocks more matches and builds trust with potential partners.",
                detail: "100% secure process",
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                ),
              },
              {
                step: 3,
                title: "Discover Matches",
                desc: "Browse AI-recommended profiles, filter by your preferences, and shortlist candidates. Invite family members to help review.",
                detail: "AI finds your best matches",
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                ),
              },
              {
                step: 4,
                title: "Connect & Meet",
                desc: "Express interest, exchange messages, and take the relationship forward at your own pace — with your family's involvement if you choose.",
                detail: "On your terms",
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                ),
              },
            ].map((item) => (
              <div key={item.step} className="relative text-center">
                <div className="flex flex-col items-center">
                  <div className="relative mb-4">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white">
                        {item.icon}
                      </div>
                    </div>
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-accent text-white text-xs font-bold flex items-center justify-center">
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

          <div className="mt-12">
            <WaitlistForm />
          </div>
        </div>
      </section>

      {/* ===== SECTION 6: COMPARISON TABLE ===== */}
      {/* <section className="bg-surface py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">
              MatchPartner vs. the alternatives
            </h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              See how MatchPartner compares to other matrimony sites and
              traditional matchmaking approaches.
            </p>
          </div>
          <ComparisonTable />
        </div>
      </section> */}

      {/* ===== SECTION 7: INDUSTRIES (Communities) ===== */}
      <section className="bg-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Serving Hindu communities worldwide
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
                desc: "Specialized matching for Brahmin families with Gotra and Pravara awareness.",
                icon: "🙏",
              },
              {
                name: "Marathi Matrimony",
                desc: "Community-specific profiles for Marathi-speaking families and traditions.",
                icon: "🏛️",
              },
              {
                name: "Tamil Matrimony",
                desc: "Tamil Nadu focused matching with Nakshatram and Rasi compatibility.",
                icon: "🌺",
              },
              {
                name: "NRI Matrimony",
                desc: "Connecting NRI families in USA, UK, Canada, and Australia with homeland matches.",
                icon: "✈️",
              },
              {
                name: "Gujarati Matrimony",
                desc: "Dedicated profiles for Gujarati communities including Patel and Jain families.",
                icon: "🎭",
              },
              {
                name: "Bengali Matrimony",
                desc: "Culturally aware matching for Bengali families with Gotro and Kulin consideration.",
                icon: "🎨",
              },
              {
                name: "Punjabi Matrimony",
                desc: "Community profiles for Punjabi Hindu families including Khatri and Arora.",
                icon: "🎵",
              },
              {
                name: "Telugu Matrimony",
                desc: "Matching for Telugu-speaking families with caste and sub-caste awareness.",
                icon: "💎",
              },
            ].map((item) => (
              <div
                key={item.name}
                className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <span className="text-3xl mb-3 block">{item.icon}</span>
                <h3 className="text-white font-semibold mb-2">{item.name}</h3>
                <p className="text-white/60 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 8: TESTIMONIALS ===== */}
      {/* <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <blockquote className="text-2xl sm:text-3xl font-bold text-secondary max-w-3xl mx-auto italic">
              &ldquo;MatchPartner helped us find a verified, compatible match in
              just 6 weeks. Other sites took months with no results.&rdquo;
            </blockquote>
            <p className="text-text-muted mt-4">
              — Kavita & Suresh M., Married through MatchPartner (2025)
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                situation: "Parents looking for a match for their daughter",
                quote:
                  "The family collaboration feature was a game-changer. My wife and I could review profiles together while our daughter had final say.",
                name: "Mohan S.",
                title: "Father",
                location: "Hyderabad",
                metric: "Found match in 8 weeks",
              },
              {
                situation: "NRI professional seeking a partner back home",
                quote:
                  "Living in London, I needed a platform that understood both modern expectations and traditional values. MatchPartner nailed it.",
                name: "Deepa R.",
                title: "Finance Manager",
                location: "London, UK",
                metric: "3x more compatible matches",
              },
              {
                situation: "Working professional with limited time",
                quote:
                  "The AI recommendations saved me hours of browsing. Every match suggestion was genuinely relevant to what I was looking for.",
                name: "Arjun T.",
                title: "Product Manager",
                location: "Bangalore",
                metric: "Engaged in 3 months",
              },
            ].map((t) => (
              <div
                key={t.name}
                className="p-6 rounded-xl border border-border hover:shadow-lg transition-shadow"
              >
                <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {t.situation}
                </span>
                <div className="mt-4 mb-4">
                  <StarIcons />
                </div>
                <p className="text-text-muted text-sm italic mb-4">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-secondary text-sm">
                      {t.name}
                    </p>
                    <p className="text-xs text-text-muted">
                      {t.title}, {t.location}
                    </p>
                  </div>
                  <span className="text-xs font-semibold text-accent bg-accent/10 px-2 py-1 rounded-full">
                    {t.metric}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* ===== SECTION 9: FAQ ===== */}
      <section className="bg-surface py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">
              Frequently asked questions
            </h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              Everything you need to know about MatchPartner. Can&apos;t find
              the answer?{" "}
              <a href="/contact" className="text-primary hover:underline">
                Contact our team
              </a>
              .
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {faqItems.map((item) => (
              <div
                key={item.q}
                className="p-6 rounded-xl bg-white border border-border"
              >
                <h3 className="font-semibold text-secondary mb-3">{item.q}</h3>
                <p className="text-sm text-text-muted">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 10: BLOG PREVIEW ===== */}
      {/* <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                From Our Blog
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-secondary">
                Insights for your matrimonial journey
              </h2>
            </div>
            <a
              href="/blog"
              className="hidden md:inline-flex items-center gap-1 text-primary font-medium hover:gap-2 transition-all"
            >
              View all articles
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
            </a>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            <a
              href="/blog/complete-guide-hindu-matrimony-2026"
              className="group block p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 border border-border hover:shadow-lg transition-shadow"
            >
              <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                Guide
              </span>
              <h3 className="text-xl font-bold text-secondary mt-4 mb-3 group-hover:text-primary transition-colors">
                The Complete Guide to Hindu Matrimony in 2026
              </h3>
              <p className="text-text-muted text-sm mb-6">
                Everything families need to know about modern Hindu matchmaking
                — from creating the perfect profile to navigating the first
                meeting.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-semibold">
                  A
                </div>
                <div>
                  <p className="text-sm font-medium text-secondary">
                    Anita Sharma
                  </p>
                  <p className="text-xs text-text-muted">
                    Head of Community · 12 min read
                  </p>
                </div>
              </div>
            </a>

            <div className="space-y-6">
              <a
                href="/blog/how-matchpartner-helps-nri-families"
                className="group flex gap-4 p-4 rounded-xl border border-border hover:shadow-md transition-shadow"
              >
                <div className="w-24 h-24 flex-shrink-0 rounded-lg bg-gradient-to-br from-accent/10 to-primary/10" />
                <div>
                  <span className="text-xs text-text-muted">
                    NRI Families · 8 min read
                  </span>
                  <h3 className="text-base font-semibold text-secondary mt-1 group-hover:text-primary transition-colors">
                    How MatchPartner Helps NRI Families Find Matches Back Home
                  </h3>
                  <p className="text-xs text-text-muted mt-1">By Rahul Nair</p>
                </div>
              </a>
              <a
                href="/blog/aadhaar-verification-step-by-step"
                className="group flex gap-4 p-4 rounded-xl border border-border hover:shadow-md transition-shadow"
              >
                <div className="w-24 h-24 flex-shrink-0 rounded-lg bg-gradient-to-br from-green-100 to-blue-100" />
                <div>
                  <span className="text-xs text-text-muted">
                    Tutorial · 6 min read
                  </span>
                  <h3 className="text-base font-semibold text-secondary mt-1 group-hover:text-primary transition-colors">
                    Aadhaar Profile Verification: A Step-by-Step Guide
                  </h3>
                  <p className="text-xs text-text-muted mt-1">
                    By Priya Deshmukh
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section> */}

      {/* ===== SECTION 11: TL;DR CTA PANEL ===== */}
      <section className="bg-gradient-to-r from-primary to-secondary py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white text-sm font-medium mb-6">
            TL;DR
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Verified profiles. AI-powered matches. Family collaboration. Your
            perfect partner is waiting.
          </h2>
          <p className="text-white/70 text-lg mb-8">
            Join 10,000+ Hindu families already using MatchPartner to find
            trusted, compatible life partners.
          </p>
          <WaitlistForm variant="dark" />
        </div>
      </section>
    </>
  );
}
