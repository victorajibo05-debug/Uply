import Button from '@/components/Button'
import ThemedView from '@/components/ThemedView'
import { Colors } from '@/constants/colors'
import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

const login = () => {
    return (
        <ThemedView style={{ flex: 1, paddingHorizontal: 5, }}>
            <View style={{ flexDirection: 'row', marginVertical: 50, marginHorizontal: 5, marginBottom: 5 }}>
                <Text style={{ fontSize: 26, fontWeight: 'bold', color: Colors.text }}>Login to your account</Text>
            </View>
            <View style={{ flexDirection: 'row', paddingHorizontal: 5, marginBottom: 40 }}>
                <Text style={{ fontSize: 16, color: Colors.text, fontWeight: 'regular' }}>Enter your email address and password to login to
                    your account</Text>
            </View>


            <View style={{ flexDirection: 'row', paddingHorizontal: 5, marginBottom: 8 }}>
                <Text style={{ fontSize: 16, color: Colors.text, fontWeight: 'regular' }}>Email Address</Text>
            </View>
            <View style={{ paddingHorizontal: 5, marginBottom: 10 }}>
                <TextInput style={{ borderRadius: 10, backgroundColor: Colors.cardBackground, paddingVertical: 20, paddingHorizontal: 30 }}
                    placeholder='Email'
                    keyboardType='email-address'
                />
            </View>

            <View style={{ flexDirection: 'row', paddingHorizontal: 5, marginBottom: 8 }}>
                <Text style={{ fontSize: 16, color: Colors.text, fontWeight: 'regular' }}>Password</Text>
            </View>
            <View style={{ paddingHorizontal: 5, marginBottom: 40 }}>
                <TextInput style={{ borderRadius: 10, backgroundColor: Colors.cardBackground, paddingVertical: 20, paddingHorizontal: 30 }}
                    placeholder='Password'
                    secureTextEntry={true}
                />
            </View>

            <Button
                title="Login"
                onPress={() => { }}
                style={{ backgroundColor: Colors.primaryNormal, paddingVertical: 20, alignSelf: 'center', }}
                textStyle={{ fontSize: 12, fontWeight: 'light', color: Colors.text }}
            />

        </ThemedView>

    )
}

export default login

const styles = StyleSheet.create({})