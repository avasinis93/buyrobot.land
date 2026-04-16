import { createServerClient } from "@/lib/supabase-server";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import RobotsBrowse from "@/components/RobotsBrowse";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Browse All Robots & Drones",
  description: "Search and filter 4,200+ robots and drones by type, application, price, and certifications.",
};

export const revalidate = 3600;

export default async function RobotsPage() {
  const supabase = createServerClient();
  const { data: products } = await supabase
    .from("products")
    .select("*, manufacturer:manufacturers(*)")
    .eq("status", "available")
    .order("created_at", { ascending: false });

  return (
    <div className="max-w-[860px] mx-auto px-6">
      <Navbar />
      <RobotsBrowse initialProducts={products || []} />
      <Footer />
    </div>
  );
}
