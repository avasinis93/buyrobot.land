import { createServerClient } from "@/lib/supabase-server";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get("q") || "";
  const type = searchParams.get("type");
  const category = searchParams.get("category");
  const ndaa = searchParams.get("ndaa");
  const limit = parseInt(searchParams.get("limit") || "50");
  const offset = parseInt(searchParams.get("offset") || "0");

  const supabase = createServerClient();

  let query = supabase
    .from("products")
    .select("*, manufacturer:manufacturers(*)", { count: "exact" })
    .eq("status", "available");

  if (q) {
    query = query.textSearch("fts", q, { type: "websearch" });
  }
  if (type) {
    query = query.eq("type", type);
  }
  if (category) {
    query = query.eq("category", category);
  }
  if (ndaa === "true") {
    query = query.eq("ndaa_compliant", true);
  }

  const { data, count, error } = await query
    .order("completeness_score", { ascending: false })
    .range(offset, offset + limit - 1);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ products: data, total: count });
}
