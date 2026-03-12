import { RootStackParamList } from '@/app/_layout'
import Button from '@/components/Button'
import ThemedTextInput from '@/components/ThemedTextInput'
import ThemedView from '@/components/ThemedView'
import { Colors } from '@/constants/colors'
import { signIn } from '@/context/authService'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import React, { useState } from 'react'
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "Login">

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigation = useNavigation<NavigationProp>()

    const handleSignIn = async () => {
        if (!email || !password) {
            Alert.alert("Error", "Please fill in all fields")
            return
        }
        try {
            await signIn(email, password)
            Alert.alert("Success", "Account created!")
        } catch (error: any) {
            Alert.alert('Failed', 'Wrong Email or Password')
        }
    }


    return (
        <ThemedView style={{ flex: 1, paddingHorizontal: 5, }}>
            <View style={{ flexDirection: 'row', marginVertical: 70, marginHorizontal: 5, marginBottom: 5 }}>
                <Text style={{ fontSize: 26, fontWeight: 'bold', color: Colors.text }}>Login to your account</Text>
            </View>
            <View style={{ flexDirection: 'row', paddingHorizontal: 5, marginBottom: 50 }}>
                <Text style={{ fontSize: 16, color: Colors.text, fontWeight: 'light' }}>Enter your email address and password to login to
                    your account</Text>
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
                title="Login"
                onPress={handleSignIn}
                style={{ marginVertical: 20, backgroundColor: Colors.primaryNormal, paddingVertical: 20, alignSelf: 'center', paddingHorizontal: 140, position: 'absolute', bottom: 40 }}
                textStyle={{ fontSize: 12, fontWeight: 'light', color: Colors.text }}
            />
            <View style={{ position: 'absolute', bottom: 10, flexDirection: 'row', justifyContent: 'center', alignSelf: 'center', alignItems: 'center', marginVertical: 20 }}>
                <Text style={{ fontSize: 16, fontWeight: 'regular', color: Colors.text }}>Don't have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                    <Text style={{ fontSize: 16, fontWeight: 'regular', color: Colors.primaryNormal }}>Sign Up</Text>
                </TouchableOpacity>
            </View>

        </ThemedView>

    )
}

export default Login

const styles = StyleSheet.create({})