"use client";

import Link from "next/link";
import Image from "next/image";

/* ------------------------------------------------------------------ */
/*  Image map — slug to generated illustration                         */
/* ------------------------------------------------------------------ */

const imageMap: Record<string, string> = {
  "wildfire-response": "/images/applications/wildfire-response.jpg",
  "factory-assembly": "/images/applications/factory-assembly.jpg",
  "precision-agriculture": "/images/applications/precision-agriculture.jpg",
  "food-beverage": "/images/applications/food-beverage.jpg",
  "warehouse-logistics": "/images/applications/warehouse-logistics.jpg",
  "building-maintenance": "/images/applications/building-maintenance.jpg",
  "surgical-assistance": "/images/applications/surgical-assistance.jpg",
  "last-mile-delivery": "/images/applications/last-mile-delivery.jpg",
};

/* ------------------------------------------------------------------ */
/*  Robot type label map                                               */
/* ------------------------------------------------------------------ */

const robotTypeLabels: Record<string, string> = {
  AERI: "Drones",
  ARM: "Robot Arms",
  MOBI: "AMRs",
  BIPD: "Humanoids",
  QUAD: "Quadrupeds",
  WEAR: "Exoskeletons",
  AQUA: "Underwater",
  VEHI: "Vehicles",
};

/* ------------------------------------------------------------------ */
/*  Wide tile slugs                                                    */
/* ------------------------------------------------------------------ */

const wideSlugs = new Set([
  "wildfire-response",
  "factory-assembly",
  "surgical-assistance",
  "last-mile-delivery",
]);

/* ------------------------------------------------------------------ */
/*  More applications pills                                            */
/* ------------------------------------------------------------------ */

const moreApplications = [
  "Construction inspection",
  "Mine surveying",
  "Security patrol",
  "Hospitality",
  "Elderly care",
  "Pool cleaning",
  "Solar panel inspection",
  "Pipeline monitoring",
  "Bomb disposal",
  "Ocean survey",
  "Search & rescue",
  "Film production",
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

interface ApplicationsMosaicProps {
  applications: any[];
}

export default function ApplicationsMosaic({ applications }: ApplicationsMosaicProps) {
  return (
    <div className="py-10">
      {/* Header */}
      <h1
        className="text-[34px] font-medium tracking-tight mb-2"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        What do you need a robot for?
      </h1>
      <p className="text-[15px] text-[#888] mb-8">
        Explore real-world applications — from agriculture to surgery. Find every robot built for the job.
      </p>

      {/* Mosaic grid */}
      <div className="grid grid-cols-2 gap-4">
        {applications.map((app) => {
          const isWide = wideSlugs.has(app.slug);
          const imageSrc = imageMap[app.slug];

          return (
            <Link
              key={app.id || app.slug}
              href={`/applications/${app.slug}`}
              className={`group border border-gray-200 rounded-lg overflow-hidden transition-all duration-200 hover:border-gray-400 hover:-translate-y-[2px] ${
                isWide ? "col-span-2" : "col-span-1"
              }`}
            >
              {/* Scene illustration */}
              <div className={`w-full ${isWide ? "h-[180px]" : "h-[160px]"} relative opacity-80 group-hover:opacity-100 transition-opacity duration-200`}>
                {imageSrc ? (
                  <Image
                    src={imageSrc}
                    alt={app.title}
                    fill
                    className="object-cover"
                    sizes={isWide ? "860px" : "420px"}
                  />
                ) : (
                  <div className="w-full h-full bg-[#fafaf8] flex items-center justify-center">
                    <span className="text-[13px] text-[#ccc]">{app.title}</span>
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="px-4 py-3 border-t border-gray-100">
                <div className="flex items-baseline justify-between mb-1">
                  <h3 className="text-[15px] font-medium text-[#1a1a1a]">
                    {app.title}
                  </h3>
                  {app.product_count != null && (
                    <span
                      className="text-[12px] text-[#bbb]"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {app.product_count} robots
                    </span>
                  )}
                </div>
                {app.description && (
                  <p className="text-[13px] text-[#888] line-clamp-2 mb-2">
                    {app.description}
                  </p>
                )}
                {app.robot_types && app.robot_types.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {app.robot_types.map((type: string) => (
                      <span
                        key={type}
                        className="text-[11px] text-[#999] border border-gray-200 rounded-full px-2 py-0.5"
                      >
                        {robotTypeLabels[type] || type}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </Link>
          );
        })}
      </div>

      {/* More applications */}
      <div className="mt-12">
        <h2 className="text-[16px] font-medium text-[#1a1a1a] mb-4">
          More applications
        </h2>
        <div className="flex flex-wrap gap-2">
          {moreApplications.map((label) => (
            <span
              key={label}
              className="text-[13px] text-[#888] border border-gray-200 rounded-full px-3 py-1.5 cursor-pointer transition-colors duration-150 hover:border-gray-400 hover:text-[#555]"
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
