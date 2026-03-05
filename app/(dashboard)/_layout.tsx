import { Colors } from "@/constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from 'react';

const _Dashboardlayout = () => {


    return (
        <>
            <StatusBar style="auto" />
            <Tabs
                screenOptions={{
                    headerShown: false,
                    sceneStyle: { backgroundColor: Colors.background },
                    tabBarStyle: {
                        borderTopWidth: 0,
                        borderBottomWidth: 0,
                        backgroundColor: Colors.navigationBackground,
                        paddingTop: 10,
                        height: 64
                    },
                    tabBarActiveTintColor: Colors.iconcoloractive,
                    tabBarInactiveTintColor: Colors.iconcolorinactive
                }}
            >
                <Tabs.Screen name="home" options={{
                    title: 'Home', tabBarShowLabel: false, tabBarIcon: ({ focused }) => (
                        <Ionicons name={focused ? "compass" : "compass-outline"}
                            size={24}
                            color={focused ? Colors.iconcoloractive : Colors.iconcolorinactive}
                        />
                    )
                }} />
                <Tabs.Screen name="search" options={{
                    title: 'Search', tabBarShowLabel: false, tabBarIcon: ({ focused }) => (
                        <Ionicons name={focused ? "search" : "search-outline"}
                            size={24}
                            color={focused ? Colors.iconcoloractive : Colors.iconcolorinactive}
                        />
                    )
                }} />
                <Tabs.Screen name="saved" options={{
                    title: 'Saved', tabBarShowLabel: false, tabBarIcon: ({ focused }) => (
                        <Ionicons name={focused ? "ticket" : "ticket-outline"}
                            size={24}
                            color={focused ? Colors.iconcoloractive : Colors.iconcolorinactive}
                        />
                    )
                }} />
                <Tabs.Screen name="profile" options={{
                    title: 'Profile', tabBarShowLabel: false, tabBarIcon: ({ focused }) => (
                        <Ionicons name={focused ? "person" : "person-outline"}
                            size={24}
                            color={focused ? Colors.iconcoloractive : Colors.iconcolorinactive}
                        />
                    )
                }} />
                <Tabs.Screen name="Happening Soon/[id]" options={{ href: null }} />
            </Tabs>
        </>
    )
}

export default _Dashboardlayout

