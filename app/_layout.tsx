import { Stack } from 'expo-router';
import React from 'react';

export default function RootLayout() {
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