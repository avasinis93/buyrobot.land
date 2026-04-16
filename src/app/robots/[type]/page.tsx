import { createServerClient } from "@/lib/supabase-server";
import { TYPE_SLUGS, ROBOT_TYPES } from "@/lib/constants";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import RobotsBrowse from "@/components/RobotsBrowse";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export const revalidate = 3600;

export async function generateMetadata({ params }: { params: Promise<{ type: string }> }): Promise<Metadata> {
  const { type: slug } = await params;
  const typeCode = TYPE_SLUGS[slug];
  if (!typeCode) return {};
  const typeInfo = ROBOT_TYPES[typeCode];
  return {
    title: `${typeInfo.pluralLabel} for Sale — Browse & Compare`,
    description: `Find and compare ${typeInfo.pluralLabel.toLowerCase()} from top manufacturers. Filter by specs, price, and certifications.`,
  };
}

export default async function TypePage({ params }: { params: Promise<{ type: string }> }) {
  const { type: slug } = await params;
  const typeCode = TYPE_SLUGS[slug];
  if (!typeCode) notFound();

  const typeInfo = ROBOT_TYPES[typeCode];
  const supabase = createServerClient();
  const { data: products } = await supabase
    .from("products")
    .select("*, manufacturer:manufacturers(*)")
    .eq("type", typeCode)
    .eq("status", "available")
    .order("created_at", { ascending: false });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Navbar />
      <div className="pt-8 pb-2">
        <p className="text-[11px] uppercase tracking-[1.5px] text-[#999] mb-1.5" style={{ fontFamily: "var(--font-mono)" }}>
          {typeCode} · {products?.length || 0} listed
        </p>
        <h1 className="text-[34px] font-medium tracking-tight mb-2" style={{ fontFamily: "var(--font-heading)" }}>
          {typeInfo.pluralLabel}
        </h1>
      </div>
      <RobotsBrowse initialProducts={products || []} defaultType={typeCode} />
      <Footer />
    </div>
  );
}
