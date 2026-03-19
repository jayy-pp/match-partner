import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — MatchPartner",
  description:
    "Read the terms and conditions for using the MatchPartner matrimony platform.",
  alternates: {
    canonical: "https://matchpartner.in/terms-of-service",
  },
};

export default function TermsOfServicePage() {
  return (
    <main className="bg-[#FFF8F0] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-[#6B6280]">
            <li>
              <Link href="/" className="hover:text-[#D4145A] transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-[#1E1A2E] font-medium">Terms of Service</li>
          </ol>
        </nav>

        <article className="bg-white rounded-2xl shadow-sm border border-[#E8DDD4] p-8 sm:p-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#1E1A2E] mb-4">
            Terms of Service
          </h1>
          <p className="text-[#6B6280] mb-10 text-sm">
            Last updated: March 13, 2026
          </p>

          <div className="space-y-10 text-[#1E1A2E] leading-relaxed">
            <section>
              <p>
                Welcome to MatchPartner. These Terms of Service
                (&quot;Terms&quot;) govern your access to and use of the
                MatchPartner platform at{" "}
                <Link
                  href="/"
                  className="text-[#D4145A] underline hover:text-[#b01048]"
                >
                  matchpartner.in
                </Link>
                , including all associated services, features, and content. By
                creating an account or using our platform, you agree to be bound
                by these Terms.
              </p>
            </section>

            {/* Eligibility */}
            <section>
              <h2 className="text-2xl font-semibold text-[#1E1A2E] mb-4">
                1. Eligibility
              </h2>
              <p className="mb-3">
                To use MatchPartner, you must meet the following requirements:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  You must be at least <strong>18 years of age</strong> at the
                  time of registration.
                </li>
                <li>
                  You must be <strong>legally eligible to marry</strong> under
                  the laws of India, including the Hindu Marriage Act, 1955, or
                  other applicable personal laws.
                </li>
                <li>
                  You must not be currently married unless you are legally
                  separated or divorced and seeking remarriage.
                </li>
                <li>
                  You must have the legal capacity to enter into a binding
                  agreement.
                </li>
              </ul>
            </section>

            {/* Account Responsibilities */}
            <section>
              <h2 className="text-2xl font-semibold text-[#1E1A2E] mb-4">
                2. Account Responsibilities
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  You are responsible for maintaining the confidentiality of
                  your account credentials, including your password.
                </li>
                <li>
                  You are responsible for all activities that occur under your
                  account.
                </li>
                <li>
                  You must notify us immediately at{" "}
                  <a
                    href="mailto:support@matchpartner.in"
                    className="text-[#D4145A] underline hover:text-[#b01048]"
                  >
                    support@matchpartner.in
                  </a>{" "}
                  if you suspect any unauthorized access to your account.
                </li>
                <li>
                  You may create only one account per person. Duplicate accounts
                  may be suspended or terminated.
                </li>
                <li>
                  Family members may manage a profile on behalf of a user with
                  their explicit consent, but the registered user remains
                  responsible for all account activity.
                </li>
              </ul>
            </section>

            {/* Profile Guidelines */}
            <section>
              <h2 className="text-2xl font-semibold text-[#1E1A2E] mb-4">
                3. Profile Guidelines
              </h2>
              <p className="mb-3">
                When creating and maintaining your profile, you agree to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Provide <strong>truthful, accurate, and complete</strong>{" "}
                  information about yourself, including personal details,
                  education, occupation, and family background.
                </li>
                <li>
                  Upload only your own genuine, recent photographs. Stock
                  images, celebrity photos, or misleading images are prohibited.
                </li>
                <li>
                  Not create fake, fraudulent, or misleading profiles under any
                  circumstances.
                </li>
                <li>
                  Keep your profile information up to date and promptly correct
                  any inaccuracies.
                </li>
                <li>
                  Complete the profile verification process when requested,
                  including Aadhaar-based identity verification.
                </li>
              </ul>
              <p className="mt-4">
                MatchPartner reserves the right to remove or suspend profiles
                that contain false or misleading information without prior
                notice.
              </p>
            </section>

            {/* Acceptable Use Policy */}
            <section>
              <h2 className="text-2xl font-semibold text-[#1E1A2E] mb-4">
                4. Acceptable Use Policy
              </h2>
              <p className="mb-3">You agree not to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Use the platform for any purpose other than seeking a
                  matrimonial match.
                </li>
                <li>
                  Harass, abuse, threaten, or intimidate other members in any
                  way.
                </li>
                <li>
                  Send spam, unsolicited commercial messages, or promotional
                  content to other members.
                </li>
                <li>
                  Solicit money, financial assistance, or personal financial
                  information from other members.
                </li>
                <li>
                  Attempt to collect personal information of other members for
                  purposes unrelated to matrimonial matchmaking.
                </li>
                <li>
                  Use automated scripts, bots, or scrapers to access the
                  platform or extract data.
                </li>
                <li>
                  Post or share content that is obscene, defamatory,
                  discriminatory, or violates any applicable law.
                </li>
                <li>
                  Impersonate any person or entity, or misrepresent your
                  affiliation with any person or entity.
                </li>
              </ul>
            </section>

            {/* Premium Subscriptions and Billing */}
            <section>
              <h2 className="text-2xl font-semibold text-[#1E1A2E] mb-4">
                5. Premium Subscriptions and Billing
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  MatchPartner offers free and premium membership tiers. Premium
                  features are available through paid subscription plans as
                  listed on our{" "}
                  <Link
                    href="/pricing"
                    className="text-[#D4145A] underline hover:text-[#b01048]"
                  >
                    Pricing page
                  </Link>
                  .
                </li>
                <li>
                  All payments are processed securely through third-party
                  payment gateways. We do not store your credit card or banking
                  details.
                </li>
                <li>
                  Subscription fees are non-refundable once the subscription
                  period has commenced, except where required by applicable law
                  or our refund policy.
                </li>
                <li>
                  We reserve the right to modify subscription pricing with
                  advance notice. Existing subscriptions will be honoured at the
                  original price until renewal.
                </li>
                <li>
                  Auto-renewal may be enabled for subscription plans. You can
                  disable auto-renewal at any time through your account
                  settings.
                </li>
              </ul>
            </section>

            {/* Intellectual Property */}
            <section>
              <h2 className="text-2xl font-semibold text-[#1E1A2E] mb-4">
                6. Intellectual Property
              </h2>
              <p className="mb-3">
                All content, features, and functionality on the MatchPartner
                platform — including but not limited to text, graphics, logos,
                icons, images, software, and algorithms — are the exclusive
                property of MatchPartner or its licensors and are protected by
                copyright, trademark, and other intellectual property laws.
              </p>
              <p>
                You retain ownership of the content you submit to your profile.
                By submitting content, you grant MatchPartner a non-exclusive,
                worldwide, royalty-free licence to use, display, and distribute
                that content solely in connection with providing the
                matchmaking service.
              </p>
            </section>

            {/* Limitation of Liability */}
            <section>
              <h2 className="text-2xl font-semibold text-[#1E1A2E] mb-4">
                7. Limitation of Liability
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  MatchPartner acts solely as an intermediary platform to
                  facilitate introductions between prospective matrimonial
                  matches. We do not guarantee the accuracy, truthfulness, or
                  completeness of any member&apos;s profile.
                </li>
                <li>
                  We are not responsible for any decisions you make based on
                  interactions on the platform, including the decision to meet,
                  communicate with, or marry another member.
                </li>
                <li>
                  To the maximum extent permitted by law, MatchPartner shall not
                  be liable for any indirect, incidental, special,
                  consequential, or punitive damages arising from your use of
                  the platform.
                </li>
                <li>
                  Our total liability to you for any claims arising from the use
                  of our services shall not exceed the amount you have paid to
                  us in the twelve months preceding the claim.
                </li>
              </ul>
            </section>

            {/* Termination */}
            <section>
              <h2 className="text-2xl font-semibold text-[#1E1A2E] mb-4">
                8. Termination
              </h2>
              <p className="mb-3">
                You may delete your account at any time through your account
                settings or by contacting us at{" "}
                <a
                  href="mailto:support@matchpartner.in"
                  className="text-[#D4145A] underline hover:text-[#b01048]"
                >
                  support@matchpartner.in
                </a>
                .
              </p>
              <p className="mb-3">
                MatchPartner reserves the right to suspend or terminate your
                account at any time, without prior notice, if:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>You violate any provision of these Terms.</li>
                <li>
                  Your profile is found to contain false or misleading
                  information.
                </li>
                <li>
                  You engage in fraudulent, abusive, or illegal activity on the
                  platform.
                </li>
                <li>
                  We receive verified complaints from other members about your
                  conduct.
                </li>
                <li>
                  We are required to do so by law or a court order.
                </li>
              </ul>
              <p className="mt-4">
                Upon termination, your right to use the platform ceases
                immediately. We may retain certain data as required by law or
                for legitimate business purposes.
              </p>
            </section>

            {/* Governing Law */}
            <section>
              <h2 className="text-2xl font-semibold text-[#1E1A2E] mb-4">
                9. Governing Law and Dispute Resolution
              </h2>
              <p className="mb-3">
                These Terms are governed by and construed in accordance with the
                laws of India. Any disputes arising out of or in connection with
                these Terms shall be subject to the exclusive jurisdiction of
                the courts in Bengaluru, Karnataka, India.
              </p>
              <p>
                Before initiating any legal proceedings, both parties agree to
                attempt to resolve disputes through good-faith negotiation and,
                if necessary, mediation.
              </p>
            </section>

            {/* Changes to Terms */}
            <section>
              <h2 className="text-2xl font-semibold text-[#1E1A2E] mb-4">
                10. Changes to These Terms
              </h2>
              <p>
                We may revise these Terms at any time by posting the updated
                version on this page. We will notify registered members of
                material changes via email or an in-app notification. Your
                continued use of the platform after changes are posted
                constitutes your acceptance of the revised Terms.
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-2xl font-semibold text-[#1E1A2E] mb-4">
                11. Contact Us
              </h2>
              <p>
                If you have any questions about these Terms, please reach out to
                us:
              </p>
              <ul className="list-none mt-4 space-y-1">
                <li>
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:support@matchpartner.in"
                    className="text-[#D4145A] underline hover:text-[#b01048]"
                  >
                    support@matchpartner.in
                  </a>
                </li>
                <li>
                  <strong>Platform:</strong>{" "}
                  <Link
                    href="/contact"
                    className="text-[#D4145A] underline hover:text-[#b01048]"
                  >
                    Contact Page
                  </Link>
                </li>
              </ul>
            </section>
          </div>

          {/* Related Legal Pages */}
          <div className="mt-12 pt-8 border-t border-[#E8DDD4]">
            <h2 className="text-lg font-semibold text-[#1E1A2E] mb-4">
              Related Pages
            </h2>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/privacy-policy"
                className="inline-block px-4 py-2 rounded-lg border border-[#E8DDD4] text-sm text-[#1E1A2E] hover:border-[#D4145A] hover:text-[#D4145A] transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/cookie-policy"
                className="inline-block px-4 py-2 rounded-lg border border-[#E8DDD4] text-sm text-[#1E1A2E] hover:border-[#D4145A] hover:text-[#D4145A] transition-colors"
              >
                Cookie Policy
              </Link>
              <Link
                href="/contact"
                className="inline-block px-4 py-2 rounded-lg border border-[#E8DDD4] text-sm text-[#1E1A2E] hover:border-[#D4145A] hover:text-[#D4145A] transition-colors"
              >
                Contact Us
              </Link>
              <Link
                href="/faq"
                className="inline-block px-4 py-2 rounded-lg border border-[#E8DDD4] text-sm text-[#1E1A2E] hover:border-[#D4145A] hover:text-[#D4145A] transition-colors"
              >
                FAQ
              </Link>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
