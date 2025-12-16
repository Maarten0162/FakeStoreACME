import { NextResponse } from "next/server";
import { supabase } from "@/_lib/SupabaseClient";

export async function GET(req: Request, context: { params: Promise<{ id: string }> }) {
  const { id } = await context.params;
  const { data, error } = await supabase.from("Products").select("*").eq("id", Number(id)).single();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  if (!data) return NextResponse.json({ error: "Product not found" }, { status: 404 });

  return NextResponse.json(data);
}

export async function DELETE(req: Request, context: { params: Promise<{ id: string }> }) {
  const { id } = await context.params;
  const { data, error } = await supabase.from("Products").delete().eq("id", Number(id));

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json(data);
}
