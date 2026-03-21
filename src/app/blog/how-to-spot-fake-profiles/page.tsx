import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Spot Fake Profiles on Matrimonial Sites | MatchPartner Blog",
  description: "Learn to identify fake matrimonial profiles with expert tips. Protect yourself from scams on matrimony sites with our comprehensive guide.",
  keywords: [
    "how to spot fake profiles on matrimonial sites", "fake matrimony profiles", "matrimonial site safety",
    "avoid fake profiles matrimony", "identify fake matrimonial profiles", "matrimony scam prevention"
  ],
  openGraph: {
    title: "How to Spot Fake Profiles on Matrimonial Sites",
    description: "Expert guide to identifying fake matrimonial profiles and staying safe on matrimony platforms.",
    url: "https://matchpartner.in/blog/how-to-spot-fake-profiles",
    type: "article",
    images: [
      {
        url: "https://matchpartner.in/images/blog/fake-profiles-guide.jpg",
        width: 1200,
        height: 630,
        alt: "Guide to spotting fake matrimonial profiles",
      },
    ],
  },
  alternates: {
    canonical: "https://matchpartner.in/blog/how-to-spot-fake-profiles",
  },
};

export default function FakeProfilesGuidePage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "How to Spot Fake Profiles on Matrimonial Sites",
    "description": "Learn to identify fake matrimonial profiles with expert tips. Protect yourself from scams on matrimony sites.",
    "author": {
      "@type": "Person",
      "name": "Priya Deshmukh"
    },
    "publisher": {
      "@type": "Organization",
      "name": "MatchPartner",
      "logo": {
        "@type": "ImageObject",
        "url": "https://matchpartner.in/images/logo.png"
      }
    },
    "datePublished": "2026-03-15",
    "dateModified": "2026-03-15",
    "image": "https://matchpartner.in/images/blog/fake-profiles-guide.jpg",
    "url": "https://matchpartner.in/blog/how-to-spot-fake-profiles"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      
      <article className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <span className="inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary mb-4">
                Safety Guide
              </span>
              <h1 className="text-4xl font-bold text-secondary mb-4">
                How to Spot Fake Profiles on Matrimonial Sites
              </h1>
              <p className="text-lg text-text-muted mb-6">
                Protect yourself from scams with our comprehensive guide to identifying fake matrimonial profiles.
              </p>
              <div className="flex items-center justify-center gap-4 text-sm text-text-muted">
                <span>By Priya Deshmukh</span>
                <span>•</span>
                <span>March 15, 2026</span>
                <span>•</span>
                <span>8 min read</span>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-text-muted mb-8 font-medium">
                With the rise of online matrimony platforms, fake profiles have become a growing concern. Here's your complete guide to staying safe and identifying suspicious accounts.
              </p>

              <h2 className="text-2xl font-bold text-secondary mt-12 mb-6">
                Red Flags to Watch Out For
              </h2>

              <div className="bg-surface/50 rounded-xl p-6 mb-8">
                <h3 className="text-xl font-semibold text-secondary mb-4">1. Too-Perfect Photos</h3>
                <ul className="space-y-2 text-text-muted">
                  <li>• Professional model-like photos that seem too polished</li>
                  <li>• Limited number of photos (usually just 1-2)</li>
                  <li>• Photos that look like stock images or seem inconsistent</li>
                  <li>• Reluctance to share additional photos or video calls</li>
                </ul>
              </div>

              <div className="bg-surface/50 rounded-xl p-6 mb-8">
                <h3 className="text-xl font-semibold text-secondary mb-4">2. Incomplete or Vague Information</h3>
                <ul className="space-y-2 text-text-muted">
                  <li>• Missing crucial details like family background or profession</li>
                  <li>• Vague descriptions about education or work</li>
                  <li>• Inconsistent information across different sections</li>
                  <li>• Generic bio that could apply to anyone</li>
                </ul>
              </div>

              <div className="bg-surface/50 rounded-xl p-6 mb-8">
                <h3 className="text-xl font-semibold text-secondary mb-4">3. Communication Red Flags</h3>
                <ul className="space-y-2 text-text-muted">
                  <li>• Immediate requests to move conversation off-platform</li>
                  <li>• Generic messages that don't reference your profile</li>
                  <li>• Avoiding phone calls or video chats</li>
                  <li>• Inconsistent details when questioned about their background</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-secondary mt-12 mb-6">
                How MatchPartner Protects You
              </h2>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white border border-border rounded-xl p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-secondary mb-2">Aadhaar Verification</h3>
                  <p className="text-text-muted">Every profile is verified using Aadhaar to ensure authenticity and prevent fake accounts.</p>
                </div>

                <div className="bg-white border border-border rounded-xl p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-secondary mb-2">AI Monitoring</h3>
                  <p className="text-text-muted">Our AI system continuously monitors for suspicious activity and fake profile patterns.</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-secondary mt-12 mb-6">
                Steps to Verify a Profile
              </h2>

              <div className="space-y-6 mb-8">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
                  <div>
                    <h4 className="font-semibold text-secondary mb-2">Check Verification Status</h4>
                    <p className="text-text-muted">Look for verification badges - Aadhaar verified, phone verified, email verified.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
                  <div>
                    <h4 className="font-semibold text-secondary mb-2">Request Video Call</h4>
                    <p className="text-text-muted">Genuine profiles will be open to video calls after initial conversations.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
                  <div>
                    <h4 className="font-semibold text-secondary mb-2">Cross-Check Information</h4>
                    <p className="text-text-muted">Verify details through mutual connections or social media (if shared).</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">4</div>
                  <div>
                    <h4 className="font-semibold text-secondary mb-2">Meet in Safe Environment</h4>
                    <p className="text-text-muted">When ready to meet, choose public places and inform family members.</p>
                  </div>
                </div>
              </div>

              <div className="bg-accent/10 border-l-4 border-accent rounded-r-lg p-6 mb-8">
                <h3 className="font-semibold text-secondary mb-2">⚠️ Report Suspicious Profiles</h3>
                <p className="text-text-muted">
                  If you encounter a suspicious profile, report it immediately to our support team. We take all reports seriously and investigate within 24 hours.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-secondary mt-12 mb-6">
                Conclusion
              </h2>

              <p className="text-text-muted mb-6">
                While fake profiles exist on all platforms, being aware of the warning signs and using verified matrimony sites like MatchPartner significantly reduces your risk. Remember, genuine connections take time to build, so be patient and trust your instincts.
              </p>

              <p className="text-text-muted">
                Stay safe, stay vigilant, and happy matchmaking!
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary to-primary-dark text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Join MatchPartner's Verified Community
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Connect with 100% Aadhaar-verified profiles in a safe, trusted environment.
            </p>
            <Link
              href="/"
              className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Create Free Profile
            </Link>
          </div>
        </section>
      </article>
    </>
  );
}
