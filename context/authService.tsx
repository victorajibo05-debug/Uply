import { supabase } from "@/Src/lib/supabase";

export const signUp = async (username: string, email: string, password: string) => {
    const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
            data: {
                username: username
            }
        }
    })

    if (error) throw error

    const user = data.user

    if (!user) throw new Error("User creation failed")


}



export const signIn = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
    })

    if (error) {
        throw error
    }

    return data
}