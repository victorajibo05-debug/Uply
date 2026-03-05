import { Colors } from '@/constants/colors';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

type HappeningsoonCardProps = {
    image: any;
    title: string;
    time: string;
    location: string;
}
const Happeningsooncard: React.FC<HappeningsoonCardProps> = ({ image, title, time, location }) => {
    return (
        <View style={styles.card}>
            <Image source={image} style={styles.image} />
            <View style={styles.textcontainer}>
                <Text style={styles.title}>{title}</Text>
                <View style={styles.locationContainer}>
                    <Ionicons name={"location"}
                        size={15}
                        color={Colors.locationIcon} />
                    <Text style={styles.locationText}>{location}</Text>
                </View>
                <View style={styles.timeContainer}>
                    <Ionicons name={"time"}
                        size={15}
                        color={Colors.locationIcon} />
                    <Text style={styles.timeText}>{time}</Text>
                </View>
            </View>
        </View>

    )
}

export default Happeningsooncard

const styles = StyleSheet.create({
    card: {
        width: 233,
        height: 60,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: 'transparent',
    },
    image: {
        height: 60,
        width: 60,
        borderRadius: 5,
        backgroundColor: Colors.cardBackground,
    },
    textcontainer: {
        flex: 1,
        marginLeft: 5,
    },
    title: {
        fontSize: 14,
        fontWeight: "medium",
        color: Colors.text,
        marginBottom: 5
    },
    locationContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 2,
        marginBottom: 5
    },
    locationText: {
        fontSize: 9,
        fontWeight: 'light',
        color: Colors.text
    },
    timeContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 2,
    },
    timeText: {
        fontSize: 9,
        fontWeight: 'light',
        color: Colors.text
    },

})