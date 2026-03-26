import { supabase } from "@/Src/lib/supabase";
import { useEffect, useState } from "react";

export const useProfile = () => {
    const [username, setUsername] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProfile = async () => {
            const { data: { user } } = await supabase.auth.getUser();

            if (!user) return;

            const { data: profile, error } = await supabase
                .from('profiles')
                .select('username')
                .eq('id', user.id)
                .single();

            if (error) throw error;
            setUsername(profile.username);

            setLoading(false);
        };
        fetchProfile();
    }, []);

    return { username, loading };
}