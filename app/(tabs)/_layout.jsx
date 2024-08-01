import { View, Text, Image } from 'react-native';
import { Tabs, Redirect } from 'expo-router';
import React from 'react';


const TabIcon = ({ icon, color, name, focused }) => {
    return (
        <View style={{ alignItems: 'center', justifyContent: 'center', gap: 2 }}>
            <Image
                source={{ uri: icon }}
                resizeMode="contain"
                style={{ width: 24, height: 24 }}
            />
            <Text style={{ color: focused ? '#FFA001' : '#CDCDE0', fontSize: 10 }}>
                {name}
            </Text>
        </View>
    );
};

function AppTabs() {
  return (
    <>
    <Tabs
    screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        
    }}
    >
        <Tabs.Screen
        name="home"
        options={
            {           
                title: "Home",    
                tabBarIcon: ({ focused }) => (
                    <TabIcon
                    icon="https://static.vecteezy.com/system/resources/previews/000/627/779/original/house-icon-symbol-sign-vector.jpg"
                    name = "Home"
                    focused={focused}
                    />
                    ),
                headerShown: false,
            }
        }
        />
        <Tabs.Screen
        name="explore"
        options={
            {
                title: 'Explore',
                tabBarIcon: ({ focused }) => (
                    <TabIcon
                    icon="https://th.bing.com/th/id/OIP.aVi5j1VlvkrfgyakjsciGwHaHa?w=195&h=195&c=7&r=0&o=5&dpr=1.5&pid=1.7"
                    name = "Explore"
                    focused={focused}
                    />
                    ),
                headerShown: false,
            }
        }
        screenOptions={{
            headerTitle: 'Explore',
            headerShown:false,
            tabBarShowLabel:false,
        }}
        />
        <Tabs.Screen
        name="blog"
        options={
            {
                title: 'Blog',
                tabBarIcon: ({ focused }) => (
                    <TabIcon
                    icon="https://th.bing.com/th/id/OIP.azgzGPpY81Qg7Y0ss6rBOwHaHa?w=195&h=195&c=7&r=0&o=5&dpr=1.5&pid=1.7"
                    name = "Blog"
                    focused={focused}
                    />
                    ),
                headerShown: false,
            }
        }
        screenOptions={{
            headerShown:false,
            tabBarShowLabel:false,
        }}
        />
        <Tabs.Screen
        name="tinder"
        options={
            {
                title: 'Mumble',
                tabBarIcon: ({ focused }) => (
                    <TabIcon
                    icon="https://th.bing.com/th/id/OIP.eGWr7YUKO8vyjdN_BDYcEQHaJy?rs=1&pid=ImgDetMain"
                    name = "Mumble"
                    focused={focused}
                    />
                    ),
                headerShown: false,
            }
        }
        />
        <Tabs.Screen
        name="profile"
        options={
            {
                title: 'Profile',
                tabBarIcon: ({ focused }) => (
                    <TabIcon
                    icon="https://th.bing.com/th?id=OIP.bJpr9jpclIkXQT-hkkb1KQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"
                    name = "Profile"
                    focused={focused}
                    />
                    ),
                headerShown: false,
            }
        }
        />
       </Tabs>
    </>
  );
}

export default AppTabs;
