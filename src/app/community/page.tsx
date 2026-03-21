import type { Metadata } from "next";
import { generateBreadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Community - MatchPartner",
  description: "Join the MatchPartner community for Hindu matrimony support, discussions, and success stories. Connect with families, share experiences, and get advice from experts.",
};

export default function CommunityPage() {
  const communityStats = [
    { label: "Active Members", value: "50,000+" },
    { label: "Daily Discussions", value: "500+" },
    { label: "Success Stories", value: "10,000+" },
    { label: "Expert Advisors", value: "25+" }
  ];

  const discussionCategories = [
    {
      title: "General Discussion",
      description: "General topics about Hindu matrimony and relationships",
      icon: "💬",
      posts: "2.5K",
      members: "15K"
    },
    {
      title: "Success Stories",
      description: "Share and read inspiring stories from couples who found love",
      icon: "💕",
      posts: "1.8K",
      members: "12K"
    },
    {
      title: "Dating Advice",
      description: "Get tips and advice on dating, communication, and relationships",
      icon: "💡",
      posts: "3.2K",
      members: "18K"
    },
    {
      title: "Cultural Discussions",
      description: "Discuss traditions, customs, and cultural aspects of Hindu marriages",
      icon: "🕉️",
      posts: "1.1K",
      members: "8K"
    },
    {
      input: "Family & Parenting",
      description: "Topics about family involvement, parenting, and raising children",
      icon: "👨‍👩‍👧‍👦",
      posts: "980",
      members: "7K"
    },
    {
      title: "NRI Corner",
      description: "Special discussions for NRIs seeking matches in India",
      icon: "🌍",
      posts: "750",
      members: "5K"
    }
  ];

  const recentDiscussions = [
    {
      title: "How to handle parental pressure in modern matchmaking?",
      category: "Dating Advice",
      author: "Priya_S",
      replies: 45,
      likes: 120,
      time: "2 hours ago"
    },
    {
      title: "Success story: Found my match in just 3 months!",
      category: "Success Stories",
      author: "Amit_R",
      replies: 89,
      likes: 340,
      time: "5 hours ago"
    },
    {
      title: "Traditional vs. Love marriage - What's your experience?",
      category: "General Discussion",
      author: "Sunita_M",
      replies: 67,
      likes: 198,
      time: "1 day ago"
    },
    {
      title: "Tips for long-distance relationships before marriage",
      category: "Dating Advice",
      author: "Rahul_K",
      replies: 34,
      likes: 156,
      time: "1 day ago"
    }
  ];

  const upcomingEvents = [
    {
      title: "Live Q&A: Relationship Expert Session",
      date: "March 25, 2026",
      time: "6:00 PM IST",
      type: "Webinar",
      attendees: "245 registered"
    },
    {
      title: "Cultural Traditions in Modern Marriages",
      date: "March 28, 2026",
      time: "7:00 PM IST",
      type: "Discussion",
      attendees: "180 registered"
    },
    {
      title: "NRI Matchmaking Special Session",
      date: "April 2, 2026",
      time: "8:00 PM IST",
      type: "Workshop",
      attendees: "120 registered"
    }
  ];

  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    { name: "Home", url: "https://matchpartner.in" },
    { name: "Community", url: "https://matchpartner.in/community" },
  ]);

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-secondary mb-4">
              MatchPartner Community
            </h1>
            <p className="text-lg text-text-muted max-w-3xl mx-auto">
              Connect with thousands of Hindu families and individuals on the same journey. 
              Share experiences, get advice, and find support in our vibrant community.
            </p>
          </div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {communityStats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <p className="text-text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Community CTA */}
      <section className="py-12 border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-semibold text-secondary mb-4">
            Join Our Thriving Community
          </h2>
          <p className="text-text-muted mb-6">
            Get access to exclusive discussions, expert advice, and connect with like-minded individuals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
              Join Community
            </button>
            <button className="border border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary/10 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Discussion Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-secondary mb-12 text-center">
            Discussion Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {discussionCategories.map((category, index) => (
              <div key={index} className="bg-white border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-3xl">{category.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-secondary">{category.title}</h3>
                    <p className="text-sm text-text-muted">{category.description}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-text-muted">{category.posts} posts</span>
                  <span className="text-text-muted">{category.members} members</span>
                </div>
                <button className="mt-4 text-primary font-semibold hover:underline">
                  Join Discussion →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Discussions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-secondary mb-12 text-center">
            Recent Discussions
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {recentDiscussions.map((discussion, index) => (
                <div key={index} className="bg-white border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                          {discussion.category}
                        </span>
                        <span className="text-sm text-text-muted">{discussion.time}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-secondary mb-2 hover:text-primary cursor-pointer">
                        {discussion.title}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-text-muted">
                        <span>by {discussion.author}</span>
                        <span>•</span>
                        <span>{discussion.replies} replies</span>
                        <span>•</span>
                        <span>{discussion.likes} likes</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <button className="text-primary font-semibold hover:underline">
                View All Discussions →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-secondary mb-12 text-center">
            Upcoming Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-white border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                      {event.type}
                    </span>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-secondary mb-2">{event.title}</h3>
                <div className="space-y-1 text-sm text-text-muted">
                  <p>{event.date}</p>
                  <p>{event.time}</p>
                  <p>{event.attendees}</p>
                </div>
                <button className="mt-4 w-full bg-primary text-white py-2 rounded-lg hover:bg-primary/90 transition-colors">
                  Register Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Guidelines */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-secondary mb-12 text-center">
            Community Guidelines
          </h2>
          <div className="bg-white border border-border rounded-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-secondary mb-4">Do's</h3>
                <ul className="space-y-2 text-text-muted">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Be respectful and supportive to all members</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Share helpful advice and experiences</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Keep discussions relevant and constructive</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Protect your privacy and personal information</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-secondary mb-4">Don'ts</h3>
                <ul className="space-y-2 text-text-muted">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span>Share personal contact information</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span>Post inappropriate or offensive content</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span>Spam or promote unrelated services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span>Disrespect cultural or religious beliefs</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Join Our Community?
          </h2>
          <p className="text-white/90 mb-8">
            Become part of a supportive community that understands your journey and celebrates your success.
          </p>
          <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
            Join Community Now
          </button>
        </div>
      </section>
    </div>
  );
}
