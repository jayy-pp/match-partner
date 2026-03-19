"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Header() {
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

          {/* Join Waitlist CTA */}
          <button
            {...({ formsappid: "69bb90db6f23881d5f63aa45" } as any)}
            className="inline-flex bg-primary text-white text-sm font-semibold rounded-lg px-5 py-2 hover:bg-primary/90 transition-colors shadow-sm shadow-primary/20"
          >
            Join Waitlist!
          </button>
        </div>
      </nav>
    </header>
  );
}
