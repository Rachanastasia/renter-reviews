import React from 'react'
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native'
import styleVariables from '../utils/style-variables.json'
import { useRemoveRouterHeader } from '../hooks/useRemoveRouterHeader';
import ErrorMessage from './ErrorMessage'



function Register({ navigation }) {
  useRemoveRouterHeader(navigation)

  return (
    <View style={{ backgroundColor: 'white' }}>
      <View style={styles.inputWrapper}>
        <Text style={styles.label}>Name</Text>
        <TextInput autoCapitalize='none' style={styles.input} />
      </View>
      <View style={styles.inputWrapper}>
        <Text style={styles.label}>Email</Text>
        <TextInput autoCapitalize='none' style={styles.input} />
      </View>
      <View style={styles.inputWrapper}>
        <Text style={styles.label}>Password</Text>
        <TextInput autoCapitalize='none' style={styles.input} />
      </View>
      <View style={styles.inputWrapper}>
        <Text style={styles.label}>Repeat Password</Text>
        <TextInput autoCapitalize='none' style={styles.input} />
      </View>
      <ErrorMessage />
      <View style={styles.inputWrapper}>
        <TouchableOpacity title="Register" style={styles.button}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.linkText}>Already have an account?</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    height: '2rem',
    border: styleVariables.border,
    marginTop: styleVariables.padding_sm,
    marginBottom: styleVariables.padding_sm,
    padding: '0.2em',
    fontSize: styleVariables.font_size
  },
  label: {
    paddingRight: styleVariables.padding_sm,
    fontSize: styleVariables.font_size
  },
  button: styleVariables.button,
  buttonText: {
    color: "white",
    fontSize: styleVariables.font_size
  },
  linkText: {
    color: styleVariables.accent_color,
    fontSize: styleVariables.font_size,
    marginTop: styleVariables.padding_med,
    marginLeft: styleVariables.padding_sm
  },
  inputWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%"
  }
})

export default Register
