"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="flex justify-between items-baseline py-5 border-b border-gray-200">
      <Link href="/" className="flex items-baseline gap-[3px]">
        <span
          className="font-bold text-[21px] text-[#1a1a1a] tracking-tight"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          buyrobot
        </span>
        <span
          className="text-[13px] text-[#999]"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          .land
        </span>
      </Link>
      <div className="flex gap-6 text-[13px] text-[#888]">
        <Link
          href="/robots"
          className={`hover:text-[#1a1a1a] transition-colors ${
            pathname?.startsWith("/robots") ? "text-[#1a1a1a] font-medium" : ""
          }`}
        >
          Browse
        </Link>
        <Link
          href="/applications"
          className={`hover:text-[#1a1a1a] transition-colors ${
            pathname?.startsWith("/applications") ? "text-[#1a1a1a] font-medium" : ""
          }`}
        >
          Applications
        </Link>
        <span className="cursor-pointer hover:text-[#1a1a1a] transition-colors">
          Manufacturers
        </span>
        <span className="cursor-pointer hover:text-[#1a1a1a] transition-colors">
          Compare
        </span>
        <span className="cursor-pointer text-[#1a1a1a] font-medium border border-gray-300 rounded-[5px] px-3 py-1 hover:border-gray-400 transition-colors">
          List your robot
        </span>
      </div>
    </nav>
  );
}
