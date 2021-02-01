import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { useRemoveRouterHeader } from '../hooks/useRemoveRouterHeader';


function Home({ navigation }) {
  useRemoveRouterHeader(navigation)
  return (
    <View style={{ backgroundColor: 'white' }}>
      <Text>HOME</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home
