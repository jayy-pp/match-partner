import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookie Policy — MatchPartner",
  description:
    "Understand how MatchPartner uses cookies to improve your experience.",
  alternates: {
    canonical: "https://matchpartner.in/cookie-policy",
  },
};

export default function CookiePolicyPage() {
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
            <li className="text-[#1E1A2E] font-medium">Cookie Policy</li>
          </ol>
        </nav>

        <article className="bg-white rounded-2xl shadow-sm border border-[#E8DDD4] p-8 sm:p-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#1E1A2E] mb-4">
            Cookie Policy
          </h1>
          <p className="text-[#6B6280] mb-10 text-sm">
            Last updated: March 13, 2026
          </p>

          <div className="space-y-10 text-[#1E1A2E] leading-relaxed">
            <section>
              <p>
                This Cookie Policy explains how MatchPartner (
                <Link
                  href="/"
                  className="text-[#D4145A] underline hover:text-[#b01048]"
                >
                  matchpartner.in
                </Link>
                ) uses cookies and similar technologies when you visit our
                platform. It explains what these technologies are, why we use
                them, and your rights to control their use.
              </p>
            </section>

            {/* What Are Cookies */}
            <section>
              <h2 className="text-2xl font-semibold text-[#1E1A2E] mb-4">
                1. What Are Cookies?
              </h2>
              <p className="mb-3">
                Cookies are small text files that are placed on your device
                (computer, tablet, or smartphone) when you visit a website.
                They are widely used to make websites work efficiently, provide
                a better user experience, and supply information to the website
                owners.
              </p>
              <p>
                Cookies can be &quot;session&quot; cookies, which are deleted
                when you close your browser, or &quot;persistent&quot; cookies,
                which remain on your device for a set period of time or until
                you delete them manually.
              </p>
            </section>

            {/* Cookie Types Table */}
            <section>
              <h2 className="text-2xl font-semibold text-[#1E1A2E] mb-4">
                2. Cookies We Use
              </h2>
              <p className="mb-6">
                The following table describes the types of cookies we use on
                MatchPartner:
              </p>

              <div className="overflow-x-auto -mx-4 sm:mx-0">
                <table className="w-full text-left border-collapse min-w-[600px]">
                  <thead>
                    <tr className="bg-[#1E1A2E] text-white">
                      <th className="px-4 py-3 font-semibold text-sm rounded-tl-lg">
                        Cookie Type
                      </th>
                      <th className="px-4 py-3 font-semibold text-sm">
                        Purpose
                      </th>
                      <th className="px-4 py-3 font-semibold text-sm">
                        Duration
                      </th>
                      <th className="px-4 py-3 font-semibold text-sm rounded-tr-lg">
                        Required?
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr className="border-b border-[#E8DDD4]">
                      <td className="px-4 py-4 font-medium text-[#1E1A2E]">
                        Essential
                      </td>
                      <td className="px-4 py-4 text-[#6B6280]">
                        Required for core functionality including user
                        authentication, session management, security tokens, and
                        CSRF protection. These cookies are necessary for the
                        platform to function properly.
                      </td>
                      <td className="px-4 py-4 text-[#6B6280]">Session</td>
                      <td className="px-4 py-4">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700 border border-green-200">
                          Yes
                        </span>
                      </td>
                    </tr>
                    <tr className="border-b border-[#E8DDD4] bg-[#FFF8F0]/50">
                      <td className="px-4 py-4 font-medium text-[#1E1A2E]">
                        Analytics
                      </td>
                      <td className="px-4 py-4 text-[#6B6280]">
                        Help us understand how visitors interact with
                        MatchPartner by collecting anonymous usage data such as
                        pages visited, time spent, and navigation patterns.
                        Used to improve the platform experience.
                      </td>
                      <td className="px-4 py-4 text-[#6B6280]">1 year</td>
                      <td className="px-4 py-4">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-gray-50 text-gray-600 border border-gray-200">
                          No
                        </span>
                      </td>
                    </tr>
                    <tr className="border-b border-[#E8DDD4]">
                      <td className="px-4 py-4 font-medium text-[#1E1A2E]">
                        Preferences
                      </td>
                      <td className="px-4 py-4 text-[#6B6280]">
                        Remember your settings and choices such as language
                        preference, theme selection, notification preferences,
                        and search filters to provide a personalised experience.
                      </td>
                      <td className="px-4 py-4 text-[#6B6280]">6 months</td>
                      <td className="px-4 py-4">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-gray-50 text-gray-600 border border-gray-200">
                          No
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-4 font-medium text-[#1E1A2E]">
                        Marketing
                      </td>
                      <td className="px-4 py-4 text-[#6B6280]">
                        Used to deliver personalised advertisements and measure
                        the effectiveness of our marketing campaigns. These
                        cookies may be set by our advertising partners.
                      </td>
                      <td className="px-4 py-4 text-[#6B6280]">90 days</td>
                      <td className="px-4 py-4">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-gray-50 text-gray-600 border border-gray-200">
                          No
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Third-Party Cookies */}
            <section>
              <h2 className="text-2xl font-semibold text-[#1E1A2E] mb-4">
                3. Third-Party Cookies
              </h2>
              <p>
                Some cookies on our platform are set by third-party services
                that appear on our pages. These include analytics providers
                (such as Google Analytics), payment processors, and advertising
                networks. We do not control these third-party cookies and
                recommend reviewing the privacy policies of these services for
                more information about their cookie practices.
              </p>
            </section>

            {/* Managing Cookies */}
            <section>
              <h2 className="text-2xl font-semibold text-[#1E1A2E] mb-4">
                4. Managing Cookies
              </h2>
              <p className="mb-3">
                You have the right to decide whether to accept or reject
                non-essential cookies. You can manage your cookie preferences in
                the following ways:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Cookie consent banner:</strong> When you first visit
                  MatchPartner, a cookie consent banner allows you to accept or
                  customise your cookie preferences.
                </li>
                <li>
                  <strong>Browser settings:</strong> Most web browsers allow you
                  to control cookies through their settings. You can set your
                  browser to refuse cookies, delete existing cookies, or alert
                  you when a cookie is being set.
                </li>
                <li>
                  <strong>Opt-out tools:</strong> For analytics cookies, you can
                  use tools such as the Google Analytics Opt-out Browser Add-on
                  to prevent data collection.
                </li>
              </ul>
              <p className="mt-4 text-[#6B6280] text-sm">
                Please note that disabling essential cookies may affect the
                functionality of the platform, and you may not be able to use
                certain features such as logging in or managing your profile.
              </p>
            </section>

            {/* Similar Technologies */}
            <section>
              <h2 className="text-2xl font-semibold text-[#1E1A2E] mb-4">
                5. Similar Technologies
              </h2>
              <p>
                In addition to cookies, we may use similar technologies such as
                web beacons (pixel tags), local storage, and session storage to
                collect information and improve our services. These technologies
                work in a similar manner to cookies and are subject to the same
                controls described above.
              </p>
            </section>

            {/* Changes */}
            <section>
              <h2 className="text-2xl font-semibold text-[#1E1A2E] mb-4">
                6. Changes to This Cookie Policy
              </h2>
              <p>
                We may update this Cookie Policy from time to time to reflect
                changes in our practices or for operational, legal, or
                regulatory reasons. We will update the &quot;Last updated&quot;
                date at the top of this page when changes are made.
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-2xl font-semibold text-[#1E1A2E] mb-4">
                7. Contact Us
              </h2>
              <p>
                If you have any questions about our use of cookies or this
                Cookie Policy, please contact us:
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
                  <strong>Privacy Policy:</strong>{" "}
                  <Link
                    href="/privacy-policy"
                    className="text-[#D4145A] underline hover:text-[#b01048]"
                  >
                    Read our Privacy Policy
                  </Link>
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
                href="/terms-of-service"
                className="inline-block px-4 py-2 rounded-lg border border-[#E8DDD4] text-sm text-[#1E1A2E] hover:border-[#D4145A] hover:text-[#D4145A] transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/contact"
                className="inline-block px-4 py-2 rounded-lg border border-[#E8DDD4] text-sm text-[#1E1A2E] hover:border-[#D4145A] hover:text-[#D4145A] transition-colors"
              >
                Contact Us
              </Link>
              <Link
                href="/faq"
                className="inline-block px-4 py-2 rounded-lg border border-[#E8DDD4] text-sm text-[#1E1A2E] hover:border-[#D4145A] hover:text-[#b01048] transition-colors"
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
