"use client";

import { useEffect, useRef, useState } from "react";

function BrowserChrome({
  url,
  children,
}: {
  url: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-border overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-3 bg-surface border-b border-border">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        <div className="flex-1 mx-8">
          <div className="bg-white rounded-md px-3 py-1 text-xs text-text-muted border text-center">
            {url}
          </div>
        </div>
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
}

export function ProfileBrowser({ visible }: { visible: boolean }) {
  const profiles = [
    {
      name: "Ananya S.",
      age: 26,
      city: "Mumbai",
      profession: "Software Engineer",
      match: "92%",
      image: "/images/profiles/ananya.jpg",
    },
    {
      name: "Vikram R.",
      age: 29,
      city: "Delhi",
      profession: "Doctor",
      match: "88%",
      image: "/images/profiles/vikram.jpg",
    },
    {
      name: "Meera P.",
      age: 27,
      city: "Bangalore",
      profession: "CA",
      match: "95%",
      image: "/images/profiles/meera.jpg",
    },
    {
      name: "Arjun K.",
      age: 30,
      city: "Pune",
      profession: "Architect",
      match: "87%",
      image: "/images/profiles/arjun.jpg",
    },
  ];

  return (
    <BrowserChrome url="app.matchpartner.in/browse">
      <div className="space-y-3">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-sm text-secondary">
            Recommended Matches
          </h3>
          <span className="text-xs text-text-muted">Showing AI picks</span>
        </div>
        {profiles.map((p, i) => (
          <div
            key={p.name}
            className="flex items-center justify-between p-3 rounded-lg border border-border hover:border-primary/20 transition-all"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(10px)",
              transition: "all 0.5s ease-out",
              transitionDelay: `${i * 150}ms`,
            }}
          >
            <div className="flex items-center gap-3">
              <img
                src={p.image}
                alt={p.name}
                className="w-10 h-10 rounded-full object-cover border-2 border-primary/20"
              />
              <div>
                <p className="text-sm font-medium text-secondary">{p.name}</p>
                <p className="text-xs text-text-muted">
                  {p.age} · {p.city} · {p.profession}
                </p>
              </div>
            </div>
            <span className="text-xs font-semibold text-accent bg-accent/10 px-2 py-1 rounded-full">
              {p.match} match
            </span>
          </div>
        ))}
      </div>
    </BrowserChrome>
  );
}

export function VerificationDashboard({ visible }: { visible: boolean }) {
  const steps = [
    { label: "Phone Verified", status: "done", icon: "📱" },
    { label: "Aadhaar Uploaded", status: "done", icon: "🪪" },
    { label: "Photo Verified", status: "done", icon: "📸" },
    { label: "Background Check", status: "active", icon: "🔍" },
    { label: "Family Reference", status: "pending", icon: "👨‍👩‍👧" },
  ];

  return (
    <BrowserChrome url="app.matchpartner.in/verification">
      <div className="space-y-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-semibold text-sm text-secondary">
            Profile Verification
          </h3>
          <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full font-medium">
            80% Complete
          </span>
        </div>
        <div className="w-full bg-surface rounded-full h-2">
          <div
            className="bg-accent h-2 rounded-full transition-all duration-1000"
            style={{ width: visible ? "80%" : "0%" }}
          />
        </div>
        {steps.map((s, i) => (
          <div
            key={s.label}
            className="flex items-center gap-3 p-2"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(-10px)",
              transition: "all 0.4s ease-out",
              transitionDelay: `${i * 120}ms`,
            }}
          >
            <span className="text-lg">{s.icon}</span>
            <span className="text-sm flex-1 text-secondary">{s.label}</span>
            {s.status === "done" && (
              <svg
                className="w-5 h-5 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            )}
            {s.status === "active" && (
              <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                In Progress
              </span>
            )}
            {s.status === "pending" && (
              <span className="text-xs text-text-muted">Pending</span>
            )}
          </div>
        ))}
      </div>
    </BrowserChrome>
  );
}

export function PrivacyControls({ visible }: { visible: boolean }) {
  return (
    <BrowserChrome url="app.matchpartner.in/privacy">
      <div className="space-y-4">
        <h3 className="font-semibold text-sm text-secondary">
          Privacy Settings
        </h3>
        {[
          {
            label: "Profile Visibility",
            desc: "Who can see your profile",
            value: "Verified Members Only",
          },
          {
            label: "Photo Access",
            desc: "Control who sees your photos",
            value: "On Request",
          },
          {
            label: "Contact Details",
            desc: "Phone & email visibility",
            value: "Hidden",
          },
          {
            label: "Family Info",
            desc: "Family background details",
            value: "Matches Only",
          },
        ].map((item, i) => (
          <div
            key={item.label}
            className="flex items-center justify-between p-3 rounded-lg border border-border"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(10px)",
              transition: "all 0.5s ease-out",
              transitionDelay: `${i * 150}ms`,
            }}
          >
            <div>
              <p className="text-sm font-medium text-secondary">{item.label}</p>
              <p className="text-xs text-text-muted">{item.desc}</p>
            </div>
            <span className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded-full font-medium">
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </BrowserChrome>
  );
}

export function FamilyTools({ visible }: { visible: boolean }) {
  return (
    <BrowserChrome url="app.matchpartner.in/family">
      <div className="space-y-4">
        <h3 className="font-semibold text-sm text-secondary">
          Family Collaboration
        </h3>
        <div
          className="p-3 rounded-lg bg-primary/5 border border-primary/10"
          style={{
            opacity: visible ? 1 : 0,
            transition: "all 0.5s ease-out",
            transitionDelay: "0ms",
          }}
        >
          <p className="text-xs text-text-muted mb-1">Shared Shortlist</p>
          <p className="text-sm font-medium text-secondary">
            3 family members collaborating
          </p>
          <div className="flex -space-x-2 mt-2">
            {["M", "P", "S"].map((l, i) => (
              <div
                key={l}
                className="w-7 h-7 rounded-full bg-primary/10 border-2 border-white flex items-center justify-center text-primary text-xs font-semibold"
                style={{
                  opacity: visible ? 1 : 0,
                  transition: "opacity 0.3s ease-out",
                  transitionDelay: `${(i + 1) * 200}ms`,
                }}
              >
                {l}
              </div>
            ))}
          </div>
        </div>
        {[
          { name: "Ananya S.", votes: "2/3 approved", status: "Pending" },
          { name: "Rahul M.", votes: "3/3 approved", status: "Shortlisted" },
          { name: "Kavita T.", votes: "1/3 approved", status: "Reviewing" },
        ].map((item, i) => (
          <div
            key={item.name}
            className="flex items-center justify-between p-3 rounded-lg border border-border"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(8px)",
              transition: "all 0.4s ease-out",
              transitionDelay: `${(i + 2) * 150}ms`,
            }}
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent font-semibold text-xs">
                {item.name[0]}
              </div>
              <div>
                <p className="text-sm font-medium text-secondary">
                  {item.name}
                </p>
                <p className="text-xs text-text-muted">{item.votes}</p>
              </div>
            </div>
            <span
              className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                item.status === "Shortlisted"
                  ? "bg-green-50 text-green-700"
                  : item.status === "Pending"
                    ? "bg-yellow-50 text-yellow-700"
                    : "bg-blue-50 text-blue-700"
              }`}
            >
              {item.status}
            </span>
          </div>
        ))}
      </div>
    </BrowserChrome>
  );
}

export default function DashboardMockup({
  variant,
}: {
  variant: "profiles" | "verification" | "privacy" | "family";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref}>
      {variant === "profiles" && <ProfileBrowser visible={visible} />}
      {variant === "verification" && (
        <VerificationDashboard visible={visible} />
      )}
      {variant === "privacy" && <PrivacyControls visible={visible} />}
      {variant === "family" && <FamilyTools visible={visible} />}
    </div>
  );
}
