import { createClient } from '@supabase/supabase-js'

async function importitems() {

    const supabase = createClient('https://aptzzichrsgcryyofpgm.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFwdHp6aWNocnNnY3J5eW9mcGdtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkxNDE2MzAsImV4cCI6MjA3NDcxNzYzMH0.b9fKXxtA_qPuAc3f2MehmuIOekGxs36l6-LcrFKaX_A')
    
    const product = { title: 'Gucci Pet', price: 239.99, description: "cap van Gucci", image: "https://www.paulzeist.com/media/catalog/product/cache/574ca8a946b03f2f1fe96ef9f35fb56c/3/5/358866113931_____Gucci_____4817743HC652140__________.jpeg" };
    
    const { error } = await supabase.from("Products").insert(product);
    if (error) console.error(error);
    else console.log("Data inserted successfully!");
}

importitems();