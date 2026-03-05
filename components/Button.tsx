import { Colors } from '@/constants/colors';
import React from 'react';
import { StyleProp, StyleSheet, Text, TextStyle, TouchableOpacity, ViewStyle } from 'react-native';

interface ButtonProps {
    onPress?: () => void;
    title?: string;
    style?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
    children?: React.ReactNode;
}

export default function Button({ onPress, title, style, textStyle, children }: ButtonProps) {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
            {children ? children : <Text style={[styles.text, textStyle]}>{title || 'Button'}</Text>}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 155,
        paddingVertical: 10,
        backgroundColor: Colors.buttonBackground,
        borderRadius: 45,
        alignItems: 'center',
        justifyContent: 'center',
        color: Colors.primaryNormal
    },
    text: {
        color: Colors.text,
        fontSize: 18,
        fontWeight: '600',
    },
});