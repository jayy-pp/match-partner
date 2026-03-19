"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Browse Profiles", href: "/browse" },
  { label: "Matchmaking", href: "/matchmaking" },
  { label: "Success Stories", href: "/success-stories" },
  { label: "Pricing", href: "/pricing" },
  { label: "Community", href: "/community" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    // Load the forms.app script for header button
    const script = document.createElement("script");
    script.src = "https://forms.app/cdn/embed.js";
    script.type = "text/javascript";
    script.async = true;
    script.defer = true;

    script.onload = () => {
      // @ts-ignore
      if (window.formsapp) {
        // @ts-ignore
        new window.formsapp(
          "69bb90db6f23881d5f63aa45",
          "popup",
          {
            overlay: "rgba(45,45,45,0.5)",
            button: {
              color: "#d4145a",
              text: "Join Waitlist!",
              height: "40px",
            },
            width: "800px",
            height: "600px",
            openingAnimation: {
              entrance: "animate__fadeIn",
              exit: "animate__fadeOut",
            },
          },
          "https://0det5tvk.forms.app",
        );
      }
    };

    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <header
      className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-border"
      role="banner"
    >
      {/* Top Bar */}
      <div className="bg-secondary text-white/80 text-xs py-1.5 hidden sm:block">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span>10,000+ Verified Profiles</span>
            <span className="text-white/30">|</span>
            <span>100% Aadhaar Verified</span>
            <span className="text-white/30">|</span>
            <span>AI-Powered Matchmaking</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/help" className="hover:text-white transition">
              Help
            </Link>
            <Link href="/contact" className="hover:text-white transition">
              Contact
            </Link>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center shrink-0"
            aria-label="MatchPartner - Home"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo.png"
              alt="MatchPartner"
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-text-muted hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            {/* Join Waitlist CTA */}
            <button
              {...({ formsappid: "69bb90db6f23881d5f63aa45" } as any)}
              className="inline-flex bg-primary text-white text-sm font-semibold rounded-lg px-5 py-2 hover:bg-primary/90 transition-colors shadow-sm shadow-primary/20"
            >
              Join Free!
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <svg
                  className="w-6 h-6 text-secondary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6 text-secondary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-border py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2 text-sm font-medium text-text-muted hover:text-primary hover:bg-primary/5 rounded-lg transition"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="border-t border-border pt-3 mt-3 flex gap-4 px-3">
              <Link
                href="/help"
                className="text-sm text-text-muted hover:text-primary transition"
              >
                Help
              </Link>
              <Link
                href="/contact"
                className="text-sm text-text-muted hover:text-primary transition"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
