import { useState } from "react";
import { StyleSheet, TextInput, TextInputProps } from "react-native";
import { Colors } from "../constants/colors";

interface ActiveTextInputProps extends TextInputProps { }

const ActiveTextInput = ({ style, onFocus, ...restProps }: ActiveTextInputProps) => {
    const [Focused, setIsFocused] = useState(false);

    const handleFocus = (e: any) => {
        setIsFocused(true);
        if (onFocus) {
            onFocus(e);
        }
    }

    const inputStyle = {
        ...styles.input,
        borderColor: Focused ? Colors.primaryNormal : Colors.text,
        borderWidth: Focused ? 1 : 0,
        ...(typeof style === 'object' ? style : {}),
    }

    return (
        <TextInput
            style={inputStyle}
            onFocus={handleFocus}
            onBlur={() => setIsFocused(false)}
            placeholderTextColor={Colors.subtext}
            {...restProps}
        />
    )
}
export default ActiveTextInput

const styles = StyleSheet.create({
    input: {
        borderRadius: 10,
        backgroundColor: Colors.cardBackground,
        paddingVertical: 20,
        paddingHorizontal: 30,
        color: Colors.text
    }
})