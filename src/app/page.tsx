import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import HomeContent from "@/components/HomeContent";

export default function Home() {
  return (
    <div className="max-w-[860px] mx-auto px-6">
      <Navbar />
      <HomeContent />
      <Footer />
    </div>
  );
}
