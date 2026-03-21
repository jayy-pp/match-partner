import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://matchpartner.in"),
  title: {
    default:
      "MatchPartner — #1 Trusted Hindu Matrimony Site | 10,000+ Verified Profiles",
    template: "%s | MatchPartner - Hindu Matrimony",
  },
  description:
    "India's most trusted Hindu matrimony platform. 10,000+ Aadhaar-verified profiles, AI matchmaking & horoscope compatibility. Join free!",
  keywords: [
    "Hindu matrimony",
    "Hindu marriage",
    "Indian matchmaking",
    "matrimonial site",
    "verified profiles",
    "Aadhaar verified matrimony",
    "NRI matrimony",
    "bride groom search",
    "Brahmin matrimony",
    "Gujarati matrimony",
    "Tamil matrimony",
    "Marathi matrimony",
    "Prajapati matrimony",
    "Maru Prajapati matrimony",
    "Bengali matrimony",
    "Punjabi matrimony",
    "Telugu matrimony",
    "AI matchmaking",
    "horoscope matching",
    "kundali matching",
    "family matrimony",
    "Indian wedding",
    "Hindu wedding",
    "matrimony app",
    "marriage bureau",
    "shaadi",
    "vivah",
    "MatchPartner",
  ],
  openGraph: {
    title: "MatchPartner — #1 Trusted Hindu Matrimony Platform",
    description:
      "India's most trusted Hindu matrimony platform. 10,000+ Aadhaar-verified profiles, AI matchmaking & horoscope compatibility. Join free!",
    url: "https://matchpartner.in",
    siteName: "MatchPartner",
    type: "website",
    locale: "en_IN",
    countryName: "India",
    images: [
      {
        url: "https://matchpartner.in/images/wedding/hero-indian-couple.jpg",
        width: 1200,
        height: 630,
        alt: "MatchPartner Hindu Matrimony - Verified Profiles",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@MatchPartnerIN",
    creator: "@MatchPartnerIN",
    title: "MatchPartner — #1 Trusted Hindu Matrimony Site",
    description:
      "10,000+ Aadhaar-verified profiles. AI-powered matchmaking. Find your perfect Hindu life partner today!",
    images: ["https://matchpartner.in/images/wedding/hero-indian-couple.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://matchpartner.in",
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "MatchPartner",
    alternateName: "MatchPartner Hindu Matrimony",
    url: "https://matchpartner.in",
    logo: "https://matchpartner.in/images/logo.png",
    image: "https://matchpartner.in/images/wedding/hero-indian-couple.jpg",
    description:
      "India's most trusted Hindu matrimony platform with 10,000+ Aadhaar-verified profiles. AI-powered matchmaking, horoscope compatibility, and family collaboration tools.",
    foundingDate: "2024",
    address: {
      "@type": "PostalAddress",
      streetAddress: "102, Supan Apartment, Unchi Gali, Shamlaji Pole, Raipur",
      addressLocality: "Ahmedabad",
      addressRegion: "Gujarat",
      addressCountry: "IN",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+91-84604-88076",
        email: "hello@matchpartner.in",
        contactType: "customer service",
        availableLanguage: ["English", "Hindi", "Gujarati"],
        areaServed: "IN",
      },
      {
        "@type": "ContactPoint",
        email: "support@matchpartner.in",
        contactType: "technical support",
        availableLanguage: ["English", "Hindi"],
        areaServed: "IN",
      },
    ],
    sameAs: [
      "https://facebook.com/matchpartner",
      "https://instagram.com/matchpartner",
      "https://twitter.com/matchpartnerin",
      "https://linkedin.com/company/matchpartner",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "2500",
      bestRating: "5",
      worstRating: "1",
    },
    offers: {
      "@type": "Offer",
      name: "Hindu Matrimony Services",
      description: "Free profile creation with premium matchmaking services",
      price: "0",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
    },
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "MatchPartner",
    url: "https://matchpartner.in",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://matchpartner.in/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd),
          }}
        />
      </head>
      <body className="antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
