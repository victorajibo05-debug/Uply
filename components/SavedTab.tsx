import { images } from '@/assets/images'
import React from 'react'
import { FlatList, Pressable, View } from 'react-native'
import ForYouCard from './ForYoucard'

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

export default function AttendingTab() {
    return (
        <View style={{ height: 550 }}>
            <FlatList
                data={forYouData}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <Pressable>
                        <ForYouCard
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


    )
}