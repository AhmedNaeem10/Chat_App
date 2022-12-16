import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AllChat from '../screens/ChatsPage';
import NewChat from '../screens/NewChatPage';
import Community from '../screens/CommunityPage';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const Tab = createBottomTabNavigator();

export default function AllChatNavigator() {
  
  return (
        <Tab.Navigator
        style={{backgroundColor: "pink"}}
        
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'Chats') {
                iconName = focused
                  ? 'chat'
                  : 'chat-outline';
              } else if (route.name === 'Compose') {
                iconName = focused ? 'chat-plus' : 'chat-plus-outline';
              } else if (route.name === 'Community') {
                iconName = focused ? 'account-group' : 'account-group-outline';
              }
              return <MaterialCommunityIcons size={25} name={iconName} color={"#075e54"}  />;
            },
            tabBarActiveTintColor: '#075e54',
            tabBarInactiveTintColor: 'gray',
            headerShown: false,
          })}
        >
           <Tab.Screen name="Chats" component={AllChat} options={{ tabBarBadge: 5, unmountOnBlur: true }} />
           <Tab.Screen name="Compose" component={NewChat} />
           <Tab.Screen name="Community" component={Community} options={{ tabBarBadge: 1 }} />
           
         </Tab.Navigator>
  );
}
