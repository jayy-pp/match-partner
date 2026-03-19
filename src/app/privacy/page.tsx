import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - MatchPartner",
  description: "MatchPartner's comprehensive privacy policy for Hindu matrimony services. Learn how we protect your data, ensure privacy, and comply with regulations.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-secondary mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-text-muted max-w-3xl mx-auto">
              Your privacy is our fundamental commitment. Learn how we collect, use, and protect your personal information on MatchPartner.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose max-w-none">
            
            {/* Overview */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-semibold text-secondary mb-4">Our Privacy Commitment</h2>
              <p className="text-text-muted mb-4">
                At MatchPartner, we believe that privacy is a fundamental right. We are committed to protecting 
                your personal information and maintaining your trust while providing you with the best Hindu matrimony experience.
              </p>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <p className="font-semibold text-secondary mb-2">Key Principles:</p>
                <ul className="space-y-2 text-text-muted">
                  <li>• Transparency in data collection and usage</li>
                  <li>• Minimal data collection for essential services</li>
                  <li>• Strong security measures to protect your information</li>
                  <li>• Your control over your personal data</li>
                </ul>
              </div>
            </div>

            {/* Information We Collect */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-secondary mb-4">Information We Collect</h2>
              <div className="space-y-6">
                <div className="border border-border rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-secondary mb-3">Personal Information</h3>
                  <p className="text-text-muted mb-3">Information you provide directly to us:</p>
                  <ul className="space-y-2 text-text-muted">
                    <li>• Name, age, and contact details</li>
                    <li>• Educational and professional background</li>
                    <li>• Family information and preferences</li>
                    <li>• Religious and cultural preferences</li>
                    <li>• Photos and videos you upload</li>
                  </ul>
                </div>

                <div className="border border-border rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-secondary mb-3">Verification Information</h3>
                  <p className="text-text-muted mb-3">Information for identity verification:</p>
                  <ul className="space-y-2 text-text-muted">
                    <li>• Aadhaar number (encrypted, not stored)</li>
                    <li>• Government-issued ID documents</li>
                    <li>• Phone number verification records</li>
                    <li>• Email verification status</li>
                  </ul>
                </div>

                <div className="border border-border rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-secondary mb-3">Usage Information</h3>
                  <p className="text-text-muted mb-3">How you use our platform:</p>
                  <ul className="space-y-2 text-text-muted">
                    <li>• Profile views and interactions</li>
                    <li>• Search and filter preferences</li>
                    <li>• Communication with other users</li>
                    <li>• Feature usage patterns</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* How We Use Your Information */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-secondary mb-4">How We Use Your Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-semibold text-green-700 mb-2">✓ Service Provision</h4>
                  <p className="text-sm text-green-600">
                    To provide and improve our matchmaking services
                  </p>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-semibold text-green-700 mb-2">✓ Profile Matching</h4>
                  <p className="text-sm text-green-600">
                    To find compatible matches using our AI algorithm
                  </p>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-semibold text-green-700 mb-2">✓ Safety & Security</h4>
                  <p className="text-sm text-green-600">
                    To verify profiles and prevent fraudulent activity
                  </p>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-semibold text-green-700 mb-2">✓ Communication</h4>
                  <p className="text-sm text-green-600">
                    To facilitate communication between verified users
                  </p>
                </div>
              </div>
            </div>

            {/* Data Protection */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-secondary mb-4">Data Protection Measures</h2>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-blue-700 mb-3">Security Measures We Implement:</h3>
                <ul className="space-y-2 text-blue-600">
                  <li>• 256-bit SSL encryption for all data transmission</li>
                  <li>• End-to-end encryption for sensitive information</li>
                  <li>• Regular security audits and penetration testing</li>
                  <li>• Access controls and authentication systems</li>
                  <li>• Secure data storage with redundancy</li>
                  <li>• Compliance with Indian data protection laws</li>
                </ul>
              </div>
            </div>

            {/* Your Rights */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-secondary mb-4">Your Privacy Rights</h2>
              <div className="space-y-4">
                <div className="border border-border rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-secondary mb-3">Access and Correction</h3>
                  <p className="text-text-muted">
                    You have the right to access and correct your personal information at any time through your account settings.
                  </p>
                </div>
                <div className="border border-border rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-secondary mb-3">Data Deletion</h3>
                  <p className="text-text-muted">
                    You can request deletion of your account and personal data, subject to legal obligations and legitimate business interests.
                  </p>
                </div>
                <div className="border border-border rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-secondary mb-3">Consent Withdrawal</h3>
                  <p className="text-text-muted">
                    You can withdraw consent for data processing at any time, though this may affect your ability to use certain features.
                  </p>
                </div>
              </div>
            </div>

            {/* Third-Party Sharing */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-secondary mb-4">Third-Party Sharing</h2>
              <p className="text-text-muted mb-4">
                We do not sell your personal information to third parties. We only share information in limited circumstances:
              </p>
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                <ul className="space-y-2 text-yellow-700">
                  <li>• With government authorities for legal compliance</li>
                  <li>• With service providers who help us operate our platform</li>
                  <li>• With law enforcement when required by law</li>
                  <li>• With business partners (with your explicit consent)</li>
                </ul>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-primary text-white rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Privacy Questions?</h2>
              <p className="text-white/90 mb-6">
                If you have questions about this privacy policy or how we handle your data, please contact us.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold mb-2">Privacy Officer</h3>
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
                This privacy policy was last updated on March 15, 2026 and is subject to change without notice.
                By using MatchPartner, you agree to this privacy policy.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
