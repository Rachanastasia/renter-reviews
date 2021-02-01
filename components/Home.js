import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { useRemoveRouterHeader } from '../hooks/useRemoveRouterHeader';
import Map from './Map'


function Home({ navigation }) {
  useRemoveRouterHeader(navigation)
  return (
    <View style={{ backgroundColor: 'white' }}>
      <Map />
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home
