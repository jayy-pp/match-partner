import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy - MatchPartner",
  description: "MatchPartner's refund policy for Hindu matrimony services. Clear terms for subscription refunds, money-back guarantee, and customer satisfaction.",
};

export default function RefundPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-secondary mb-4">
              Refund Policy
            </h1>
            <p className="text-lg text-text-muted max-w-3xl mx-auto">
              Our commitment to your satisfaction. Clear and fair refund terms for all MatchPartner services.
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
              <h2 className="text-2xl font-semibold text-secondary mb-4">7-Day Money-Back Guarantee</h2>
              <p className="text-text-muted mb-4">
                We're confident you'll love MatchPartner. If you're not completely satisfied with your paid subscription 
                within the first 7 days, we'll give you a full refund - no questions asked.
              </p>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <p className="font-semibold text-secondary mb-2">Eligibility Requirements:</p>
                <ul className="space-y-2 text-text-muted">
                  <li>• Request must be made within 7 days of purchase</li>
                  <li>• Account must be in good standing</li>
                  <li>• No violations of our Terms of Service</li>
                  <li>• Genuine dissatisfaction with the service</li>
                </ul>
              </div>
            </div>

            {/* Refund Process */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-secondary mb-4">How to Request a Refund</h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 font-semibold">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary mb-1">Contact Support</h3>
                    <p className="text-text-muted">
                      Email us at support@matchpartner.in or use our in-app support to initiate your refund request.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 font-semibold">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary mb-1">Provide Reason</h3>
                    <p className="text-text-muted">
                      Briefly explain why you're requesting a refund. This helps us improve our service.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 font-semibold">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary mb-1">Verification</h3>
                    <p className="text-text-muted">
                      Our team will review your request within 24-48 hours.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 font-semibold">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary mb-1">Processing</h3>
                    <p className="text-text-muted">
                      Approved refunds are processed within 5-7 business days.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Refund Types */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-secondary mb-4">Refund Types</h2>
              <div className="space-y-6">
                <div className="border border-border rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-secondary mb-3">Full Refund (7-Day Guarantee)</h3>
                  <p className="text-text-muted mb-3">
                    100% refund of subscription price within first 7 days.
                  </p>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <p className="text-green-700 font-medium">✓ Eligible for: All new subscriptions</p>
                  </div>
                </div>

                <div className="border border-border rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-secondary mb-3">Prorated Refund</h3>
                  <p className="text-text-muted mb-3">
                    Partial refund based on unused portion of subscription after 7 days.
                  </p>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <p className="text-blue-700 font-medium">ⓘ Case-by-case basis for genuine issues</p>
                  </div>
                </div>

                <div className="border border-border rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-secondary mb-3">Service Credit</h3>
                  <p className="text-text-muted mb-3">
                    Credit for future use instead of monetary refund.
                  </p>
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                    <p className="text-purple-700 font-medium">★ Available for technical issues</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Non-Refundable Items */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-secondary mb-4">Non-Refundable Items</h2>
              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-red-700 mb-3">The following are not eligible for refunds:</h3>
                <ul className="space-y-2 text-red-600">
                  <li>• Requests after 7 days of purchase (except in exceptional circumstances)</li>
                  <li>• Accounts terminated for policy violations</li>
                  <li>• Unused features or services within a subscription period</li>
                  <li>• Change of mind after using premium features</li>
                  <li>• Third-party payment processing fees (non-recoverable)</li>
                  <li>• Promotional or discounted subscriptions (unless specified)</li>
                </ul>
              </div>
            </div>

            {/* Exceptional Circumstances */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-secondary mb-4">Exceptional Circumstances</h2>
              <p className="text-text-muted mb-4">
                We may consider refunds beyond the 7-day period in exceptional cases:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-secondary mb-2">Technical Issues</h4>
                  <p className="text-sm text-text-muted">
                    Platform-wide technical problems preventing service use
                  </p>
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-secondary mb-2">Service Changes</h4>
                  <p className="text-sm text-text-muted">
                    Significant changes to service terms after purchase
                  </p>
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-secondary mb-2">Medical Emergencies</h4>
                  <p className="text-sm text-text-muted">
                    Documented medical emergencies preventing service use
                  </p>
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-secondary mb-2">Family Emergencies</h4>
                  <p className="text-sm text-text-muted">
                    Serious family situations requiring immediate attention
                  </p>
                </div>
              </div>
            </div>

            {/* Refund Timeline */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-secondary mb-4">Refund Processing Timeline</h2>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-text-muted">Request Submission</span>
                    <span className="font-semibold text-secondary">Day 0</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-text-muted">Review & Approval</span>
                    <span className="font-semibold text-secondary">1-2 days</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-text-muted">Processing Initiation</span>
                    <span className="font-semibold text-secondary">Day 3</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-text-muted">Bank Processing</span>
                    <span className="font-semibold text-secondary">5-7 days</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-text-muted">Amount Credited</span>
                    <span className="font-semibold text-secondary">Day 8-10</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-primary text-white rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Questions About Refunds?</h2>
              <p className="text-white/90 mb-6">
                Our support team is here to help you with any refund-related questions.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <h3 className="font-semibold mb-2">Email Support</h3>
                  <p className="text-white/80">refunds@matchpartner.in</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Phone Support</h3>
                  <p className="text-white/80">+91 80123 45678</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Live Chat</h3>
                  <p className="text-white/80">Available 24/7</p>
                </div>
              </div>
            </div>

            {/* Last Updated */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500 text-center">
                This refund policy was last updated on March 15, 2026 and is subject to change without notice.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
