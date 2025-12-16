import React from 'react'
import { Auth } from '@supabase/auth-ui-react'
import {
  // Import predefined theme
  ThemeSupa,
} from '@supabase/auth-ui-shared'
import { supabase } from '@/_lib/SupabaseClient'

export default function Login() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="w-full max-w-md p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md">
        <Auth
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
        />
      </div>
    </div>
  )
}