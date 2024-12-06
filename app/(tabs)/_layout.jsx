import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons'
import Colors from '@/constants/Colors'

const TabLayout = () => {
  return (
    <Tabs
    screenOptions={{
        tabBarActiveTintColor:Colors.PRIMARY
    }}
    >
      <Tabs.Screen
        name='home'
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='home' color={color} size={24} />
          ),
          tabBarActiveTintColor:Colors.PRIMARY,
        }}
      />
      <Tabs.Screen name='favorite' 
       options={{
        title: 'Favorite',
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <Ionicons name='heart' color={color} size={24} />
        ),
        tabBarActiveTintColor:Colors.PRIMARY,
      }}
      />
      <Tabs.Screen name='inbox'
       options={{
        title: 'Inbox',
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <Ionicons name='chatbubble' color={color} size={24} />
        ),
        tabBarActiveTintColor:Colors.PRIMARY,
      }}
      />
      <Tabs.Screen name='profile' 
       options={{
        title: 'Profile',
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <Ionicons name='people-circle' color={color} size={24} />
        ),
        tabBarActiveTintColor:Colors.PRIMARY,
      }}
      />
    </Tabs>
  )
}

export default TabLayout
