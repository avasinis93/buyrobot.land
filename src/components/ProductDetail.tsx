"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { RobotIcon } from "@/components/icons/RobotIcons";
import { ROBOT_TYPES, CATEGORIES, PRICE_TIERS } from "@/lib/constants";
import type { RobotType, Category, PriceTier } from "@/lib/types";

interface ProductDetailProps {
  product: any;
  similarProducts: any[];
  appearances: any[];
}

export default function ProductDetail({ product, similarProducts, appearances }: ProductDetailProps) {
  const router = useRouter();
  const mfr = product.manufacturer;

  const typeMeta = ROBOT_TYPES[product.type as RobotType];
  const categoryLabel = CATEGORIES[product.category as Category] || product.category;
  const priceTierLabel = product.price_tier ? PRICE_TIERS[product.price_tier as PriceTier] : null;

  // Format price
  const formattedPrice = product.price_usd
    ? `$${product.price_usd.toLocaleString()}`
    : priceTierLabel || "Contact for pricing";

  // Format specs
  const rangeOrReach = product.range_km
    ? `${product.range_km} km`
    : product.reach_mm
    ? `${product.reach_mm} mm`
    : "—";

  const endurance = product.endurance_minutes
    ? `${product.endurance_minutes} min`
    : "—";

  const payload = product.payload_capacity_kg
    ? `${product.payload_capacity_kg} kg`
    : "—";

  const launched = product.year_launched ? String(product.year_launched) : "—";

  // JSON-LD structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    brand: {
      "@type": "Organization",
      name: mfr?.name,
    },
    ...(product.hero_image_url && { image: product.hero_image_url }),
    ...(product.price_usd && {
      offers: {
        "@type": "Offer",
        price: product.price_usd,
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
      },
    }),
    ...(product.weight_kg && {
      weight: {
        "@type": "QuantitativeValue",
        value: product.weight_kg,
        unitCode: "KGM",
      },
    }),
  };

  return (
    <div className="pt-8 pb-4">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Back button */}
      <button
        onClick={() => router.back()}
        className="text-[13px] text-[#888] hover:text-[#1a1a1a] transition-colors mb-6 flex items-center gap-1"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        &larr; Back to results
      </button>

      {/* Two-column grid */}
      <div className="grid grid-cols-1 md:grid-cols-[340px_1fr] gap-10">
        {/* Left column */}
        <div>
          {/* Image placeholder */}
          <div className="w-full h-[320px] rounded-lg bg-[#f5f5f3] flex items-center justify-center">
            <RobotIcon type={product.type} size={180} />
          </div>
          <p
            className="text-[11px] text-[#bbb] mt-2"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Product image from manufacturer
          </p>

          {/* Seen at */}
          {appearances.length > 0 && (
            <div className="mt-6">
              <p
                className="text-[11px] text-[#999] uppercase tracking-wide mb-2"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                Seen at
              </p>
              <div className="flex flex-wrap gap-2">
                {appearances.map((a) => (
                  <span
                    key={a.id}
                    className="text-[11px] text-[#777] border border-gray-200 rounded-[4px] px-2 py-[3px]"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {a.event_name} {a.event_year}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right column */}
        <div>
          {/* Breadcrumb */}
          <p
            className="text-[12px] text-[#999] uppercase tracking-wide mb-1"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            {typeMeta?.label || product.type} &middot; {categoryLabel}
          </p>

          {/* Product name */}
          <h1
            className="text-[34px] font-medium text-[#1a1a1a] leading-tight mb-1"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {product.name}
          </h1>

          {/* Manufacturer and location */}
          <p className="text-[14px] text-[#888] mb-4">
            {mfr?.name}
            {(mfr?.hq_city || mfr?.hq_country) && (
              <> &mdash; {[mfr.hq_city, mfr.hq_country].filter(Boolean).join(", ")}</>
            )}
          </p>

          {/* Certification badges */}
          <div className="flex flex-wrap gap-2 mb-3">
            <span
              className={`text-[11px] px-2 py-[2px] rounded-[4px] border ${
                product.ndaa_compliant
                  ? "text-green-700 border-green-300 bg-green-50"
                  : "text-orange-600 border-orange-200 bg-orange-50"
              }`}
              style={{ fontFamily: "var(--font-mono)" }}
            >
              {product.ndaa_compliant ? "NDAA compliant" : "Non-NDAA"}
            </span>
            {product.ce_marked && (
              <span
                className="text-[11px] text-green-700 border border-green-300 bg-green-50 px-2 py-[2px] rounded-[4px]"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                CE marked
              </span>
            )}
            {product.fcc_approved && (
              <span
                className="text-[11px] text-green-700 border border-green-300 bg-green-50 px-2 py-[2px] rounded-[4px]"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                FCC approved
              </span>
            )}
            {product.blue_suas && (
              <span
                className="text-[11px] text-blue-700 border border-blue-300 bg-blue-50 px-2 py-[2px] rounded-[4px]"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                Blue UAS
              </span>
            )}
            {product.ul_listed && (
              <span
                className="text-[11px] text-green-700 border border-green-300 bg-green-50 px-2 py-[2px] rounded-[4px]"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                UL listed
              </span>
            )}
          </div>

          {/* Regulatory approvals */}
          {product.regulatory_approvals && product.regulatory_approvals.length > 0 && (
            <div className="mb-5 border border-gray-100 rounded-md p-3">
              <p
                className="text-[10px] text-[#999] uppercase tracking-[1.5px] mb-2"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                Regulatory approvals
              </p>
              <div className="flex flex-col gap-1.5">
                {product.regulatory_approvals.map((ra: any, i: number) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="text-green-600 text-[12px]">✓</span>
                    <span className="text-[12px] text-[#555]">
                      <span className="font-medium">{ra.regulator}</span>
                      {" "}{ra.approval_type}
                      {ra.id && (
                        <span className="text-[#999]" style={{ fontFamily: "var(--font-mono)" }}>
                          {" "}({ra.id})
                        </span>
                      )}
                      {ra.notified_body && (
                        <span className="text-[#999]"> — {ra.notified_body}</span>
                      )}
                    </span>
                    {ra.url && (
                      <a
                        href={ra.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11px] text-[#aaa] hover:text-[#555] transition-colors"
                      >
                        ↗
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Description */}
          <p className="text-[14px] text-[#555] leading-relaxed mb-6">
            {product.description}
          </p>

          {/* Specs grid */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <SpecCell label="Payload" value={payload} />
            <SpecCell label={product.reach_mm ? "Reach" : "Range"} value={rangeOrReach} />
            <SpecCell label="Endurance" value={endurance} />
            <SpecCell label="Launched" value={launched} />
          </div>

          {/* Price */}
          <p
            className="text-[28px] font-medium text-[#1a1a1a] leading-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {formattedPrice}
          </p>
          {product.pricing_models && product.pricing_models.length > 0 && (
            <p
              className="text-[13px] text-[#999] mt-1 mb-6"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              {product.pricing_models.join(" / ")}
            </p>
          )}
          {(!product.pricing_models || product.pricing_models.length === 0) && (
            <div className="mb-6" />
          )}

          {/* CTA buttons */}
          <button className="w-full bg-[#1a1a1a] text-white text-[14px] font-medium py-3 rounded-[6px] hover:bg-[#333] transition-colors mb-3">
            Request a quote from {mfr?.name || "manufacturer"}
          </button>
          <button className="w-full bg-transparent text-[#1a1a1a] text-[14px] font-medium py-3 rounded-[6px] border border-gray-300 hover:border-gray-400 transition-colors">
            Add to comparison
          </button>
        </div>
      </div>

      {/* Similar products section */}
      {similarProducts.length > 0 && (
        <div className="mt-14">
          <h2
            className="text-[20px] font-medium text-[#1a1a1a] mb-5"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Similar {typeMeta?.label?.toLowerCase() || "robot"}s
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {similarProducts.map((s) => (
              <Link
                key={s.id}
                href={`/manufacturer/${s.manufacturer?.slug || "unknown"}/${s.slug}`}
                className="border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors"
              >
                <div className="h-[100px] bg-[#f5f5f3] rounded flex items-center justify-center mb-3">
                  <RobotIcon type={s.type} size={60} />
                </div>
                <p
                  className="text-[15px] font-medium text-[#1a1a1a]"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {s.name}
                </p>
                <p className="text-[12px] text-[#888] mb-2">{s.manufacturer?.name}</p>
                <div className="flex justify-between text-[11px] text-[#999]" style={{ fontFamily: "var(--font-mono)" }}>
                  <span>{s.payload_capacity_kg ? `${s.payload_capacity_kg} kg` : "—"}</span>
                  <span>
                    {s.price_usd
                      ? `$${s.price_usd.toLocaleString()}`
                      : s.price_tier
                      ? PRICE_TIERS[s.price_tier as PriceTier] || s.price_tier
                      : "Quote"}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function SpecCell({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-[#f9f9f7] rounded-[6px] px-4 py-3">
      <p
        className="text-[11px] text-[#999] uppercase tracking-wide mb-[2px]"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        {label}
      </p>
      <p
        className="text-[15px] text-[#1a1a1a] font-bold"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        {value}
      </p>
    </div>
  );
}
