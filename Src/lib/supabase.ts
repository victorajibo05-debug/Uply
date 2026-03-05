import { createClient } from '@supabase/supabase-js'
import 'react-native-url-polyfill/auto'

const supabaseUrl = 'https://ezyzxulxxruwbzhrvccd.supabase.co'
const supabaseAnonKey = 'sb_publishable_V-76U0w_urr_uCQXtuopqg_BoaTsJ7t'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: false,
    },
})