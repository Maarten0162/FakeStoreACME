'use client'
import React from 'react'
import { PiPencilSimple } from "react-icons/pi";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { supabase } from '@/_lib/SupabaseClient';
import { User } from '@supabase/supabase-js';

export default function EditButton({ id }: { id: number } ) {

  
      const [user, setUser] = useState<User | null>(null);
      
        // Check user on mount + subscribe to auth changes
        useEffect(() => {
          const checkUser = async () => {
            const { data } = await supabase.auth.getUser();
            setUser(data.user);
          };
          checkUser();
      
          const { data: subscription } = supabase.auth.onAuthStateChange((_event, session) => {
            setUser(session?.user || null);
          });
      
          return () => subscription.subscription.unsubscribe();
        }, []);
        if (user){
return (
    
    <Link
        href={`/products/${id}/edit`}
        className="inline-flex aspect-square items-center justify-center rounded-xl bg-indigo-600 my-3 mr-1 px-3 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
        >
      <PiPencilSimple className="h-5 w-5" />
    </Link> 
          
  )
        }
        else return <></>
  
}
