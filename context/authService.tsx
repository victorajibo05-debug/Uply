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

    await supabase.from("profiles").insert({
        id: user?.id,
        username: username,
        email: email
    })


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