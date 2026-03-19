import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Safety Tips - MatchPartner",
  description: "Essential safety guide for Hindu matrimony. Learn to identify red flags, protect your privacy, and stay safe while finding your perfect match online.",
};

export default function SafetyPage() {
  const safetyTips = [
    {
      title: "Profile Verification",
      description: "Always verify profiles before sharing personal information",
      tips: [
        "Look for the blue verification badge",
        "Check if Aadhaar verification is complete",
        "Verify photos match the person",
        "Cross-check professional details"
      ],
      icon: "✅"
    },
    {
      title: "Privacy Protection",
      description: "Keep your personal information secure",
      tips: [
        "Don't share home address early",
        "Use platform messaging initially",
        "Control photo visibility settings",
        "Be cautious with financial information"
      ],
      icon: "🔒"
    },
    {
      title: "Red Flags to Watch",
      description: "Identify warning signs in potential matches",
      tips: [
        "Requests for money or gifts",
        "Refusal to verify identity",
        "Inconsistent information",
        "Pressure to move too quickly"
      ],
      icon: "🚩"
    },
    {
      title: "First Meeting Safety",
      description: "Stay safe during in-person meetings",
      tips: [
        "Meet in public places only",
        "Inform family about meeting details",
        "Bring a friend or family member",
        "Keep phone charged and accessible"
      ],
      icon: "🤝"
    }
  ];

  const redFlags = [
    "Asks for money or financial assistance",
    "Avoids video calls or meetings",
    "Claims to be overseas but can't prove it",
    "Has inconsistent stories or information",
    "Pressures you to make quick decisions",
    "Refuses to verify their identity",
    "Shares sob stories to gain sympathy",
    "Asks for inappropriate photos",
    "Disrespects your boundaries or values",
    "Makes promises that seem too good to be true"
  ];

  const emergencySteps = [
    {
      title: "Report the Profile",
      description: "Use our reporting system to flag suspicious activity",
      action: "Report immediately"
    },
    {
      title: "Block the User",
      description: "Prevent further communication with the suspicious user",
      action: "Block user"
    },
    {
      title: "Contact Support",
      description: "Reach out to our 24/7 support team for assistance",
      action: "Contact support"
    },
    {
      title: "Inform Family",
      description: "Let your family know about the situation",
      action: "Inform family"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-secondary mb-4">
              Safety First
            </h1>
            <p className="text-lg text-text-muted max-w-3xl mx-auto">
              Your safety is our top priority. Learn essential tips and guidelines to stay safe 
              while finding your perfect match on MatchPartner.
            </p>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-12 bg-red-50 border-b border-red-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-red-600 mb-4">
              🚨 Emergency Support Available 24/7
            </h2>
            <p className="text-red-700 mb-6">
              If you feel unsafe or encounter suspicious activity, contact us immediately.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                Emergency Helpline
              </button>
              <button className="border border-red-600 text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors">
                Report Suspicious Activity
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Tips */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-secondary mb-12 text-center">
            Essential Safety Tips
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {safetyTips.map((category, index) => (
              <div key={index} className="bg-white border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-3xl">{category.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-secondary">{category.title}</h3>
                    <p className="text-text-muted">{category.description}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {category.tips.map((tip, i) => (
                    <li key={i} className="flex items-start gap-2 text-text-muted">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Red Flags */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-secondary mb-12 text-center">
            Red Flags to Watch For
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white border border-red-200 rounded-xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {redFlags.map((flag, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 15.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    <span className="text-text-muted">{flag}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

  {/* Meeting Safety */}
  <section className="py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-semibold text-secondary mb-12 text-center">
        Safe Meeting Guidelines
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-secondary mb-3">Public Places Only</h3>
          <p className="text-text-muted">
            Always meet in public, well-lit places like restaurants, cafes, or parks. Never meet at private residences initially.
          </p>
        </div>
        <div className="text-center">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-secondary mb-3">Inform Someone</h3>
          <p className="text-text-muted">
            Always tell family or friends where you're going, who you're meeting, and when you expect to return.
          </p>
        </div>
        <div className="text-center">
          <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-secondary mb-3">Bring Support</h3>
          <p className="text-text-muted">
            Consider bringing a friend or family member to first meetings, or at least have someone nearby.
          </p>
        </div>
      </div>
    </div>
  </section>

  {/* Emergency Steps */}
  <section className="py-16 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-semibold text-secondary mb-12 text-center">
        If Something Feels Wrong
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {emergencySteps.map((step, index) => (
          <div key={index} className="bg-white border border-border rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-xl font-bold text-red-600">{index + 1}</span>
            </div>
            <h3 className="text-lg font-semibold text-secondary mb-2">{step.title}</h3>
            <p className="text-text-muted mb-4">{step.description}</p>
            <button className="text-red-600 font-semibold hover:underline">
              {step.action}
            </button>
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* Safety Features */}
  <section className="py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-semibold text-secondary mb-12 text-center">
        Our Safety Features
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="text-center">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-secondary mb-3">100% Profile Verification</h3>
          <p className="text-text-muted">
            Every profile undergoes mandatory Aadhaar verification to ensure authenticity.
          </p>
        </div>
        <div className="text-center">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-secondary mb-3">Privacy Controls</h3>
          <p className="text-text-muted">
            Advanced privacy settings let you control who sees your profile and information.
          </p>
        </div>
        <div className="text-center">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-secondary mb-3">24/7 Monitoring</h3>
          <p className="text-text-muted">
            Our team monitors the platform around the clock for suspicious activity.
          </p>
        </div>
      </div>
    </div>
  </section>

  {/* Report Section */}
  <section className="py-16 bg-gray-50">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white border border-border rounded-xl p-8 text-center">
        <h2 className="text-3xl font-semibold text-secondary mb-4">
          Report Suspicious Activity
        </h2>
        <p className="text-lg text-text-muted mb-8">
          If you encounter any suspicious behavior or feel unsafe, report it immediately. 
          Your reports help keep our community safe for everyone.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
            Report Profile
          </button>
          <button className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
            Report Message
          </button>
          <button className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
            Emergency Help
          </button>
        </div>
      </div>
    </div>
  </section>

  {/* Contact Info */}
  <section className="py-16 bg-primary">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl font-bold text-white mb-4">
        Need Help? We're Here 24/7
      </h2>
      <p className="text-white/90 mb-8">
        Your safety is our priority. Contact our support team anytime for assistance.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
        <div>
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <h3 className="font-semibold mb-2">Emergency Helpline</h3>
          <p className="text-white/80">+91 80123 45678</p>
        </div>
        <div>
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
          <h3 className="font-semibold mb-2">Live Chat Support</h3>
          <p className="text-white/80">Available 24/7</p>
        </div>
        <div>
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="font-semibold mb-2">Safety Email</h3>
          <p className="text-white/80">safety@matchpartner.in</p>
        </div>
      </div>
    </div>
  </section>
</div>
);
}
