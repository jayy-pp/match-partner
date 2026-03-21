import type { Metadata } from "next";
import { generateMetadata, seoConfigs } from "@/lib/seo";
import Image from "next/image";
import WaitlistForm from "@/components/WaitlistForm";

export const metadata: Metadata = generateMetadata(seoConfigs.prajapatiMatrimony);

export default function PrajapatiMatrimonyPage() {
  const prajapatiJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Prajapati Matrimony - Maru Prajapati Brides & Grooms",
    "description": "Find verified Prajapati brides & grooms. Aadhaar verified Maru Prajapati matrimony profiles with family collaboration tools.",
    "url": "https://matchpartner.in/matrimony/prajapati-brides",
    "mainEntity": {
      "@type": "Service",
      "name": "Prajapati Matrimony Services",
      "provider": {
        "@type": "Organization",
        "name": "MatchPartner"
      },
      "serviceType": "Matrimony",
      "audience": {
        "@type": "Audience",
        "name": "Prajapati community seeking matrimonial matches"
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(prajapatiJsonLd) }}
      />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/10 to-accent/10 py-16">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/wedding/prajapati-couple.jpg"
              alt="Prajapati matrimony - Traditional Maru Prajapati wedding couple"
              fill
              className="object-cover opacity-20"
              priority
            />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-secondary mb-4">
                Prajapati Matrimony - Maru Prajapati Brides & Grooms
              </h1>
              <p className="text-lg text-text-muted max-w-3xl mx-auto mb-8">
                Find your perfect life partner from the Prajapati community. 100% Aadhaar verified Maru Prajapati matrimony profiles with Gotra Pravara matching and family collaboration tools.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg px-6 py-3 shadow-lg">
                  <span className="text-2xl font-bold text-primary">2,500+</span>
                  <span className="text-sm text-text-muted ml-2">Prajapati Profiles</span>
                </div>
                <div className="bg-white/90 backdrop-blur-sm rounded-lg px-6 py-3 shadow-lg">
                  <span className="text-2xl font-bold text-primary">100%</span>
                  <span className="text-sm text-text-muted ml-2">Aadhaar Verified</span>
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
                Why Choose MatchPartner for Prajapati Matrimony?
              </h2>
              <p className="text-lg text-text-muted max-w-2xl mx-auto">
                The most trusted platform for Maru Prajapati community matrimony with specialized features for your traditions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-secondary mb-2">Gotra Pravara Matching</h3>
                <p className="text-text-muted">Specialized Gotra Pravara matching system for Prajapati community traditions and customs.</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-secondary mb-2">Family Collaboration</h3>
                <p className="text-text-muted">Allow family members to participate in the search process with privacy controls.</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-secondary mb-2">100% Verified Profiles</h3>
                <p className="text-text-muted">Every Prajapati profile is Aadhaar verified to ensure authenticity and safety.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary to-primary-dark text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Join 2,500+ Prajapati Families Who Trust MatchPartner
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Start your journey to find your perfect Maru Prajapati life partner today. Free registration with instant profile verification.
            </p>
            <WaitlistForm variant="dark" />
          </div>
        </section>
      </div>
    </>
  );
}
