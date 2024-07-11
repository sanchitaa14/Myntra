import { ScrollView, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { Link } from 'expo-router'
import { SplashScreen, Stack } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import getIcons from '../constants/icons'
export default function App() {
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle= {{height:'100%'}}>
        <View className="w-full justify-center items-center h-full px-4">
            <Image
            source={getIcons.myntra}
            className="w-[130px] h-[84px]"
            resizeMode='contain'
            />
            <Text className="text-2xl font-bold text-center mt-4">
              <Link href="/home">
              Enter the world of Myntra
              </Link>             
            </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}