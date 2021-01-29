import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './components/Login'
import Header from './components/Header'
import UserContextProvider from './contexts/userContext'

export default function App() {
  return (
    <UserContextProvider>
      <View style={styles.container}>
        <Header />
        <Login />
      </View>
    </UserContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
