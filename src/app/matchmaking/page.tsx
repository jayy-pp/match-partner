import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI-Powered Matchmaking - MatchPartner",
  description: "Discover advanced AI matchmaking technology at MatchPartner. Our intelligent algorithm analyzes 50+ compatibility factors to find your perfect Hindu matrimony match.",
};

export default function MatchmakingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-secondary mb-4">
              AI-Powered Matchmaking Technology
            </h1>
            <p className="text-lg text-text-muted max-w-3xl mx-auto">
              Our advanced AI algorithm analyzes over 50 compatibility factors to find your perfect match. Experience the future of Hindu matrimony with intelligent, data-driven matchmaking.
            </p>
          </div>
        </div>
      </section>

      {/* How AI Works */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-secondary mb-12 text-center">
            How Our AI Matchmaking Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold text-secondary mb-3">Profile Analysis</h3>
              <p className="text-text-muted">
                Our AI analyzes your profile, preferences, and personality traits to create a comprehensive compatibility matrix.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold text-secondary mb-3">Smart Matching</h3>
              <p className="text-text-muted">
                Advanced algorithms match you with compatible profiles based on 50+ factors including values, lifestyle, and family preferences.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold text-secondary mb-3">Continuous Learning</h3>
              <p className="text-text-muted">
                The system learns from your interactions and feedback to continuously improve match quality over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Compatibility Factors */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-secondary mb-12 text-center">
            50+ Compatibility Factors Analyzed
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Community & Traditions", items: ["Gotra", "Kundli Matching", "Family Values", "Cultural Background"] },
              { title: "Education & Career", items: ["Education Level", "Professional Field", "Income Range", "Career Goals"] },
              { title: "Lifestyle & Values", items: ["Dietary Preferences", "Social Habits", "Religious Practices", "Life Priorities"] },
              { title: "Personal Traits", items: ["Personality Type", "Communication Style", "Interests", "Life Goals"] },
            ].map((category, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-border">
                <h3 className="font-semibold text-secondary mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-text">
                      <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-secondary mb-12 text-center">
            Proven Success Metrics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">94%</div>
              <p className="text-text-muted">Match Accuracy Rate</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">87%</div>
              <p className="text-text-muted">User Satisfaction</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">3.2x</div>
              <p className="text-text-muted">Higher Success Rate</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <p className="text-text-muted">Data Points Analyzed</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Experience AI-Powered Matchmaking
          </h2>
          <p className="text-white/90 mb-8">
            Join MatchPartner today and let our advanced AI technology find your perfect Hindu matrimony match.
          </p>
          <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
            Start Your Journey
          </button>
        </div>
      </section>
    </div>
  );
}
