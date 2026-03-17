import { createClient } from '@supabase/supabase-js'
import 'react-native-url-polyfill/auto'


const supabaseUrl = "https://gtpogyspvyotmbcrbyjx.supabase.co"
const supabaseAnonKey = "sb_publishable_JXDNkF-C6RA9r7oUsZqOCw_W3Ure-0L"

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: false,
    },
})