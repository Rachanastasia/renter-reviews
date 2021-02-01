import React from 'react';
import Home from './components/Home'
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
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
      </NavigationContainer>
    </UserContextProvider >
  );
}


