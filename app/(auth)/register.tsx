import { RootStackParamList } from '@/app/_layout'
import Button from '@/components/Button'
import ThemedTextInput from '@/components/ThemedTextInput'
import ThemedView from '@/components/ThemedView'
import { Colors } from '@/constants/colors'
import { signUp } from '@/context/authService'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import React, { useState } from 'react'
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "Register">



const Register = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigation = useNavigation<NavigationProp>()

    const handleSignUp = async () => {
        try {
            await signUp(username, email, password)
            navigation.navigate('Home');
            Alert.alert("Success", "Account created!")
        } catch (error: any) {
            console.log(error)
            Alert.alert('Failed', 'Wrong Email or Password')
        }
    }

    return (
        <ThemedView style={{ flex: 1, paddingHorizontal: 5, }}>
            <View style={{ flexDirection: 'row', marginVertical: 70, marginHorizontal: 5, marginBottom: 5 }}>
                <Text style={{ fontSize: 26, fontWeight: 'bold', color: Colors.text }}>Create your account</Text>
            </View>
            <View style={{ flexDirection: 'row', paddingHorizontal: 5, marginBottom: 50 }}>
                <Text style={{ fontSize: 16, color: Colors.text, fontWeight: 'light' }}>Enter your email address and password to create your account</Text>
            </View>

            <View style={{ flexDirection: 'row', paddingHorizontal: 5, marginBottom: 8 }}>
                <Text style={{ fontSize: 16, color: Colors.text, fontWeight: 'regular' }}>Username</Text>
            </View>
            <View style={{ paddingHorizontal: 5, marginBottom: 10 }}>
                <ThemedTextInput
                    placeholder='Username'
                    keyboardType='default'
                    placeholderTextColor={Colors.subtext}
                    value={username}
                    onChangeText={setUsername}
                />
            </View>


            <View style={{ flexDirection: 'row', paddingHorizontal: 5, marginBottom: 8 }}>
                <Text style={{ fontSize: 16, color: Colors.text, fontWeight: 'regular' }}>Email Address</Text>
            </View>
            <View style={{ paddingHorizontal: 5, marginBottom: 10 }}>

                <ThemedTextInput
                    placeholder='Email'
                    keyboardType='email-address'
                    placeholderTextColor={Colors.subtext}
                    value={email}
                    onChangeText={setEmail}
                />
            </View>

            <View style={{ flexDirection: 'row', paddingHorizontal: 5, marginBottom: 8 }}>
                <Text style={{ fontSize: 16, color: Colors.text, fontWeight: 'regular' }}>Password</Text>
            </View>
            <View style={{ paddingHorizontal: 5, marginBottom: 80 }}>

                <ThemedTextInput
                    placeholder='Password'
                    secureTextEntry={true}
                    placeholderTextColor={Colors.subtext}
                    value={password}
                    onChangeText={setPassword}
                />
            </View>

            <Button
                title="Sign Up"
                onPress={handleSignUp}
                style={{ marginVertical: 20, backgroundColor: Colors.primaryNormal, paddingVertical: 20, alignSelf: "center", width: '100%', position: 'absolute', bottom: 40 }}
                textStyle={{ fontSize: 12, fontWeight: 'light', color: Colors.text }}
            />
            <View style={{ position: 'absolute', bottom: 10, flexDirection: 'row', justifyContent: 'center', alignSelf: 'center', alignItems: 'center', marginVertical: 20 }}>
                <Text style={{ fontSize: 16, fontWeight: 'regular', color: Colors.text }}>Do you have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                    <Text style={{ fontSize: 16, fontWeight: "regular", color: Colors.primaryNormal }}>Sign In</Text>
                </TouchableOpacity>
            </View>


        </ThemedView>

    )
}

export default Register

const styles = StyleSheet.create({
    alert: {
        backgroundColor: Colors.cardBackground,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: Colors.gymIcon,
        paddingVertical: 20,
        alignSelf: "center",
        width: '100%',

    }
})
