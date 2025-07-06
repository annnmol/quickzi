import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Demo = () => {
  return (
    <View style={styles.container}>
      <Text>Demo</Text>
    </View>
  )
}

export default Demo

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})