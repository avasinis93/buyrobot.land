"use client";

const SIGNAL_ICONS: Record<string, string> = {
  deployment: "📦",
  funding: "💰",
  acquisition: "🤝",
  patent: "📄",
  product_launch: "🚀",
  executive_move: "👤",
  regulatory: "✅",
  contract_win: "📋",
  partnership: "🔗",
  milestone: "🏆",
};

const SIGNAL_LABELS: Record<string, string> = {
  deployment: "Deployment",
  funding: "Funding",
  acquisition: "M&A",
  patent: "Patent",
  product_launch: "Launch",
  executive_move: "People",
  regulatory: "Regulatory",
  contract_win: "Contract",
  partnership: "Partnership",
  milestone: "Milestone",
};

function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

function formatAmount(amount: number | null): string {
  if (!amount) return "";
  if (amount >= 1_000_000_000) return `$${(amount / 1_000_000_000).toFixed(1)}B`;
  if (amount >= 1_000_000) return `$${(amount / 1_000_000).toFixed(0)}M`;
  if (amount >= 1_000) return `$${(amount / 1_000).toFixed(0)}K`;
  return `$${amount}`;
}

interface SignalFeedProps {
  signals: any[];
  title?: string;
  showManufacturer?: boolean;
  compact?: boolean;
}

export default function SignalFeed({
  signals,
  title = "Recent signals",
  showManufacturer = false,
  compact = false,
}: SignalFeedProps) {
  if (!signals || signals.length === 0) return null;

  return (
    <div className={compact ? "mt-6" : "mt-10"}>
      <p
        className="text-[11px] font-medium text-[#bbb] uppercase tracking-[2px] mb-3"
      >
        {title}
      </p>
      <div className="border border-gray-100 rounded-lg overflow-hidden">
        {signals.map((s: any, i: number) => (
          <a
            key={s.id}
            href={s.source_url}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-start gap-3 px-4 py-3 hover:bg-[#fafaf8] transition-colors ${
              i < signals.length - 1 ? "border-b border-gray-50" : ""
            }`}
          >
            {/* Icon + type */}
            <div className="flex flex-col items-center shrink-0 pt-0.5">
              <span className="text-[14px] leading-none">
                {SIGNAL_ICONS[s.signal_type] || "📡"}
              </span>
            </div>

            {/* Content */}
            <div className="min-w-0 flex-1">
              <div className="flex items-baseline gap-2 mb-0.5">
                <span
                  className="text-[10px] uppercase tracking-wide text-[#999] shrink-0"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {SIGNAL_LABELS[s.signal_type] || s.signal_type}
                </span>
                <span
                  className="text-[11px] text-[#bbb]"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {formatDate(s.event_date)}
                </span>
                {s.amount_usd && (
                  <span
                    className="text-[11px] font-medium text-[#1a1a1a]"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {formatAmount(s.amount_usd)}
                  </span>
                )}
                {s.unit_count && (
                  <span
                    className="text-[11px] text-[#777]"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {s.unit_count.toLocaleString()} units
                  </span>
                )}
              </div>

              <p className="text-[13px] text-[#1a1a1a] font-medium leading-snug">
                {showManufacturer && s.manufacturer?.name && (
                  <span className="text-[#888] font-normal">{s.manufacturer.name} — </span>
                )}
                {s.title}
              </p>

              {!compact && s.summary && (
                <p className="text-[12px] text-[#888] mt-0.5 line-clamp-2 leading-relaxed">
                  {s.summary}
                </p>
              )}

              {s.counterparty && (
                <span className="inline-block text-[11px] text-[#999] mt-1">
                  {s.counterparty_type === "customer" && "Customer: "}
                  {s.counterparty_type === "investor" && "Investor: "}
                  {s.counterparty_type === "acquirer" && "Acquirer: "}
                  {s.counterparty_type === "partner" && "Partner: "}
                  {s.counterparty}
                </span>
              )}
            </div>

            {/* Source */}
            <span className="text-[10px] text-[#ccc] shrink-0 pt-1" style={{ fontFamily: "var(--font-mono)" }}>
              {s.source_name || "↗"}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
