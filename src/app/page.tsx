import { createServerClient } from "@/lib/supabase-server";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import HomeContent from "@/components/HomeContent";
import SignalFeed from "@/components/SignalFeed";

export const revalidate = 3600;

export default async function Home() {
  const supabase = createServerClient();

  const { data: signals } = await supabase
    .from("signals")
    .select("*, manufacturer:manufacturers(name, slug)")
    .eq("verified", true)
    .order("event_date", { ascending: false })
    .limit(8);

  return (
    <div className="max-w-[860px] mx-auto px-6">
      <Navbar />
      <HomeContent />
      <SignalFeed
        signals={signals || []}
        title="This week in robotics"
        showManufacturer
        compact
      />
      <Footer />
    </div>
  );
}
