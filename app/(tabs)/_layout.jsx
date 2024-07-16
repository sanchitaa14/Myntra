import { View, Text, Image } from 'react-native'
import React from 'react'
import {Tabs, Redirect} from 'expo-router'

const TabIcon = ({icon, color, name, focused}) => {
    return (
        <View className="items-center justify-center gap-2">
            <Image
                source = {{ uri: icon }}
                resizeMode="contain"
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
          headerShown: false,
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
                    icon='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQmMjoXbgERw9_dWdqL8V05U_0dr2SlXnz4Q&s'
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
                    icon='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWI4jyX6SirJEqJ1DWQT6XT1q48m311xu6Dg&s'
                    color = {color}
                    name = "Mumble"
                    focused={focused}
                />
            )
        }} />
       
        <Tabs.Screen name="explore" 
        options={{
            title: 'Explore',
            headerStyle: { backgroundColor: '#f4511e' },
            headerTintColor: '#fff',
            tabBarIcon: ({color, focused}) => (
                <TabIcon
                    icon='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBJt6ae_wcgPHZ88ERhEjFwZqn_5lhvxYv1g&s'
                    color = {color}
                    name = "Explore"
                    focused={focused}
                />
            )
        }} />
        <Tabs.Screen name="blog" 
        options={{
            title: 'Blog',
            headerStyle: { backgroundColor: '#f4511e' },
            headerTintColor: '#fff',
            tabBarIcon: ({color, focused}) => (
                <TabIcon
                    icon='https://revenuearchitects.com/wp-content/uploads/2017/02/Blog_pic-1030x584.png'
                    color = {color}
                    name = "Blogs"
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
                    icon='https://images.rawpixel.com/image_png_social_square/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png'
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