import { Colors } from '@/constants/colors';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Button from './Button';

type ForYouCardProps = {
    image: any;
    title: string;
    time: string;
    location: string;
    onAction: () => void

}
const ForYouCard: React.FC<ForYouCardProps> = ({ image, title, time, location, onAction }) => {
    return (
        <View style={styles.card}>
            <Image source={image} style={styles.image} />
            <View style={styles.textcontainer}>
                <Text style={styles.title}>{title}</Text>

                <View style={styles.locationContainer}>
                    <Ionicons name={"location"}
                        size={20}
                        color={Colors.locationIcon} />
                    <Text style={styles.locationText}>{location}</Text>
                </View>

                <View style={styles.timeContainer}>
                    <Ionicons name={"time"}
                        size={20}
                        color={Colors.locationIcon} />
                    <Text style={styles.timeText}>{time}</Text>
                </View>

                <View>
                    <Button title="Attend Event" onPress={onAction}
                        style={{ backgroundColor: Colors.primaryNormal, height: 35, paddingHorizontal: 30, alignSelf: 'flex-start' }}
                        textStyle={{ fontSize: 12, fontWeight: 'light', color: Colors.text }} />

                </View>

            </View>
        </View>

    )
}

export default ForYouCard

const styles = StyleSheet.create({
    card: {
        width: 346,
        alignSelf: 'center',
        height: 187,
        marginLeft: 5,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: Colors.cardBackground,
        marginBottom: 15,
        borderRadius: 35,
    },
    image: {
        height: 160,
        width: 155,
        borderRadius: 24,
        marginLeft: 10,
        backgroundColor: Colors.text
    },
    textcontainer: {
        flex: 1,
        marginLeft: 15,
    },
    title: {
        fontSize: 18,
        fontWeight: 'semibold',
        color: Colors.text,
        marginBottom: 30
    },
    locationContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 2,
        marginBottom: 5
    },
    locationText: {
        fontSize: 14,
        fontWeight: 'light',
        color: Colors.text
    },
    timeContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
        marginBottom: 17
    },
    timeText: {
        fontSize: 14,
        fontWeight: 'light',
        color: Colors.text
    },

})