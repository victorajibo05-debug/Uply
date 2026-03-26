import { Colors } from '@/constants/colors';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

type FABProps = {
    onPress: () => void;
}

const FAB = ({ onPress }: FABProps) => {
    return (
        <TouchableOpacity style={styles.fab} onPress={onPress}>
            <Text style={styles.fabIcon}>+</Text>
        </TouchableOpacity>
    );
};

export default FAB;

const styles = StyleSheet.create({
    fab: {
        position: 'absolute',
        bottom: 32,
        right: 24,
        width: 56,
        height: 56,
        borderRadius: 28,
        backgroundColor: Colors.primaryNormal,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 6,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
    },
    fabIcon: {
        fontSize: 28,
        color: Colors.text,
        lineHeight: 30,
    }
});