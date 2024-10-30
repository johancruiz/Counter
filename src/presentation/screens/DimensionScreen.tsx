import React from 'react'
import { StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import {Dimensions} from 'react-native';

// const {width, height} = Dimensions.get('window');

const DimensionScreen = () => {

    const {height, width} = useWindowDimensions()

  return (
    <View>
        <View style={ styles.container } >
        <View style={ {
            ...styles.purpleBox,
            width: width * 0.60
        }} ></View>
    </View>
        <Text style={styles.title} > w: {  width} h: {height} </Text>
    </View>
    
  )
}

const styles = StyleSheet.create({
    container: {
        width: 400,
        backgroundColor: 'red'
    },
    purpleBox: {
        backgroundColor: '#5856D6',
        height: '50%',
        width: '50%'
    },
    title: {
        fontSize: 30,
        textAlign: 'center'
    }
})

export default DimensionScreen
