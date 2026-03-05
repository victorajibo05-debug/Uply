import ThemedView from '@/components/ThemedView';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import AttendingTab from '@/components/AttendingTab';
import SavedTab from '@/components/SavedTab';
import SegmentControl from '@/components/SegmentControl';
import { Colors } from '@/constants/colors';
import { useState } from 'react';

export default function SavedScreen() {

    const [activeTab, setActiveTab] = useState<"attending" | "saved">("attending");
    return (
        <ThemedView style={{ flex: 1, paddingHorizontal: 5 }} safe>
            <View style={{ height: 140 }}>
                <View style={styles.header}>
                    <Text style={styles.text}>My Events</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center', marginBottom: 25 }}>
                    <SegmentControl activeTab={activeTab} setActiveTab={setActiveTab} />

                </View>
                <View style={{ alignSelf: 'center' }}>
                    {activeTab === "attending" ? <AttendingTab /> : <SavedTab />}
                </View>
            </View>

        </ThemedView>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        marginVertical: 15,
        marginHorizontal: 5,
        marginBottom: 25
    },
    text: {
        fontSize: 26,
        fontWeight: 'bold',
        color: Colors.text
    },
});
