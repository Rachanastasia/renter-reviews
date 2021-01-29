import React from 'react'
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native'

function Register() {
  return (
    <View>
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
      <TouchableOpacity title="Login" style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

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
  inputWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%"
  }
})

export default Register
