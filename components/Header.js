import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import styleVariables from '../utils/style-variables.json'

function Header() {
  return (
    <View style={styles.headerView}>
      <Text style={styles.headerTitle}>Welcome to Renter Reviews</Text>
      
    </View>
  )
}

const styles = StyleSheet.create({
  headerView: {
    backgroundColor: styleVariables.accent_color,
    width: '100vw',
    height: '3rem',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: styleVariables.padding_sm,
    paddingRight: styleVariables.padding_sm,
    marginBottom: styleVariables.padding_lg
  },
  headerTitle: {
    color: 'white',
    fontSize: styleVariables.font_size
  }
})

export default Header
