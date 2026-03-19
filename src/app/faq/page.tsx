import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | MatchPartner",
  description:
    "Get answers to common questions about MatchPartner Hindu matrimony platform — profile verification, matching, premium plans, privacy, and more.",
  alternates: {
    canonical: "https://matchpartner.in/faq",
  },
  openGraph: {
    title: "Frequently Asked Questions | MatchPartner",
    description:
      "Get answers to common questions about MatchPartner Hindu matrimony platform — profile verification, matching, premium plans, privacy, and more.",
    url: "https://matchpartner.in/faq",
  },
};

const categories = [
  {
    id: "getting-started",
    name: "Getting Started",
    icon: "🚀",
    faqs: [
      {
        q: "How do I create a profile on MatchPartner?",
        a: "You can register for free in under five minutes. Visit the sign-up page, enter your basic details, upload a photo, and complete the preference questionnaire. Our guided flow walks you through every step so your profile is search-ready from day one.",
      },
      {
        q: "Is MatchPartner only for Hindu families?",
        a: "Yes, MatchPartner is designed exclusively for Hindu families seeking matrimonial alliances. We understand community-specific traditions, gotra considerations, and cultural values. This focused approach lets us deliver more relevant matches than general matrimony portals.",
      },
      {
        q: "Can NRI members use MatchPartner?",
        a: "Absolutely. MatchPartner serves Hindu families across 20+ countries including the US, UK, Canada, and Australia. NRI members get dedicated search filters, timezone-aware communication tools, and support for international verification documents.",
      },
      {
        q: "Do I need to pay to create a profile?",
        a: "No, profile creation is completely free. The free tier lets you build a detailed profile, browse verified matches, and send up to five interests daily. Premium plans unlock advanced features like unlimited messaging and a dedicated relationship manager.",
      },
      {
        q: "How long does it take to find a match?",
        a: "Most members receive their first compatible recommendations within 24 hours of completing their profile. On average, members shortlist a serious match within 45 days. Results vary based on preferences, location, and profile completeness.",
      },
    ],
  },
  {
    id: "profile-verification",
    name: "Profile & Verification",
    icon: "✅",
    faqs: [
      {
        q: "How does MatchPartner verify profiles?",
        a: "Every profile undergoes a three-step verification process — Aadhaar-based identity confirmation, phone number OTP validation, and AI-assisted photo authentication. This ensures you only interact with genuine individuals and eliminates fake or duplicate accounts.",
      },
      {
        q: "What documents are needed for verification?",
        a: "You need a valid Aadhaar card (or passport for NRI members), a working mobile number, and a recent photograph. Optionally, you can submit education and employment documents to earn a Verified Professional badge on your profile.",
      },
      {
        q: "Can family members manage a profile?",
        a: "Yes. MatchPartner supports family-assisted matchmaking. You can invite up to five family members who can review matches, shortlist candidates, and collaborate on partner preferences — all while the primary member retains full privacy controls.",
      },
      {
        q: "How do I improve my profile visibility?",
        a: "Complete all profile sections including horoscope, family details, and lifestyle preferences. Add multiple verified photos and write a detailed personal description. Fully completed profiles receive up to three times more views than incomplete ones.",
      },
    ],
  },
  {
    id: "matching-communication",
    name: "Matching & Communication",
    icon: "💬",
    faqs: [
      {
        q: "How does the AI match recommendation engine work?",
        a: "Our AI analyses over 50 compatibility factors including community, education, career, family values, horoscope alignment, and lifestyle choices. It learns from your swipe and shortlist behaviour to refine suggestions, delivering increasingly accurate matches over time.",
      },
      {
        q: "Does MatchPartner support horoscope matching?",
        a: "Yes. You can upload your Kundali or enter birth details for automatic Kundali generation. Our system calculates Guna Milan scores and highlights Manglik status. Horoscope compatibility is factored into AI recommendations when you enable this preference.",
      },
      {
        q: "How do I communicate with a match?",
        a: "Start by sending an interest request. Once accepted, you can exchange messages through our secure in-app chat. Premium members also get access to audio and video calling features — all within the platform for your safety and convenience.",
      },
      {
        q: "Can I filter matches by community or sub-caste?",
        a: "Yes. MatchPartner offers detailed community and sub-caste filters along with gotra preferences. You can also filter by mother tongue, education level, profession, location, and dietary habits to find matches that align with your family values.",
      },
      {
        q: "What happens after both sides express interest?",
        a: "When interest is mutual, both profiles are notified and a private chat channel opens automatically. You can then share additional photos, schedule video calls, and exchange verified contact details when both parties are comfortable proceeding.",
      },
    ],
  },
  {
    id: "premium-plans",
    name: "Premium Plans",
    icon: "💎",
    faqs: [
      {
        q: "What premium plans does MatchPartner offer?",
        a: "MatchPartner offers three paid tiers — Premium at Rs 999 for three months, Gold at Rs 2,499 for six months, and Elite at Rs 4,999 for twelve months. Each tier unlocks additional features like priority visibility, unlimited messaging, and dedicated relationship managers.",
      },
      {
        q: "What payment methods are accepted?",
        a: "We accept credit and debit cards (Visa, Mastercard, RuPay), UPI payments via Google Pay, PhonePe, and Paytm, net banking from 50+ banks, and digital wallets. NRI members can pay via international cards and PayPal in USD or GBP.",
      },
      {
        q: "Is there a refund policy?",
        a: "Yes, we offer a seven-day money-back guarantee on every paid plan. If you are not satisfied within seven days of purchase, contact support for a full refund. After seven days, refunds are prorated based on the unused portion of your subscription.",
      },
      {
        q: "Can I upgrade my plan mid-subscription?",
        a: "Yes, you can upgrade at any time. The remaining value of your current plan is credited toward the higher tier, so you only pay the difference. All your matches, conversations, and shortlists are preserved during the transition seamlessly.",
      },
    ],
  },
  {
    id: "privacy-safety",
    name: "Privacy & Safety",
    icon: "🔒",
    faqs: [
      {
        q: "What privacy controls does MatchPartner offer?",
        a: "You have granular control over profile visibility, photo access, and contact details. Options include restricting views to verified members only, photo sharing on request, hidden contact information, and the ability to block specific profiles or communities.",
      },
      {
        q: "How does MatchPartner protect my personal data?",
        a: "All data is encrypted using 256-bit SSL during transmission and AES-256 at rest. We follow DPDP Act guidelines, never share information with third parties, and conduct regular security audits. Your data is stored in SOC 2-certified Indian data centres.",
      },
      {
        q: "Can I report or block a user?",
        a: "Yes. Every profile has a Report and Block option. Our safety team reviews reports within 24 hours and takes swift action including warnings, suspensions, or permanent bans. Blocking a user immediately hides both profiles from each other.",
      },
      {
        q: "Is my contact number visible to other members?",
        a: "No, your phone number and email address are hidden by default. Contact details are only shared when you explicitly choose to reveal them to a specific match. Premium members can also use our masked calling feature for added privacy.",
      },
      {
        q: "What measures prevent fake profiles?",
        a: "MatchPartner uses Aadhaar-based verification, AI photo analysis, and machine learning fraud detection to block fake accounts. Every profile is manually reviewed before activation. Our system flags suspicious behaviour in real time, maintaining a 99.5% genuine profile rate.",
      },
    ],
  },
];

const allFaqs = categories.flatMap((cat) =>
  cat.faqs.map((faq) => ({
    "@type": "Question" as const,
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer" as const,
      text: faq.a,
    },
  }))
);

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: allFaqs,
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-lg sm:text-xl text-white/85 max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about finding your perfect life partner
            on MatchPartner — from creating your profile to connecting with
            verified matches.
          </p>
        </div>
      </section>

      {/* Sticky Anchor Nav */}
      <nav
        className="sticky top-0 z-40 bg-white border-b border-border shadow-sm"
        aria-label="FAQ categories"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="flex gap-1 overflow-x-auto py-3 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0 sm:justify-center">
            {categories.map((cat) => (
              <li key={cat.id} className="flex-shrink-0">
                <a
                  href={`#${cat.id}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium text-text-muted hover:text-primary hover:bg-primary/5 transition-colors whitespace-nowrap"
                >
                  <span aria-hidden="true">{cat.icon}</span>
                  {cat.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* FAQ Categories */}
      {categories.map((category, catIndex) => (
        <section
          key={category.id}
          id={category.id}
          className={`py-16 lg:py-20 scroll-mt-16 ${
            catIndex % 2 === 0 ? "bg-white" : "bg-surface"
          }`}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-10">
              <span
                className="text-3xl"
                role="img"
                aria-hidden="true"
              >
                {category.icon}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-text">
                {category.name}
              </h2>
            </div>

            <div className="space-y-5">
              {category.faqs.map((faq, faqIndex) => (
                <div
                  key={faqIndex}
                  className="bg-white rounded-xl border border-border p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3 className="text-lg font-semibold text-text mb-3">
                    {faq.q}
                  </h3>
                  <p className="text-text-muted leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Still Have Questions?
          </h2>
          <p className="text-lg text-white/85 mb-8 max-w-xl mx-auto">
            Our support team is here to help you every step of the way. Reach
            out anytime or start your free profile today and experience
            MatchPartner firsthand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-colors"
            >
              Contact Support
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-accent text-white font-semibold rounded-lg hover:bg-accent-dark transition-colors"
            >
              View Plans
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-white/70">
            <Link href="/about" className="hover:text-white transition-colors underline underline-offset-2">
              About MatchPartner
            </Link>
            <Link href="/privacy-policy" className="hover:text-white transition-colors underline underline-offset-2">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-white transition-colors underline underline-offset-2">
              Terms of Service
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
