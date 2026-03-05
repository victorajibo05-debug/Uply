import { Colors } from '@/constants/colors';
import React from 'react';
import { Pressable, StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';

type FilterProps = {
    title: string;
    style?: StyleProp<ViewStyle>;
}

const Filter: React.FC<FilterProps> = ({ title, style }) => {
    return (
        <Pressable style={({ pressed }) => [pressed && styles.pressed, style]}>
            <View style={{ paddingHorizontal: 10, height: 37, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: Colors.text, borderRadius: 10 }}>
                <Text style={{ fontSize: 14, fontWeight: 'medium', color: Colors.text }}>{title}</Text>
            </View>
        </Pressable>
    )
}

export default Filter

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.5
    }
})