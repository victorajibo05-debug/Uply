import { supabase } from '@/Src/lib/supabase';
import { Stack, useRouter } from 'expo-router';
import React, { useEffect } from 'react';

export default function RootLayout() {
    const router = useRouter();

    useEffect(() => {
        //  Check existing session on launch
        supabase.auth.getSession().then(({ data: { session } }) => {
            if (session) {
                router.replace('/(dashboard)/home');
            } else {
                router.replace('/(auth)/login');
            }
        });

        const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
            if (session) {
                router.replace('/(dashboard)/home');
            } else {
                router.replace('/(auth)/login');
            }
        });

        return () => listener.subscription.unsubscribe();
    }, []);



    return (
        <Stack
            screenOptions={{
                headerShown: false,
                animation: 'none'
            }}>
            <Stack.Screen name="(auth)" options={{ headerShown: false }} />
            <Stack.Screen name="(dashboard)" options={{ headerShown: false }} />
        </Stack>
    );
}