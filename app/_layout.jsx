import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SplashScreen, Slot, Stack } from 'expo-router'

// SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  return (
    <Stack>
        <Stack.Screen name="index"
        options={{headerShown: false}}/>
    </Stack>
  
  ) //basically renders the current child route
}

export default RootLayout
//you can use slot or stack
