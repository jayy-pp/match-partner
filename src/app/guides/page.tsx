import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guides & Resources - MatchPartner",
  description: "Comprehensive guides for Hindu matrimony success. Learn profile creation, matching strategies, safety tips, and cultural insights for finding your perfect match.",
};

export default function GuidesPage() {
  const guides = [
    {
      title: "Complete Profile Creation Guide",
      description: "Step-by-step instructions to create an attractive and authentic profile that gets noticed.",
      category: "Getting Started",
      readTime: "8 min read",
      difficulty: "Beginner",
      featured: true
    },
    {
      title: "Understanding Hindu Matrimony Traditions",
      description: "Learn about traditional practices, ceremonies, and cultural considerations in modern Hindu marriages.",
      category: "Culture & Traditions",
      readTime: "12 min read",
      difficulty: "Beginner",
      featured: false
    },
    {
      title: "AI Matching Algorithm Explained",
      description: "Deep dive into how our AI technology works and how to optimize your profile for better matches.",
      category: "Technology",
      readTime: "10 min read",
      difficulty: "Intermediate",
      featured: false
    },
    {
      title: "Safety Guide for Online Matrimony",
      description: "Essential safety tips and red flags to watch for when using online matrimony platforms.",
      category: "Safety",
      readTime: "6 min read",
      difficulty: "Beginner",
      featured: true
    },
    {
      title: "Family Involvement in Modern Matchmaking",
      description: "How to balance traditional family involvement with modern dating preferences.",
      category: "Family & Relationships",
      readTime: "9 min read",
      difficulty: "Intermediate",
      featured: false
    },
    {
      title: "Horoscope Matching (Kundali) Guide",
      description: "Understanding the importance and process of horoscope matching in Hindu marriages.",
      category: "Culture & Traditions",
      readTime: "15 min read",
      difficulty: "Advanced",
      featured: false
    },
    {
      title: "First Meeting Conversation Starters",
      description: "Ice breakers and conversation topics for your first in-person meeting with a potential match.",
      category: "Communication",
      readTime: "7 min read",
      difficulty: "Beginner",
      featured: false
    },
    {
      title: "NRI Matrimony: Special Considerations",
      description: "Guide for NRIs seeking matches in India, including time zones, cultural adjustments, and legal aspects.",
      category: "Special Cases",
      readTime: "11 min read",
      difficulty: "Intermediate",
      featured: false
    },
    {
      title: "Premium Features Maximization",
      description: "How to make the most of premium subscription features for faster and better matches.",
      category: "Premium Features",
      readTime: "8 min read",
      difficulty: "Intermediate",
      featured: false
    }
  ];

  const categories = [
    "All Guides",
    "Getting Started",
    "Culture & Traditions",
    "Technology",
    "Safety",
    "Family & Relationships",
    "Communication",
    "Special Cases",
    "Premium Features"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-secondary mb-4">
              Guides & Resources
            </h1>
            <p className="text-lg text-text-muted max-w-3xl mx-auto">
              Expert guides to help you navigate the world of Hindu matrimony. From profile creation to cultural insights, 
              we've got you covered with comprehensive resources.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category === "All Guides"
                    ? "bg-primary text-white"
                    : "bg-gray-100 text-text hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Guides */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-secondary mb-12 text-center">
            Featured Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {guides.filter(guide => guide.featured).map((guide, index) => (
              <div key={index} className="bg-white border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl">📖</span>
                    </div>
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                      {guide.category}
                    </span>
                    <span className="text-sm text-text-muted">{guide.readTime}</span>
                    <span className={`text-sm px-3 py-1 rounded-full ${
                      guide.difficulty === "Beginner" ? "bg-green-100 text-green-700" :
                      guide.difficulty === "Intermediate" ? "bg-yellow-100 text-yellow-700" :
                      "bg-red-100 text-red-700"
                    }`}>
                      {guide.difficulty}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-secondary mb-3">{guide.title}</h3>
                  <p className="text-text-muted mb-4">{guide.description}</p>
                  <button className="text-primary font-semibold hover:underline">
                    Read Guide →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Guides */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-secondary mb-12 text-center">
            All Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guides.map((guide, index) => (
              <div key={index} className="bg-white border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                    {guide.category}
                  </span>
                  <span className="text-sm text-text-muted">{guide.readTime}</span>
                  {guide.featured && (
                    <span className="text-sm bg-primary text-white px-3 py-1 rounded-full">
                      Featured
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-secondary mb-3">{guide.title}</h3>
                <p className="text-text-muted mb-4">{guide.description}</p>
                <div className="flex items-center justify-between">
                  <span className={`text-sm px-3 py-1 rounded-full ${
                    guide.difficulty === "Beginner" ? "bg-green-100 text-green-700" :
                    guide.difficulty === "Intermediate" ? "bg-yellow-100 text-yellow-700" :
                    "bg-red-100 text-red-700"
                  }`}>
                    {guide.difficulty}
                  </span>
                  <button className="text-primary font-semibold hover:underline">
                    Read →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Tutorials */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-secondary mb-12 text-center">
            Video Tutorials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Profile Creation Tutorial",
                duration: "5:30",
                thumbnail: "profile-tutorial"
              },
              {
                title: "Understanding Match Scores",
                duration: "8:15",
                thumbnail: "match-scores"
              },
              {
                title: "Privacy Settings Guide",
                duration: "6:45",
                thumbnail: "privacy-settings"
              }
            ].map((video, index) => (
              <div key={index} className="bg-white border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-40 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-2">
                      <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span className="text-sm text-text-muted">{video.duration}</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-secondary">{video.title}</h3>
                  <button className="text-primary text-sm font-semibold hover:underline mt-2">
                    Watch Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Resources */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-secondary mb-12 text-center">
            Downloadable Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white border border-border rounded-xl p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-secondary">Profile Checklist PDF</h3>
                  <p className="text-sm text-text-muted">Complete guide to creating the perfect profile</p>
                </div>
                <button className="text-primary font-semibold hover:underline">
                  Download
                </button>
              </div>
            </div>
            <div className="bg-white border border-border rounded-xl p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-secondary">First Meeting Questions</h3>
                  <p className="text-sm text-text-muted">50 conversation starters for your first meeting</p>
                </div>
                <button className="text-primary font-semibold hover:underline">
                  Download
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need More Help?
          </h2>
          <p className="text-white/90 mb-8">
            Our support team is available 24/7 to help you with any questions or concerns.
          </p>
          <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
            Contact Support
          </button>
        </div>
      </section>
    </div>
  );
}
