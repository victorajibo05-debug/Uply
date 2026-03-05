import { Colors } from '@/constants/colors';
import React from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const ThemedView = ({ style, safe = false, ...props }) => {
    const insets = useSafeAreaInsets();
    const backgroundColor = Colors.background

    return (
        <View style={[{ backgroundColor: Colors.background }, safe && { paddingTop: insets.top, paddingBottom: insets.bottom }, style]} {...props} />
    );
}

export default ThemedView;
