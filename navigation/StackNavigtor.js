import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingPage from '../screens/LandingPage';
import AllChatNavigator from './BottomTabNavigator';
import ChatPage from '../screens/ChatPage';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName="Landing"
            >
                <Stack.Screen name="Home" component={LandingPage} />
                <Stack.Screen name="Chats" component={AllChatNavigator} />
                <Stack.Screen name="OpenChat" component={ChatPage} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}