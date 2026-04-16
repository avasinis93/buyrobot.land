import { createServerClient } from "@/lib/supabase-server";
import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const supabase = createServerClient();

  const [{ data: products }, { data: manufacturers }, { data: applications }] =
    await Promise.all([
      supabase
        .from("products")
        .select("slug, updated_at, manufacturer:manufacturers(slug)")
        .eq("status", "available"),
      supabase.from("manufacturers").select("slug, updated_at"),
      supabase.from("applications").select("slug, updated_at"),
    ]);

  const typePages = [
    "drones",
    "robotic-arms",
    "mobile-robots",
    "quadrupeds",
    "humanoids",
    "exoskeletons",
    "underwater",
    "vehicles",
    "appliances",
  ].map((type) => ({
    url: `https://buyrobot.land/robots/${type}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: 0.8,
  }));

  const applicationPages = (applications || []).map((a: any) => ({
    url: `https://buyrobot.land/applications/${a.slug}`,
    lastModified: new Date(a.updated_at),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const manufacturerPages = (manufacturers || []).map((m: any) => ({
    url: `https://buyrobot.land/manufacturer/${m.slug}`,
    lastModified: new Date(m.updated_at),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  const productPages = (products || []).map((p: any) => ({
    url: `https://buyrobot.land/manufacturer/${p.manufacturer?.slug}/${p.slug}`,
    lastModified: new Date(p.updated_at),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  return [
    {
      url: "https://buyrobot.land",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "https://buyrobot.land/robots",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: "https://buyrobot.land/applications",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...typePages,
    ...applicationPages,
    ...manufacturerPages,
    ...productPages,
  ];
}
