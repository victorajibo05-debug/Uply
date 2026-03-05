import { images } from '@/assets/images/index'
import ThemedView from '@/components/ThemedView'
import { Colors } from '@/constants/colors'
import { Ionicons } from '@expo/vector-icons'
import { Link } from 'expo-router'
import React from 'react'
import { FlatList, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'

//components
import ForYoucard from '@/components/ForYoucard'
import Happeningsooncard from '@/components/Happeningsooncard'
import ProfilePicture from '@/components/ProfilePicture'


const happeningSoonData = [
    {
        id: 'First',
        title: 'Summer Days HangOut',
        image: images.tech,
        location: 'Allen Avenue',
        time: '15:00 PM',
    },
    {
        id: 'Second',
        title: 'Let there be light',
        image: images.church,
        location: 'Oba Akran',
        time: '10:00 AM',
    },
    {
        id: 'Third',
        title: 'Boat Party',
        image: images.vibe,
        location: 'Ikeja, Lagos',
        time: '12:00 PM',
    },
];

const forYouData = [
    {
        id: 'First',
        title: 'Boat Party',
        image: images.tech,
        location: 'Allen Avenue',
        time: '12:00PM',
        onAction: () => { },

    },
    {
        id: 'Second',
        title: 'Let there be light',
        image: images.church,
        location: 'Allen Avenue',
        time: '12:00PM',
        onAction: () => { },

    },
    {
        id: 'Third',
        title: 'New year Bash',
        image: images.vibe,
        location: 'Allen Avenue',
        time: '12:00PM',
        onAction: () => { },

    }
]

const Home = () => {
    return (
        <ScrollView>
            <ThemedView style={styles.container} safe={true}>
                <View style={styles.header}>
                    <ProfilePicture
                        uri="https://images.unsplash.com/photo-1506794778202-cad84cf45f1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                        size={45}
                    />
                    <Text style={styles.headerTitle}>Welcome, Caleb</Text>
                </View>

                <View style={styles.content}>
                    <View style={styles.row}>
                        <Text style={styles.contentTitle}>Happening Soon</Text>
                    </View>
                    <View style={styles.linkContainer}>
                        <Link href="/Happening Soon/[id]" asChild>
                            <Pressable style={styles.link}>
                                <Text style={{ color: Colors.subsubText }}>View all</Text>
                                <Ionicons name={"chevron-forward"}
                                    size={18}
                                    color={Colors.subtext} />
                            </Pressable>
                        </Link>
                    </View>
                </View>

                <View style={styles.content2}>
                    <Ionicons style={{ alignSelf: 'flex-start' }} name={"location"}
                        size={24}
                        color={Colors.locationIcon} />
                    <Text style={styles.contentTitle2}>Near: Ikeja, Lagos</Text>
                </View>

                <View style={{ flexDirection: "row", alignSelf: 'flex-start', marginHorizontal: 5, marginBottom: 12 }}>
                    <Text style={{ color: Colors.text, fontSize: 16, fontWeight: 'medium' }}>Today. This Week. Next Week</Text>
                </View>

                <View style={styles.happeningSoonContainer}>
                    <FlatList
                        data={happeningSoonData}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <Pressable>
                                <Happeningsooncard
                                    image={item.image}
                                    title={item.title}
                                    time={item.time}
                                    location={item.location}
                                />
                            </Pressable>
                        )}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{ paddingHorizontal: 12, paddingTop: 10, paddingBottom: 10, borderRadius: 10, gap: 12 }}
                    />
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 5, marginBottom: 12 }}>
                    <View style={{ flexDirection: "row", alignItems: 'center', gap: 10 }}>
                        <Ionicons name={'sparkles'}
                            size={24}
                            color={Colors.partiesIcon} />
                        <Text style={{ color: Colors.text, fontSize: 18, fontWeight: 'bold' }}>For You</Text>
                    </View>

                    <View style={{ alignItems: 'center' }}>
                        <Link href="/Happening Soon/[id]" asChild>
                            <Pressable style={styles.link}>
                                <Text style={{ color: Colors.subsubText }}>View all</Text>
                                <Ionicons name={"chevron-forward"}
                                    size={18}
                                    color={Colors.subtext} />
                            </Pressable>
                        </Link>
                    </View>
                </View>
                <View style={{ justifyContent: 'center' }}>
                    <FlatList
                        data={forYouData}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <Pressable>
                                <ForYoucard
                                    image={item.image}
                                    title={item.title}
                                    time={item.time}
                                    location={item.location}
                                    onAction={() => console.log("Attend")}
                                />
                            </Pressable>
                        )}
                        showsVerticalScrollIndicator={false}
                    />
                </View>

            </ThemedView >

        </ScrollView>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 5,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        marginVertical: 15,
        marginBottom: 25,
        marginHorizontal: 5
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'semibold',
        color: Colors.text,
    },
    content: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 5
    },
    contentTitle: {
        marginHorizontal: 5,
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.text,
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    link: {
        alignSelf: 'flex-end',
        flexDirection: 'row',
        alignItems: 'center',
    },
    linkContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-end'
    },
    text: {
        color: Colors.text
    },
    content2: {
        flexDirection: "row",
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginBottom: 15,

    },
    contentTitle2: {
        color: Colors.subtext,
        fontSize: 14,
        fontWeight: 'medium'
    },

    happeningSoonContainer: {
        flexDirection: "row",
        justifyContent: 'flex-start',
        marginBottom: 25,
    },
})