import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Help Center - MatchPartner",
  description: "Get help with MatchPartner's Hindu matrimony platform. Find answers to common questions, contact support, and learn how to use our features effectively.",
};

export default function HelpPage() {
  const helpCategories = [
    {
      title: "Getting Started",
      description: "Learn the basics of creating your profile and finding matches",
      articles: [
        "How to Create Your Profile",
        "Profile Verification Process",
        "Understanding Match Scores",
        "Setting Your Preferences"
      ]
    },
    {
      title: "Account & Settings",
      description: "Manage your account, privacy settings, and subscription",
      articles: [
        "Updating Profile Information",
        "Privacy Controls Guide",
        "Managing Subscription",
        "Deleting Your Account"
      ]
    },
    {
      title: "Matching & Communication",
      description: "Learn about connecting with potential matches",
      articles: [
        "Sending Interest Requests",
        "Using Chat Features",
        "Video Call Guide",
        "Understanding Match Quality"
      ]
    },
    {
      title: "Safety & Security",
      description: "Stay safe while using our platform",
      articles: [
        "Profile Safety Tips",
        "Reporting Suspicious Activity",
        "Recognizing Red Flags",
        "Meeting Safely"
      ]
    },
    {
      title: "Billing & Payments",
      description: "Questions about subscriptions and payments",
      articles: [
        "Payment Methods",
        "Refund Policy",
        "Subscription Management",
        "Invoice Requests"
      ]
    },
    {
      title: "Technical Support",
      description: "Resolve technical issues and bugs",
      articles: [
        "App Troubleshooting",
        "Browser Compatibility",
        "Login Issues",
        "Performance Problems"
      ]
    }
  ];

  const popularArticles = [
    "How does Aadhaar verification work?",
    "What is the AI matching algorithm?",
    "How do I upgrade my subscription?",
    "Can I hide my profile from certain people?",
    "How do I report fake profiles?",
    "What happens when my subscription expires?"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-secondary mb-4">
              Help Center
            </h1>
            <p className="text-lg text-text-muted max-w-3xl mx-auto mb-8">
              Find answers to your questions and learn how to make the most of MatchPartner's features. 
              Our comprehensive help center is here to support your journey.
            </p>
            <div className="max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Search for help articles..."
                className="w-full px-6 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-12 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <button className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors">
              Contact Support
            </button>
            <button className="bg-gray-100 text-secondary px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors">
              Video Tutorials
            </button>
            <button className="bg-gray-100 text-secondary px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors">
              Live Chat
            </button>
            <button className="bg-gray-100 text-secondary px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors">
              Community Forum
            </button>
          </div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-secondary mb-12 text-center">
            Browse Help Topics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {helpCategories.map((category, index) => (
              <div key={index} className="bg-white border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-secondary mb-3">{category.title}</h3>
                <p className="text-text-muted mb-4">{category.description}</p>
                <ul className="space-y-2">
                  {category.articles.map((article, i) => (
                    <li key={i}>
                      <a href="#" className="text-primary hover:underline text-sm">
                        {article}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-secondary mb-12 text-center">
            Popular Articles
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {popularArticles.map((article, index) => (
                <div key={index} className="bg-white border border-border rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-secondary">{article}</h3>
                    <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-semibold text-secondary mb-4">
              Still Need Help?
            </h2>
            <p className="text-lg text-text-muted mb-8">
              Our support team is here to help you 24/7. Get in touch with us through any of the following channels.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-secondary mb-2">Email Support</h3>
                <p className="text-text-muted mb-3">Get help within 24 hours</p>
                <a href="mailto:support@matchpartner.in" className="text-primary hover:underline">
                  support@matchpartner.in
                </a>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-secondary mb-2">Live Chat</h3>
                <p className="text-text-muted mb-3">Instant help available</p>
                <button className="text-primary hover:underline">Start Chat</button>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-secondary mb-2">Phone Support</h3>
                <p className="text-text-muted mb-3">Mon-Fri, 9 AM - 6 PM</p>
                <a href="tel:+918012345678" className="text-primary hover:underline">
                  +91 80123 45678
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-secondary mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <div className="bg-white border border-border rounded-lg p-6">
              <h3 className="font-semibold text-secondary mb-2">How do I create a profile on MatchPartner?</h3>
              <p className="text-text-muted">
                Creating a profile is simple and takes just 5 minutes. Click on "Join Waitlist" on our homepage, 
                fill in your basic information, upload photos, and complete the verification process.
              </p>
            </div>
            <div className="bg-white border border-border rounded-lg p-6">
              <h3 className="font-semibold text-secondary mb-2">Is my information secure on MatchPartner?</h3>
              <p className="text-text-muted">
                Yes, we use bank-level encryption and follow strict privacy protocols. Your personal information 
                is never shared without your consent, and you have complete control over who can see your profile.
              </p>
            </div>
            <div className="bg-white border border-border rounded-lg p-6">
              <h3 className="font-semibold text-secondary mb-2">How does the AI matching work?</h3>
              <p className="text-text-muted">
                Our AI analyzes over 50 compatibility factors including community preferences, education, 
                career, family values, and lifestyle choices to suggest highly compatible matches.
              </p>
            </div>
          </div>
          <div className="text-center mt-8">
            <a href="/faq" className="text-primary font-semibold hover:underline">
              View All FAQs →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
