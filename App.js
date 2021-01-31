import { StatusBar } from 'expo-status-bar';
import React, { useLayoutEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './components/Login'
import Register from './components/Register'
import Header from './components/Header'
import UserContextProvider from './contexts/userContext'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'






export default function App() {

  const Stack = createStackNavigator()

  return (
    <UserContextProvider>
      <Header />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
      </NavigationContainer>
    </UserContextProvider >
  );
}


