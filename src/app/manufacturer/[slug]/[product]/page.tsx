import { createServerClient } from "@/lib/supabase-server";
import { ROBOT_TYPES, CATEGORIES, PRICE_TIERS } from "@/lib/constants";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import ProductDetail from "@/components/ProductDetail";
import SignalFeed from "@/components/SignalFeed";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export const revalidate = 3600;

export async function generateMetadata({ params }: { params: Promise<{ slug: string; product: string }> }): Promise<Metadata> {
  const { slug, product: productSlug } = await params;
  const supabase = createServerClient();
  const { data: products } = await supabase
    .from("products")
    .select("*, manufacturer:manufacturers(*)")
    .eq("slug", productSlug);

  const product = products?.find((p: any) => p.manufacturer?.slug === slug);

  if (!product) return {};

  return {
    title: `${product.name} by ${product.manufacturer?.name} — Specs, Price & Quote`,
    description: `${product.name}: ${product.payload_capacity_kg ? product.payload_capacity_kg + 'kg payload, ' : ''}${product.endurance_minutes ? product.endurance_minutes + 'min endurance. ' : ''}Compare specs and request a quote on buyrobot.land.`,
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string; product: string }> }) {
  const { slug, product: productSlug } = await params;
  const supabase = createServerClient();

  // Get product with manufacturer
  const { data: products } = await supabase
    .from("products")
    .select("*, manufacturer:manufacturers(*)")
    .eq("slug", productSlug);

  // Filter by manufacturer slug in JS since nested eq doesn't work reliably
  const product = products?.find((p: any) => p.manufacturer?.slug === slug);
  if (!product) notFound();

  // Get similar products (same type, different product)
  const { data: similar } = await supabase
    .from("products")
    .select("*, manufacturer:manufacturers(*)")
    .eq("type", product.type)
    .neq("id", product.id)
    .limit(3);

  // Get tradeshow appearances
  const { data: appearances } = await supabase
    .from("tradeshow_appearances")
    .select("*")
    .eq("manufacturer_id", product.manufacturer_id);

  // Get signals for this product and manufacturer
  const { data: signals } = await supabase
    .from("signals")
    .select("*")
    .or(`product_id.eq.${product.id},manufacturer_id.eq.${product.manufacturer_id}`)
    .order("event_date", { ascending: false })
    .limit(5);

  return (
    <div className="max-w-[860px] mx-auto px-6">
      <Navbar />
      <ProductDetail
        product={product}
        similarProducts={similar || []}
        appearances={appearances || []}
      />
      <SignalFeed signals={signals || []} title="Recent activity" />
      <Footer />
    </div>
  );
}
