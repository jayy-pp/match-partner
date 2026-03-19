import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://matchpartner.in"),
  title: {
    default: "MatchPartner — Trusted Hindu Matrimony Platform",
    template: "%s | MatchPartner",
  },
  description:
    "Where Hindu Traditions Meet Trusted Matchmaking. Join 10,000+ verified profiles and find your perfect life partner with Aadhaar-verified matches, AI recommendations, and family-assisted tools.",
  keywords: [
    "Hindu matrimony",
    "Hindu marriage",
    "Indian matchmaking",
    "matrimonial site",
    "verified profiles",
    "NRI matrimony",
    "bride groom search",
    "MatchPartner",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://matchpartner.in",
    siteName: "MatchPartner",
    title: "MatchPartner — Trusted Hindu Matrimony Platform",
    description:
      "Where Hindu Traditions Meet Trusted Matchmaking. 10,000+ verified profiles. AI-powered match recommendations.",
  },
  twitter: {
    card: "summary_large_image",
    title: "MatchPartner — Trusted Hindu Matrimony Platform",
    description:
      "Where Hindu Traditions Meet Trusted Matchmaking. 10,000+ verified profiles.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
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
    url: "https://matchpartner.in",
    logo: "https://matchpartner.in/logo.png",
    description:
      "Trusted Hindu Matrimony Platform — Where Hindu Traditions Meet Trusted Matchmaking.",
    contactPoint: {
      "@type": "ContactPoint",
      email: "support@matchpartner.in",
      contactType: "customer service",
      availableLanguage: ["English", "Hindi"],
    },
    sameAs: [],
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
