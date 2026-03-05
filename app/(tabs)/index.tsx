import { Link } from 'expo-router'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const index = () => {
  return (
    <View>
      <Link href="/(auth)/login" style={styles.link}><Text>Continue</Text>
      </Link>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  link: {
    marginVertical: 10,
    borderBottomWidth: 1
  }
})