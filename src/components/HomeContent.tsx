"use client";

import { useState } from "react";
import Link from "next/link";
import { RobotIcon } from "@/components/icons/RobotIcons";

const TYPES_DATA = [
  { name: "Drone", code: "AERI", count: "1,680", sub: "Aerial · VTOL · Fixed-wing", slug: "drones" },
  { name: "Robotic arm", code: "ARM", count: "1,240", sub: "Cobot · Industrial · SCARA", slug: "robotic-arms" },
  { name: "Mobile robot", code: "MOBI", count: "890", sub: "AMR · AGV · Delivery bot", slug: "mobile-robots" },
  { name: "Quadruped", code: "QUAD", count: "124", sub: "Inspection · Research · Defense", slug: "quadrupeds" },
  { name: "Humanoid", code: "BIPD", count: "86", sub: "Warehouse · Service · Research", slug: "humanoids" },
  { name: "Exoskeleton", code: "WEAR", count: "62", sub: "Industrial · Medical · Military", slug: "exoskeletons" },
];

const SAMPLE_ROBOTS = [
  { id: 1, name: "FlyCart 30", mfr: "DJI", type: "Drone", cat: "Delivery", payload: "30 kg", endurance: "18 min", price: "$10K–50K", model: "Purchase", ndaa: false, slug: "dji/flycart-30" },
  { id: 2, name: "UR20", mfr: "Universal Robots", type: "Robotic arm", cat: "Assembly", payload: "20 kg", endurance: "24/7", price: "$50K–250K", model: "Purchase / Lease", ndaa: false, slug: "universal-robots/ur20" },
  { id: 3, name: "Spot", mfr: "Boston Dynamics", type: "Quadruped", cat: "Inspection", payload: "14 kg", endurance: "90 min", price: "$50K–250K", model: "Purchase / RaaS", ndaa: true, slug: "boston-dynamics/spot" },
  { id: 4, name: "Origin", mfr: "Locus Robotics", type: "Mobile robot", cat: "Logistics", payload: "36 kg", endurance: "8 hr", price: "RaaS", model: "$5–8/hr", ndaa: true, slug: "locus-robotics/origin" },
  { id: 5, name: "X10", mfr: "Skydio", type: "Drone", cat: "Inspection", payload: "Custom", endurance: "35 min", price: "$10K–50K", model: "Purchase", ndaa: true, slug: "skydio/x10" },
];

const APPLICATIONS = [
  "Agriculture", "Logistics", "Inspection", "Construction", "Delivery",
  "Healthcare", "Defense", "Mapping", "Assembly", "Research", "Cleaning", "Security",
];

export default function HomeContent() {
  const [search, setSearch] = useState("");
  const [hoveredType, setHoveredType] = useState<number | null>(null);

  return (
    <div className="py-12">
      {/* Hero */}
      <h1
        className="text-[42px] font-medium leading-[1.12] tracking-[-1.8px] max-w-[600px] mb-3.5"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        Find the right robot for your operation.
      </h1>
      <p className="text-[17px] text-[#777] max-w-[500px] leading-relaxed font-light mb-8">
        4,200 robots and drones from 1,800 manufacturers. Filter by type, specs,
        price, and certifications. Compare side by side.
      </p>

      {/* Search bar */}
      <div className="flex gap-2 mb-14">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by name, manufacturer, or application..."
          className="flex-1 text-[15px] py-3 px-[18px] border border-gray-300 rounded-md bg-[#fafaf8] outline-none focus:border-gray-400 transition-colors"
        />
        <Link
          href={search ? `/robots?q=${encodeURIComponent(search)}` : "/robots"}
          className="px-7 py-3 bg-[#1a1a1a] text-white rounded-md text-[14px] font-medium hover:bg-[#333] transition-colors"
        >
          Search
        </Link>
      </div>

      {/* Browse by type */}
      <p className="text-[11px] font-medium text-[#bbb] uppercase tracking-[2px] mb-4">
        Browse by type
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-14">
        {TYPES_DATA.map((t, i) => (
          <Link
            key={t.code}
            href={`/robots/${t.slug}`}
            className={`border rounded-lg p-5 pt-5 pb-4 flex flex-col items-center text-center transition-all duration-200 ${
              hoveredType === i
                ? "border-[#999] -translate-y-0.5"
                : "border-gray-200 hover:border-[#999]"
            }`}
            onMouseEnter={() => setHoveredType(i)}
            onMouseLeave={() => setHoveredType(null)}
          >
            <div
              className={`mb-2.5 transition-opacity duration-200 ${
                hoveredType === i ? "opacity-100" : "opacity-65"
              }`}
            >
              <RobotIcon type={t.name} size={90} />
            </div>
            <p className="text-[15px] font-medium mb-0.5">{t.name}s</p>
            <p className="text-[12px] text-[#aaa] mb-1">{t.sub}</p>
            <span
              className="text-[11px] text-[#ccc]"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              {t.count} listed
            </span>
          </Link>
        ))}
      </div>

      {/* Browse by application */}
      <p className="text-[11px] font-medium text-[#bbb] uppercase tracking-[2px] mb-3.5">
        Or browse by application
      </p>
      <div className="flex flex-wrap gap-2 mb-14">
        {APPLICATIONS.map((c) => (
          <Link
            key={c}
            href={`/applications/${c.toLowerCase()}`}
            className="text-[13px] py-[7px] px-4 border border-gray-200 rounded-full text-[#555] hover:border-[#999] hover:text-[#1a1a1a] transition-all"
          >
            {c}
          </Link>
        ))}
      </div>

      {/* Stats bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-gray-200 rounded-md overflow-hidden mb-12">
        {[
          ["4,200", "Robots & drones listed"],
          ["1,800", "Manufacturers worldwide"],
          ["47", "Countries covered"],
          ["Daily", "Data refreshed"],
        ].map(([num, label]) => (
          <div key={label} className="bg-[#fafaf8] py-4 px-5 text-center">
            <p
              className="text-[22px] font-medium mb-0.5"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {num}
            </p>
            <p className="text-[12px] text-[#999]">{label}</p>
          </div>
        ))}
      </div>

      {/* Recently added */}
      <p className="text-[11px] font-medium text-[#bbb] uppercase tracking-[2px] mb-3.5">
        Recently added
      </p>
      {SAMPLE_ROBOTS.map((r) => (
        <Link
          key={r.id}
          href={`/manufacturer/${r.slug}`}
          className="grid grid-cols-[48px_minmax(0,1fr)_100px] gap-3.5 items-center py-3 border-b border-gray-100 hover:bg-[#fafaf8] transition-colors"
        >
          <div className="w-12 h-12 bg-[#f5f5f3] rounded-md flex items-center justify-center text-[#aaa]">
            <RobotIcon type={r.type} size={28} />
          </div>
          <div className="min-w-0">
            <div className="flex items-baseline gap-2">
              <p className="text-[15px] font-medium truncate">{r.name}</p>
              {r.ndaa && (
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-green-50 text-green-800 shrink-0">
                  NDAA
                </span>
              )}
            </div>
            <p className="text-[13px] text-[#888] truncate">
              {r.mfr} — {r.type} — {r.payload} payload — {r.endurance}
            </p>
          </div>
          <div className="text-right">
            <p
              className="text-[13px] font-medium"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              {r.price}
            </p>
            <p className="text-[11px] text-[#aaa] mt-0.5">{r.model}</p>
          </div>
        </Link>
      ))}
      <Link
        href="/robots"
        className="inline-block mt-4 text-[13px] text-[#888] border border-gray-300 rounded-md px-5 py-2 hover:border-gray-400 hover:text-[#555] transition-colors"
      >
        View all 4,200 listings →
      </Link>
    </div>
  );
}
