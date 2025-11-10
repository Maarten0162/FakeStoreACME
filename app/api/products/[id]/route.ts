import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient('https://aptzzichrsgcryyofpgm.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFwdHp6aWNocnNnY3J5eW9mcGdtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkxNDE2MzAsImV4cCI6MjA3NDcxNzYzMH0.b9fKXxtA_qPuAc3f2MehmuIOekGxs36l6-LcrFKaX_A')


export async function GET(req: Request, { params }: { params: { id: string } }) {

    const param = await params;
    const id = Number(param.id);
    const { data, error } = await supabase
        .from("Products")
        .select("*")
        .eq("id", id)
        .single();

    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }

    if (!data) {
        return NextResponse.json({ error: "Products not found" }, { status: 404 });
    }

    return NextResponse.json(data);
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {

    const param = await params;
    const id = await Number(param.id);
   console.log("fyguyhii")

    const { data } = await supabase
        .from("Products")
        .delete()
        .eq("id", id)


    return NextResponse.json(data);
}
