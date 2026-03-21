import { Metadata } from 'next'

export interface SEOConfig {
  title: string
  description: string
  keywords?: string[]
  canonical?: string
  noindex?: boolean
  ogImage?: string
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
      images: config.ogImage ? [
        {
          url: config.ogImage,
          width: 1200,
          height: 630,
          alt: config.title,
        }
      ] : [
        {
          url: `${baseUrl}/images/wedding/hero-indian-couple.jpg`,
          width: 1200,
          height: 630,
          alt: 'MatchPartner - Trusted Hindu Matrimony Platform',
        }
      ],
      locale: 'en_IN',
      type: 'website',
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
    title: 'MatchPartner — #1 Trusted Hindu Matrimony Site | 10,000+ Verified Profiles',
    description: 'Find your perfect Hindu life partner on MatchPartner. 10,000+ Aadhaar-verified profiles, AI-powered matchmaking, horoscope compatibility & family collaboration tools. Join free today!',
    keywords: [
      'Hindu matrimony', 'Hindu marriage', 'Indian matchmaking', 'matrimonial site',
      'verified profiles', 'Aadhaar verified matrimony', 'NRI matrimony', 'bride groom search',
      'Brahmin matrimony', 'Gujarati matrimony', 'Tamil matrimony', 'Marathi matrimony',
      'Prajapati matrimony', 'Maru Prajapati matrimony', 'AI matchmaking', 'horoscope matching'
    ],
    canonical: 'https://matchpartner.in',
  },
  browse: {
    title: 'Browse Hindu Matrimony Profiles | Verified Brides & Grooms | MatchPartner',
    description: 'Browse 10,000+ verified Hindu matrimony profiles. Filter by community, education, profession & location. Find your perfect match with advanced search filters.',
    keywords: [
      'browse matrimony profiles', 'Hindu brides', 'Hindu grooms', 'verified profiles',
      'matrimony search', 'community wise matrimony', 'professional matrimony'
    ],
    canonical: 'https://matchpartner.in/browse',
  },
  pricing: {
    title: 'MatchPartner Pricing Plans | Free Registration | Premium Matrimony Services',
    description: 'Free profile creation on MatchPartner. Premium plans from ₹999 with AI matchmaking, priority support & verified matches. Compare plans & choose the best for you.',
    keywords: [
      'matrimony pricing', 'matrimony plans', 'free matrimony registration',
      'premium matrimony services', 'matchmaking plans'
    ],
    canonical: 'https://matchpartner.in/pricing',
  },
  successStories: {
    title: 'Hindu Marriage Success Stories | Real Couples | MatchPartner Testimonials',
    description: 'Read inspiring Hindu marriage success stories from MatchPartner couples. Real testimonials from families who found their perfect match through our platform.',
    keywords: [
      'marriage success stories', 'Hindu wedding stories', 'matrimony testimonials',
      'real couples', 'marriage testimonials', 'wedding success'
    ],
    canonical: 'https://matchpartner.in/success-stories',
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
