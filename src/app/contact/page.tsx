import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us — MatchPartner",
  description:
    "Get in touch with the MatchPartner team. Whether you need help with your profile, have billing questions, or want to explore partnership opportunities — we are here to help.",
  openGraph: {
    title: "Contact Us — MatchPartner",
    description:
      "Reach our support team for profile help, billing inquiries, or partnership opportunities. Mon-Sat 9AM-8PM IST.",
    url: "https://matchpartner.in/contact",
  },
  alternates: {
    canonical: "https://matchpartner.in/contact",
  },
};

function MailIcon() {
  return (
    <svg
      className="w-6 h-6 text-[#D4145A]"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
      />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      className="w-6 h-6 text-[#D4145A]"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}

function BoltIcon() {
  return (
    <svg
      className="w-6 h-6 text-[#D4145A]"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
      />
    </svg>
  );
}

export default function ContactPage() {
  const contactJsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Us — MatchPartner",
    description:
      "Get in touch with the MatchPartner support team for profile help, billing inquiries, or partnership opportunities.",
    url: "https://matchpartner.in/contact",
    mainEntity: {
      "@type": "Organization",
      name: "MatchPartner",
      email: "support@matchpartner.in",
      contactPoint: {
        "@type": "ContactPoint",
        email: "support@matchpartner.in",
        contactType: "customer service",
        availableLanguage: ["English", "Hindi"],
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          opens: "09:00",
          closes: "20:00",
        },
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />

      {/* Hero Section */}
      <section className="bg-[#1E1A2E] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Get in touch
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
            Have a question about your profile, billing, or our services? Our
            team is ready to help you on your journey to finding the perfect
            match.
          </p>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="bg-[#FFF8F0] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Contact Form — 2/3 width */}
            <div className="lg:col-span-2">
              <div className="rounded-2xl border border-[#E8DDD4] bg-white p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-[#1E1A2E]">
                  Send us a message
                </h2>
                <p className="mt-1 text-sm text-[#6B6280]">
                  Fill out the form below and we will get back to you within 24
                  hours.
                </p>

                <form action="#" method="POST" className="mt-8 space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-[#1E1A2E]"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        placeholder="Your full name"
                        className="mt-1 block w-full rounded-lg border border-[#E8DDD4] bg-[#FFF8F0] px-4 py-3 text-sm text-[#1E1A2E] placeholder:text-[#6B6280]/60 focus:border-[#D4145A] focus:outline-none focus:ring-1 focus:ring-[#D4145A]"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-[#1E1A2E]"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="you@example.com"
                        className="mt-1 block w-full rounded-lg border border-[#E8DDD4] bg-[#FFF8F0] px-4 py-3 text-sm text-[#1E1A2E] placeholder:text-[#6B6280]/60 focus:border-[#D4145A] focus:outline-none focus:ring-1 focus:ring-[#D4145A]"
                      />
                    </div>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-[#1E1A2E]"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="+91 98765 43210"
                        className="mt-1 block w-full rounded-lg border border-[#E8DDD4] bg-[#FFF8F0] px-4 py-3 text-sm text-[#1E1A2E] placeholder:text-[#6B6280]/60 focus:border-[#D4145A] focus:outline-none focus:ring-1 focus:ring-[#D4145A]"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-[#1E1A2E]"
                      >
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        className="mt-1 block w-full rounded-lg border border-[#E8DDD4] bg-[#FFF8F0] px-4 py-3 text-sm text-[#1E1A2E] focus:border-[#D4145A] focus:outline-none focus:ring-1 focus:ring-[#D4145A]"
                      >
                        <option value="">Select a topic</option>
                        <option value="general">General Inquiry</option>
                        <option value="profile">Profile Help</option>
                        <option value="premium">Premium Plans</option>
                        <option value="report">Report an Issue</option>
                        <option value="partnership">Partnership</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-[#1E1A2E]"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      placeholder="Tell us how we can help..."
                      className="mt-1 block w-full rounded-lg border border-[#E8DDD4] bg-[#FFF8F0] px-4 py-3 text-sm text-[#1E1A2E] placeholder:text-[#6B6280]/60 focus:border-[#D4145A] focus:outline-none focus:ring-1 focus:ring-[#D4145A] resize-none"
                    />
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="inline-flex items-center rounded-lg bg-[#D4145A] px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#b8114e]"
                    >
                      Send Message
                    </button>
                    <p className="mt-2 text-xs text-[#6B6280]">
                      We read every message and respond within 24 hours.
                    </p>
                  </div>
                </form>
              </div>
            </div>

            {/* Info Sidebar — 1/3 width */}
            <div className="space-y-8">
              {/* Email */}
              <div className="rounded-2xl border border-[#E8DDD4] bg-white p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-[#D4145A]/10">
                    <MailIcon />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1E1A2E]">Email Us</h3>
                    <a
                      href="mailto:support@matchpartner.in"
                      className="mt-1 block text-sm text-[#D4145A] hover:underline"
                    >
                      support@matchpartner.in
                    </a>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="rounded-2xl border border-[#E8DDD4] bg-white p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-[#D4145A]/10">
                    <ClockIcon />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1E1A2E]">
                      Office Hours
                    </h3>
                    <p className="mt-1 text-sm text-[#6B6280]">
                      Mon &ndash; Sat, 9:00 AM &ndash; 8:00 PM IST
                    </p>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="rounded-2xl border border-[#E8DDD4] bg-white p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-[#D4145A]/10">
                    <BoltIcon />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1E1A2E]">
                      Response Time
                    </h3>
                    <p className="mt-1 text-sm text-[#6B6280]">
                      Within 24 hours on all queries
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="rounded-2xl border border-[#E8DDD4] bg-white p-6 shadow-sm">
                <h3 className="font-semibold text-[#1E1A2E]">Quick Links</h3>
                <ul className="mt-3 space-y-2">
                  <li>
                    <Link
                      href="/faq"
                      className="text-sm text-[#D4145A] hover:underline"
                    >
                      Frequently Asked Questions
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/pricing"
                      className="text-sm text-[#D4145A] hover:underline"
                    >
                      Pricing &amp; Plans
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/faq"
                      className="text-sm text-[#D4145A] hover:underline"
                    >
                      Help Center
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="text-sm text-[#D4145A] hover:underline"
                    >
                      About MatchPartner
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center rounded-2xl border border-[#E8DDD4] bg-[#F3F0EB] py-24">
            <div className="text-center">
              <svg
                className="mx-auto h-12 w-12 text-[#6B6280]/50"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
              <p className="mt-4 text-lg font-medium text-[#6B6280]">
                Our offices in Mumbai, Delhi, and Bangalore
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#1E1A2E] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Still have questions?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
            Our support team is just an email away. Or explore our resources to
            find instant answers.
          </p>
          <div className="mt-8">
            <a
              href="mailto:support@matchpartner.in"
              className="inline-block rounded-lg bg-[#D4145A] px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-[#b8114e]"
            >
              Email Our Team
            </a>
            <p className="mt-3 text-sm text-white/60">
              Average response time under 4 hours during business hours.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-white/70">
            <Link href="/faq" className="hover:text-white transition-colors">
              FAQ
            </Link>
            <Link
              href="/pricing"
              className="hover:text-white transition-colors"
            >
              Pricing
            </Link>
            <Link href="/about" className="hover:text-white transition-colors">
              About Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
