import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthProvider } from '../mumble/AuthContext'; // Import AuthProvider
import { Text } from 'react-native';

import EditProfileScreen from '../mumble/EditProfileScreen';
import HomeScreen from '../mumble/HomeScreen';
import ProfileScreen from '../mumble/ProfileScreen';
import PointsScreen from '../mumble/PointsScreen';
import OutfitDetails from '../mumble/OutfitDetails';
import AddOutfitScreen from '../mumble/AddOutfitScreen';
import SavedOutfitsScreen from '../mumble/SavedOutfitsScreen';
import LoginScreen from '../mumble/LoginScreen';
import RegisterScreen from '../mumble/RegisterScreen';

const Stack = createStackNavigator();

const Tinder = () => {
  return (
    <AuthProvider>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerTitle: () => <LogoTitle /> }} />
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerTitle: () => <ProTitle /> }} />
        <Stack.Screen name="EditProfile" component={EditProfileScreen} />
        <Stack.Screen name="Points" component={PointsScreen} />
        <Stack.Screen name="OutfitDetails" component={OutfitDetails} />
        <Stack.Screen name="AddOutfit" component={AddOutfitScreen} />
        <Stack.Screen name="SavedOutfits" component={SavedOutfitsScreen} />
      </Stack.Navigator>
    </AuthProvider>
  );
};

const LogoTitle = () => (
  <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#000' }}>Mumble</Text>
);

const ProTitle = () => (
  <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }}>Profile Section</Text>
);

export default Tinder;
