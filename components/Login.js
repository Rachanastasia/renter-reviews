import React, { useState, useContext } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, ViewStyle, TextStyle, TextInputProps, TextInput } from 'react-native'
import styleVariables from '../utils/style-variables.json'
import { UserContext } from '../contexts/userContext'


function Login() {
  const { handleLogin, error } = useContext(UserContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <View>
      <View style={styles.inputWrapper}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          autoCapitalize='none'
          style={styles.input}
          onChangeText={t => setEmail(t)} />
      </View>
      <View style={styles.inputWrapper}>
        <Text style={styles.label}>Password</Text>
        <TextInput
          autoCapitalize='none'
          style={styles.input}
          onChangeText={t => setPassword(t)} />
      </View>
      {error ? <Text>{error}</Text> : null}
      <View style={styles.inputWrapper}>
        <TouchableOpacity
          style={styles.button}
          onClick={() => handleLogin()}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onClick={() => { }}>
          <Text style={styles.linkText}>Create an account</Text>
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

export default Login
