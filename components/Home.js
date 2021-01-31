import React from 'react'
import { Text, View } from 'react-native'
import { useRemoveRouterHeader } from '../hooks/useRemoveRouterHeader';


function Home({ navigation }) {
  useRemoveRouterHeader(navigation)
  return (
    <View>
      <Text>HOME</Text>
    </View>
  )
}

export default Home
