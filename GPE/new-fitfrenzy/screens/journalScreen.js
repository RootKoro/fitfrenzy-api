import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const JournalScreen = () => {
  return (
    <View style={styles.container}>
      <Text>JournalScreen</Text>
    </View>
  )
}

export default JournalScreen

const styles = StyleSheet.create({
    container: {
      marginTop:30,
      justifyContent:"center",
      alignItems:"center"
    },
  })