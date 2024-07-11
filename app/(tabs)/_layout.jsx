import { View, Text, Image } from 'react-native'
import React from 'react'
import {Tabs, Redirect} from 'expo-router'
import getIcons from '../../constants/icons'

const TabIcon = ({icon, color, name, focused}) => {
    return (
        <View className="items-center justify-center gap-2">
            <Image
                source = {icon}
                resizeMode="contain"
                tintColor = {color}
                className="w-6 h-6"
            />
            <Text className='text-xs'>
                {name}
            </Text>
        </View>
    )
}
const TabsLayout = () => {
  return (
    <>
    <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#FFA001",
          tabBarInactiveTintColor: "#CDCDE0",
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "#fff",
            borderTopWidth: 1,
            borderTopColor: "#232533",
            height: 50,
          },
        }}
      >
        <Tabs.Screen name="home" 
        options={{
            title: 'Home',
            headerStyle: { backgroundColor: '#f4511e' },
            headerTintColor: '#fff',
            tabBarIcon: ({color, focused}) => (
                <TabIcon
                    icon={getIcons.home}
                    color = {color}
                    name = "Home"
                    focused={focused}
                />
            )
        }} />
        <Tabs.Screen name="tinder" 
        options={{
            title: 'Tinder',
            headerStyle: { backgroundColor: '#f4511e' },
            headerTintColor: '#fff',
            tabBarIcon: ({color, focused}) => (
                <TabIcon
                    icon={getIcons.tinder}
                    color = {color}
                    name = "Tinder"
                    focused={focused}
                />
            )
        }} />
        <Tabs.Screen name="profile" 
        options={{
            title: 'Profile',
            headerStyle: { backgroundColor: '#f4511e' },
            headerTintColor: '#fff',
            tabBarIcon: ({color, focused}) => (
                <TabIcon
                    icon={getIcons.profile}
                    color = {color}
                    name = "Profile"
                    focused={focused}
                />
            )
        }} />
    </Tabs>
    </>
  )
}

export default TabsLayout