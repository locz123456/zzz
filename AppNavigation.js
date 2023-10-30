import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import MapZ from './Map';
import { Dimensions, LogBox, Platform, Text, View } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeIcon as HomeOutline, MapIcon as MapOutline, BoltIcon as BoltOutline } from 'react-native-heroicons/outline';
import { HomeIcon as HomeSolid, MapIcon as MapSolid, BoltIcon as BoltSolid } from 'react-native-heroicons/solid';
import Synthetic from './Synthetic';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const ios = Platform.OS == 'ios';

export default function AppNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                contentStyle: { backgroundColor: 'white' }
            }}>
                <Stack.Screen name="Home" options={{ headerShown: false }} component={HomeTabs} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

function HomeTabs() {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            headerShown: false,
            tabBarLabelStyle: {
                fontSize: 15
            },
            tabBarActiveTintColor: 'pink',
            tabBarIcon: ({ focused }) => menuIcons(route, focused),
            tabBarStyle: {
                margin: 3,
                padding: 5
            },
        })}
        >
            <Tab.Screen name="Trang chủ" component={Home} />
            <Tab.Screen name="Bản đồ" component={MapZ} />
            <Tab.Screen name="Tổng hợp" component={Synthetic} />
        </Tab.Navigator>
    )
}

const menuIcons = (route, focused) => {
    let icon;

    if (route.name === 'Trang chủ') {
        icon = focused ? <HomeSolid size="30" color='pink' /> : <HomeOutline size="30" color="gray" />
    } else if (route.name === 'Bản đồ') {
        icon = focused ? <MapSolid size="30" color='pink' /> : <MapOutline size="30" color="gray" />
    } else if (route.name === 'Tổng hợp') {
        icon = focused ? <BoltSolid size="30" color='pink' /> : <BoltOutline size="30" color="gray" />
    }


    let buttonClass = focused ? "bg-white" : "";
    return (
        <View className={"flex items-center rounded-full p-3 shadow " + buttonClass}>
            {icon}
        </View>
    )
}