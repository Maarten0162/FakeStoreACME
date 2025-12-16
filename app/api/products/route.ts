import { NextResponse } from "next/server";
import { supabase } from "@/_lib/SupabaseClient";


export async function GET()
   {


  const { data, error } = await supabase
    .from("Products")
    .select("*")

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  if (!data) {
    return NextResponse.json({ error: "Products not found" }, { status: 404 });
  }

  return NextResponse.json(data);
}


export async function POST(req: Request) {

        const body = await req.json();
        const { title, price, description, image } = body;

        const { data, error } = await supabase
            .from("Products")
            .insert([
                {
                    title,
                    price,
                    description,
                    image,
                },
            ])
            .select()
            .single();

        if (error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        }

        // 3. Return inserted product
        return NextResponse.json(data, { status: 201 });

}