"use client"
import axios from 'axios'
import React from 'react'
import { PiTrash } from 'react-icons/pi';
import { useState, useEffect } from 'react';
import { User } from '@supabase/supabase-js';
import { supabase } from '@/_lib/SupabaseClient';
import router from 'next/router';

export default function DeleteButton({id} : {id: number}) {
    const handleClick = async () =>{

        await axios.delete(`/api/products/${id}`)

              router.push("/products")
    }

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
          <button
        onClick={handleClick}
        className="inline-flex aspect-square items-center justify-center rounded-xl bg-red-700 my-3 mr-1 px-3 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
        >
      <PiTrash className="h-5 w-5" />
    </button>
      )} else return (
      <></>
        
  )
}