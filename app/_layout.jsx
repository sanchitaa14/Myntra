// import React from 'react';
// import { Text } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import StoreSelection from './index';
// import ProductDetailScreen from './screens/ProductDetail';
// import PointsScreen from './screens/PointsScreen';
// import OutfitDetails from './screens/OutfitDetails';
// import ProfileScreen from './screens/ProfileScreen';
// import AddOutfitScreen from './screens/AddOutfitScreen';
// import Home from './(tabs)/home';
// import TabsLayout from './(tabs)/_layout';

// const Stack = createNativeStackNavigator();

// const RootLayout = () => {
//   return (
//     // <NavigationContainer>
//       <Stack.Navigator initialRouteName="index">
//         <Stack.Screen
//           name="index"
//           component={StoreSelection}
//           options={{ headerShown: false }}
//         />
//         <Stack.Screen
//           name="ProductDetail"
//           component={ProductDetailScreen}
//           options={{ headerShown: false }}
//         />
//         <Stack.Screen
//           name="Points"
//           component={PointsScreen}
//         />
//         <Stack.Screen
//           name="home" 
//           component={Home}
//         />
//         <Stack.Screen
//           name="OutfitDetails"
//           component={OutfitDetails}
//         />
//         <Stack.Screen
//           name="AddOutfit"
//           component={AddOutfitScreen}
//         />
//         <Stack.Screen
//           name="Profile"
//           component={ProfileScreen}
//           options={{
//             headerTitle: () => <ProTitle />,
//             headerTitleAlign: 'center',
//             headerStyle: {
//               backgroundColor: '#fff',
//             },
//           }}
//         />
//       </Stack.Navigator>
//     // </NavigationContainer>
//   );
// };

// const ProTitle = () => (
//   <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }}>Profile Section</Text>
// );

// export default RootLayout;
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Stack } from 'expo-router';
import ProductDetailScreen from './screens/ProductDetail';

function RootLayout() {
  return (
    
      <Stack>
        <Stack.Screen name ="index" 
        options={
          {
            headerShown:false
          }
        }/>
        <Stack.Screen
           name="(auth)"
           options={{ headerShown: false }}
         />
         <Stack.Screen
           name="(tabs)"
           options={{ headerShown: false }}
         />
         <Stack.Screen
           name="screens"
           options={{ headerShown: false }}
         />
      </Stack>
    
  );
}

export default RootLayout;
