"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "@/_lib/SupabaseClient";
import Login from "./Login";
import { User } from "@supabase/supabase-js";

export default function Header() {
  const [user, setUser] = useState<User | null>(null);
  const [showLogin, setShowLogin] = useState(false);

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

  const signOut = async () => {
    await supabase.auth.signOut();
    setShowLogin(false);
  };

  const toggleLogin = () => setShowLogin((prev) => !prev);

  return (
    <>
      <header className="bg-white/80 border-b border-gray-100 backdrop-blur sticky top-0 z-50 dark:bg-gray-900/70 dark:border-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-2 font-bold text-xl tracking-tight text-indigo-600 hover:text-indigo-700"
              aria-label="ACME Home"
            >
              <span className="h-9 w-9 grid place-items-center rounded-lg bg-indigo-600 text-white">
                A
              </span>
              <span>ACME</span>
            </Link>

            <nav className="flex items-center gap-6 text-sm font-medium">
              <Link href="/createproduct" className="hover:text-indigo-600 dark:hover:text-indigo-400">
                Create Product
              </Link>
              <Link href="/products" className="hover:text-indigo-600 dark:hover:text-indigo-400">
                Products
              </Link>
              <Link href="/contact" className="hover:text-indigo-600 dark:hover:text-indigo-400">
                Contact
              </Link>

              {user ? (
                <button onClick={signOut} className="hover:text-indigo-600 dark:hover:text-indigo-400">
                  Log Out ({user.email})
                </button>
              ) : (
                <button onClick={toggleLogin} className="hover:text-indigo-600 dark:hover:text-indigo-400">
                  {showLogin ? "Close Login" : "Log In"}
                </button>
              )}
            </nav>
          </div>
        </div>
      </header>

      {!user && showLogin && (
        <div className="p-6 max-w-md mx-auto">
          <Login />
        </div>
      )}
    </>
  );
}
