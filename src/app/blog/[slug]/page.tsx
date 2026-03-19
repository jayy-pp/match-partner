import type { Metadata } from "next";
import Link from "next/link";

/* ------------------------------------------------------------------ */
/*  Blog post data                                                     */
/* ------------------------------------------------------------------ */

interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  publishDate: string;
  modifiedDate: string;
  intro: string;
  sections: Section[];
}

interface Section {
  id: string;
  title: string;
  content: React.ReactNode;
}

const author = {
  name: "Priya Sharma",
  role: "Head of Matchmaking",
  initial: "P",
};

/* ------------------------------------------------------------------ */
/*  Reusable content blocks                                            */
/* ------------------------------------------------------------------ */

function StatGrid({ stats }: { stats: { label: string; value: string }[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-6">
      {stats.map((s) => (
        <div
          key={s.label}
          className="bg-primary/5 rounded-xl p-4 text-center border border-primary/10"
        >
          <p className="text-2xl font-bold text-primary">{s.value}</p>
          <p className="text-sm text-text-muted">{s.label}</p>
        </div>
      ))}
    </div>
  );
}

function Tip({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-accent/5 border-l-4 border-accent rounded-r-lg p-4 my-6">
      <p className="font-semibold text-accent-dark mb-1">💡 Pro Tip</p>
      <p className="text-text-muted text-sm">{children}</p>
    </div>
  );
}

function Warning({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-red-50 border-l-4 border-red-500 rounded-r-lg p-4 my-6">
      <p className="font-semibold text-red-700 mb-1">⚠️ Warning</p>
      <p className="text-text-muted text-sm">{children}</p>
    </div>
  );
}

function MistakeFix({
  mistake,
  fix,
}: {
  mistake: string;
  fix: string;
}) {
  return (
    <div className="grid md:grid-cols-2 gap-4 my-6">
      <div className="bg-red-50 border border-red-200 rounded-xl p-4">
        <p className="font-semibold text-red-700 mb-1">❌ Don&apos;t</p>
        <p className="text-sm text-text-muted">{mistake}</p>
      </div>
      <div className="bg-green-50 border border-green-200 rounded-xl p-4">
        <p className="font-semibold text-green-700 mb-1">✅ Do</p>
        <p className="text-sm text-text-muted">{fix}</p>
      </div>
    </div>
  );
}

function ComparisonTable3({
  headers,
  rows,
}: {
  headers: [string, string, string];
  rows: [string, string, string, string][];
}) {
  return (
    <div className="overflow-x-auto my-6">
      <table className="w-full text-sm border border-border rounded-xl overflow-hidden">
        <thead>
          <tr className="bg-surface">
            <th className="text-left p-3 font-semibold text-secondary">
              Feature
            </th>
            {headers.map((h) => (
              <th key={h} className="text-center p-3 font-semibold text-secondary">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row[0]} className="border-t border-border hover:bg-surface/50">
              <td className="p-3 text-text-muted">{row[0]}</td>
              <td className="p-3 text-center">{row[1]}</td>
              <td className="p-3 text-center">{row[2]}</td>
              <td className="p-3 text-center">{row[3]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Post 1: Complete Guide                                              */
/* ------------------------------------------------------------------ */
const post1Sections: Section[] = [
  {
    id: "understanding-hindu-matrimony",
    title: "Understanding Hindu Matrimony Today",
    content: (
      <>
        <p className="text-text-muted leading-relaxed mb-4">
          Hindu matrimony has evolved significantly over the past two decades.
          While core values like family involvement, cultural compatibility, and
          dharmic principles remain central, the way families discover and
          evaluate matches has transformed through technology.
        </p>
        <StatGrid
          stats={[
            { label: "Marriages per year in India", value: "10M+" },
            { label: "Use online platforms", value: "65%" },
            { label: "Involve family in search", value: "89%" },
            { label: "Value cultural match", value: "94%" },
          ]}
        />
        <p className="text-text-muted leading-relaxed">
          Modern Hindu matrimony blends tradition with technology. Families
          still play a pivotal role, but digital platforms provide access to a
          wider pool of verified, compatible matches — making the search more
          efficient while preserving its sanctity.
        </p>
      </>
    ),
  },
  {
    id: "key-factors",
    title: "Key Factors in Hindu Match Selection",
    content: (
      <>
        <p className="text-text-muted leading-relaxed mb-4">
          Successful Hindu marriages consider multiple compatibility dimensions.
          The most important factors go beyond surface-level preferences to
          deeper alignment on values, goals, and family expectations.
        </p>
        <ul className="space-y-3 mb-4">
          {[
            "Family values and cultural background alignment",
            "Education, career aspirations, and financial stability",
            "Religious practices and spiritual compatibility",
            "Lifestyle preferences (vegetarian, joint vs nuclear family)",
            "Kundali matching and astrological compatibility",
            "Communication style and emotional maturity",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <svg className="w-5 h-5 text-accent mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              <span className="text-text-muted">{item}</span>
            </li>
          ))}
        </ul>
        <Tip>
          Focus on non-negotiables first (values, religion, lifestyle), then
          evaluate preferences (location, profession). This prevents you from
          overlooking great matches over flexible criteria.
        </Tip>
      </>
    ),
  },
  {
    id: "kundali-matching",
    title: "Kundali Matching: What You Need to Know",
    content: (
      <>
        <p className="text-text-muted leading-relaxed mb-4">
          Kundali matching (Guna Milan) is a traditional astrological
          compatibility assessment based on the birth charts of both
          individuals. The Ashtakoot system evaluates 8 aspects and produces a
          score out of 36 gunas.
        </p>
        <ComparisonTable3
          headers={["Score Range", "Compatibility", "Recommendation"]}
          rows={[
            ["Guna Score", "0–17", "Low compatibility", "Not recommended"],
            ["Guna Score", "18–24", "Moderate", "Acceptable with remedies"],
            ["Guna Score", "25–32", "Good", "Recommended for marriage"],
            ["Guna Score", "33–36", "Excellent", "Highly auspicious match"],
          ]}
        />
        <Warning>
          While Kundali matching is valued in Hindu tradition, it should be one
          of many factors in your decision — not the only one. Emotional
          compatibility, shared values, and mutual respect are equally important.
        </Warning>
      </>
    ),
  },
  {
    id: "family-involvement",
    title: "The Role of Family in Hindu Matrimony",
    content: (
      <>
        <p className="text-text-muted leading-relaxed mb-4">
          In Hindu culture, marriage is considered a union of two families — not
          just two individuals. Family involvement brings wisdom, support, and a
          broader perspective to the match evaluation process.
        </p>
        <MistakeFix
          mistake="Excluding parents from the search process entirely and presenting a final choice. This creates resistance and hurt feelings."
          fix="Involve parents early. Share your preferences, let them suggest matches, and make decisions together. MatchPartner's family tools enable collaborative shortlisting."
        />
        <ol className="list-decimal pl-6 space-y-2 text-text-muted mt-4">
          <li>Set expectations together as a family before starting the search</li>
          <li>Create a shared profile that reflects both individual and family values</li>
          <li>Use MatchPartner&apos;s family access feature for collaborative shortlisting</li>
          <li>Schedule family introductions after initial compatibility is established</li>
          <li>Respect each other&apos;s preferences while finding common ground</li>
        </ol>
      </>
    ),
  },
  {
    id: "profile-creation",
    title: "Creating an Effective Matrimony Profile",
    content: (
      <>
        <p className="text-text-muted leading-relaxed mb-4">
          Your matrimony profile is your first impression. A well-crafted
          profile attracts compatible matches and saves time by filtering out
          misaligned prospects early.
        </p>
        <div className="space-y-3 mb-4">
          {[
            { step: "1", title: "Choose clear, recent photographs", desc: "Include a well-lit portrait, a full-length photo, and one with family." },
            { step: "2", title: "Write an authentic bio", desc: "Describe your values, hobbies, career goals, and what you seek in a partner." },
            { step: "3", title: "Be specific about preferences", desc: "Vague preferences lead to irrelevant matches. State your non-negotiables clearly." },
            { step: "4", title: "Complete verification", desc: "Aadhaar-verified profiles receive 3x more interest on MatchPartner." },
          ].map((s) => (
            <div key={s.step} className="flex gap-4 items-start">
              <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shrink-0">{s.step}</span>
              <div>
                <p className="font-semibold text-secondary">{s.title}</p>
                <p className="text-sm text-text-muted">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <Tip>
          Profiles with all sections completed and Aadhaar verification get 5x
          more matches than incomplete profiles. Invest 20 minutes to set up
          your profile properly.
        </Tip>
      </>
    ),
  },
  {
    id: "red-flags",
    title: "Red Flags to Watch For",
    content: (
      <>
        <p className="text-text-muted leading-relaxed mb-4">
          While most people on matrimony platforms are genuine, it&apos;s important
          to stay vigilant. Here are common warning signs to watch for during
          your search.
        </p>
        <ul className="space-y-3">
          {[
            "Reluctance to verify identity or share basic details",
            "Inconsistencies between profile information and conversations",
            "Pressure to move communication off-platform quickly",
            "Avoiding video calls or in-person family meetings",
            "Unrealistic claims about income, property, or status",
            "Dismissing your preferences or boundaries repeatedly",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="text-red-500 mt-0.5">🚩</span>
              <span className="text-text-muted">{item}</span>
            </li>
          ))}
        </ul>
        <Warning>
          Never share financial information, passwords, or send money to someone
          you&apos;ve met on a matrimony platform. MatchPartner&apos;s verification
          process helps filter out fake profiles, but personal vigilance is
          essential.
        </Warning>
      </>
    ),
  },
  {
    id: "wedding-planning",
    title: "From Match to Marriage: Planning Your Hindu Wedding",
    content: (
      <>
        <p className="text-text-muted leading-relaxed mb-4">
          Once you&apos;ve found your match, the journey to marriage involves
          several beautiful traditions and practical planning steps.
        </p>
        <ol className="list-decimal pl-6 space-y-2 text-text-muted mb-4">
          <li><strong>Roka ceremony:</strong> Formal agreement between families</li>
          <li><strong>Engagement (Sagai):</strong> Ring exchange and blessings</li>
          <li><strong>Venue and date selection:</strong> Based on muhurat (auspicious timing)</li>
          <li><strong>Wedding card design:</strong> Invitations sent to family and friends</li>
          <li><strong>Haldi &amp; Mehndi:</strong> Pre-wedding celebrations</li>
          <li><strong>Wedding day rituals:</strong> Baraat, Varmala, Pheras, Sindoor</li>
          <li><strong>Vidaai &amp; Reception:</strong> Post-ceremony celebrations</li>
        </ol>
        <StatGrid
          stats={[
            { label: "Avg. Hindu wedding guests", value: "300+" },
            { label: "Traditional rituals", value: "16+" },
            { label: "Planning duration", value: "3-6 mo" },
            { label: "Key ceremonies", value: "7+" },
          ]}
        />
      </>
    ),
  },
];

/* ------------------------------------------------------------------ */
/*  Post 2: How MatchPartner Helps                                     */
/* ------------------------------------------------------------------ */
const post2Sections: Section[] = [
  {
    id: "the-challenge",
    title: "The Challenge of Finding a Life Partner",
    content: (
      <>
        <p className="text-text-muted leading-relaxed mb-4">
          Finding a compatible life partner in today&apos;s world presents
          unique challenges. Traditional networks are shrinking, families are
          spread across cities and countries, and generic matrimony platforms
          overwhelm users with unverified profiles.
        </p>
        <StatGrid
          stats={[
            { label: "Avg. profiles browsed", value: "200+" },
            { label: "Before finding a match", value: "6-12 mo" },
            { label: "Fake profiles on avg. platforms", value: "30%" },
            { label: "Time spent weekly", value: "8+ hrs" },
          ]}
        />
        <MistakeFix
          mistake="Spending hours scrolling through thousands of unverified profiles on generic platforms, leading to frustration and decision fatigue."
          fix="Use MatchPartner's AI-powered matching that surfaces only verified, compatible profiles based on your specific criteria and family values."
        />
      </>
    ),
  },
  {
    id: "aadhaar-verification",
    title: "100% Aadhaar-Verified Profiles",
    content: (
      <>
        <p className="text-text-muted leading-relaxed mb-4">
          Trust is the foundation of matrimony. MatchPartner requires Aadhaar
          verification for every profile, ensuring that every person you connect
          with is real, genuine, and serious about marriage.
        </p>
        <ComparisonTable3
          headers={["MatchPartner", "Other Platforms", "Social Media"]}
          rows={[
            ["Identity verification", "Aadhaar-based", "Optional email", "None"],
            ["Photo authenticity", "AI-verified", "Self-reported", "Unverified"],
            ["Background check", "Available", "Not offered", "Not applicable"],
            ["Fake profile rate", "<1%", "15-30%", "40%+"],
          ]}
        />
        <Tip>
          Complete your Aadhaar verification within the first 10 minutes of
          signing up. Verified profiles appear 3x higher in search results and
          receive significantly more interest.
        </Tip>
      </>
    ),
  },
  {
    id: "ai-matching",
    title: "AI-Powered Match Recommendations",
    content: (
      <>
        <p className="text-text-muted leading-relaxed mb-4">
          MatchPartner&apos;s AI engine analyzes over 50 compatibility
          parameters — from educational background and career goals to family
          values and lifestyle preferences — to surface matches that truly align
          with what matters to you.
        </p>
        <ul className="space-y-3 mb-4">
          {[
            "Learns from your interactions to improve recommendations over time",
            "Considers both stated preferences and behavioral compatibility signals",
            "Factors in family expectations and cultural alignment",
            "Provides daily curated matches instead of overwhelming search results",
            "Includes compatibility scores with detailed breakdowns",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <svg className="w-5 h-5 text-accent mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              <span className="text-text-muted">{item}</span>
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    id: "privacy-control",
    title: "Privacy-Controlled Profile Visibility",
    content: (
      <>
        <p className="text-text-muted leading-relaxed mb-4">
          Your privacy matters. MatchPartner gives you complete control over
          who sees your profile, photos, and contact information — so you share
          details only when you&apos;re comfortable.
        </p>
        <div className="space-y-3 mb-4">
          {[
            { step: "1", title: "Choose visibility level", desc: "Public, members-only, or hidden profile options." },
            { step: "2", title: "Photo privacy controls", desc: "Blur photos until you accept a match request." },
            { step: "3", title: "Contact number protection", desc: "Share your number only after mutual interest is confirmed." },
            { step: "4", title: "Block and report tools", desc: "Instantly block any user and report suspicious behavior." },
          ].map((s) => (
            <div key={s.step} className="flex gap-4 items-start">
              <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shrink-0">{s.step}</span>
              <div>
                <p className="font-semibold text-secondary">{s.title}</p>
                <p className="text-sm text-text-muted">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    id: "family-tools",
    title: "Family-Assisted Matchmaking Tools",
    content: (
      <>
        <p className="text-text-muted leading-relaxed mb-4">
          MatchPartner understands that in Hindu culture, marriage is a family
          decision. Our family tools let parents and siblings participate in the
          search process collaboratively.
        </p>
        <ul className="space-y-3 mb-4">
          {[
            "Parent login: Separate access for parents to browse and shortlist",
            "Family dashboard: Shared shortlist visible to all family members",
            "Discussion notes: Private notes on each profile for family review",
            "Meeting scheduler: Coordinate family introductions in-app",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <svg className="w-5 h-5 text-accent mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              <span className="text-text-muted">{item}</span>
            </li>
          ))}
        </ul>
        <MistakeFix
          mistake="Having parents and children on separate platforms or sharing login credentials, leading to confusion and privacy issues."
          fix="Use MatchPartner's linked family accounts. Each member has their own login but shares a unified shortlist and can leave private notes."
        />
      </>
    ),
  },
  {
    id: "success-stories",
    title: "Real Success Stories",
    content: (
      <>
        <p className="text-text-muted leading-relaxed mb-4">
          Over 1,500 couples have found their life partner through
          MatchPartner. Here&apos;s what sets these success stories apart.
        </p>
        <StatGrid
          stats={[
            { label: "Successful matches", value: "1,500+" },
            { label: "Avg. time to match", value: "45 days" },
            { label: "Countries", value: "20+" },
            { label: "Satisfaction rate", value: "96%" },
          ]}
        />
        <div className="bg-surface rounded-xl border border-border p-6 my-6">
          <div className="flex items-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
            ))}
          </div>
          <p className="text-text-muted italic mb-3">
            &ldquo;We found each other within 3 weeks on MatchPartner. The
            verified profiles gave our families confidence, and the AI matching
            was spot-on with compatibility.&rdquo;
          </p>
          <p className="text-sm font-semibold text-secondary">
            Ankit &amp; Meera — Married in 2024
          </p>
        </div>
      </>
    ),
  },
  {
    id: "getting-started",
    title: "Getting Started Is Free and Simple",
    content: (
      <>
        <p className="text-text-muted leading-relaxed mb-4">
          Creating your MatchPartner profile takes less than 10 minutes. Start
          with a free basic account and upgrade when you&apos;re ready to
          connect with matches.
        </p>
        <div className="space-y-3">
          {[
            { step: "1", title: "Sign up free", desc: "Create your account with email or phone number." },
            { step: "2", title: "Build your profile", desc: "Add photos, bio, family details, and partner preferences." },
            { step: "3", title: "Verify with Aadhaar", desc: "Quick 2-minute verification to unlock full platform access." },
            { step: "4", title: "Start receiving matches", desc: "Get AI-curated matches daily based on your compatibility profile." },
          ].map((s) => (
            <div key={s.step} className="flex gap-4 items-start">
              <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shrink-0">{s.step}</span>
              <div>
                <p className="font-semibold text-secondary">{s.title}</p>
                <p className="text-sm text-text-muted">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </>
    ),
  },
];

/* ------------------------------------------------------------------ */
/*  Post 3: Verified Profile Step-by-Step                              */
/* ------------------------------------------------------------------ */
const post3Sections: Section[] = [
  {
    id: "why-verification-matters",
    title: "Why Profile Verification Matters",
    content: (
      <>
        <p className="text-text-muted leading-relaxed mb-4">
          Profile verification is the single most important feature that
          separates trustworthy matrimony platforms from unreliable ones. Fake
          profiles waste time, cause emotional distress, and erode trust in the
          matchmaking process.
        </p>
        <StatGrid
          stats={[
            { label: "Fake profiles on unverified platforms", value: "30%+" },
            { label: "MatchPartner fake rate", value: "<1%" },
            { label: "Trust increase with verification", value: "5x" },
            { label: "Faster match acceptance", value: "3x" },
          ]}
        />
      </>
    ),
  },
  {
    id: "verification-process",
    title: "MatchPartner's 4-Step Verification Process",
    content: (
      <>
        <p className="text-text-muted leading-relaxed mb-4">
          MatchPartner uses a comprehensive multi-layer verification system to
          ensure every profile on the platform is genuine and trustworthy.
        </p>
        <div className="space-y-4 mb-4">
          {[
            { step: "1", title: "Aadhaar Identity Verification", desc: "Upload Aadhaar card. Our system verifies your name, photo, and date of birth against the UIDAI database in real-time." },
            { step: "2", title: "Photo Authenticity Check", desc: "AI-powered facial recognition matches your uploaded photos against your Aadhaar photo to prevent impersonation." },
            { step: "3", title: "Phone & Email Verification", desc: "OTP verification for both phone number and email address ensures valid contact information." },
            { step: "4", title: "Manual Review", desc: "Our team manually reviews flagged profiles for additional quality assurance before they go live." },
          ].map((s) => (
            <div key={s.step} className="flex gap-4 items-start bg-surface rounded-xl p-4 border border-border">
              <span className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center text-lg font-bold shrink-0">{s.step}</span>
              <div>
                <p className="font-semibold text-secondary">{s.title}</p>
                <p className="text-sm text-text-muted">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <Tip>
          The entire verification process takes less than 5 minutes. Keep your
          Aadhaar card handy before starting — you&apos;ll need to upload a
          clear photo of the front side.
        </Tip>
      </>
    ),
  },
  {
    id: "platform-comparison",
    title: "Verification: MatchPartner vs Other Platforms",
    content: (
      <>
        <p className="text-text-muted leading-relaxed mb-4">
          Not all verification systems are equal. Here&apos;s how
          MatchPartner&apos;s approach compares to other popular platforms.
        </p>
        <ComparisonTable3
          headers={["MatchPartner", "Shaadi.com", "Jeevansathi"]}
          rows={[
            ["Aadhaar verification", "✅ Required", "❌ Optional", "❌ Not available"],
            ["Photo AI check", "✅ Yes", "❌ No", "❌ No"],
            ["Phone OTP", "✅ Required", "✅ Required", "✅ Required"],
            ["Manual review", "✅ Yes", "⚠️ Limited", "❌ No"],
            ["Fake profile rate", "<1%", "~15%", "~20%"],
            ["Verification badge", "✅ Prominent", "⚠️ Small", "❌ None"],
          ]}
        />
        <Warning>
          Platforms that make verification optional often have significantly
          higher rates of fake or misleading profiles. Always prioritize
          platforms where verification is mandatory.
        </Warning>
      </>
    ),
  },
  {
    id: "what-gets-verified",
    title: "What Information Gets Verified",
    content: (
      <>
        <p className="text-text-muted leading-relaxed mb-4">
          Understanding exactly what MatchPartner verifies helps you feel
          confident about the authenticity of profiles you interact with.
        </p>
        <ul className="space-y-3 mb-4">
          {[
            "Full legal name (as per Aadhaar)",
            "Date of birth and age",
            "Photograph authenticity",
            "Phone number (via OTP)",
            "Email address (via OTP)",
            "Address (state and city level)",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <svg className="w-5 h-5 text-accent mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              <span className="text-text-muted">{item}</span>
            </li>
          ))}
        </ul>
        <MistakeFix
          mistake="Assuming all information on a profile is verified. Self-reported details like income, education, and family background are user-provided."
          fix="Look for the blue verification badge. Verified fields are clearly marked. For critical details like education, request to see certificates during family meetings."
        />
      </>
    ),
  },
  {
    id: "privacy-during-verification",
    title: "Your Privacy During Verification",
    content: (
      <>
        <p className="text-text-muted leading-relaxed mb-4">
          MatchPartner handles your Aadhaar data with strict security protocols.
          Your Aadhaar number is never stored on our servers — we use a
          tokenized verification system.
        </p>
        <ul className="space-y-3 mb-4">
          {[
            "Aadhaar number is encrypted during transmission and never stored",
            "Only verified status (yes/no) is saved — not the document itself",
            "Verification data is processed through government-approved APIs",
            "Your Aadhaar details are never visible to other users",
            "You can request data deletion at any time",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <svg className="w-5 h-5 text-primary mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
              <span className="text-text-muted">{item}</span>
            </li>
          ))}
        </ul>
        <Tip>
          MatchPartner is compliant with India&apos;s Digital Personal Data
          Protection Act (DPDPA). Read our full privacy policy for details on
          how your data is handled.
        </Tip>
      </>
    ),
  },
  {
    id: "benefits-of-verified",
    title: "Benefits of a Verified Profile",
    content: (
      <>
        <p className="text-text-muted leading-relaxed mb-4">
          Verified profiles unlock significant advantages on MatchPartner,
          making your search faster and more effective.
        </p>
        <StatGrid
          stats={[
            { label: "More profile views", value: "5x" },
            { label: "Higher match acceptance", value: "3x" },
            { label: "Faster response time", value: "2x" },
            { label: "Trust score boost", value: "100%" },
          ]}
        />
        <ul className="space-y-3 mb-4">
          {[
            "Prominent blue verification badge on your profile",
            "Higher ranking in search results",
            "Access to other verified profiles only",
            "Priority customer support",
            "Family members trust verified profiles significantly more",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <svg className="w-5 h-5 text-accent mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              <span className="text-text-muted">{item}</span>
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    id: "common-questions",
    title: "Common Verification Questions",
    content: (
      <>
        <p className="text-text-muted leading-relaxed mb-4">
          Here are answers to the most frequently asked questions about
          MatchPartner&apos;s verification process.
        </p>
        <div className="space-y-4">
          {[
            { q: "Can I use a different ID instead of Aadhaar?", a: "Currently, Aadhaar is the only accepted identity document. For NRI users, we accept passport verification through our international verification partner." },
            { q: "How long does verification take?", a: "Real-time Aadhaar verification completes in under 2 minutes. Manual review for flagged profiles takes up to 24 hours." },
            { q: "What if my Aadhaar has my old photo?", a: "Our AI system accounts for reasonable appearance changes. If there's a mismatch, you can upload a fresh selfie for manual review." },
            { q: "Can I create a profile without verification?", a: "You can create a basic profile, but it will have limited visibility. Full platform features require Aadhaar verification." },
          ].map((item) => (
            <div key={item.q} className="bg-surface rounded-xl border border-border p-5">
              <h3 className="font-semibold text-secondary mb-2">{item.q}</h3>
              <p className="text-sm text-text-muted">{item.a}</p>
            </div>
          ))}
        </div>
      </>
    ),
  },
];

/* ------------------------------------------------------------------ */
/*  Posts map                                                           */
/* ------------------------------------------------------------------ */

const posts: Record<string, BlogPost> = {
  "complete-guide-to-hindu-matrimony": {
    slug: "complete-guide-to-hindu-matrimony",
    title: "Complete Guide to Hindu Matrimony in 2025",
    description:
      "Everything you need to know about Hindu matrimony — from kundali matching and family involvement to creating the perfect profile and planning your wedding.",
    category: "Guides",
    readTime: "12 min read",
    publishDate: "2025-01-15",
    modifiedDate: "2025-03-01",
    intro:
      "Hindu matrimony combines centuries-old traditions with modern matchmaking practices. This comprehensive guide covers everything from understanding kundali matching and family dynamics to creating an effective profile and planning your wedding — helping you navigate your journey to finding a life partner with confidence.",
    sections: post1Sections,
  },
  "how-matchpartner-helps-find-your-life-partner": {
    slug: "how-matchpartner-helps-find-your-life-partner",
    title: "How MatchPartner Helps You Find Your Life Partner",
    description:
      "Discover how MatchPartner's Aadhaar verification, AI matching, and family tools make finding a trusted Hindu life partner faster and safer.",
    category: "Product",
    readTime: "8 min read",
    publishDate: "2025-02-10",
    modifiedDate: "2025-03-05",
    intro:
      "MatchPartner solves the biggest challenges in Hindu matrimony — fake profiles, endless scrolling, and disconnected family involvement. With Aadhaar-verified profiles, AI-powered matching, and collaborative family tools, we help you find a genuine, compatible life partner in weeks instead of months.",
    sections: post2Sections,
  },
  "verified-profile-matchmaking-step-by-step": {
    slug: "verified-profile-matchmaking-step-by-step",
    title: "Verified Profile Matchmaking: A Step-by-Step Guide",
    description:
      "Learn how MatchPartner's 4-step Aadhaar verification process works, why it matters, and how verified profiles get 5x more matches.",
    category: "Tutorial",
    readTime: "10 min read",
    publishDate: "2025-03-01",
    modifiedDate: "2025-03-10",
    intro:
      "Profile verification is the foundation of trustworthy matchmaking. MatchPartner's 4-step verification process — Aadhaar identity check, AI photo validation, contact verification, and manual review — ensures every profile is genuine. Verified profiles receive 5x more views and 3x higher match acceptance rates.",
    sections: post3Sections,
  },
};

const relatedPosts = [
  {
    slug: "complete-guide-to-hindu-matrimony",
    title: "Complete Guide to Hindu Matrimony in 2025",
    category: "Guides",
  },
  {
    slug: "how-matchpartner-helps-find-your-life-partner",
    title: "How MatchPartner Helps You Find Your Life Partner",
    category: "Product",
  },
  {
    slug: "verified-profile-matchmaking-step-by-step",
    title: "Verified Profile Matchmaking: Step-by-Step",
    category: "Tutorial",
  },
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) return { title: "Post Not Found" };
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `https://matchpartner.in/blog/${post.slug}` },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts[slug];

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold text-secondary mb-4">
          Post Not Found
        </h1>
        <p className="text-text-muted mb-6">
          The blog post you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link href="/blog" className="text-primary font-medium">
          ← Back to Blog
        </Link>
      </div>
    );
  }

  const others = relatedPosts.filter((rp) => rp.slug !== post.slug);

  return (
    <>
      {/* Article JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.description,
            author: {
              "@type": "Person",
              name: author.name,
              jobTitle: author.role,
            },
            datePublished: post.publishDate,
            dateModified: post.modifiedDate,
            publisher: {
              "@type": "Organization",
              name: "MatchPartner",
              url: "https://matchpartner.in",
            },
            mainEntityOfPage: `https://matchpartner.in/blog/${post.slug}`,
          }),
        }}
      />

      {/* Breadcrumb */}
      <div className="bg-surface border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-sm text-text-muted">
            <Link href="/" className="hover:text-primary transition">
              Home
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-primary transition">
              Blog
            </Link>
            <span>/</span>
            <span className="text-secondary font-medium truncate">
              {post.title}
            </span>
          </nav>
        </div>
      </div>

      {/* Article header */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full">
                {post.category}
              </span>
              <span className="text-text-muted text-sm">
                {post.readTime}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              {post.title}
            </h1>
            <p className="text-lg text-text-muted leading-relaxed mb-6">
              {post.intro}
            </p>
            {/* Author card */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                {author.initial}
              </div>
              <div>
                <p className="font-semibold text-secondary text-sm">
                  {author.name}
                </p>
                <p className="text-text-muted text-xs">
                  {author.role} · Published{" "}
                  {new Date(post.publishDate).toLocaleDateString("en-IN", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article body + sidebar */}
      <section className="bg-white pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main content */}
            <article className="flex-1 min-w-0">
              {/* Table of Contents */}
              <div className="bg-surface rounded-xl border border-border p-6 mb-10">
                <h2 className="font-bold text-secondary mb-3">
                  Table of Contents
                </h2>
                <ol className="space-y-2">
                  {post.sections.map((s, i) => (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        className="text-sm text-primary hover:underline"
                      >
                        {i + 1}. {s.title}
                      </a>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Sections */}
              {post.sections.map((section) => (
                <div key={section.id} id={section.id} className="mb-12">
                  <h2 className="text-2xl font-bold text-secondary mb-4">
                    {section.title}
                  </h2>
                  {section.content}
                </div>
              ))}
            </article>

            {/* Sidebar */}
            <aside className="lg:w-80 shrink-0 space-y-6">
              {/* Author bio */}
              <div className="bg-surface rounded-xl border border-border p-6 sticky top-24">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">
                    {author.initial}
                  </div>
                  <div>
                    <p className="font-semibold text-secondary">
                      {author.name}
                    </p>
                    <p className="text-text-muted text-xs">{author.role}</p>
                  </div>
                </div>
                <p className="text-text-muted text-sm mb-4">
                  Priya has 10+ years of experience in the Indian matrimony
                  industry and leads matchmaking strategy at MatchPartner.
                </p>

                {/* Related posts */}
                <h3 className="font-semibold text-secondary text-sm mb-3 mt-6">
                  Related Articles
                </h3>
                <div className="space-y-3">
                  {others.map((rp) => (
                    <Link
                      key={rp.slug}
                      href={`/blog/${rp.slug}`}
                      className="block text-sm text-primary hover:underline"
                    >
                      {rp.title}
                    </Link>
                  ))}
                </div>

                {/* Newsletter */}
                <div className="mt-6 pt-6 border-t border-border">
                  <h3 className="font-semibold text-secondary text-sm mb-2">
                    Get Matrimony Tips
                  </h3>
                  <p className="text-text-muted text-xs mb-3">
                    Weekly advice on finding your perfect match.
                  </p>
                  <div className="flex gap-2">
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="flex-1 text-sm border border-border rounded-lg px-3 py-2"
                      readOnly
                    />
                    <button className="bg-primary text-white text-sm px-3 py-2 rounded-lg">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-gradient-to-r from-primary to-secondary py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Start Your Matrimony Journey Today
          </h2>
          <p className="text-white/70 mb-8">
            Join 10,000+ verified profiles on MatchPartner and find your perfect
            life partner.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-primary px-8 py-4 rounded-xl font-semibold hover:bg-white/90 transition"
          >
            Create Your Profile Free
          </Link>
          <p className="text-white/50 text-sm mt-4">
            No credit card required · Set up in 5 minutes · 100% free to start
          </p>
        </div>
      </section>
    </>
  );
}
