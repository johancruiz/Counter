import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const PositionScreen = () => {
  return (
   <View style={ styles.container } >
        <View style={ styles.purpleBox } />
        <View style={ styles.redBox } />
        <View style={ styles.greenBox } />
   </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'aqua',
        // justifyContent: 'center',
        // alignItems: 'center'
    },
    purpleBox: {
        width: 100,
        height: 100,
        backgroundColor: 'purple',
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        bottom: 0
        // top: 0
    },
    redBox: {
        width: 100,
        height: 100,
        backgroundColor: 'orange',
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        right: 0
        
    },
    greenBox: {
        width: 100,
        height: 100,
        backgroundColor: 'green',
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0,
        top: 0
    }
})

export default PositionScreen
