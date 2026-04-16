"use client";

import Link from "next/link";

/* ------------------------------------------------------------------ */
/*  SVG Scene Illustrations                                           */
/* ------------------------------------------------------------------ */

function FireScene() {
  return (
    <svg viewBox="0 0 200 140" className="w-full h-full" fill="none">
      <rect width="200" height="140" fill="#fafaf8" />
      {/* terrain */}
      <path d="M0 110 Q50 95 100 105 Q150 95 200 110 V140 H0Z" fill="#eee" />
      {/* trees */}
      <line x1="40" y1="110" x2="40" y2="75" stroke="#1a1a1a" strokeWidth="2" />
      <polygon points="25,80 40,50 55,80" fill="#ccc" />
      <line x1="80" y1="105" x2="80" y2="65" stroke="#1a1a1a" strokeWidth="2" />
      <polygon points="65,70 80,38 95,70" fill="#ccc" />
      {/* fire on trees */}
      <path d="M75 55 Q78 45 80 38 Q82 45 85 55" stroke="#d44" strokeWidth="2" fill="none" />
      <path d="M72 60 Q76 50 80 42 Q84 50 88 60" stroke="#e85" strokeWidth="1.5" fill="none" />
      {/* smoke dashes */}
      <line x1="80" y1="35" x2="82" y2="25" stroke="#999" strokeWidth="1" strokeDasharray="2 2" />
      <line x1="78" y1="30" x2="76" y2="20" stroke="#999" strokeWidth="1" strokeDasharray="2 2" />
      <line x1="84" y1="32" x2="87" y2="22" stroke="#999" strokeWidth="1" strokeDasharray="2 2" />
      {/* drone */}
      <rect x="140" y="30" width="24" height="8" rx="2" fill="#1a1a1a" />
      <line x1="138" y1="30" x2="132" y2="26" stroke="#1a1a1a" strokeWidth="1.5" />
      <line x1="164" y1="30" x2="170" y2="26" stroke="#1a1a1a" strokeWidth="1.5" />
      <ellipse cx="130" cy="25" rx="8" ry="2" fill="#ddd" />
      <ellipse cx="172" cy="25" rx="8" ry="2" fill="#ddd" />
      {/* water drop */}
      <path d="M152 42 Q150 50 152 54 Q154 50 152 42Z" fill="#68b" />
      <circle cx="152" cy="56" r="2" fill="#68b" opacity="0.5" />
    </svg>
  );
}

function FactoryScene() {
  return (
    <svg viewBox="0 0 200 140" className="w-full h-full" fill="none">
      <rect width="200" height="140" fill="#fafaf8" />
      {/* floor */}
      <rect x="0" y="110" width="200" height="30" fill="#eee" />
      {/* conveyor belt */}
      <rect x="10" y="100" width="100" height="10" rx="3" fill="#ddd" stroke="#ccc" strokeWidth="1" />
      <circle cx="15" cy="110" r="4" fill="#999" />
      <circle cx="105" cy="110" r="4" fill="#999" />
      {/* parts on belt */}
      <rect x="30" y="94" width="8" height="6" fill="#1a1a1a" rx="1" />
      <rect x="55" y="94" width="10" height="6" fill="#1a1a1a" rx="1" />
      <rect x="80" y="94" width="6" height="6" fill="#1a1a1a" rx="1" />
      {/* robot arm base */}
      <rect x="140" y="90" width="20" height="20" rx="2" fill="#1a1a1a" />
      {/* arm segments */}
      <line x1="150" y1="90" x2="150" y2="60" stroke="#1a1a1a" strokeWidth="4" strokeLinecap="round" />
      <circle cx="150" cy="60" r="3" fill="#999" />
      <line x1="150" y1="60" x2="120" y2="50" stroke="#1a1a1a" strokeWidth="3" strokeLinecap="round" />
      <circle cx="120" cy="50" r="2.5" fill="#999" />
      <line x1="120" y1="50" x2="105" y2="65" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" />
      {/* gripper */}
      <line x1="105" y1="65" x2="100" y2="72" stroke="#1a1a1a" strokeWidth="1.5" />
      <line x1="105" y1="65" x2="110" y2="72" stroke="#1a1a1a" strokeWidth="1.5" />
      {/* welding sparks */}
      <circle cx="105" cy="72" r="1.5" fill="#e85" />
      <line x1="105" y1="72" x2="98" y2="68" stroke="#e85" strokeWidth="0.8" />
      <line x1="105" y1="72" x2="102" y2="65" stroke="#e85" strokeWidth="0.8" />
      <line x1="105" y1="72" x2="112" y2="69" stroke="#e85" strokeWidth="0.8" />
      <line x1="105" y1="72" x2="108" y2="78" stroke="#e85" strokeWidth="0.8" />
    </svg>
  );
}

function AgricultureScene() {
  return (
    <svg viewBox="0 0 200 140" className="w-full h-full" fill="none">
      <rect width="200" height="140" fill="#fafaf8" />
      {/* field rows */}
      {[0, 1, 2, 3, 4].map((i) => (
        <g key={i}>
          <line x1="10" y1={85 + i * 12} x2="190" y2={85 + i * 12} stroke="#c5d4a0" strokeWidth="0.5" />
          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((j) => (
            <circle key={j} cx={20 + j * 20} cy={83 + i * 12} r="2" fill="#9ab06a" />
          ))}
        </g>
      ))}
      {/* GPS path */}
      <path d="M30 75 L170 75" stroke="#68b" strokeWidth="0.8" strokeDasharray="4 3" opacity="0.5" />
      <path d="M30 75 L30 130" stroke="#68b" strokeWidth="0.8" strokeDasharray="4 3" opacity="0.5" />
      {/* drone body */}
      <rect x="80" y="25" width="40" height="14" rx="3" fill="#1a1a1a" />
      {/* arms */}
      <line x1="80" y1="28" x2="65" y2="22" stroke="#1a1a1a" strokeWidth="2" />
      <line x1="120" y1="28" x2="135" y2="22" stroke="#1a1a1a" strokeWidth="2" />
      <line x1="80" y1="35" x2="65" y2="40" stroke="#1a1a1a" strokeWidth="2" />
      <line x1="120" y1="35" x2="135" y2="40" stroke="#1a1a1a" strokeWidth="2" />
      {/* rotors */}
      <ellipse cx="63" cy="21" rx="10" ry="2.5" fill="#ddd" />
      <ellipse cx="137" cy="21" rx="10" ry="2.5" fill="#ddd" />
      <ellipse cx="63" cy="41" rx="10" ry="2.5" fill="#ddd" />
      <ellipse cx="137" cy="41" rx="10" ry="2.5" fill="#ddd" />
      {/* tank */}
      <rect x="88" y="39" width="24" height="8" rx="2" fill="#68b" opacity="0.6" />
      {/* spray nozzles */}
      <line x1="92" y1="47" x2="92" y2="55" stroke="#68b" strokeWidth="1" />
      <line x1="100" y1="47" x2="100" y2="55" stroke="#68b" strokeWidth="1" />
      <line x1="108" y1="47" x2="108" y2="55" stroke="#68b" strokeWidth="1" />
      {/* mist */}
      <circle cx="92" cy="58" r="3" fill="#68b" opacity="0.15" />
      <circle cx="100" cy="60" r="4" fill="#68b" opacity="0.12" />
      <circle cx="108" cy="58" r="3" fill="#68b" opacity="0.15" />
    </svg>
  );
}

function BaristaScene() {
  return (
    <svg viewBox="0 0 200 140" className="w-full h-full" fill="none">
      <rect width="200" height="140" fill="#fafaf8" />
      {/* counter */}
      <rect x="0" y="95" width="200" height="45" fill="#eee" />
      <line x1="0" y1="95" x2="200" y2="95" stroke="#ddd" strokeWidth="1" />
      {/* espresso machine */}
      <rect x="20" y="60" width="40" height="35" rx="3" fill="#1a1a1a" />
      <rect x="25" y="65" width="12" height="8" rx="1" fill="#999" />
      <rect x="42" y="65" width="12" height="8" rx="1" fill="#999" />
      <rect x="30" y="80" width="20" height="3" fill="#999" />
      <circle cx="40" cy="55" r="4" fill="#999" />
      {/* menu board */}
      <rect x="150" y="20" width="40" height="50" rx="2" fill="#1a1a1a" />
      <line x1="158" y1="32" x2="182" y2="32" stroke="#999" strokeWidth="1" />
      <line x1="158" y1="40" x2="178" y2="40" stroke="#999" strokeWidth="1" />
      <line x1="158" y1="48" x2="180" y2="48" stroke="#999" strokeWidth="1" />
      <line x1="158" y1="56" x2="175" y2="56" stroke="#999" strokeWidth="1" />
      {/* robot arm base */}
      <rect x="95" y="85" width="16" height="10" rx="2" fill="#1a1a1a" />
      {/* arm */}
      <line x1="103" y1="85" x2="103" y2="60" stroke="#1a1a1a" strokeWidth="3" strokeLinecap="round" />
      <circle cx="103" cy="60" r="2.5" fill="#999" />
      <line x1="103" y1="60" x2="120" y2="50" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="120" cy="50" r="2" fill="#999" />
      <line x1="120" y1="50" x2="130" y2="60" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" />
      {/* cup */}
      <path d="M125 60 L128 75 Q130 78 132 75 L135 60Z" fill="#ddd" stroke="#999" strokeWidth="0.5" />
      {/* steam */}
      <path d="M128 57 Q130 52 128 47" stroke="#ccc" strokeWidth="0.8" fill="none" />
      <path d="M131 57 Q133 50 131 45" stroke="#ccc" strokeWidth="0.8" fill="none" />
    </svg>
  );
}

function WarehouseScene() {
  return (
    <svg viewBox="0 0 200 140" className="w-full h-full" fill="none">
      <rect width="200" height="140" fill="#fafaf8" />
      {/* floor */}
      <rect x="0" y="110" width="200" height="30" fill="#eee" />
      {/* shelf left */}
      <rect x="15" y="30" width="40" height="80" fill="none" stroke="#ddd" strokeWidth="1" />
      <line x1="15" y1="55" x2="55" y2="55" stroke="#ddd" strokeWidth="1" />
      <line x1="15" y1="80" x2="55" y2="80" stroke="#ddd" strokeWidth="1" />
      {/* boxes on left shelf */}
      <rect x="20" y="35" width="12" height="10" fill="#ccc" rx="1" />
      <rect x="35" y="38" width="14" height="7" fill="#ccc" rx="1" />
      <rect x="18" y="60" width="10" height="12" fill="#ccc" rx="1" />
      <rect x="32" y="62" width="16" height="8" fill="#ccc" rx="1" />
      <rect x="22" y="84" width="14" height="10" fill="#ccc" rx="1" />
      {/* shelf right */}
      <rect x="145" y="30" width="40" height="80" fill="none" stroke="#ddd" strokeWidth="1" />
      <line x1="145" y1="55" x2="185" y2="55" stroke="#ddd" strokeWidth="1" />
      <line x1="145" y1="80" x2="185" y2="80" stroke="#ddd" strokeWidth="1" />
      {/* boxes on right shelf */}
      <rect x="150" y="36" width="10" height="9" fill="#ccc" rx="1" />
      <rect x="165" y="34" width="14" height="11" fill="#ccc" rx="1" />
      <rect x="148" y="58" width="16" height="10" fill="#ccc" rx="1" />
      <rect x="168" y="60" width="12" height="8" fill="#ccc" rx="1" />
      <rect x="152" y="84" width="12" height="10" fill="#ccc" rx="1" />
      {/* AMR robot */}
      <rect x="85" y="90" width="30" height="18" rx="4" fill="#1a1a1a" />
      <circle cx="92" cy="112" r="3" fill="#999" />
      <circle cx="108" cy="112" r="3" fill="#999" />
      {/* box on robot */}
      <rect x="90" y="80" width="20" height="10" rx="1" fill="#ccc" stroke="#999" strokeWidth="0.5" />
      {/* LiDAR scan lines */}
      <line x1="100" y1="95" x2="70" y2="80" stroke="#68b" strokeWidth="0.5" opacity="0.4" />
      <line x1="100" y1="95" x2="65" y2="95" stroke="#68b" strokeWidth="0.5" opacity="0.4" />
      <line x1="100" y1="95" x2="70" y2="110" stroke="#68b" strokeWidth="0.5" opacity="0.4" />
      <line x1="100" y1="95" x2="130" y2="80" stroke="#68b" strokeWidth="0.5" opacity="0.4" />
      <line x1="100" y1="95" x2="135" y2="95" stroke="#68b" strokeWidth="0.5" opacity="0.4" />
      <line x1="100" y1="95" x2="130" y2="110" stroke="#68b" strokeWidth="0.5" opacity="0.4" />
      {/* navigation path */}
      <path d="M100 115 L100 130 L170 130" stroke="#68b" strokeWidth="1" strokeDasharray="3 2" opacity="0.5" />
    </svg>
  );
}

function WindowsScene() {
  return (
    <svg viewBox="0 0 200 140" className="w-full h-full" fill="none">
      <rect width="200" height="140" fill="#fafaf8" />
      {/* building facade */}
      <rect x="20" y="10" width="120" height="130" fill="#eee" stroke="#ddd" strokeWidth="1" />
      {/* window grid */}
      {[0, 1, 2, 3].map((row) =>
        [0, 1, 2].map((col) => (
          <rect
            key={`${row}-${col}`}
            x={32 + col * 35}
            y={20 + row * 28}
            width="22"
            height="18"
            rx="1"
            fill="#fafaf8"
            stroke="#ccc"
            strokeWidth="1"
          />
        ))
      )}
      {/* drone */}
      <rect x="155" y="55" width="20" height="10" rx="2" fill="#1a1a1a" />
      <line x1="155" y1="57" x2="148" y2="53" stroke="#1a1a1a" strokeWidth="1.5" />
      <line x1="175" y1="57" x2="182" y2="53" stroke="#1a1a1a" strokeWidth="1.5" />
      <ellipse cx="146" cy="52" rx="7" ry="2" fill="#ddd" />
      <ellipse cx="184" cy="52" rx="7" ry="2" fill="#ddd" />
      {/* cleaning arm */}
      <line x1="160" y1="65" x2="145" y2="75" stroke="#1a1a1a" strokeWidth="1.5" />
      <rect x="139" y="72" width="10" height="4" rx="1" fill="#999" />
      {/* spray lines */}
      <line x1="142" y1="72" x2="138" y2="66" stroke="#68b" strokeWidth="0.7" opacity="0.6" />
      <line x1="145" y1="72" x2="143" y2="66" stroke="#68b" strokeWidth="0.7" opacity="0.6" />
      <line x1="148" y1="72" x2="148" y2="66" stroke="#68b" strokeWidth="0.7" opacity="0.6" />
      {/* tether */}
      <path d="M165 55 Q165 30 165 10" stroke="#999" strokeWidth="0.8" strokeDasharray="3 2" />
      {/* sparkles */}
      <circle cx="130" cy="65" r="1.5" fill="#e85" opacity="0.6" />
      <circle cx="125" cy="72" r="1" fill="#e85" opacity="0.5" />
      <circle cx="133" cy="78" r="1.2" fill="#e85" opacity="0.5" />
    </svg>
  );
}

function SurgeryScene() {
  return (
    <svg viewBox="0 0 200 140" className="w-full h-full" fill="none">
      <rect width="200" height="140" fill="#fafaf8" />
      {/* overhead light */}
      <rect x="80" y="5" width="40" height="6" rx="2" fill="#ddd" />
      <line x1="100" y1="11" x2="100" y2="20" stroke="#ccc" strokeWidth="1" />
      <ellipse cx="100" cy="22" rx="15" ry="4" fill="#eee" />
      {/* operating table */}
      <rect x="40" y="95" width="90" height="8" rx="3" fill="#ddd" />
      <rect x="50" y="103" width="4" height="15" fill="#ccc" />
      <rect x="116" y="103" width="4" height="15" fill="#ccc" />
      {/* patient outline */}
      <ellipse cx="85" cy="85" rx="30" ry="8" fill="none" stroke="#ccc" strokeWidth="1" strokeDasharray="3 2" />
      <circle cx="60" cy="83" r="5" fill="none" stroke="#ccc" strokeWidth="1" />
      {/* robot arm 1 - surgical */}
      <rect x="145" y="100" width="12" height="20" rx="2" fill="#1a1a1a" />
      <line x1="151" y1="100" x2="151" y2="70" stroke="#1a1a1a" strokeWidth="3" strokeLinecap="round" />
      <circle cx="151" cy="70" r="2.5" fill="#999" />
      <line x1="151" y1="70" x2="120" y2="55" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="120" cy="55" r="2" fill="#999" />
      <line x1="120" y1="55" x2="100" y2="70" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" />
      {/* instrument tip */}
      <line x1="100" y1="70" x2="95" y2="80" stroke="#1a1a1a" strokeWidth="1" />
      {/* robot arm 2 - camera */}
      <rect x="15" y="100" width="12" height="20" rx="2" fill="#1a1a1a" />
      <line x1="21" y1="100" x2="21" y2="75" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="21" cy="75" r="2" fill="#999" />
      <line x1="21" y1="75" x2="50" y2="60" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" />
      <circle cx="50" cy="60" r="3" fill="#1a1a1a" />
      <circle cx="50" cy="60" r="1.5" fill="#68b" />
      {/* monitor */}
      <rect x="165" y="35" width="28" height="20" rx="2" fill="#1a1a1a" />
      <rect x="167" y="37" width="24" height="16" rx="1" fill="#333" />
      <rect x="176" y="55" width="10" height="3" fill="#999" />
      {/* heartbeat line on monitor */}
      <polyline points="170,45 174,45 176,40 178,50 180,45 184,45 186,42 188,45" stroke="#8b6" strokeWidth="0.8" fill="none" />
    </svg>
  );
}

function DeliveryScene() {
  return (
    <svg viewBox="0 0 200 140" className="w-full h-full" fill="none">
      <rect width="200" height="140" fill="#fafaf8" />
      {/* ground */}
      <rect x="0" y="110" width="200" height="30" fill="#eee" />
      {/* house 1 */}
      <rect x="15" y="75" width="35" height="35" fill="#ddd" />
      <polygon points="15,75 32,55 50,75" fill="#ccc" />
      <rect x="27" y="90" width="10" height="20" fill="#fafaf8" />
      <rect x="20" y="82" width="8" height="8" fill="#fafaf8" stroke="#ccc" strokeWidth="0.5" />
      {/* house 2 */}
      <rect x="145" y="70" width="40" height="40" fill="#ddd" />
      <polygon points="145,70 165,48 185,70" fill="#ccc" />
      <rect x="158" y="88" width="12" height="22" fill="#fafaf8" />
      <rect x="150" y="78" width="8" height="8" fill="#fafaf8" stroke="#ccc" strokeWidth="0.5" />
      <rect x="172" y="78" width="8" height="8" fill="#fafaf8" stroke="#ccc" strokeWidth="0.5" />
      {/* drone */}
      <rect x="88" y="20" width="24" height="10" rx="2" fill="#1a1a1a" />
      <line x1="88" y1="22" x2="78" y2="17" stroke="#1a1a1a" strokeWidth="1.5" />
      <line x1="112" y1="22" x2="122" y2="17" stroke="#1a1a1a" strokeWidth="1.5" />
      <ellipse cx="76" cy="16" rx="8" ry="2" fill="#ddd" />
      <ellipse cx="124" cy="16" rx="8" ry="2" fill="#ddd" />
      {/* package */}
      <rect x="95" y="32" width="10" height="10" rx="1" fill="#ccc" stroke="#999" strokeWidth="0.5" />
      <line x1="100" y1="32" x2="100" y2="42" stroke="#999" strokeWidth="0.5" />
      <line x1="95" y1="37" x2="105" y2="37" stroke="#999" strokeWidth="0.5" />
      {/* strings holding package */}
      <line x1="95" y1="32" x2="92" y2="30" stroke="#999" strokeWidth="0.5" />
      <line x1="105" y1="32" x2="108" y2="30" stroke="#999" strokeWidth="0.5" />
      {/* flight path dashes */}
      <path d="M50 40 Q70 25 88 25" stroke="#999" strokeWidth="0.8" strokeDasharray="3 3" />
      <path d="M112 25 Q140 30 160 55" stroke="#999" strokeWidth="0.8" strokeDasharray="3 3" />
      {/* target marker */}
      <circle cx="160" cy="108" r="6" fill="none" stroke="#d44" strokeWidth="1" opacity="0.6" />
      <circle cx="160" cy="108" r="2" fill="#d44" opacity="0.6" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Scene map                                                          */
/* ------------------------------------------------------------------ */

const sceneMap: Record<string, React.FC> = {
  fire: FireScene,
  wildfire: FireScene,
  factory: FactoryScene,
  agriculture: AgricultureScene,
  barista: BaristaScene,
  warehouse: WarehouseScene,
  windows: WindowsScene,
  "building-maintenance": WindowsScene,
  surgery: SurgeryScene,
  delivery: DeliveryScene,
};

/* ------------------------------------------------------------------ */
/*  Robot type label map                                               */
/* ------------------------------------------------------------------ */

const robotTypeLabels: Record<string, string> = {
  drone: "Drones",
  uav: "UAVs",
  amr: "AMRs",
  agv: "AGVs",
  arm: "Robot Arms",
  humanoid: "Humanoids",
  quadruped: "Quadrupeds",
  ugv: "UGVs",
  auv: "AUVs",
  usv: "USVs",
  cobot: "Cobots",
  surgical: "Surgical Robots",
  mobile_manipulator: "Mobile Manipulators",
};

/* ------------------------------------------------------------------ */
/*  Wide tile slugs                                                    */
/* ------------------------------------------------------------------ */

const wideSlugs = new Set([
  "wildfire",
  "fire",
  "factory",
  "surgery",
  "delivery",
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
          const SceneComponent = sceneMap[app.slug];

          return (
            <Link
              key={app.id || app.slug}
              href={`/applications/${app.slug}`}
              className={`group border border-gray-200 rounded-lg overflow-hidden transition-all duration-200 hover:border-gray-400 hover:-translate-y-[2px] ${
                isWide ? "col-span-2" : "col-span-1"
              }`}
            >
              {/* Scene illustration */}
              <div className="w-full h-[140px] opacity-70 group-hover:opacity-100 transition-opacity duration-200">
                {SceneComponent ? <SceneComponent /> : (
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
                    <span className="text-[12px] text-[#bbb]">
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
