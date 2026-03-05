import { Colors } from '@/constants/colors';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface SegmentControlProps {
    activeTab: "attending" | "saved";
    setActiveTab: (tab: "attending" | "saved") => void;
}
export default function SegmentControl({ activeTab, setActiveTab }: SegmentControlProps) {
    return (

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center', gap: 10 }}>
            <View style={{ backgroundColor: activeTab === "attending" ? Colors.text : 'transparent', paddingHorizontal: 25, paddingVertical: 15, borderRadius: 30, borderWidth: 1, borderColor: Colors.text }}>
                <TouchableOpacity onPress={() => setActiveTab("attending")}>
                    <Text style={{ fontSize: 14, fontWeight: activeTab === "attending" ? "medium" : "medium", color: activeTab === "attending" ? Colors.background : Colors.text }}>Attending</Text>
                </TouchableOpacity>
            </View>

            <View style={{ backgroundColor: activeTab === "saved" ? Colors.text : 'transparent', paddingHorizontal: 25, paddingVertical: 15, borderRadius: 30, borderWidth: 1, borderColor: Colors.text }}>
                <TouchableOpacity onPress={() => setActiveTab("saved")}>
                    <Text style={{ fontSize: 14, fontWeight: activeTab === "saved" ? "medium" : "medium", color: activeTab === "saved" ? Colors.background : Colors.text }}>Saved</Text>
                </TouchableOpacity>
            </View>

        </View>

    )
}



const styles = StyleSheet.create({})