import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient('https://aptzzichrsgcryyofpgm.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFwdHp6aWNocnNnY3J5eW9mcGdtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkxNDE2MzAsImV4cCI6MjA3NDcxNzYzMH0.b9fKXxtA_qPuAc3f2MehmuIOekGxs36l6-LcrFKaX_A')


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
