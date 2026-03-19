"use client";

import { useEffect } from "react";

export default function WaitlistForm({
  variant = "light",
}: {
  variant?: "light" | "dark";
}) {
  const isDark = variant === "dark";

  useEffect(() => {
    // Load the forms.app script
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
          "69b4c6fa9e518e0002179c26",
          "popup",
          {
            overlay: "rgba(45,45,45,0.5)",
            button: {
              color: "#d4145a",
              text: "मारू प्रजापति - Add Profile!",
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
    <div className={`w-full max-w-md mx-auto ${isDark ? "text-white" : ""}`}>
      <button
        {...({ formsappid: "69b4c6fa9e518e0002179c26" } as any)}
        className={`w-full bg-primary text-white px-6 py-3.5 rounded-xl text-base font-semibold shadow-lg hover:bg-primary-dark transition-colors ${
          isDark ? "bg-primary hover:bg-primary-dark" : ""
        }`}
      >
        मारू प्रजापति - Add Profile!
      </button>
    </div>
  );
}
