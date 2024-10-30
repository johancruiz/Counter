import React from 'react'
import { StyleSheet, View } from 'react-native'

const HomeWorkScreen = () => {
  return (
    <View style={ styles.container } >
      <View style={ [styles.box, styles.purpleBox] } />
      <View style={ [styles.box, styles.orangeBox] } />
      <View style={ [styles.box, styles.blueBox] } />
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#28425b',
        justifyContent: 'center'
    },
    purpleBox: {
        backgroundColor: '#5856D6',
        alignSelf: 'flex-end'
    },
    orangeBox: {
        backgroundColor: '#F0A23B',
        // flex: 1 // Tarea 1
        
    },
    blueBox: {
        backgroundColor: '#28c4d9',
        // width: '100%' Tarea 2
        alignSelf: 'center'
    },
    box:{
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white'
    }
})

export default HomeWorkScreen
