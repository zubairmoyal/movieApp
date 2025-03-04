import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Screen/Home';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialIcons';
import Popular from './Screen/Popular';
const Tab = createBottomTabNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#fff',
          height: 60,
        },
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: 'bold',
          color: 'black',
        },
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'gray',
      }}>
        <Tab.Screen name="Home" component={Home} options={{
          tabBarIcon: ({ }) => (
            <MaterialCommunityIcons name="home" color="#000" size={24} />
          )
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default Navigation

const styles = StyleSheet.create({})