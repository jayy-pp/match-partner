import type { Metadata } from "next";
import { generateMetadata, seoConfigs } from "@/lib/seo";
import Image from "next/image";
import WaitlistForm from "@/components/WaitlistForm";

export const metadata: Metadata = generateMetadata(seoConfigs.hinduBrides);

export default function HinduBridesPage() {
  const hinduBridesJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Hindu Brides - Verified Hindu Bride Profiles",
    "description": "Browse verified Hindu bride profiles. Aadhaar verified Hindu brides with family collaboration and horoscope matching.",
    "url": "https://matchpartner.in/matrimony/hindu-brides",
    "mainEntity": {
      "@type": "Service",
      "name": "Hindu Bride Matrimony Services",
      "provider": {
        "@type": "Organization",
        "name": "MatchPartner"
      },
      "serviceType": "Matrimony",
      "audience": {
        "@type": "Audience",
        "name": "Families seeking Hindu brides for marriage"
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(hinduBridesJsonLd) }}
      />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/10 to-accent/10 py-16">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/wedding/hindu-bride-portrait.jpg"
              alt="Hindu brides - Beautiful Hindu bride in traditional attire"
              fill
              className="object-cover opacity-20"
              priority
            />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-secondary mb-4">
                Hindu Brides - Verified Hindu Bride Profiles
              </h1>
              <p className="text-lg text-text-muted max-w-3xl mx-auto mb-8">
                Browse thousands of verified Hindu bride profiles. Find educated, cultured Hindu brides from various communities with 100% Aadhaar verification and family collaboration tools.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg px-6 py-3 shadow-lg">
                  <span className="text-2xl font-bold text-primary">8,500+</span>
                  <span className="text-sm text-text-muted ml-2">Hindu Bride Profiles</span>
                </div>
                <div className="bg-white/90 backdrop-blur-sm rounded-lg px-6 py-3 shadow-lg">
                  <span className="text-2xl font-bold text-primary">100%</span>
                  <span className="text-sm text-text-muted ml-2">Verified Profiles</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-surface/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-secondary mb-4">
                Find Your Perfect Hindu Bride
              </h2>
              <p className="text-lg text-text-muted max-w-2xl mx-auto">
                Advanced search filters and verification ensure you connect with genuine Hindu brides.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-secondary mb-2">Community-Wise Search</h3>
                <p className="text-text-muted">Filter Hindu brides by community - Brahmin, Prajapati, Gujarati, Tamil, Marathi, and more.</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-secondary mb-2">Education & Career</h3>
                <p className="text-text-muted">Find educated Hindu brides - doctors, engineers, teachers, and other professionals.</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-secondary mb-2">Horoscope Matching</h3>
                <p className="text-text-muted">Advanced kundali matching for Hindu brides with detailed compatibility analysis.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary to-primary-dark text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Connect with 8,500+ Verified Hindu Brides
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Start your search for the perfect Hindu bride today. Free registration with instant access to verified profiles.
            </p>
            <WaitlistForm variant="dark" />
          </div>
        </section>
      </div>
    </>
  );
}
