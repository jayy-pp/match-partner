import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Resources & Guides",
  description:
    "Hindu matrimony guides, wedding planning tools, biodata templates, and expert advice. Everything you need for a meaningful marriage journey.",
  alternates: {
    canonical: "https://matchpartner.in/resources",
  },
};

const categories = [
  { id: "guides", label: "Guides" },
  { id: "tools", label: "Tools" },
  { id: "glossary", label: "Glossary" },
  { id: "templates", label: "Templates" },
  { id: "comparisons", label: "Comparisons" },
];

const guides = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342" />
      </svg>
    ),
    title: "Marriage Preparation Guide",
    description:
      "Understand the significance of Vivah Sanskar, from gotra verification and Kundli matching to pre-wedding rituals every Hindu family should know.",
    href: "/resources/marriage-preparation",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
    title: "Hindu Wedding Planning Roadmap",
    description:
      "A step-by-step timeline covering everything from Roka and Tilak ceremonies to Sangeet night, Haldi, and the Pheras — with checklists for each stage.",
    href: "/resources/wedding-planning",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    title: "Building a Strong Relationship",
    description:
      "Expert advice on nurturing communication, setting expectations with in-laws, balancing individuality within a joint family, and growing together after marriage.",
    href: "/resources/relationship-advice",
  },
];

const tools = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15a2.25 2.25 0 012.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
    title: "Compatibility Checklist",
    description:
      "Evaluate potential matches across 36 Gunas, family values, lifestyle preferences, career goals, and spiritual outlook with our structured checklist.",
    href: "/resources/compatibility-checklist",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
    title: "Wedding Budget Calculator",
    description:
      "Plan your wedding expenses from venue and catering to pandit dakshina, mandap decoration, and bridal trousseau with our India-specific budget planner.",
    href: "/resources/budget-calculator",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    title: "Invitation Card Templates",
    description:
      "Beautifully designed digital invitation templates with Ganesh Vandana, Shubh Vivah headers, and traditional motifs — ready to customise and share.",
    href: "/resources/invitation-templates",
  },
];

const glossaryTerms = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
    title: "Saptapadi & Pheras Explained",
    description:
      "Understand the sacred seven vows taken around the holy fire, what each Phera represents, and the spiritual significance of Agni as witness to the union.",
    href: "/resources/glossary/saptapadi",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.562.562 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
    title: "Kundli & Guna Milan Guide",
    description:
      "Learn how the 36-Guna Ashtakoot matching system works, what each Guna category (Varna, Vashya, Tara, Yoni, and more) measures, and why it matters.",
    href: "/resources/glossary/kundli-matching",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    title: "Hindu Wedding Rituals A-Z",
    description:
      "From Baraat and Dhol to Kanyadaan and Vidaai — a comprehensive glossary of Hindu wedding ceremonies, their origins, and regional variations across India.",
    href: "/resources/glossary/rituals",
  },
];

const templates = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    title: "Marriage Biodata Templates",
    description:
      "Professional biodata formats tailored for Hindu families — covering personal details, education, family background, Gotra, Nakshatra, and partner preferences.",
    href: "/resources/biodata-templates",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
      </svg>
    ),
    title: "Wedding Invitation Wording",
    description:
      "Traditional and modern invitation wording samples in Hindi and English — with blessings from Lord Ganesha, auspicious Shlokas, and bilingual layouts.",
    href: "/resources/invitation-wording",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
      </svg>
    ),
    title: "Wedding Day Checklist",
    description:
      "A printable day-of checklist for the bride, groom, and family — covering Muhurat timing, mandap setup, priest coordination, and post-ceremony tasks.",
    href: "/resources/wedding-checklist",
  },
];

const comparisons = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    title: "MatchPartner vs Shaadi.com",
    description:
      "See how MatchPartner's Aadhaar-verified profiles, cultural filters, and family collaboration tools compare to Shaadi.com's general matchmaking approach.",
    href: "/resources/matchpartner-vs-shaadi",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
    title: "MatchPartner vs Jeevansathi",
    description:
      "Compare horoscope matching accuracy, privacy controls, and AI-powered recommendations between MatchPartner and Jeevansathi side by side.",
    href: "/resources/matchpartner-vs-jeevansathi",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Why Hindu Families Choose MatchPartner",
    description:
      "A detailed comparison showing why MatchPartner leads in trust, cultural sensitivity, and match quality for Hindu matrimony seekers across India and abroad.",
    href: "/resources/why-matchpartner",
  },
];

const allSections = [
  { id: "guides", title: "Marriage & Relationship Guides", items: guides },
  { id: "tools", title: "Planning Tools & Calculators", items: tools },
  { id: "glossary", title: "Hindu Marriage Glossary", items: glossaryTerms },
  { id: "templates", title: "Templates & Checklists", items: templates },
  { id: "comparisons", title: "Platform Comparisons", items: comparisons },
];

export default function ResourcesPage() {
  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Resources & Guides | MatchPartner",
    description:
      "Hindu matrimony guides, wedding planning tools, biodata templates, and expert advice for meaningful marriages.",
    url: "https://matchpartner.in/resources",
    publisher: {
      "@type": "Organization",
      name: "MatchPartner",
      url: "https://matchpartner.in",
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: [
        ...guides,
        ...tools,
        ...glossaryTerms,
        ...templates,
        ...comparisons,
      ].map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.title,
        url: `https://matchpartner.in${item.href}`,
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />

      {/* ===== HERO SECTION ===== */}
      <section className="relative bg-gradient-to-b from-surface via-white to-white pt-24 pb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            Knowledge Centre
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-secondary leading-tight mb-6">
            Resources &{" "}
            <span className="text-primary">Guides</span>
          </h1>
          <p className="text-lg sm:text-xl text-text-muted max-w-2xl mx-auto mb-8">
            Everything you need to navigate your Hindu matrimony journey — from
            finding the right match and understanding sacred rituals to planning
            your dream wedding.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Explore Services
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Ask an Expert
            </Link>
          </div>
        </div>
      </section>

      {/* ===== STICKY CATEGORY NAV ===== */}
      <nav
        className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-border"
        aria-label="Resource categories"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="flex gap-1 overflow-x-auto py-3 -mx-4 px-4 sm:mx-0 sm:px-0 sm:justify-center">
            {categories.map((cat) => (
              <li key={cat.id}>
                <a
                  href={`#${cat.id}`}
                  className="inline-block whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium text-text-muted hover:text-primary hover:bg-primary/5 transition-colors"
                >
                  {cat.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* ===== RESOURCE SECTIONS ===== */}
      {allSections.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className="py-16 sm:py-20 scroll-mt-16"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-10 text-center">
              {section.title}
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {section.items.map((item) => (
                <article
                  key={item.title}
                  className="group bg-white border border-border rounded-2xl p-6 hover:shadow-lg hover:border-primary/30 transition-all duration-200"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-secondary mb-3">
                    {item.title}
                  </h3>
                  <p className="text-text-muted leading-relaxed mb-5">
                    {item.description}
                  </p>
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1 text-primary font-medium hover:text-primary-dark transition-colors group-hover:gap-2"
                  >
                    Learn more
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ===== CTA SECTION ===== */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-secondary to-secondary/90">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Begin Your Matrimony Journey?
          </h2>
          <p className="text-lg text-white/80 mb-4 max-w-2xl mx-auto">
            Join 10,000+ verified Hindu families who trust MatchPartner for
            meaningful, tradition-respecting matchmaking.
          </p>
          <p className="text-sm text-white/60 mb-8">
            Free profile creation. Aadhaar-verified matches. No spam, no fake
            profiles.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-3.5 rounded-lg transition-colors text-lg"
            >
              Create Free Profile
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 border-2 border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-3.5 rounded-lg transition-colors text-lg"
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
