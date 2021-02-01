import React, { useContext, Fragment } from 'react'
import { Text, View, Stylesheet } from 'react-native'
import { UserContext } from '../contexts/userContext'
import styleVariables from '../utils/style-variables.json'


function ErrorMessage() {
  const { error } = useContext(UserContext)
  return (
    <Fragment>
      {error ?
        <View>
          <Text style={styles.errorText}>{error}</Text>
        </View> : null}
    </Fragment>
  )
}

const styles = Stylesheet.create({
  errorText: {
    color: styleVariables.error_color,
    fontSize: styleVariables.font_size
  }
})

export default ErrorMessage
