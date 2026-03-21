import { Metadata } from 'next'

export interface SEOConfig {
  title: string
  description: string
  keywords?: string[]
  canonical?: string
  noindex?: boolean
  ogImage?: string
  ogType?: 'website' | 'article' | 'profile'
}

export function generateMetadata(config: SEOConfig): Metadata {
  const baseUrl = 'https://matchpartner.in'

  return {
    title: config.title,
    description: config.description,
    keywords: config.keywords,
    openGraph: {
      title: config.title,
      description: config.description,
      url: config.canonical || baseUrl,
      siteName: 'MatchPartner',
      type: config.ogType || 'website',
      locale: 'en_IN',
      countryName: 'India',
      images: config.ogImage ? [
        {
          url: config.ogImage,
          width: 1200,
          height: 630,
          alt: config.title,
          type: 'image/jpeg',
        }
      ] : [
        {
          url: `${baseUrl}/images/wedding/hero-indian-couple.jpg`,
          width: 1200,
          height: 630,
          alt: 'MatchPartner - Trusted Hindu Matrimony Platform',
          type: 'image/jpeg',
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: config.title,
      description: config.description,
      images: config.ogImage ? [config.ogImage] : [`${baseUrl}/images/wedding/hero-indian-couple.jpg`],
      site: '@MatchPartnerIN',
      creator: '@MatchPartnerIN',
    },
    alternates: {
      canonical: config.canonical || baseUrl,
    },
    robots: {
      index: !config.noindex,
      follow: !config.noindex,
      googleBot: {
        index: !config.noindex,
        follow: !config.noindex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

// Common SEO configurations
export const seoConfigs = {
  home: {
    title: 'MatchPartner — Aadhaar Verified Matrimony | AI Matrimony India | Fake Profile Free',
    description: 'Aadhaar verified matrimony with AI matchmaking. Family assisted matchmaking for verified matrimony site India. Fake profile free!',
    keywords: [
      // Phase 1 Target Keywords (Low competition, high priority)
      'aadhaar verified matrimony', 'verified matrimony site India', 'fake profile free matrimony',
      'AI matrimony India', 'family assisted matchmaking',
      // Primary Keywords
      'Hindu matrimony', 'matrimonial site India', 'online matrimony',
      // Community Keywords
      'Prajapati matrimony', 'Brahmin matrimony', 'Gujarati matrimony', 'Tamil matrimony',
      'Marathi matrimony', 'Bengali matrimony', 'Telugu matrimony',
      // Additional Long-tail
      'verified profiles matrimony', 'horoscope matching matrimony', 'kundali matching'
    ],
    canonical: 'https://matchpartner.in',
    ogType: 'website' as const,
  },
  browse: {
    title: 'Browse Hindu Matrimony Profiles | Verified Brides & Grooms | MatchPartner',
    description: 'Browse 10,000+ verified Hindu matrimony profiles. Filter by community, education & location. Find your perfect match today!',
    keywords: [
      'browse matrimony profiles', 'Hindu brides', 'Hindu grooms', 'verified profiles',
      'matrimony search', 'community wise matrimony', 'professional matrimony'
    ],
    canonical: 'https://matchpartner.in/browse',
    ogType: 'website' as const,
  },
  pricing: {
    title: 'MatchPartner Pricing Plans | Free Registration | Premium Matrimony Services',
    description: 'Free profile creation. Premium plans from ₹999 with AI matchmaking, priority support & verified matches. Compare & choose!',
    keywords: [
      'matrimony pricing', 'matrimony plans', 'free matrimony registration',
      'premium matrimony services', 'matchmaking plans'
    ],
    canonical: 'https://matchpartner.in/pricing',
    ogType: 'website' as const,
  },
  successStories: {
    title: 'Hindu Marriage Success Stories | Real Couples | MatchPartner Testimonials',
    description: 'Read inspiring Hindu marriage success stories from MatchPartner couples. Real testimonials from families who found love.',
    keywords: [
      'marriage success stories', 'Hindu wedding stories', 'matrimony testimonials',
      'real couples', 'marriage testimonials', 'wedding success'
    ],
    canonical: 'https://matchpartner.in/success-stories',
    ogType: 'article' as const,
  },
  // Community Pages (Programmatic SEO)
  prajapatiMatrimony: {
    title: 'Prajapati Matrimony | Maru Prajapati Brides & Grooms | MatchPartner',
    description: 'Find verified Prajapati brides & grooms. Aadhaar verified Maru Prajapati matrimony profiles with family collaboration tools.',
    keywords: [
      'Prajapati matrimony', 'Maru Prajapati matrimony', 'Prajapati brides', 'Prajapati grooms',
      'Maru Prajapati brides', 'Gotra Pravara matching Prajapati', 'best matrimonial site for Prajapati community'
    ],
    canonical: 'https://matchpartner.in/matrimony/prajapati-brides',
    ogType: 'website' as const,
  },
  brahminMatrimony: {
    title: 'Brahmin Matrimony | Verified Brahmin Brides & Grooms | MatchPartner',
    description: 'Premium Brahmin matrimony with Aadhaar verified profiles. Find educated Brahmin brides & grooms with horoscope matching.',
    keywords: [
      'Brahmin matrimony', 'Brahmin brides', 'Brahmin grooms', 'verified Brahmin matrimony',
      'Brahmin marriage', 'Brahmin kundali matching'
    ],
    canonical: 'https://matchpartner.in/matrimony/brahmin-brides',
    ogType: 'website' as const,
  },
  // Language Pages
  marathiMatrimony: {
    title: 'Marathi Matrimony | Marathi Brides & Grooms | MatchPartner',
    description: 'Trusted Marathi matrimony platform. Find verified Marathi brides & grooms with family assisted matchmaking.',
    keywords: [
      'Marathi matrimony', 'Marathi brides', 'Marathi grooms', 'Maharashtra matrimony',
      'Marathi marriage', 'Marathi kundali matching'
    ],
    canonical: 'https://matchpartner.in/matrimony/marathi',
    ogType: 'website' as const,
  },
  // City Pages
  mumbaiMatrimony: {
    title: 'Matrimony in Mumbai | Mumbai Brides & Grooms | MatchPartner',
    description: 'Find verified matrimony profiles in Mumbai. Aadhaar verified Mumbai brides & grooms for Hindu marriage.',
    keywords: [
      'matrimony in Mumbai', 'Mumbai matrimony', 'Mumbai brides', 'Mumbai grooms',
      'Mumbai Hindu matrimony', 'Mumbai marriage'
    ],
    canonical: 'https://matchpartner.in/matrimony/mumbai',
    ogType: 'website' as const,
  },
  // NRI Pages
  nriUsaMatrimony: {
    title: 'NRI Matrimony USA | US NRI Hindu Matrimony | MatchPartner',
    description: 'Premium NRI matrimony for USA. Find verified NRI Hindu brides & grooms in America with family collaboration.',
    keywords: [
      'NRI matrimony USA', 'US NRI Hindu matrimony', 'NRI brides USA', 'NRI grooms USA',
      'American Hindu matrimony', 'USA Indian matrimony'
    ],
    canonical: 'https://matchpartner.in/nri/usa-matrimony',
    ogType: 'website' as const,
  },
  // Gender Pages
  hinduBrides: {
    title: 'Hindu Brides | Verified Hindu Bride Profiles | MatchPartner',
    description: 'Browse verified Hindu bride profiles. Aadhaar verified Hindu brides with family collaboration and horoscope matching.',
    keywords: [
      'Hindu brides', 'Hindu bride profiles', 'verified Hindu brides', 'Hindu marriage brides',
      'Hindu matrimony brides', 'NRI brides'
    ],
    canonical: 'https://matchpartner.in/matrimony/hindu-brides',
    ogType: 'website' as const,
  },
  // Horoscope Pages
  kundaliMatching: {
    title: 'Kundali Matching | Horoscope Compatibility | MatchPartner',
    description: 'Free kundali matching for marriage. AI-powered horoscope compatibility analysis for Hindu matrimony.',
    keywords: [
      'kundali matching', 'horoscope compatibility', 'kundali matching for marriage how accurate',
      'horoscope matching matrimony', 'free kundali matching', 'marriage compatibility'
    ],
    canonical: 'https://matchpartner.in/kundali/matching',
    ogType: 'website' as const,
  },
}

export function generateBreadcrumbJsonLd(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function generateArticleJsonLd(article: {
  title: string
  description: string
  author: string
  datePublished: string
  dateModified?: string
  image?: string
  url: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    author: {
      '@type': 'Person',
      name: article.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'MatchPartner',
      logo: {
        '@type': 'ImageObject',
        url: 'https://matchpartner.in/images/logo.png',
      },
    },
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    image: article.image || 'https://matchpartner.in/images/wedding/hero-indian-couple.jpg',
    url: article.url,
  }
}
