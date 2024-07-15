import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SplashScreen, Slot, Stack } from 'expo-router'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BlogDetailScreen from './blogDetail';
import BlogScreen from './(tabs)/blog';

// SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index"
        options={{ headerShown: false }} />

      <NavigationContainer>
        <Stack.Navigator initialRouteName="Blog">
          <Stack.Screen name="blog" component={BlogScreen} options={{ headerShown: false }} />
          <Stack.Screen name="BlogDetail" component={BlogDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Stack>

  ) //basically renders the current child route
}

export default RootLayout
//you can use slot or stack
