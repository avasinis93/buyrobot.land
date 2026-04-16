import { createServerClient } from "@/lib/supabase-server";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import ApplicationsMosaic from "@/components/ApplicationsMosaic";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Robot Applications — Find Robots by Use Case",
  description: "Explore real-world robot applications. Agriculture, logistics, inspection, surgery, delivery, and more. Find every robot built for the job.",
};

export default async function ApplicationsPage() {
  const supabase = createServerClient();
  const { data: applications } = await supabase
    .from("applications")
    .select("*")
    .eq("featured", true)
    .order("sort_order", { ascending: true });

  return (
    <div className="max-w-[860px] mx-auto px-6">
      <Navbar />
      <ApplicationsMosaic applications={applications || []} />
      <Footer />
    </div>
  );
}
