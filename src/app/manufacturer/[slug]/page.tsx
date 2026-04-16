import { createServerClient } from "@/lib/supabase-server";
import { ROBOT_TYPES } from "@/lib/constants";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import SignalFeed from "@/components/SignalFeed";
import { RobotIcon } from "@/components/icons/RobotIcons";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";

export const revalidate = 3600;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const supabase = createServerClient();
  const { data: mfr } = await supabase
    .from("manufacturers")
    .select("*")
    .eq("slug", slug)
    .single();

  if (!mfr) return {};
  return {
    title: `${mfr.name} — Robots & Products`,
    description: `Browse all robots and drones by ${mfr.name}. Compare specs, pricing, and request quotes.`,
  };
}

export default async function ManufacturerPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const supabase = createServerClient();

  const { data: mfr } = await supabase
    .from("manufacturers")
    .select("*")
    .eq("slug", slug)
    .single();

  if (!mfr) notFound();

  const { data: products } = await supabase
    .from("products")
    .select("*")
    .eq("manufacturer_id", mfr.id)
    .order("year_launched", { ascending: false });

  const { data: appearances } = await supabase
    .from("tradeshow_appearances")
    .select("*")
    .eq("manufacturer_id", mfr.id)
    .order("event_year", { ascending: false });

  const { data: signals } = await supabase
    .from("signals")
    .select("*")
    .eq("manufacturer_id", mfr.id)
    .order("event_date", { ascending: false })
    .limit(10);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Navbar />

      <div className="py-8">
        <Link
          href="/robots"
          className="text-[13px] text-[#888] hover:text-[#555] transition-colors"
        >
          ← Back to browse
        </Link>

        {/* Header */}
        <div className="mt-6 mb-8">
          <div className="flex items-start gap-4">
            {mfr.logo_url ? (
              <img
                src={mfr.logo_url}
                alt={mfr.name}
                className="w-16 h-16 rounded-lg object-contain border border-gray-100"
              />
            ) : (
              <div className="w-16 h-16 bg-[#f5f5f3] rounded-lg flex items-center justify-center text-[20px] font-semibold text-[#bbb]">
                {mfr.name.charAt(0)}
              </div>
            )}
            <div>
              <h1
                className="text-[32px] font-medium tracking-tight"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {mfr.name}
              </h1>
              <p className="text-[15px] text-[#777]">
                {mfr.hq_city && `${mfr.hq_city}, `}
                {mfr.hq_country}
                {mfr.year_founded && ` · Founded ${mfr.year_founded}`}
                {mfr.employee_range && ` · ${mfr.employee_range} employees`}
              </p>
            </div>
          </div>

          {mfr.description && (
            <p className="text-[15px] text-[#555] leading-relaxed mt-4 max-w-[600px]">
              {mfr.description}
            </p>
          )}

          <div className="flex gap-3 mt-4">
            {mfr.website && (
              <a
                href={mfr.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] text-[#888] border border-gray-200 rounded px-3 py-1.5 hover:border-gray-400 transition-colors"
              >
                Website ↗
              </a>
            )}
            {mfr.linkedin_url && (
              <a
                href={mfr.linkedin_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] text-[#888] border border-gray-200 rounded px-3 py-1.5 hover:border-gray-400 transition-colors"
              >
                LinkedIn ↗
              </a>
            )}
            {mfr.claimed && (
              <span className="text-[12px] px-2.5 py-1 rounded bg-blue-50 text-blue-700">
                Claimed profile
              </span>
            )}
          </div>
        </div>

        {/* Products */}
        <p className="text-[11px] font-medium text-[#bbb] uppercase tracking-[2px] mb-3">
          Products · {products?.length || 0}
        </p>
        {products?.map((p: any) => {
          const typeInfo = ROBOT_TYPES[p.type as keyof typeof ROBOT_TYPES];
          return (
            <Link
              key={p.id}
              href={`/manufacturer/${slug}/${p.slug}`}
              className="grid grid-cols-[48px_minmax(0,1fr)_110px] gap-3.5 items-center py-3 border-b border-gray-100 hover:bg-[#fafaf8] transition-colors"
            >
              <div className="w-12 h-12 bg-[#f5f5f3] rounded-md flex items-center justify-center text-[#aaa]">
                <RobotIcon type={p.type} size={28} />
              </div>
              <div className="min-w-0">
                <div className="flex items-baseline gap-2">
                  <p className="text-[15px] font-medium truncate">{p.name}</p>
                  {p.ndaa_compliant && (
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-green-50 text-green-800 shrink-0">
                      NDAA
                    </span>
                  )}
                </div>
                <p className="text-[13px] text-[#888] truncate">
                  {typeInfo?.label || p.type} · {p.category}
                  {p.payload_capacity_kg && ` · ${p.payload_capacity_kg} kg payload`}
                </p>
              </div>
              <div className="text-right">
                <p
                  className="text-[13px] font-medium"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {p.price_tier
                    ? p.price_tier.replace(/_/g, " ").replace(/(\d+)k/g, "$$$1K")
                    : "Contact"}
                </p>
                <p className="text-[11px] text-[#aaa] mt-0.5">
                  {p.pricing_models?.join(" / ") || ""}
                </p>
              </div>
            </Link>
          );
        })}

        {/* Signals / Recent activity */}
        <SignalFeed signals={signals || []} title="Recent activity" />

        {/* Tradeshow appearances */}
        {appearances && appearances.length > 0 && (
          <div className="mt-10">
            <p className="text-[11px] font-medium text-[#bbb] uppercase tracking-[2px] mb-3">
              Trade show appearances
            </p>
            <div className="flex flex-wrap gap-2">
              {appearances.map((a: any) => (
                <span
                  key={a.id}
                  className="text-[12px] px-3 py-1.5 border border-gray-200 rounded text-[#777]"
                >
                  {a.event_name} {a.event_year}
                  {a.booth_number && ` · Booth ${a.booth_number}`}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
