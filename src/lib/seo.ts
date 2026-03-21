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
    title: 'MatchPartner — #1 Trusted Hindu Matrimony Site | 10,000+ Verified Profiles',
    description: 'Find your perfect Hindu life partner. 10,000+ Aadhaar-verified profiles, AI matchmaking & horoscope compatibility. Join free!',
    keywords: [
      'Hindu matrimony', 'Hindu marriage', 'Indian matchmaking', 'matrimonial site',
      'verified profiles', 'Aadhaar verified matrimony', 'NRI matrimony', 'bride groom search',
      'Brahmin matrimony', 'Gujarati matrimony', 'Tamil matrimony', 'Marathi matrimony',
      'Prajapati matrimony', 'Maru Prajapati matrimony', 'AI matchmaking', 'horoscope matching'
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
