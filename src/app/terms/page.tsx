import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - MatchPartner",
  description: "MatchPartner's terms of service for Hindu matrimony platform. Legal terms, user responsibilities, and service agreements for using our matchmaking services.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-secondary mb-4">
              Terms of Service
            </h1>
            <p className="text-lg text-text-muted max-w-3xl mx-auto">
              By using MatchPartner, you agree to these terms and conditions. Please read them carefully to understand your rights and responsibilities.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose max-w-none">
            
            {/* Agreement */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-semibold text-secondary mb-4">Agreement to Terms</h2>
              <p className="text-text-muted mb-4">
                By accessing and using MatchPartner, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <p className="font-semibold text-secondary mb-2">By using MatchPartner, you:</p>
                <ul className="space-y-2 text-text-muted">
                  <li>• Acknowledge that you have read and understood these terms</li>
                  <li>• Agree to be bound by these terms and conditions</li>
                  <li>• Represent that you are at least 18 years of age</li>
                  <li>• Confirm that you are legally eligible to marry in your jurisdiction</li>
                </ul>
              </div>
            </div>

            {/* Service Description */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-secondary mb-4">Service Description</h2>
              <p className="text-text-muted mb-4">
                MatchPartner is a Hindu matrimony platform that connects individuals seeking marriage partners. Our services include:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-700 mb-2">Core Services</h4>
                  <ul className="space-y-1 text-sm text-blue-600">
                    <li>• Profile creation and management</li>
                    <li>• AI-powered matchmaking</li>
                    <li>• Secure messaging</li>
                    <li>• Video calls and chat</li>
                  </ul>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-700 mb-2">Premium Features</h4>
                  <ul className="space-y-1 text-sm text-blue-600">
                    <li>• Advanced search filters</li>
                    <li>• Profile visibility boosts</li>
                    <li>• Relationship manager</li>
                    <li>• Priority support</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* User Responsibilities */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-secondary mb-4">User Responsibilities</h2>
              <div className="space-y-4">
                <div className="border border-border rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-secondary mb-3">Accurate Information</h3>
                  <p className="text-text-muted">
                    You must provide accurate, complete, and current information in your profile. Misrepresentation may result in account termination.
                  </p>
                </div>
                <div className="border border-border rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-secondary mb-3">Appropriate Conduct</h3>
                  <p className="text-text-muted">
                    You agree to treat other users with respect and refrain from harassment, discrimination, or inappropriate behavior.
                  </p>
                </div>
                <div className="border border-border rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-secondary mb-3">Account Security</h3>
                  <p className="text-text-muted">
                    You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account.
                  </p>
                </div>
              </div>
            </div>

            {/* Prohibited Activities */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-secondary mb-4">Prohibited Activities</h2>
              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-red-700 mb-3">You may NOT:</h3>
                <ul className="space-y-2 text-red-600">
                  <li>• Create fake or misleading profiles</li>
                  <li>• Use the platform for commercial purposes</li>
                  <li>• Solicit money or financial assistance</li>
                  <li>• Share inappropriate or offensive content</li>
                  <li>• Violate applicable laws or regulations</li>
                  <li>• Attempt to gain unauthorized access to our systems</li>
                  <li>• Spam or harass other users</li>
                  <li>• Share other users' personal information</li>
                </ul>
              </div>
            </div>

            {/* Privacy and Data */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-secondary mb-4">Privacy and Data Protection</h2>
              <p className="text-text-muted mb-4">
                Your privacy is important to us. Our use of your personal information is governed by our Privacy Policy, which forms part of these terms.
              </p>
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-green-700 mb-3">Key Privacy Points:</h3>
                <ul className="space-y-2 text-green-600">
                  <li>• We collect only necessary information for service provision</li>
                  <li>• Your data is protected with industry-standard security</li>
                  <li>• You control your privacy settings and visibility</li>
                  <li>• We comply with applicable data protection laws</li>
                </ul>
              </div>
            </div>

            {/* Payment Terms */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-secondary mb-4">Payment and Subscription Terms</h2>
              <div className="space-y-4">
                <div className="border border-border rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-secondary mb-3">Subscription Plans</h3>
                  <p className="text-text-muted">
                    We offer various subscription plans with different features and durations. Prices are clearly displayed and may change from time to time.
                  </p>
                </div>
                <div className="border border-border rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-secondary mb-3">Payment Terms</h3>
                  <p className="text-text-muted">
                    Payments are processed through secure third-party payment gateways. All payments are non-refundable except as specified in our Refund Policy.
                  </p>
                </div>
                <div className="border border-border rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-secondary mb-3">Auto-Renewal</h3>
                  <p className="text-text-muted">
                    Subscriptions automatically renew unless cancelled before the renewal date. You can manage auto-renewal in your account settings.
                  </p>
                </div>
              </div>
            </div>

            {/* Intellectual Property */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-secondary mb-4">Intellectual Property</h2>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-purple-700 mb-3">Ownership Rights:</h3>
                <ul className="space-y-2 text-purple-600">
                  <li>• MatchPartner owns all platform content and technology</li>
                  <li>• You retain ownership of content you upload</li>
                  <li>• You grant us license to use your content for service provision</li>
                  <li>• You may not use our content without permission</li>
                </ul>
              </div>
            </div>

            {/* Dispute Resolution */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-secondary mb-4">Dispute Resolution</h2>
              <p className="text-text-muted mb-4">
                If you have a dispute with MatchPartner, we encourage you to contact us first to resolve the issue amicably.
              </p>
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-yellow-700 mb-3">Resolution Process:</h3>
                <ol className="space-y-2 text-yellow-600">
                  <li>1. Contact our support team with details of the issue</li>
                  <li>2. We will investigate and respond within 7 business days</li>
                  <li>3. If unresolved, we offer mediation services</li>
                  <li>4. Legal disputes are subject to Indian jurisdiction</li>
                </ol>
              </div>
            </div>

            {/* Termination */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-secondary mb-4">Account Termination</h2>
              <div className="space-y-4">
                <div className="border border-border rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-secondary mb-3">User Termination</h3>
                  <p className="text-text-muted">
                    You may terminate your account at any time through your account settings or by contacting support.
                  </p>
                </div>
                <div className="border border-border rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-secondary mb-3">Platform Termination</h3>
                  <p className="text-text-muted">
                    We may suspend or terminate your account for violations of these terms, fraudulent activity, or at our discretion.
                  </p>
                </div>
              </div>
            </div>

            {/* Limitation of Liability */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-secondary mb-4">Limitation of Liability</h2>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                <p className="text-text-muted mb-4">
                  MatchPartner is not responsible for user interactions, relationships, or outcomes. Our liability is limited as follows:
                </p>
                <ul className="space-y-2 text-text-muted">
                  <li>• We provide a platform, not guarantee of matches</li>
                  <li>• We are not liable for user conduct or misrepresentation</li>
                  <li>• Our total liability is limited to subscription fees paid</li>
                  <li>• We are not liable for indirect or consequential damages</li>
                </ul>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-primary text-white rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Questions About These Terms?</h2>
              <p className="text-white/90 mb-6">
                If you have any questions about these terms of service, please don't hesitate to contact us.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold mb-2">Legal Department</h3>
                  <p className="text-white/80">legal@matchpartner.in</p>
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
                These terms of service were last updated on March 15, 2026 and are subject to change without notice.
                Continued use of MatchPartner constitutes acceptance of any changes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
