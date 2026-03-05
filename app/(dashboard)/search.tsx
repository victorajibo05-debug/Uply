import { images } from '@/assets/images/index';
import ThemedView from '@/components/ThemedView';
import { Colors } from '@/constants/colors';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { FlatList, Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

import Filter from '@/components/Filter';

const filterData = [
    {
        id: "First",
        title: "Today"

    },
    {
        id: "Second",
        title: "Free"
    },
    {
        id: "Third",
        title: "Near Me"
    },
    {
        id: "Fourth",
        title: "This Week"
    },
    {
        id: "Fifth",
        title: "This Weekend"
    }
]
export default function SearchScreen() {
    return (
        <ScrollView>
            <ThemedView style={styles.container} safe>
                <View style={{ alignItems: 'center', flexDirection: 'row', marginVertical: 15, marginHorizontal: 5 }}>
                    <Text style={styles.text}>Search</Text>
                </View>
                <View style={{ height: 60, flexDirection: 'row', alignItems: 'center', marginHorizontal: 5, backgroundColor: Colors.cardBackground, borderRadius: 10, marginBottom: 15, paddingHorizontal: 10 }}>
                    <Ionicons name={'search'}
                        size={20}
                        color={Colors.text} />
                    <TextInput
                        placeholder="Search for events"
                        placeholderTextColor={Colors.subtext}
                        style={{
                            flex: 1,
                            fontSize: 16,
                            fontWeight: 'regular',
                            color: Colors.text,
                            marginLeft: 10
                        }}
                    />
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 32, gap: 8, marginHorizontal: 5 }}>
                    <Ionicons name={'filter'}
                        size={20}
                        color={Colors.text}
                        style={{ marginRight: 10 }}
                    />
                    <FlatList
                        data={filterData}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <Filter
                                title={item.title}
                            />
                        )}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        style={{ flex: 1 }}
                        contentContainerStyle={{ gap: 10, paddingRight: 20 }}
                    />
                </View>

                <View style={{ marginHorizontal: 5, paddingHorizontal: 10 }}>
                    <View style={{ marginHorizontal: 5, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 20, gap: 7 }}>
                        <View style={{ width: 172, height: 132, borderRadius: 10, marginBottom: 10 }}>
                            <Image source={images.techEvent} style={{ width: 172, height: 132, borderRadius: 10, marginBottom: 2 }} />
                            <Text style={{ fontSize: 14, fontWeight: 'regular', alignSelf: 'center', color: Colors.text }}>Tech</Text>
                        </View>
                        <View style={{ width: 172, height: 132, borderRadius: 10, marginBottom: 10 }}>
                            <Image source={images.music} style={{ width: 172, height: 132, borderRadius: 10, marginBottom: 2 }} />
                            <Text style={{ fontSize: 14, fontWeight: 'regular', alignSelf: 'center', color: Colors.text }}>Music</Text>
                        </View>
                    </View>


                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 18, gap: 7 }}>
                        <View style={{ width: 172, height: 132, borderRadius: 10, marginBottom: 10 }}>
                            <Image source={images.gym} style={{ width: 172, height: 132, borderRadius: 10, marginBottom: 2 }} />
                            <Text style={{ fontSize: 14, fontWeight: 'regular', alignSelf: 'center', color: Colors.text }}>Gym</Text>
                        </View>
                        <View style={{ width: 172, height: 132, borderRadius: 10, gap: 5, marginBottom: 10 }}>
                            <Image source={images.religion} style={{ width: 172, height: 132, borderRadius: 10, marginBottom: 0 }} />
                            <Text style={{ fontSize: 14, fontWeight: 'regular', alignSelf: 'center', color: Colors.text }}>Religion</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 18, gap: 7 }}>
                        <View style={{ width: 172, height: 132, borderRadius: 10, marginBottom: 10 }}>
                            <Image source={images.sport} style={{ width: 172, height: 132, borderRadius: 10 }} />
                            <Text style={{ fontSize: 14, fontWeight: 'regular', alignSelf: 'center', color: Colors.text }}>Sport</Text>
                        </View>
                        <View style={{ width: 172, height: 132, borderRadius: 10, gap: 5, marginBottom: 10 }}>
                            <Image source={images.business} style={{ width: 172, height: 132, borderRadius: 10 }} />
                            <Text style={{ fontSize: 14, fontWeight: 'regular', alignSelf: 'center', color: Colors.text }}>Business</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 18, gap: 7 }}>
                        <View style={{ width: 172, height: 132, borderRadius: 10, marginBottom: 10 }}>
                            <Image source={images.art} style={{ width: 172, height: 132, borderRadius: 10 }} />
                            <Text style={{ fontSize: 14, fontWeight: 'regular', alignSelf: 'center', color: Colors.text }}>Art</Text>
                        </View>
                        <View style={{ width: 172, height: 132, borderRadius: 10, gap: 5, marginBottom: 10 }}>
                            <Image source={images.parties} style={{ width: 172, height: 132, borderRadius: 10 }} />
                            <Text style={{ fontSize: 14, fontWeight: 'regular', alignSelf: 'center', color: Colors.text }}>Parties</Text>

                        </View>

                    </View>
                </View>

            </ThemedView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 5,
    },
    text: {
        fontSize: 26,
        fontWeight: 'bold',
        color: Colors.text
    },
});
