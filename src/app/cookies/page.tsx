import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy - MatchPartner",
  description: "MatchPartner's cookie policy for Hindu matrimony platform. Learn how we use cookies, tracking technologies, and your privacy choices.",
};

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-secondary mb-4">
              Cookie Policy
            </h1>
            <p className="text-lg text-text-muted max-w-3xl mx-auto">
              Learn how MatchPartner uses cookies and similar technologies to enhance your experience while respecting your privacy choices.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose max-w-none">
            
            {/* What are Cookies */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-semibold text-secondary mb-4">What Are Cookies?</h2>
              <p className="text-text-muted mb-4">
                Cookies are small text files that are stored on your device when you visit websites. They help us provide you with a better experience by:
              </p>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <ul className="space-y-2 text-text-muted">
                  <li>• Remembering your preferences and settings</li>
                  <li>• Keeping you logged in to your account</li>
                  <li>• Providing personalized content and recommendations</li>
                  <li>• Analyzing how our platform is used</li>
                  <li>• Ensuring security and preventing fraud</li>
                </ul>
              </div>
            </div>

            {/* Types of Cookies We Use */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-secondary mb-4">Types of Cookies We Use</h2>
              <div className="space-y-6">
                <div className="border border-border rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-secondary mb-3">Essential Cookies</h3>
                  <p className="text-text-muted mb-3">Required for the platform to function properly:</p>
                  <ul className="space-y-2 text-text-muted">
                    <li>• Authentication and session management</li>
                    <li>• Security and fraud prevention</li>
                    <li>• Load balancing and server management</li>
                    <li>• User preference storage</li>
                  </ul>
                  <div className="mt-3 bg-green-50 border border-green-200 rounded p-2">
                    <span className="text-green-700 text-sm">✓ Cannot be disabled</span>
                  </div>
                </div>

                <div className="border border-border rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-secondary mb-3">Performance Cookies</h3>
                  <p className="text-text-muted mb-3">Help us understand how our platform performs:</p>
                  <ul className="space-y-2 text-text-muted">
                    <li>• Page load times and response metrics</li>
                    <li>• Error tracking and debugging</li>
                    <li>• Server performance monitoring</li>
                    <li>• User experience optimization</li>
                  </ul>
                  <div className="mt-3 bg-blue-50 border border-blue-200 rounded p-2">
                    <span className="text-blue-700 text-sm">⚙ Can be disabled in settings</span>
                  </div>
                </div>

                <div className="border border-border rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-secondary mb-3">Functional Cookies</h3>
                  <p className="text-text-muted mb-3">Enhance your experience with personalized features:</p>
                  <ul className="space-y-2 text-text-muted">
                    <li>• Remembering search preferences</li>
                    <li>• Customized content recommendations</li>
                    <li>• Language and region settings</li>
                    <li>• Theme and display preferences</li>
                  </ul>
                  <div className="mt-3 bg-blue-50 border border-blue-200 rounded p-2">
                    <span className="text-blue-700 text-sm">⚙ Can be disabled in settings</span>
                  </div>
                </div>

                <div className="border border-border rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-secondary mb-3">Marketing Cookies</h3>
                  <p className="text-text-muted mb-3">Used for advertising and marketing purposes:</p>
                  <ul className="space-y-2 text-text-muted">
                    <li>• Personalized advertisements</li>
                    <li>• Campaign performance tracking</li>
                    <li>• Cross-site behavioral advertising</li>
                    <li>• Social media integration</li>
                  </ul>
                  <div className="mt-3 bg-yellow-50 border border-yellow-200 rounded p-2">
                    <span className="text-yellow-700 text-sm">⚙ Can be disabled in settings</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Third-Party Cookies */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-secondary mb-4">Third-Party Cookies</h2>
              <p className="text-text-muted mb-4">
                We work with trusted third-party services that may place cookies on your device:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-secondary mb-2">Analytics Services</h4>
                  <ul className="space-y-1 text-sm text-text-muted">
                    <li>• Google Analytics</li>
                    <li>• Hotjar (user behavior)</li>
                    <li>• Mixpanel (product analytics)</li>
                  </ul>
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-secondary mb-2">Advertising Partners</h4>
                  <ul className="space-y-1 text-sm text-text-muted">
                    <li>• Google Ads</li>
                    <li>• Facebook/Meta Ads</li>
                    <li>• LinkedIn Ads</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Cookie Duration */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-secondary mb-4">Cookie Duration</h2>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-blue-700 mb-3">Cookie Lifespans:</h3>
                <ul className="space-y-2 text-blue-600">
                  <li>• <strong>Session Cookies:</strong> Deleted when you close your browser</li>
                  <li>• <strong>Persistent Cookies:</strong> Remain for a set period (typically 30 days to 1 year)</li>
                  <li>• <strong>Authentication Cookies:</strong> Last for your session duration</li>
                  <li>• <strong>Preference Cookies:</strong> Typically last 6-12 months</li>
                </ul>
              </div>
            </div>

            {/* Managing Cookies */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-secondary mb-4">Managing Your Cookie Preferences</h2>
              <div className="space-y-4">
                <div className="border border-border rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-secondary mb-3">Browser Settings</h3>
                  <p className="text-text-muted mb-3">
                    Most browsers allow you to control cookies through their settings:
                  </p>
                  <ul className="space-y-2 text-text-muted">
                    <li>• Block all cookies (may affect functionality)</li>
                    <li>• Block third-party cookies only</li>
                    <li>• Clear existing cookies</li>
                    <li>• Set exceptions for trusted sites</li>
                  </ul>
                </div>
                <div className="border border-border rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-secondary mb-3">Our Cookie Settings</h3>
                  <p className="text-text-muted mb-3">
                    You can manage your cookie preferences directly in your MatchPartner account:
                  </p>
                  <ul className="space-y-2 text-text-muted">
                    <li>• Go to Account Settings → Privacy → Cookie Preferences</li>
                    <li>• Enable/disable different cookie categories</li>
                    <li>• View detailed cookie information</li>
                    <li>• Withdraw consent at any time</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Cookie Consent */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-secondary mb-4">Cookie Consent</h2>
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-green-700 mb-3">Our Consent Process:</h3>
                <ol className="space-y-2 text-green-600">
                  <li>1. We show a cookie consent banner on your first visit</li>
                  <li>2. You can accept all cookies or customize your preferences</li>
                  <li>3. Your choice is saved and respected across sessions</li>
                  <li>4. You can change your preferences at any time</li>
                </ol>
              </div>
            </div>

            {/* Your Rights */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-secondary mb-4">Your Rights Regarding Cookies</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-700 mb-2">Transparency</h4>
                  <p className="text-sm text-purple-600">
                    Clear information about what cookies we use and why
                  </p>
                </div>
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-700 mb-2">Control</h4>
                  <p className="text-sm text-purple-600">
                    Granular control over different cookie categories
                  </p>
                </div>
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-700 mb-2">Withdrawal</h4>
                  <p className="text-sm text-purple-600">
                    Ability to withdraw consent at any time
                  </p>
                </div>
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-700 mb-2">Access</h4>
                  <p className="text-sm text-purple-600">
                    Information about cookies stored on your device
                  </p>
                </div>
              </div>
            </div>

            {/* Updates to Policy */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-secondary mb-4">Updates to This Policy</h2>
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                <p className="text-yellow-700 mb-3">
                  We may update this cookie policy from time to time to reflect changes in our practices or legal requirements.
                </p>
                <ul className="space-y-2 text-yellow-600">
                  <li>• We will notify you of significant changes</li>
                  <li>• Updated policies are effective immediately upon posting</li>
                  <li>• Continued use constitutes acceptance of changes</li>
                  <li>• Last updated date is shown at the bottom of this page</li>
                </ul>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-primary text-white rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Cookie Policy Questions?</h2>
              <p className="text-white/90 mb-6">
                If you have questions about our use of cookies or this policy, please contact our privacy team.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold mb-2">Privacy Team</h3>
                  <p className="text-white/80">privacy@matchpartner.in</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Support Team</h3>
                  <p className="text-white/80">support@matchpartner.in</p>
                </div>
              </div>
            </div>

            {/* Last Updated */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500 text-center">
                This cookie policy was last updated on March 15, 2026. For questions about this policy or our privacy practices, please contact us.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
