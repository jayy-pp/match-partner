import type { Metadata } from "next";
import { generateMetadata, generateBreadcrumbJsonLd, seoConfigs } from "@/lib/seo";

export const metadata: Metadata = generateMetadata(seoConfigs.successStories);

export default function SuccessStoriesPage() {
  const successStories = [
    {
      couple: "Priya & Amit",
      location: "Delhi → Mumbai",
      story:
        "We both were skeptical about online matrimony, but MatchPartner's verification process gave us confidence. The AI matching was surprisingly accurate!",
      image: "couple1",
      duration: "6 months",
      community: "Brahmin",
    },
    {
      couple: "Sunita & Rajesh",
      location: "Bangalore → Chennai",
      story:
        "Being from different states, we never thought we'd find each other. MatchPartner's family collaboration feature helped our families connect.",
      image: "couple2",
      duration: "3 months",
      community: "Rajput",
    },
    {
      couple: "Anjali & Vikram",
      location: "Pune → Hyderabad",
      story:
        "The horoscope matching feature was perfect for us. Our families were impressed with the detailed compatibility analysis.",
      image: "couple3",
      duration: "4 months",
      community: "Vaishya",
    },
    {
      couple: "Deepa & Karan",
      location: "Kolkata → Delhi",
      story:
        "As working professionals, we appreciated the privacy controls. We could take our time getting to know each other safely.",
      image: "couple4",
      duration: "8 months",
      community: "Kshatriya",
    },
    {
      couple: "Meera & Rahul",
      location: "Jaipur → Ahmedabad",
      story:
        "The video profile introductions helped us break the ice. We felt like we knew each other even before meeting in person.",
      image: "couple5",
      duration: "5 months",
      community: "Brahmin",
    },
    {
      couple: "Pooja & Sameer",
      location: "Lucknow → Chandigarh",
      story:
        "MatchPartner's dedicated relationship manager made all the difference. They understood our preferences perfectly.",
      image: "couple6",
      duration: "2 months",
      community: "Rajput",
    },
  ];

  // Review schema — Google can surface individual testimonials as rich snippets
  const reviewsJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://matchpartner.in/#service",
    name: "MatchPartner Hindu Matrimony",
    description: "India's most trusted Hindu matrimony platform with Aadhaar-verified profiles and AI matchmaking.",
    url: "https://matchpartner.in",
    provider: {
      "@type": "Organization",
      name: "MatchPartner",
      url: "https://matchpartner.in",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "2500",
      bestRating: "5",
      worstRating: "1",
    },
    review: successStories.map((story, index) => ({
      "@type": "Review",
      "@id": `https://matchpartner.in/success-stories#review-${index + 1}`,
      author: {
        "@type": "Person",
        name: story.couple,
      },
      reviewBody: story.story,
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
        worstRating: "1",
      },
      datePublished: "2024-01-01",
      itemReviewed: {
        "@type": "Service",
        name: "MatchPartner Hindu Matrimony",
        url: "https://matchpartner.in",
      },
    })),
  };

  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    { name: "Home", url: "https://matchpartner.in" },
    { name: "Success Stories", url: "https://matchpartner.in/success-stories" },
  ]);

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-secondary mb-4">
              Success Stories
            </h1>
            <p className="text-lg text-text-muted max-w-3xl mx-auto">
              Real couples, real stories. Discover how thousands of Hindu
              families have found their perfect matches through MatchPartner's
              trusted platform.
            </p>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">
                10,000+
              </div>
              <p className="text-text-muted">Successful Matches</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">95%</div>
              <p className="text-text-muted">Success Rate</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <p className="text-text-muted">Weddings Per Month</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">4.8/5</div>
              <p className="text-text-muted">Average Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-secondary mb-12 text-center">
            Real Love Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div
                key={index}
                className="bg-white border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl">💑</span>
                    </div>
                    <p className="font-semibold text-secondary">
                      {story.couple}
                    </p>
                    <p className="text-sm text-text-muted">{story.location}</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">
                      {story.community}
                    </span>
                    <span className="text-sm text-text-muted">
                      Matched in {story.duration}
                    </span>
                  </div>
                  <p className="text-text-muted mb-4">"{story.story}"</p>
                  <div className="flex items-center justify-between">
                    <div className="flex -space-x-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          className="w-4 h-4 text-yellow-400 fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                    <button className="text-primary text-sm font-semibold hover:underline">
                      Read Full Story
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Story */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-secondary mb-12 text-center">
            Featured Success Story
          </h2>
          <div className="bg-white rounded-xl border border-border p-8">
            <div className="text-center mb-8">
              <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💕</span>
              </div>
              <h3 className="text-2xl font-bold text-secondary mb-2">
                Anjali & Vikram
              </h3>
              <p className="text-text-muted">
                Pune → Hyderabad • Married in 2024
              </p>
            </div>
            <div className="prose max-w-none text-center">
              <p className="text-lg text-text-muted mb-6">
                "We never imagined we'd find our soulmate through an app, but
                MatchPartner changed everything. The AI recommendations were
                spot-on, and the verification process gave our families complete
                peace of mind. What impressed us most was how the platform
                understood our cultural values while using modern technology."
              </p>
              <p className="text-lg text-text-muted mb-6">
                "The horoscope matching feature was incredibly detailed - much
                more than what we'd seen elsewhere. Our families were able to
                collaborate on the profile, which made the whole process so much
                easier. Today, we're happily married and grateful to
                MatchPartner for bringing us together."
              </p>
              <div className="flex items-center justify-center gap-8 mt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">4</div>
                  <p className="text-sm text-text-muted">Months to Match</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">95%</div>
                  <p className="text-sm text-text-muted">Compatibility Score</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">Vaishya</div>
                  <p className="text-sm text-text-muted">Community</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Start Your Own Success Story
          </h2>
          <p className="text-white/90 mb-8">
            Join thousands of happy couples who found their perfect match on
            MatchPartner. Your Hindu matrimony success story begins here.
          </p>
          <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
            Create Your Profile
          </button>
        </div>
      </section>
    </div>
  );
}
