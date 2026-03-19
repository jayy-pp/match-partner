import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — MatchPartner",
  description:
    "Learn how MatchPartner protects your personal data and privacy.",
  alternates: {
    canonical: "https://matchpartner.in/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
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
            <li className="text-[#1E1A2E] font-medium">Privacy Policy</li>
          </ol>
        </nav>

        <article className="bg-white rounded-2xl shadow-sm border border-[#E8DDD4] p-8 sm:p-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#1E1A2E] mb-4">
            Privacy Policy
          </h1>
          <p className="text-[#6B6280] mb-10 text-sm">
            Last updated: March 13, 2026
          </p>

          <div className="space-y-10 text-[#1E1A2E] leading-relaxed">
            <section>
              <p>
                At MatchPartner, your privacy is our priority. This Privacy
                Policy explains how we collect, use, disclose, and safeguard
                your information when you use our Hindu matrimony platform at{" "}
                <Link
                  href="/"
                  className="text-[#D4145A] underline hover:text-[#b01048]"
                >
                  matchpartner.in
                </Link>
                . By using our services, you agree to the practices described in
                this policy.
              </p>
            </section>

            {/* Information We Collect */}
            <section>
              <h2 className="text-2xl font-semibold text-[#1E1A2E] mb-4">
                1. Information We Collect
              </h2>

              <h3 className="text-lg font-medium text-[#1E1A2E] mt-6 mb-2">
                1.1 Personal Information
              </h3>
              <p className="mb-3">
                When you create an account, we collect information such as your
                full name, date of birth, gender, email address, phone number,
                and residential address.
              </p>

              <h3 className="text-lg font-medium text-[#1E1A2E] mt-6 mb-2">
                1.2 Profile Data
              </h3>
              <p className="mb-3">
                To help you find compatible matches, we collect matrimonial
                profile details including religion, caste, sub-caste, gotra,
                mother tongue, education, occupation, income, family details,
                horoscope information, photos, and partner preferences.
              </p>

              <h3 className="text-lg font-medium text-[#1E1A2E] mt-6 mb-2">
                1.3 Usage Data
              </h3>
              <p className="mb-3">
                We automatically collect information about how you interact with
                our platform, including pages viewed, search queries, matches
                viewed, messages sent, device type, browser information, IP
                address, and session duration.
              </p>

              <h3 className="text-lg font-medium text-[#1E1A2E] mt-6 mb-2">
                1.4 Verification Documents
              </h3>
              <p>
                For profile verification, we may collect identity documents such
                as Aadhaar card details, government-issued photo ID, educational
                certificates, and income proof. These documents are used solely
                for verification purposes and handled with strict security
                measures.
              </p>
            </section>

            {/* How We Use Your Information */}
            <section>
              <h2 className="text-2xl font-semibold text-[#1E1A2E] mb-4">
                2. How We Use Your Information
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-[#1E1A2E]">
                <li>
                  To create and manage your matrimonial profile on our platform
                </li>
                <li>
                  To provide AI-powered match recommendations based on your
                  preferences and compatibility factors
                </li>
                <li>
                  To verify your identity and ensure the authenticity of
                  profiles
                </li>
                <li>
                  To facilitate communication between interested members and
                  their families
                </li>
                <li>
                  To process premium subscription payments and billing
                </li>
                <li>
                  To send you relevant notifications about new matches,
                  interests, and messages
                </li>
                <li>
                  To improve our platform, algorithms, and user experience
                </li>
                <li>
                  To detect and prevent fraudulent activity, fake profiles, and
                  abuse
                </li>
                <li>
                  To comply with legal obligations and respond to lawful
                  requests
                </li>
              </ul>
            </section>

            {/* Information Sharing */}
            <section>
              <h2 className="text-2xl font-semibold text-[#1E1A2E] mb-4">
                3. Information Sharing
              </h2>
              <p className="mb-4">
                <strong>We do not sell your personal data.</strong> Your
                information is never sold to third parties for marketing or
                advertising purposes.
              </p>
              <p className="mb-3">
                We may share your information only in the following
                circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>With other members:</strong> Your profile information
                  is shared with other registered members based on your privacy
                  settings and visibility preferences.
                </li>
                <li>
                  <strong>Verification partners:</strong> We share limited data
                  with trusted third-party verification services (such as
                  Aadhaar-based eKYC providers) solely to verify your identity.
                </li>
                <li>
                  <strong>Payment processors:</strong> Payment information is
                  shared with secure, PCI-compliant payment gateways to process
                  transactions.
                </li>
                <li>
                  <strong>Legal requirements:</strong> We may disclose
                  information when required by law, court order, or government
                  authorities.
                </li>
                <li>
                  <strong>With your consent:</strong> We may share your
                  information with third parties when you give us explicit
                  permission to do so.
                </li>
              </ul>
            </section>

            {/* Data Security */}
            <section>
              <h2 className="text-2xl font-semibold text-[#1E1A2E] mb-4">
                4. Data Security
              </h2>
              <p className="mb-3">
                We take the security of your data seriously and implement
                industry-standard measures to protect it:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Encryption:</strong> All data is encrypted in transit
                  using TLS 1.3 and at rest using AES-256 encryption.
                </li>
                <li>
                  <strong>Secure storage:</strong> Your data is stored on secure
                  servers with restricted access, regular security audits, and
                  intrusion detection systems.
                </li>
                <li>
                  <strong>Aadhaar data handling:</strong> Aadhaar information is
                  processed in compliance with the Aadhaar Act and UIDAI
                  guidelines. Aadhaar numbers are never stored in plain text and
                  are used only for verification purposes. Verification data is
                  deleted after the process is complete.
                </li>
                <li>
                  <strong>Access controls:</strong> Only authorized personnel
                  with a legitimate business need can access personal data, and
                  all access is logged and monitored.
                </li>
                <li>
                  <strong>Regular audits:</strong> We conduct periodic security
                  assessments and vulnerability testing to maintain the
                  integrity of our systems.
                </li>
              </ul>
            </section>

            {/* Your Rights */}
            <section>
              <h2 className="text-2xl font-semibold text-[#1E1A2E] mb-4">
                5. Your Rights
              </h2>
              <p className="mb-3">
                Under applicable data protection laws, including the Digital
                Personal Data Protection Act, 2023, you have the following
                rights:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Right to access:</strong> Request a copy of the
                  personal data we hold about you.
                </li>
                <li>
                  <strong>Right to correction:</strong> Request correction of
                  inaccurate or incomplete personal data.
                </li>
                <li>
                  <strong>Right to deletion:</strong> Request deletion of your
                  personal data, subject to legal retention requirements.
                </li>
                <li>
                  <strong>Right to data portability:</strong> Request your data
                  in a structured, commonly used, machine-readable format.
                </li>
                <li>
                  <strong>Right to withdraw consent:</strong> Withdraw your
                  consent for data processing at any time by contacting us.
                </li>
                <li>
                  <strong>Right to grievance redressal:</strong> File a
                  complaint with our Grievance Officer or the relevant data
                  protection authority.
                </li>
              </ul>
              <p className="mt-4">
                To exercise any of these rights, please contact us at{" "}
                <a
                  href="mailto:support@matchpartner.in"
                  className="text-[#D4145A] underline hover:text-[#b01048]"
                >
                  support@matchpartner.in
                </a>
                .
              </p>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="text-2xl font-semibold text-[#1E1A2E] mb-4">
                6. Cookies
              </h2>
              <p>
                We use cookies and similar tracking technologies to enhance your
                experience on our platform. Cookies help us remember your
                preferences, analyse usage patterns, and deliver relevant
                content. For detailed information about the cookies we use and
                how to manage them, please visit our{" "}
                <Link
                  href="/cookie-policy"
                  className="text-[#D4145A] underline hover:text-[#b01048]"
                >
                  Cookie Policy
                </Link>
                .
              </p>
            </section>

            {/* Children's Privacy */}
            <section>
              <h2 className="text-2xl font-semibold text-[#1E1A2E] mb-4">
                7. Children&apos;s Privacy
              </h2>
              <p>
                MatchPartner is intended for users who are 18 years of age or
                older. We do not knowingly collect personal information from
                anyone under the age of 18. If we learn that we have collected
                data from a minor, we will delete it promptly.
              </p>
            </section>

            {/* Changes to This Policy */}
            <section>
              <h2 className="text-2xl font-semibold text-[#1E1A2E] mb-4">
                8. Changes to This Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time to reflect
                changes in our practices or applicable laws. We will notify you
                of significant changes by posting the updated policy on this
                page and updating the &quot;Last updated&quot; date. We
                encourage you to review this page periodically.
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-2xl font-semibold text-[#1E1A2E] mb-4">
                9. Contact Us
              </h2>
              <p>
                If you have any questions, concerns, or requests regarding this
                Privacy Policy or our data practices, please contact us:
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
                href="/terms-of-service"
                className="inline-block px-4 py-2 rounded-lg border border-[#E8DDD4] text-sm text-[#1E1A2E] hover:border-[#D4145A] hover:text-[#D4145A] transition-colors"
              >
                Terms of Service
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
