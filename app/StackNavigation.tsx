import * as React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Market from './src/Market/market';
import Home from './src/Home/home';
import Login from './src/Login/login';
import SignUp from './src/SignUp/signup';
import Market_Cart from './src/Market_Cart/market_cart';
import Settings from './src/Settings/settings';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

type StackNavigation = {
    Login: undefined;
    SignUp: undefined;
    MainTabs: {
        screen: keyof TabNavigation;
    };
};

type TabNavigation = {
    Home: undefined;
    Market: undefined;
    Market_Cart: undefined;
    Settings: undefined;
};

export type StackTypes = NativeStackNavigationProp<StackNavigation>;

// Tab Navigator component
function TabNavigation() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false, 
                tabBarStyle:{
                    borderTopLeftRadius:20,
                    borderTopRightRadius:20,
                    paddingVertical: 5, 
                },
                tabBarActiveTintColor: '#7B22D3'
            }}
        >
            <Tab.Screen
                name="Market"
                component={Market}
                options={{
                    headerShown:false,
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Market_Cart"
                component={Market_Cart}
                options={{
                    headerShown:false,
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="shopping" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Settings"
                component={Settings}
                options={{
                    headerShown:false,
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

// Stack Navigator component
export function StackNavigation() {
    return (
       
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
                <Stack.Screen options={{ headerShown: false }} name="SignUp" component={SignUp} />
                <Stack.Screen options={{ headerShown: false }} name="MainTabs" component={TabNavigation} />
            </Stack.Navigator>
    );
}
