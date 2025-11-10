import axios from 'axios'
import { productType } from '@/types/product'
import { createClient } from '@supabase/supabase-js'

async function importitems() {
    const supabase = createClient('https://aptzzichrsgcryyofpgm.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFwdHp6aWNocnNnY3J5eW9mcGdtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkxNDE2MzAsImV4cCI6MjA3NDcxNzYzMH0.b9fKXxtA_qPuAc3f2MehmuIOekGxs36l6-LcrFKaX_A')
    const response = await axios.get("https://fakestoreapi.com/products");
    const products = response.data.map((p: productType) => ({
      id: p.id,
      title: p.title,
      price: p.price,
      description: p.description,
      category: p.category,
      image: p.image
    }));    

    const { error } = await supabase.from("Products").insert(products);
    if (error) console.error(error);
    else console.log("Data inserted successfully!");
}

importitems();