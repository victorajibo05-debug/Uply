import ThemedView from '@/components/ThemedView';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Button from '@/components/Button';
import ProfilePicture from '@/components/ProfilePicture';
import { Colors } from '@/constants/colors';

export default function ProfileScreen() {
    return (
        <ThemedView style={styles.container} safe>
            <View style={{ flexDirection: 'row', marginVertical: 15, marginHorizontal: 5 }}>
                <Text style={styles.text}>Profile</Text>
            </View>
            <View style={{ marginHorizontal: 5, width: 346, height: 150, backgroundColor: Colors.cardBackground, borderRadius: 15, marginBottom: 20 }}>
                <View style={{ flexDirection: 'row', marginVertical: 7, alignSelf: 'flex-start', marginHorizontal: 5, alignItems: 'center', marginBottom: 7 }}>
                    <ProfilePicture
                        uri="https://images.unsplash.com/photo-1506794778202-cad84cf45f1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                        size={70}
                        style={{ alignSelf: 'flex-start', marginHorizontal: 10, marginVertical: 7 }}
                    />
                    <View>
                        <Text style={{ fontSize: 18, fontWeight: 'semibold', color: Colors.text }}>John Caleb</Text>
                        <Text style={{ color: Colors.text, fontSize: 12, fontWeight: 'normal' }}>alexajibo05@gmail.com</Text>
                        <Text style={{ color: Colors.subtext, fontSize: 12, fontWeight: 'light' }}>Edit your profile</Text>
                    </View>
                </View>
                <View style={{ alignSelf: 'flex-end', marginHorizontal: 5 }}>
                    <Button
                        title="Edit Profile"
                        onPress={() => { }}
                        style={{ backgroundColor: Colors.primaryNormal, height: 35, paddingHorizontal: 30, }}
                        textStyle={{ fontSize: 12, fontWeight: 'light', color: Colors.text }}
                    />
                </View>
            </View>

            <View style={{ gap: 2, flexDirection: 'row', justifyContent: 'flex-start', marginHorizontal: 10, marginVertical: 7 }}>
                <Ionicons name={"shield-checkmark"}
                    size={20}
                    color={Colors.foodIcon} />
                <Text style={{ fontSize: 20, fontWeight: 'semibold', color: Colors.text }}>Account and Security</Text>
            </View>
            <View style={{ marginHorizontal: 5, width: 346, height: 175, backgroundColor: Colors.cardBackground, borderRadius: 15, marginBottom: 15 }}>
                <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10, marginVertical: 15, marginBottom: 20 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                        <Ionicons name={"refresh"}
                            size={20}
                            color={Colors.techIcon} />
                        <Text style={{ fontSize: 18, fontWeight: 'regular', color: Colors.text }}>Reset Password</Text>
                    </View>
                    <View>
                        <Ionicons name={"chevron-forward"}
                            size={20}
                            color={Colors.text} />
                    </View>
                </View>

                <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10, marginVertical: 15, marginBottom: 20 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                        <Ionicons name={"lock-closed"}
                            size={20}
                            color={Colors.sportsIcon} />
                        <Text style={{ fontSize: 18, fontWeight: 'regular', color: Colors.text }}>2 Factor Authentification</Text>
                    </View>
                    <View>
                        <Ionicons name={"chevron-forward"}
                            size={20}
                            color={Colors.text} />
                    </View>
                </View>

                <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10, marginVertical: 15 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                        <Ionicons name={"help"}
                            size={20}
                            color={Colors.partiesIcon} />
                        <Text style={{ fontSize: 18, fontWeight: 'regular', color: Colors.text }}>Help and Support</Text>
                    </View>
                    <View>
                        <Ionicons name={"chevron-forward"}
                            size={20}
                            color={Colors.text} />
                    </View>
                </View>
            </View>

            <Button
                title="Logout"
                onPress={() => { }}
                style={{ backgroundColor: Colors.gymIcon, paddingVertical: 20, paddingHorizontal: 100, alignSelf: 'center', marginVertical: 15 }}
                textStyle={{ fontSize: 12, fontWeight: 'light', color: Colors.text }}
            />


        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 5
    },
    text: {
        fontSize: 26,
        fontWeight: 'bold',
        color: Colors.text
    },
});
