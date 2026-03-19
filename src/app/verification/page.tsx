import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aadhaar Verification System - MatchPartner",
  description: "Learn about MatchPartner's 100% Aadhaar-based identity verification system. Ensuring authentic profiles and safe Hindu matrimony matchmaking with government-verified credentials.",
};

export default function VerificationPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-secondary mb-4">
              100% Aadhaar-Based Verification System
            </h1>
            <p className="text-lg text-text-muted max-w-3xl mx-auto">
              Every profile on MatchPartner undergoes mandatory Aadhaar verification. Connect with genuine, verified individuals and families seeking meaningful relationships.
            </p>
          </div>
        </div>
      </section>

      {/* Verification Process */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-secondary mb-12 text-center">
            How Our Verification Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-secondary mb-3">Aadhaar Link</h3>
              <p className="text-text-muted">
                Users provide their Aadhaar number which is securely linked to their MatchPartner profile.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-secondary mb-3">OTP Verification</h3>
              <p className="text-text-muted">
                Secure one-time password verification confirms the Aadhaar number ownership.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-secondary mb-3">Photo Verification</h3>
              <p className="text-text-muted">
                Profile photos are matched with Aadhaar database for authenticity verification.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-secondary mb-3">Verified Badge</h3>
              <p className="text-text-muted">
                Successfully verified profiles receive a blue verification badge for easy identification.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-secondary mb-12 text-center">
            Advanced Security Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "End-to-End Encryption",
                description: "All Aadhaar data is encrypted and processed through secure government APIs.",
                icon: "🔒"
              },
              {
                title: "Privacy Compliance",
                description: "Fully compliant with Aadhaar Act and data protection regulations.",
                icon: "🛡️"
              },
              {
                title: "No Data Storage",
                description: "Aadhaar numbers are never stored - only verification status is recorded.",
                icon: "🗑️"
              },
              {
                title: "Regular Audits",
                description: "Security audits conducted regularly to maintain highest safety standards.",
                icon: "🔍"
              },
              {
                title: "Family Verification",
                description: "Optional family member verification for enhanced trust and credibility.",
                icon: "👨‍👩‍👧‍👦"
              },
              {
                title: "24/7 Monitoring",
                description: "Continuous monitoring for any suspicious activities or fake profiles.",
                icon: "👁️"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-border">
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-secondary mb-2">{feature.title}</h3>
                <p className="text-text-muted">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-secondary mb-12 text-center">
            Why Verification Matters
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <p className="text-text-muted">Profiles Verified</p>
              <p className="text-sm text-text-muted mt-2">Every single profile undergoes mandatory verification</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">0</div>
              <p className="text-text-muted">Fake Profiles</p>
              <p className="text-sm text-text-muted mt-2">Zero tolerance for fake or fraudulent accounts</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <p className="text-text-muted">Security Monitoring</p>
              <p className="text-sm text-text-muted mt-2">Round-the-clock monitoring for profile authenticity</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Join a Trusted Platform
          </h2>
          <p className="text-white/90 mb-8">
            Experience safe and authentic Hindu matrimony matchmaking with our comprehensive verification system.
          </p>
          <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
            Get Verified Today
          </button>
        </div>
      </section>
    </div>
  );
}
