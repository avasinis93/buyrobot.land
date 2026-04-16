"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { RobotIcon } from "@/components/icons/RobotIcons";
import { ROBOT_TYPES, CATEGORIES, PRICE_TIERS } from "@/lib/constants";
import type { RobotType, Category } from "@/lib/types";

// ── Props ───────────────────────────────────────────────────────────

interface RobotsBrowseProps {
  initialProducts: any[];
  defaultType?: string;
}

// ── Helpers ─────────────────────────────────────────────────────────

function formatPayload(kg: number | null): string {
  if (kg == null) return "";
  return `${kg} kg`;
}

function formatPrice(product: any): { tier: string; model: string } {
  const tier = product.price_tier
    ? PRICE_TIERS[product.price_tier as keyof typeof PRICE_TIERS] ?? product.price_tier
    : product.price_usd
      ? `$${product.price_usd.toLocaleString()}`
      : "Quote";

  const model =
    product.pricing_models && product.pricing_models.length > 0
      ? product.pricing_models.join(" / ")
      : "";

  return { tier, model };
}

function typeLabel(code: string): string {
  return ROBOT_TYPES[code as RobotType]?.label ?? code;
}

function categoryLabel(code: string): string {
  return CATEGORIES[code as Category] ?? code;
}

// ── Component ───────────────────────────────────────────────────────

export default function RobotsBrowse({ initialProducts, defaultType }: RobotsBrowseProps) {
  const [query, setQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState(defaultType ?? "");
  const [catFilter, setCatFilter] = useState("");
  const [ndaaOnly, setNdaaOnly] = useState(false);
  const [regFilter, setRegFilter] = useState("");

  // Derive unique categories present in data for the dropdown
  const availableCategories = useMemo(() => {
    const cats = new Set<string>();
    for (const p of initialProducts) {
      if (p.category) cats.add(p.category);
    }
    return Array.from(cats).sort((a, b) =>
      (CATEGORIES[a as Category] ?? a).localeCompare(CATEGORIES[b as Category] ?? b)
    );
  }, [initialProducts]);

  // Filter products client-side
  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return initialProducts.filter((p) => {
      if (typeFilter && p.type !== typeFilter) return false;
      if (catFilter && p.category !== catFilter) return false;
      if (ndaaOnly && !p.ndaa_compliant) return false;
      if (regFilter) {
        const approvals = p.regulatory_approvals || [];
        const hasApproval = approvals.some((ra: any) => {
          if (regFilter === "blue_uas") return ra.approval_type === "Blue UAS Cleared";
          if (regFilter === "faa_doc") return ra.regulator === "FAA" && ra.approval_type === "DoC";
          if (regFilter === "easa") return ra.regulator === "EASA";
          if (regFilter === "fda_510k") return ra.regulator === "FDA" && ra.approval_type === "510(k)";
          return false;
        });
        if (!hasApproval) return false;
      }
      if (q) {
        const mfrName = p.manufacturer?.name ?? "";
        const haystack = `${p.name} ${p.model ?? ""} ${mfrName} ${typeLabel(p.type)} ${categoryLabel(p.category)} ${p.description ?? ""}`.toLowerCase();
        if (!haystack.includes(q)) return false;
      }
      return true;
    });
  }, [initialProducts, query, typeFilter, catFilter, ndaaOnly, regFilter]);

  const hasFilters = typeFilter || catFilter || ndaaOnly || regFilter || query;

  function clearAll() {
    setQuery("");
    setTypeFilter(defaultType ?? "");
    setCatFilter("");
    setNdaaOnly(false);
    setRegFilter("");
  }

  // Active filter labels for the result count line
  const activeLabels: string[] = [];
  if (typeFilter) activeLabels.push(typeLabel(typeFilter));
  if (catFilter) activeLabels.push(categoryLabel(catFilter));
  if (ndaaOnly) activeLabels.push("NDAA");
  if (regFilter) {
    const regLabels: Record<string, string> = {
      blue_uas: "Blue UAS", faa_doc: "FAA DoC", easa: "EASA certified", fda_510k: "FDA 510(k)",
    };
    activeLabels.push(regLabels[regFilter] || regFilter);
  }

  return (
    <section className="mt-8 mb-10">
      {/* ── Search ──────────────────────────────────── */}
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search robots, manufacturers, applications..."
          className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-[14px] placeholder:text-[#bbb] focus:outline-none focus:border-[#999] transition-colors"
          style={{ fontFamily: "var(--font-body)" }}
        />
        {query && (
          <button
            onClick={() => setQuery("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-[#bbb] hover:text-[#666] text-[18px] leading-none"
          >
            &times;
          </button>
        )}
      </div>

      {/* ── Filter bar ──────────────────────────────── */}
      <div className="flex flex-wrap items-center gap-3 mt-4">
        {/* Type dropdown */}
        <select
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
          className="border border-gray-200 rounded-md px-3 py-1.5 text-[13px] text-[#555] bg-white focus:outline-none focus:border-[#999] transition-colors cursor-pointer"
          style={{ fontFamily: "var(--font-body)" }}
        >
          <option value="">All types</option>
          {(Object.entries(ROBOT_TYPES) as [RobotType, { label: string }][]).map(([code, info]) => (
            <option key={code} value={code}>
              {info.label}
            </option>
          ))}
        </select>

        {/* Category dropdown */}
        <select
          value={catFilter}
          onChange={(e) => setCatFilter(e.target.value)}
          className="border border-gray-200 rounded-md px-3 py-1.5 text-[13px] text-[#555] bg-white focus:outline-none focus:border-[#999] transition-colors cursor-pointer"
          style={{ fontFamily: "var(--font-body)" }}
        >
          <option value="">All applications</option>
          {availableCategories.map((code) => (
            <option key={code} value={code}>
              {categoryLabel(code)}
            </option>
          ))}
        </select>

        {/* Regulatory filter */}
        <select
          value={regFilter}
          onChange={(e) => setRegFilter(e.target.value)}
          className="border border-gray-200 rounded-md px-3 py-1.5 text-[13px] text-[#555] bg-white focus:outline-none focus:border-[#999] transition-colors cursor-pointer"
          style={{ fontFamily: "var(--font-body)" }}
        >
          <option value="">All certifications</option>
          <option value="blue_uas">Blue UAS Cleared</option>
          <option value="faa_doc">FAA DoC (Part 107)</option>
          <option value="easa">EASA Certified (C0–C6)</option>
          <option value="fda_510k">FDA 510(k) Cleared</option>
        </select>

        {/* NDAA checkbox */}
        <label className="flex items-center gap-1.5 text-[13px] text-[#555] cursor-pointer select-none">
          <input
            type="checkbox"
            checked={ndaaOnly}
            onChange={(e) => setNdaaOnly(e.target.checked)}
            className="accent-[#1a1a1a] cursor-pointer"
          />
          NDAA only
        </label>

        {/* Clear all */}
        {hasFilters && (
          <button
            onClick={clearAll}
            className="text-[12px] text-[#999] hover:text-[#555] transition-colors ml-auto"
          >
            Clear all
          </button>
        )}
      </div>

      {/* ── Result count ────────────────────────────── */}
      <div className="mt-5 mb-3 text-[13px] text-[#888]" style={{ fontFamily: "var(--font-body)" }}>
        <span style={{ fontFamily: "var(--font-mono)" }}>{filtered.length}</span>{" "}
        {filtered.length === 1 ? "robot" : "robots"}
        {activeLabels.length > 0 && (
          <>
            {" "}matching{" "}
            {activeLabels.map((label, i) => (
              <span key={label}>
                {i > 0 && " + "}
                <span className="inline-block border border-gray-200 rounded px-1.5 py-0.5 text-[12px] text-[#555]">
                  {label}
                </span>
              </span>
            ))}
          </>
        )}
      </div>

      {/* ── Results list ────────────────────────────── */}
      <div className="border-t border-gray-100">
        {filtered.length === 0 ? (
          <div className="py-12 text-center">
            <p className="text-[14px] text-[#bbb] mb-3">No robots match your filters.</p>
            <button
              onClick={clearAll}
              className="text-[13px] text-[#888] hover:text-[#555] underline underline-offset-2 transition-colors"
            >
              Clear filters
            </button>
          </div>
        ) : (
          filtered.map((product) => {
            const mfr = product.manufacturer;
            const mfrSlug = mfr?.slug ?? "unknown";
            const productSlug = product.slug ?? product.id;
            const price = formatPrice(product);

            return (
              <Link
                key={product.id}
                href={`/manufacturer/${mfrSlug}/${productSlug}`}
                className="grid grid-cols-[48px_minmax(0,1fr)_110px] gap-3.5 items-center py-3 px-2 border-b border-gray-100 hover:bg-[#fafaf8] transition-colors"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded bg-[#f5f5f3] flex items-center justify-center flex-shrink-0">
                  <RobotIcon type={product.type} size={28} />
                </div>

                {/* Name + specs */}
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span
                      className="font-medium text-[14px] text-[#1a1a1a] truncate"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {product.name}
                    </span>
                    {product.ndaa_compliant && (
                      <span className="flex-shrink-0 text-[10px] font-medium text-green-700 bg-green-50 border border-green-200 rounded px-1.5 py-0.5 leading-none">
                        NDAA
                      </span>
                    )}
                  </div>
                  <p className="text-[12px] text-[#888] truncate mt-0.5" style={{ fontFamily: "var(--font-body)" }}>
                    {mfr?.name ?? "Unknown"} &mdash; {typeLabel(product.type)} &mdash; {categoryLabel(product.category)}
                    {product.payload_capacity_kg != null && <> &mdash; {formatPayload(product.payload_capacity_kg)}</>}
                  </p>
                </div>

                {/* Price */}
                <div className="text-right flex-shrink-0">
                  <p
                    className="text-[13px] text-[#1a1a1a]"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {price.tier}
                  </p>
                  {price.model && (
                    <p className="text-[11px] text-[#aaa] mt-0.5">{price.model}</p>
                  )}
                </div>
              </Link>
            );
          })
        )}
      </div>
    </section>
  );
}
