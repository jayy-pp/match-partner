import type { Metadata } from "next";
import Link from "next/link";
import { generateMetadata, seoConfigs } from "@/lib/seo";

export const metadata: Metadata = generateMetadata(seoConfigs.pricing);

const faqs = [
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit and debit cards (Visa, Mastercard, RuPay), UPI payments (Google Pay, PhonePe, Paytm), net banking from 50+ Indian banks, and wallets. For NRI members, we also accept international cards and PayPal.",
  },
  {
    question: "What is your refund policy?",
    answer:
      "We offer a 7-day money-back guarantee on all paid plans. If you are not satisfied within the first 7 days of purchase, contact our support team for a full refund. After 7 days, refunds are prorated based on the remaining period.",
  },
  {
    question: "Can I upgrade or downgrade my plan?",
    answer:
      "Yes, you can upgrade your plan at any time and the price difference will be prorated. Downgrades take effect at the end of your current billing cycle. Your data and matches are preserved during plan changes.",
  },
  {
    question: "Is my payment secure?",
    answer:
      "Absolutely. All transactions are processed through PCI-DSS compliant payment gateways with 256-bit SSL encryption. We never store your card details on our servers. Your financial information is completely safe.",
  },
  {
    question: "Do you offer discounts for NRI members?",
    answer:
      "Yes, we offer special NRI pricing in USD and GBP with region-specific discounts. NRI members also get complimentary profile verification assistance and access to our global matchmaking network. Contact support for current NRI offers.",
  },
  {
    question: "What happens when my plan expires?",
    answer:
      "When your plan expires, your profile remains active and visible. You revert to the Free Basic features — you can still browse profiles and send up to 5 interests per day. All your matches, conversations, and shortlist are preserved so you can upgrade anytime.",
  },
];

function CheckIcon() {
  return (
    <svg
      className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
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

const tiers = [
  {
    name: "Free Basic",
    price: "0",
    period: "Forever free",
    description: "Get started on your journey to find a life partner.",
    features: [
      "Create detailed profile",
      "Browse verified matches",
      "Basic search filters",
      "Send 5 interests per day",
      "Limited chat access",
    ],
    cta: "Start Free",
    ctaHref: "/register",
    booster: "No credit card required",
    highlighted: false,
  },
  {
    name: "Premium",
    price: "999",
    period: "per 3 months",
    description: "Unlock the full power of matchmaking.",
    features: [
      "Everything in Free Basic",
      "Unlimited interests",
      "Full chat & video calls",
      "AI-powered recommendations",
      "Advanced search filters",
      "Horoscope matching (Kundali)",
    ],
    cta: "Get Premium",
    ctaHref: "/register?plan=premium",
    booster: "Most chosen by successful couples",
    highlighted: true,
    badge: "Most Popular",
  },
  {
    name: "Gold",
    price: "2,499",
    period: "per 6 months",
    description: "Stand out and get matched faster.",
    features: [
      "Everything in Premium",
      "Priority profile listing",
      "Monthly profile boost",
      "Dedicated email support",
      "Video profile introduction",
      "See who viewed your profile",
    ],
    cta: "Go Gold",
    ctaHref: "/register?plan=gold",
    booster: "2x more profile views on average",
    highlighted: false,
  },
  {
    name: "Elite",
    price: "4,999",
    period: "per 12 months",
    description: "The ultimate personalized matchmaking experience.",
    features: [
      "Everything in Gold",
      "Dedicated relationship manager",
      "Background verification badge",
      "Personalized matchmaking",
      "VIP profile badge",
      "Priority customer support",
    ],
    cta: "Join Elite",
    ctaHref: "/register?plan=elite",
    booster: "Highest success rate among all plans",
    highlighted: false,
  },
];

export default function PricingPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero Section */}
      <section className="bg-[#1E1A2E] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Simple, transparent pricing
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
            Choose the plan that fits your journey. Every plan includes a
            verified profile and access to thousands of genuine Hindu matches.
            No hidden fees, cancel anytime.
          </p>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="bg-[#FFF8F0] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative flex flex-col rounded-2xl bg-white p-8 shadow-sm transition-shadow hover:shadow-md ${
                  tier.highlighted
                    ? "border-2 border-[#D4145A] ring-1 ring-[#D4145A]/20"
                    : "border border-[#E8DDD4]"
                }`}
              >
                {tier.highlighted && tier.badge && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-[#D4145A] px-4 py-1 text-sm font-semibold text-white">
                    {tier.badge}
                  </span>
                )}

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-[#1E1A2E]">
                    {tier.name}
                  </h3>
                  <p className="mt-1 text-sm text-[#6B6280]">
                    {tier.description}
                  </p>
                </div>

                <div className="mb-6">
                  <span className="text-4xl font-extrabold text-[#1E1A2E]">
                    {"\u20B9"}
                    {tier.price}
                  </span>
                  <span className="ml-1 text-sm text-[#6B6280]">
                    /{tier.period}
                  </span>
                </div>

                <ul className="mb-8 flex-1 space-y-3">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-[#1E1A2E]"
                    >
                      <CheckIcon />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <Link
                    href={tier.ctaHref}
                    className={`block w-full rounded-lg px-4 py-3 text-center text-sm font-semibold transition-colors ${
                      tier.highlighted
                        ? "bg-[#D4145A] text-white hover:bg-[#b8114e]"
                        : "bg-[#1E1A2E] text-white hover:bg-[#2d2844]"
                    }`}
                  >
                    {tier.cta}
                  </Link>
                  <p className="mt-2 text-center text-xs text-[#6B6280]">
                    {tier.booster}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Billing FAQ */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-[#1E1A2E]">
            Billing &amp; Payment FAQ
          </h2>
          <p className="mt-3 text-center text-[#6B6280]">
            Have questions about our plans? Find answers to the most common
            billing questions below.
          </p>

          <dl className="mt-12 space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-lg border border-[#E8DDD4] p-6"
              >
                <dt className="text-lg font-semibold text-[#1E1A2E]">
                  {faq.question}
                </dt>
                <dd className="mt-2 text-[#6B6280] leading-relaxed">
                  {faq.answer}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#1E1A2E] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to find your perfect match?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
            Join thousands of Hindu families who found their life partner on
            MatchPartner. Start with a free profile today.
          </p>
          <div className="mt-8">
            <Link
              href="/register"
              className="inline-block rounded-lg bg-[#D4145A] px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-[#b8114e]"
            >
              Create Your Free Profile
            </Link>
            <p className="mt-3 text-sm text-white/60">
              Takes less than 5 minutes. 10,000+ verified profiles waiting.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-white/70">
            <Link href="/faq" className="hover:text-white transition-colors">
              General FAQ
            </Link>
            <Link href="/about" className="hover:text-white transition-colors">
              About Us
            </Link>
            <Link
              href="/contact"
              className="hover:text-white transition-colors"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
