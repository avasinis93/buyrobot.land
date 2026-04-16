import { createServerClient } from "@/lib/supabase-server";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";

export const revalidate = 3600;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const supabase = createServerClient();
  const { data: app } = await supabase
    .from("applications")
    .select("*")
    .eq("slug", slug)
    .single();

  if (!app) return {};
  return {
    title: `${app.title} — Robots & Drones for ${app.title}`,
    description: app.description,
  };
}

export default async function ApplicationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const supabase = createServerClient();
  const { data: app } = await supabase
    .from("applications")
    .select("*")
    .eq("slug", slug)
    .single();

  if (!app) notFound();

  return (
    <div className="max-w-[860px] mx-auto px-6">
      <Navbar />
      <div className="py-10">
        <Link href="/applications" className="text-[13px] text-[#888] hover:text-[#555] transition-colors">
          ← All applications
        </Link>
        <h1 className="text-[34px] font-medium tracking-tight mt-6 mb-2" style={{ fontFamily: "var(--font-heading)" }}>
          {app.title}
        </h1>
        <p className="text-[16px] text-[#777] mb-8">{app.description}</p>
        <div className="border border-dashed border-gray-300 rounded-lg p-12 text-center">
          <p className="text-[15px] text-[#999]">
            {app.product_count} robots available for {app.title.toLowerCase()}
          </p>
          <p className="text-[13px] text-[#bbb] mt-2">
            Product listings coming soon — data pipeline in progress
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
