import axios from 'axios'
import { productType } from '@/types/product'
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  "https://fogegkkhqbzspmieqert.supabase.co",
  "sb_publishable_Hgw_kvZZ7vkJFxsVAJ5ZIQ_7QYZ9QPa"
)

async function importitems() {
    const response = await axios.get("https://fakestoreapi.com/products");
    const products = response.data.map((p: productType) => ({
      id: p.id,
      title: p.title,
      price: p.price,
      description: p.description,
      image: p.image
    }));    

    const { error } = await supabase.from("Products").insert(products);
    if (error) console.error(error);
    else console.log("Data inserted successfully!");
}

importitems();