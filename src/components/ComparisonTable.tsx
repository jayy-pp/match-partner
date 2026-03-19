"use client";

const CheckIcon = () => (
  <svg className="inline h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const XIcon = () => (
  <svg className="inline h-5 w-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const PartialIcon = () => (
  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-accent/20 text-accent font-bold text-xs">~</span>
);

type CellValue = "yes" | "no" | "partial" | string;

interface Row {
  feature: string;
  matchpartner: CellValue;
  others: CellValue;
  traditional: CellValue;
}

const rows: Row[] = [
  { feature: "Aadhaar-Verified Profiles", matchpartner: "yes", others: "partial", traditional: "no" },
  { feature: "AI Match Recommendations", matchpartner: "yes", others: "Basic", traditional: "no" },
  { feature: "Privacy Controls", matchpartner: "Full Control", others: "Limited", traditional: "None" },
  { feature: "Family Collaboration Tools", matchpartner: "yes", others: "no", traditional: "yes" },
  { feature: "Video Profiles", matchpartner: "yes", others: "Some sites", traditional: "no" },
  { feature: "Background Verification", matchpartner: "100%", others: "Varies", traditional: "Word-of-mouth" },
  { feature: "Dedicated Relationship Manager", matchpartner: "Elite plan", others: "Premium only", traditional: "yes" },
  { feature: "Profile Visibility Control", matchpartner: "Granular", others: "Basic on/off", traditional: "no" },
  { feature: "Setup Time", matchpartner: "5 minutes", others: "15-30 minutes", traditional: "Weeks" },
  { feature: "Cost", matchpartner: "From Free", others: "From \u20B9500/mo", traditional: "\u20B910,000+" },
];

function renderCell(value: CellValue) {
  if (value === "yes") return <CheckIcon />;
  if (value === "no") return <XIcon />;
  if (value === "partial") return <PartialIcon />;
  // Text values with contextual styling
  if (value === "Limited" || value === "Basic" || value === "Basic on/off" || value === "Some sites" || value === "Varies" || value === "Premium only")
    return <span className="inline-flex items-center gap-1"><PartialIcon /> {value}</span>;
  if (value === "None" || value === "Weeks" || value === "Word-of-mouth")
    return <span className="inline-flex items-center gap-1"><XIcon /> {value}</span>;
  // Positive text for MatchPartner column
  if (value === "Full Control" || value === "100%" || value === "Granular" || value === "5 minutes" || value === "From Free" || value === "Elite plan")
    return <span className="inline-flex items-center gap-1"><CheckIcon /> {value}</span>;
  // Fallbacks for other/traditional text values
  if (value === "From \u20B9500/mo" || value === "15-30 minutes")
    return <span className="inline-flex items-center gap-1"><PartialIcon /> {value}</span>;
  if (value === "\u20B910,000+")
    return <span className="inline-flex items-center gap-1"><XIcon /> {value}</span>;
  return <span>{value}</span>;
}

export default function ComparisonTable() {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr>
            <th className="p-4 text-left font-semibold text-text bg-surface border-b border-border">
              Feature
            </th>
            <th className="p-4 text-center font-bold text-white bg-primary border-b border-primary rounded-tl-lg">
              MatchPartner
            </th>
            <th className="p-4 text-center font-semibold text-text bg-surface border-b border-border">
              Other Matrimony Sites
            </th>
            <th className="p-4 text-center font-semibold text-text bg-surface border-b border-border">
              Traditional Matchmaking
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className="transition-colors hover:bg-surface/50"
            >
              <td className="p-4 font-medium text-text border-b border-border">
                {row.feature}
              </td>
              <td className="p-4 text-center border-b border-border bg-primary/5">
                {renderCell(row.matchpartner)}
              </td>
              <td className="p-4 text-center border-b border-border">
                {renderCell(row.others)}
              </td>
              <td className="p-4 text-center border-b border-border">
                {renderCell(row.traditional)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-6 text-center">
        <button className="w-full rounded-xl bg-primary px-8 py-4 text-lg font-bold text-white shadow-lg transition-all hover:shadow-xl hover:brightness-110">
          Create Your Profile Free
        </button>
        <p className="mt-2 text-sm text-text-muted">
          No payment required &middot; Verified matches only
        </p>
      </div>
    </div>
  );
}
