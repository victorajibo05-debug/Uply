import React from 'react';
import { Image, StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';

interface ProfilePictureProps {
    uri: string;
    size?: number;
    onPress?: () => void;
    style?: ViewStyle;
}

export default function ProfilePicture({
    uri,
    size = 40,
    onPress,
    style
}: ProfilePictureProps) {

    const imageStyle = {
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor: '#E1E1E1',
    };

    const imageContent = (
        <Image
            source={{ uri }}
            style={[styles.image, imageStyle, style]}
            resizeMode="cover"
        />
    );

    if (onPress) {
        return (
            <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
                {imageContent}
            </TouchableOpacity>
        );
    }

    return imageContent;
}

const styles = StyleSheet.create({
    image: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.1)',
    },
});