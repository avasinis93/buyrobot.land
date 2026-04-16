import { createServerClient } from "@/lib/supabase-server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();

  const { product_id, manufacturer_id, name, email, company, country, message, quantity, timeline } = body;

  if (!product_id || !name || !email) {
    return NextResponse.json(
      { error: "product_id, name, and email are required" },
      { status: 400 }
    );
  }

  const supabase = createServerClient();

  const { data, error } = await supabase.from("quote_requests").insert({
    product_id,
    manufacturer_id,
    requester_name: name,
    requester_email: email,
    requester_company: company || null,
    requester_country: country || null,
    message: message || null,
    quantity: quantity || null,
    timeline: timeline || null,
  }).select().single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true, id: data.id });
}
