import { NextResponse, NextRequest } from "next/server";
import { supabase } from "@/_lib/SupabaseClient";

export async function GET(request: NextRequest, context: { params: Promise<{ id: string }> }) {
  const { id } = await context.params;
  const { data, error } = await supabase.from("Products").select("*").eq("id", Number(id)).single();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  if (!data) return NextResponse.json({ error: "Product not found" }, { status: 404 });

  return NextResponse.json(data);
}

export async function PUT(req: NextRequest, context: { params: Promise<{ id: string }> }) {
  const { id } = await context.params;
  const body = await req.json();
  const { title, price, description, image } = body;

  const { data, error } = await supabase
    .from("Products")
    .update([{ title, price, description, image }])
    .eq("id", Number(id))
    .select()
    .single();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json(data, { status: 201 });
}
