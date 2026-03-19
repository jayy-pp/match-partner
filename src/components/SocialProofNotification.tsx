"use client";

import { useEffect, useState } from "react";

const messages = [
  { name: "Priya", city: "Mumbai", action: "joined the waitlist", time: "3 min ago" },
  { name: "Rajesh", city: "Delhi", action: "joined the waitlist", time: "7 min ago" },
  { name: "Sunita", city: "Bangalore", action: "signed up for early access", time: "2 min ago" },
  { name: "Amit", city: "Pune", action: "joined the waitlist", time: "5 min ago" },
  { name: "Deepa", city: "Chennai", action: "signed up for early access", time: "1 min ago" },
];

const pastelColors = [
  "bg-pink-300",
  "bg-purple-300",
  "bg-blue-300",
  "bg-amber-300",
  "bg-emerald-300",
];

export default function SocialProofNotification() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;

    // Show first notification after a short delay
    const showTimeout = setTimeout(() => setVisible(true), 500);

    const interval = setInterval(() => {
      // Hide current
      setVisible(false);

      // After 3 seconds hidden, show next
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % messages.length);
        setVisible(true);
      }, 3000);
    }, 8000);

    return () => {
      clearTimeout(showTimeout);
      clearInterval(interval);
    };
  }, [dismissed]);

  if (dismissed) return null;

  const msg = messages[index];

  return (
    <div
      className="fixed bottom-4 left-4 z-50 transition-all duration-500 ease-in-out"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      <div className="relative flex items-center gap-3 rounded-xl border border-border bg-white px-4 py-3 shadow-lg max-w-sm">
        <button
          onClick={() => setDismissed(true)}
          className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-gray-200 text-xs text-gray-600 hover:bg-gray-300 transition-colors"
          aria-label="Dismiss notifications"
        >
          &times;
        </button>

        <div
          className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-white font-bold text-sm ${pastelColors[index % pastelColors.length]}`}
        >
          {msg.name[0]}
        </div>

        <div className="min-w-0">
          <p className="text-sm text-text">
            <span className="font-bold">{msg.name}</span> from {msg.city}{" "}
            {msg.action}
          </p>
          <p className="text-xs text-text-muted">{msg.time}</p>
        </div>
      </div>
    </div>
  );
}
