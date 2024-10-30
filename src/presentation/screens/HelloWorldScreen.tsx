import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

interface Props {
    name?: string;
}

const HelloWorldScreen = ({name = 'World'}: Props) => {
  return (
    <View style={ styles.container } >
        <Text numberOfLines={1} ellipsizeMode='head' style={styles.title} >Hello {name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    title:{
        fontSize:45,
        textAlign: 'center',
        color: 'black',
        padding: 20
    }
  }
  )

export default HelloWorldScreen
