import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog — MatchPartner",
  description:
    "Explore matrimonial insights, matchmaking guides, success stories, and expert tips on Hindu matrimony. Stay informed with MatchPartner's blog.",
};

const blogJsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "MatchPartner Blog",
  description:
    "Matrimonial insights, matchmaking guides, and expert tips on Hindu matrimony.",
  url: "https://matchpartner.in/blog",
  publisher: {
    "@type": "Organization",
    name: "MatchPartner",
    url: "https://matchpartner.in",
    logo: {
      "@type": "ImageObject",
      url: "https://matchpartner.in/logo.png",
    },
  },
};

const categories = [
  "All",
  "Guides",
  "NRI",
  "Tips",
  "Success Stories",
  "Community",
];

const blogPosts = [
  {
    title: "How MatchPartner Helps NRI Families Find Matches Back Home",
    category: "NRI",
    author: "Rahul Nair",
    initials: "RN",
    date: "Feb 28, 2026",
    readTime: "8 min read",
    excerpt:
      "Discover how NRI families across the globe are using MatchPartner to find compatible matches rooted in shared cultural values.",
    href: "/blog/how-matchpartner-helps-nri-families",
    gradient: "from-orange-400 to-pink-500",
  },
  {
    title: "Aadhaar Profile Verification: A Step-by-Step Guide",
    category: "Tutorial",
    author: "Priya Deshmukh",
    initials: "PD",
    date: "Feb 20, 2026",
    readTime: "6 min read",
    excerpt:
      "Learn how to verify your MatchPartner profile with Aadhaar and boost your credibility with potential matches.",
    href: "/blog/aadhaar-verification-step-by-step",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    title: "5 Tips for Creating the Perfect Matrimonial Profile",
    category: "Tips",
    author: "Anita Sharma",
    initials: "AS",
    date: "Feb 14, 2026",
    readTime: "5 min read",
    excerpt:
      "Stand out from the crowd with a compelling matrimonial profile that truly represents who you are and what you seek.",
    href: "/blog",
    gradient: "from-emerald-400 to-teal-500",
  },
  {
    title: "Understanding Horoscope Compatibility in Modern Matchmaking",
    category: "Guide",
    author: "Deepak Joshi",
    initials: "DJ",
    date: "Feb 5, 2026",
    readTime: "10 min read",
    excerpt:
      "Explore how Kundali matching and horoscope compatibility blend tradition with modern matchmaking approaches.",
    href: "/blog",
    gradient: "from-amber-400 to-orange-500",
  },
  {
    title: "How AI is Transforming Hindu Matrimony",
    category: "Technology",
    author: "Rahul Nair",
    initials: "RN",
    date: "Jan 28, 2026",
    readTime: "7 min read",
    excerpt:
      "From smart recommendations to personality-based matching, see how artificial intelligence is reshaping the matrimony landscape.",
    href: "/blog",
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    title: "A Parent's Guide to Online Matrimony Platforms",
    category: "Parents",
    author: "Priya Deshmukh",
    initials: "PD",
    date: "Jan 18, 2026",
    readTime: "9 min read",
    excerpt:
      "A comprehensive guide for parents navigating online matrimony platforms to help their children find the right life partner.",
    href: "/blog",
    gradient: "from-rose-400 to-red-500",
  },
];

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />

      {/* Hero */}
      <section className="bg-[#FFF8F0] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block rounded-full bg-[#D4145A]/10 px-5 py-1.5 text-sm font-semibold text-[#D4145A] mb-6">
            Our Blog
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1E1A2E] leading-tight">
            Matrimonial Insights &amp; Guides
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-[#6B6280] max-w-2xl mx-auto">
            Expert advice, success stories, and practical guides to help you
            navigate the journey to finding your perfect life partner.
          </p>
        </div>
      </section>

      {/* Category Filter Bar */}
      <section className="border-b border-[#E8DDD4] bg-white sticky top-0 z-30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 overflow-x-auto py-4 scrollbar-hide">
            {categories.map((cat, i) => (
              <span
                key={cat}
                className={`shrink-0 rounded-full px-5 py-2 text-sm font-medium transition ${
                  i === 0
                    ? "bg-[#D4145A] text-white"
                    : "bg-[#FFF8F0] text-[#1E1A2E] border border-[#E8DDD4] hover:border-[#D4145A]/40"
                }`}
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog/complete-guide-hindu-matrimony-2026"
            className="group block"
          >
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center rounded-3xl border border-[#E8DDD4] p-6 sm:p-10 hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-[16/10] rounded-2xl bg-gradient-to-br from-[#D4145A] to-[#E8961E] flex items-center justify-center">
                <span className="text-7xl">&#128218;</span>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="rounded-full bg-[#D4145A]/10 px-3 py-1 text-xs font-semibold text-[#D4145A]">
                    Guide
                  </span>
                  <span className="text-sm text-[#6B6280]">12 min read</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#1E1A2E] group-hover:text-[#D4145A] transition-colors">
                  The Complete Guide to Hindu Matrimony in 2026
                </h2>
                <p className="mt-4 text-[#6B6280] text-lg leading-relaxed">
                  From understanding the evolving landscape of modern Hindu
                  matchmaking to leveraging technology for finding a compatible
                  partner, this guide covers everything you need to know.
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E8961E] text-white font-semibold text-sm">
                    AS
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#1E1A2E]">
                      Anita Sharma
                    </p>
                    <p className="text-xs text-[#6B6280]">
                      Head of Community &middot; Mar 5, 2026
                    </p>
                  </div>
                </div>
                <span className="mt-6 inline-flex items-center gap-2 text-[#D4145A] font-semibold group-hover:gap-3 transition-all">
                  Read full guide
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Blog Post Grid */}
      <section className="py-20 bg-[#FFF8F0]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1E1A2E] mb-12">
            Latest Articles
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link key={post.title} href={post.href} className="group block">
                <article className="rounded-2xl bg-white border border-[#E8DDD4] overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                  <div
                    className={`aspect-[16/9] bg-gradient-to-br ${post.gradient} flex items-center justify-center`}
                  >
                    <span className="text-5xl opacity-80">&#9998;</span>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="rounded-full bg-[#D4145A]/10 px-3 py-0.5 text-xs font-semibold text-[#D4145A]">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-[#1E1A2E] group-hover:text-[#D4145A] transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="mt-2 text-sm text-[#6B6280] line-clamp-2 flex-1">
                      {post.excerpt}
                    </p>
                    <div className="mt-4 flex items-center justify-between pt-4 border-t border-[#E8DDD4]">
                      <div className="flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1E1A2E] text-white text-xs font-semibold">
                          {post.initials}
                        </div>
                        <span className="text-sm font-medium text-[#1E1A2E]">
                          {post.author}
                        </span>
                      </div>
                      <div className="text-xs text-[#6B6280]">
                        {post.date} &middot; {post.readTime}
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-[#1E1A2E] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block rounded-full bg-white/10 px-5 py-1.5 text-sm font-semibold text-[#E8961E] mb-6">
            Stay Updated
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Get Matrimonial Insights in Your Inbox
          </h2>
          <p className="mt-4 text-lg text-white/70 max-w-xl mx-auto">
            Join 5,000+ subscribers receiving weekly tips, success stories, and
            expert matchmaking advice.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full sm:flex-1 rounded-full px-6 py-3.5 text-[#1E1A2E] placeholder-[#6B6280] focus:outline-none focus:ring-2 focus:ring-[#D4145A]"
              aria-label="Email address"
            />
            <button className="w-full sm:w-auto rounded-full bg-[#D4145A] px-8 py-3.5 font-semibold text-white hover:bg-[#b8114e] transition-colors">
              Subscribe
            </button>
          </div>
          <p className="mt-4 text-sm text-white/50">
            No spam, ever. Unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1E1A2E]">
            Ready to Find Your Perfect Match?
          </h2>
          <p className="mt-4 text-lg text-[#6B6280] max-w-xl mx-auto">
            Join thousands of verified profiles on India&apos;s most trusted
            Hindu matrimony platform.
          </p>
          <p className="mt-2 text-sm text-[#E8961E] font-medium">
            Over 10,000 successful matches and counting
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-[#D4145A] px-8 py-3.5 font-semibold text-white hover:bg-[#b8114e] transition-colors"
            >
              Create Free Profile
            </Link>
            <Link
              href="/services"
              className="rounded-full border-2 border-[#E8DDD4] px-8 py-3.5 font-semibold text-[#1E1A2E] hover:border-[#D4145A] hover:text-[#D4145A] transition-colors"
            >
              Explore Services
            </Link>
          </div>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-[#6B6280]">
            <Link href="/about" className="hover:text-[#D4145A] transition-colors">
              About Us
            </Link>
            <Link href="/pricing" className="hover:text-[#D4145A] transition-colors">
              Pricing Plans
            </Link>
            <Link href="/faq" className="hover:text-[#D4145A] transition-colors">
              FAQs
            </Link>
            <Link href="/resources" className="hover:text-[#D4145A] transition-colors">
              Resources
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
