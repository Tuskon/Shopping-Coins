import React, { useEffect, useState } from 'react';
import {  ActivityIndicator, ImageBackground, StyleSheet } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Market from './src/Market/market';
import Login from './src/Login/login';
import SignUp from './src/SignUp/signup';
import Market_Cart from './src/Market_Cart/market_cart';
import Settings from './src/Settings/settings';
import Change_Name from './src/Change_Name/change_name';
import Change_Password from './src/Change_Password/change_password';
import Change_Password_Login from './src/Change_Password/change_password_login';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { getEmail } from '@/Session';

const styles = StyleSheet.create({
    splashContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loader: {
        position: 'absolute',
        bottom: 50,  
    },
});

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

type StackNavigation = {
    Login: undefined;
    SignUp: undefined;
    Change_Name:undefined;
    Change_Password:undefined;
    Change_Password_Login: undefined
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


function TabNavigation() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: {
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    paddingVertical: 5,
                },
                tabBarActiveTintColor: '#7B22D3',
            }}
        >
            <Tab.Screen
                name="Market"
                component={Market}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Market_Cart"
                component={Market_Cart}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="shopping" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Settings"
                component={Settings}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}


export function StackNavigation() {
    const [initialRoute, setInitialRoute] = useState<'Login' | 'MainTabs'>('Login');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkSession = async () => {
            try {
                const email = await getEmail();
                if (email) {
                    setInitialRoute('MainTabs');
                }
            } catch (error) {
                console.error("Erro ao verificar a sessão:", error);
            } finally {
                setTimeout(() => {
                    setLoading(false);
                }, 4000); 
            }
        };
        checkSession();
    }, []);

    if (loading) {
        return (
            <ImageBackground 
                source={require('../app/assets/Splashscreen.png')} 
                style={styles.splashContainer}
                resizeMode="cover"
            >
                <ActivityIndicator size="large" color="#ffffff" style={styles.loader} />
            </ImageBackground>
        );
    }


    if (loading) {

        return null;
    }

    return (
        
            <Stack.Navigator initialRouteName={initialRoute}>
                <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
                <Stack.Screen options={{ headerShown: false }} name="SignUp" component={SignUp} />
                <Stack.Screen options={{ headerShown: false }} name="Change_Name" component={Change_Name} />
                <Stack.Screen options={{ headerShown: false }} name="Change_Password" component={Change_Password} />
                <Stack.Screen options={{ headerShown: false }} name="Change_Password_Login" component={Change_Password_Login} />
                <Stack.Screen options={{ headerShown: false }} name="MainTabs" component={TabNavigation} />
            </Stack.Navigator>
        
    );
}
