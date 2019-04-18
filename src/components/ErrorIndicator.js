import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const ErrorIndicator = () => (
    <View style={styles.container}>
        <Text style={styles.textTitle}>ERROR!</Text>
        <Text style={styles.text}>We have already fixing</Text>
    </View>
)

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  textTitle: {
    fontSize: 25,
    color: '#444'
  },
  text: {
    fontSize: 17,
    color: '#444'
  }
})

export default ErrorIndicator
