import type { Metadata } from "next";
import { generateMetadata, seoConfigs } from "@/lib/seo";
import Image from "next/image";
import WaitlistForm from "@/components/WaitlistForm";

export const metadata: Metadata = generateMetadata(seoConfigs.kundaliMatching);

export default function KundaliMatchingPage() {
  const kundaliJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Kundali Matching - Horoscope Compatibility for Marriage",
    "description": "Free kundali matching for marriage. AI-powered horoscope compatibility analysis for Hindu matrimony.",
    "url": "https://matchpartner.in/kundali/matching",
    "mainEntity": {
      "@type": "Service",
      "name": "Kundali Matching Services",
      "provider": {
        "@type": "Organization",
        "name": "MatchPartner"
      },
      "serviceType": "Horoscope Matching",
      "offers": {
        "@type": "Offer",
        "name": "Free Kundali Matching",
        "price": "0",
        "priceCurrency": "INR"
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(kundaliJsonLd) }}
      />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/10 to-accent/10 py-16">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/astrology/kundali-chart.jpg"
              alt="Kundali matching - Traditional horoscope charts for marriage compatibility"
              fill
              className="object-cover opacity-20"
              priority
            />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-secondary mb-4">
                Kundali Matching - Free Horoscope Compatibility
              </h1>
              <p className="text-lg text-text-muted max-w-3xl mx-auto mb-8">
                Get accurate kundali matching for marriage with our AI-powered horoscope compatibility system. Free analysis based on 36-point Ashtakoot system for Hindu matrimony.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg px-6 py-3 shadow-lg">
                  <span className="text-2xl font-bold text-primary">36-Point</span>
                  <span className="text-sm text-text-muted ml-2">Ashtakoot System</span>
                </div>
                <div className="bg-white/90 backdrop-blur-sm rounded-lg px-6 py-3 shadow-lg">
                  <span className="text-2xl font-bold text-primary">100%</span>
                  <span className="text-sm text-text-muted ml-2">Free Analysis</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-secondary mb-4">
                How Kundali Matching Works
              </h2>
              <p className="text-lg text-text-muted max-w-2xl mx-auto">
                Our advanced system analyzes multiple compatibility factors for accurate marriage predictions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-xl font-semibold text-secondary mb-2">Enter Birth Details</h3>
                <p className="text-text-muted">Provide accurate birth date, time, and place for both partners.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="text-xl font-semibold text-secondary mb-2">AI Analysis</h3>
                <p className="text-text-muted">Our AI analyzes 36 compatibility points using traditional Vedic methods.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="text-xl font-semibold text-secondary mb-2">Compatibility Score</h3>
                <p className="text-text-muted">Get detailed compatibility score with explanations for each factor.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">4</span>
                </div>
                <h3 className="text-xl font-semibold text-secondary mb-2">Marriage Guidance</h3>
                <p className="text-text-muted">Receive personalized recommendations and auspicious timing suggestions.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 bg-surface/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-secondary mb-4">
                Advanced Kundali Matching Features
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-secondary mb-2">36-Point Ashtakoot</h3>
                <p className="text-text-muted">Complete analysis of Varna, Vashya, Tara, Yoni, Graha Maitri, Gana, Bhakoot, and Nadi compatibility.</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-secondary mb-2">Mangal Dosha Check</h3>
                <p className="text-text-muted">Detailed Mangal Dosha analysis with remedies and compatibility assessment for affected individuals.</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-secondary mb-2">Auspicious Timing</h3>
                <p className="text-text-muted">Get recommendations for the best marriage dates and muhurat based on both horoscopes.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-secondary mb-4">
                Frequently Asked Questions
              </h2>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-secondary mb-2">
                  How accurate is kundali matching for marriage?
                </h3>
                <p className="text-text-muted">
                  Kundali matching is based on ancient Vedic astrology principles and provides valuable insights into compatibility. While it's a helpful guide, modern relationships also depend on mutual understanding, communication, and shared values.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-secondary mb-2">
                  What if the kundali matching score is low?
                </h3>
                <p className="text-text-muted">
                  A low score doesn't mean the marriage is doomed. Our system provides detailed analysis and suggests remedies. Many successful marriages have lower compatibility scores but strong emotional bonds.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-secondary mb-2">
                  Is exact birth time necessary for kundali matching?
                </h3>
                <p className="text-text-muted">
                  Yes, accurate birth time is crucial for precise kundali matching. Even a few minutes difference can affect the analysis. If exact time is unknown, we provide approximate matching based on available information.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary to-primary-dark text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Get Free Kundali Matching Today
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Join thousands of couples who found their perfect match with our accurate horoscope compatibility analysis.
            </p>
            <WaitlistForm variant="dark" />
          </div>
        </section>
      </div>
    </>
  );
}
