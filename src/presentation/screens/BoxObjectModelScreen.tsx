import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native'

const BoxObjectModelScreen = () => {
  return (
    <View style={ styles.container } >
        {/* <Text style={ styles.title } >BoxObjectScreen</Text> */}
        {/* <View style={ styles.purpleBox } ></View> */}
        <View style={ styles.purpleBox } >
          <Text style={{ color: 'white' } } >Hola Mundo</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'red'
    },
    title: {
      fontSize: 40,
      paddingHorizontal: 30,
      paddingVertical: 10,
      borderWidth: 10,
    },
    purpleBox: {
      height: 30,
      backgroundColor: 'purple',
      margin: 20,
      marginVertical: 50,
      padding: 5
    }
})

export default BoxObjectModelScreen
