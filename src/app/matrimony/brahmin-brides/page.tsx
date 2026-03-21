import type { Metadata } from "next";
import { generateMetadata, seoConfigs } from "@/lib/seo";
import Image from "next/image";
import WaitlistForm from "@/components/WaitlistForm";

export const metadata: Metadata = generateMetadata(seoConfigs.brahminMatrimony);

export default function BrahminMatrimonyPage() {
  const brahminJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Brahmin Matrimony - Verified Brahmin Brides & Grooms",
    "description": "Premium Brahmin matrimony with Aadhaar verified profiles. Find educated Brahmin brides & grooms with horoscope matching.",
    "url": "https://matchpartner.in/matrimony/brahmin-brides",
    "mainEntity": {
      "@type": "Service",
      "name": "Brahmin Matrimony Services",
      "provider": {
        "@type": "Organization",
        "name": "MatchPartner"
      },
      "serviceType": "Matrimony",
      "audience": {
        "@type": "Audience",
        "name": "Brahmin community seeking matrimonial matches"
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(brahminJsonLd) }}
      />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/10 to-accent/10 py-16">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/wedding/brahmin-couple.jpg"
              alt="Brahmin matrimony - Traditional Brahmin wedding ceremony"
              fill
              className="object-cover opacity-20"
              priority
            />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-secondary mb-4">
                Brahmin Matrimony - Verified Brahmin Brides & Grooms
              </h1>
              <p className="text-lg text-text-muted max-w-3xl mx-auto mb-8">
                Premium Brahmin matrimony platform with 100% Aadhaar verified profiles. Find educated Brahmin brides & grooms with advanced kundali matching and family collaboration.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg px-6 py-3 shadow-lg">
                  <span className="text-2xl font-bold text-primary">5,200+</span>
                  <span className="text-sm text-text-muted ml-2">Brahmin Profiles</span>
                </div>
                <div className="bg-white/90 backdrop-blur-sm rounded-lg px-6 py-3 shadow-lg">
                  <span className="text-2xl font-bold text-primary">95%</span>
                  <span className="text-sm text-text-muted ml-2">Highly Educated</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Community Features */}
        <section className="py-16 bg-surface/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-secondary mb-4">
                Premium Brahmin Matrimony Features
              </h2>
              <p className="text-lg text-text-muted max-w-2xl mx-auto">
                Specialized features designed for Brahmin community traditions and values.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-secondary mb-2">Advanced Kundali Matching</h3>
                <p className="text-text-muted">Comprehensive horoscope analysis with 36-point compatibility system for Brahmin marriages.</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-secondary mb-2">Educated Professionals</h3>
                <p className="text-text-muted">95% of our Brahmin members are highly educated professionals from top universities and companies.</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-secondary mb-2">Verified Authenticity</h3>
                <p className="text-text-muted">Every Brahmin profile undergoes rigorous verification including Aadhaar, education, and profession.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary to-primary-dark text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Join 5,200+ Brahmin Families on MatchPartner
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Find your perfect Brahmin life partner with advanced kundali matching and family collaboration tools.
            </p>
            <WaitlistForm variant="dark" />
          </div>
        </section>
      </div>
    </>
  );
}
