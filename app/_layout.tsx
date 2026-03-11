import { NavigationIndependentTree } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import login from './(auth)/login';
import register from './(auth)/register';
import home from './(dashboard)/home';
import profile from './(dashboard)/profile';
import saved from './(dashboard)/saved';
import search from './(dashboard)/search';

export type RootStackParamList = {
    Login: undefined
    Register: undefined
    Home: undefined
    Search: undefined
    Saved: undefined
    Profile: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>()


export default function App() {
    return (
        <NavigationIndependentTree>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName="Register">
                <Stack.Screen name="Login" component={login} />
                <Stack.Screen name="Register" component={register} />
                <Stack.Screen name="Home" component={home} />
                <Stack.Screen name="Search" component={search} />
                <Stack.Screen name="Saved" component={saved} />
                <Stack.Screen name="Profile" component={profile} />
            </Stack.Navigator>
        </NavigationIndependentTree>
    );
}