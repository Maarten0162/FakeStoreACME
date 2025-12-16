import { supabase } from "@/_lib/SupabaseClient";

async function importitems() {

    const product = { title: 'Gucci Pet', price: 239.99, description: "cap van Gucci", image: "https://www.paulzeist.com/media/catalog/product/cache/574ca8a946b03f2f1fe96ef9f35fb56c/3/5/358866113931_____Gucci_____4817743HC652140__________.jpeg" };
    
    const { error } = await supabase.from("Products").insert(product);
    if (error) console.error(error);
    else console.log("Data inserted successfully!");
}

importitems();