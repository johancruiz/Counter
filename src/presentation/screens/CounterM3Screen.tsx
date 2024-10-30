import React, { useState } from 'react'
import {   Text, View } from 'react-native'
import { globalStyles } from '../theme/global.styles'
import { FAB } from 'react-native-paper'
import  Icon  from 'react-native-vector-icons/Ionicons';


const CounterM3Screen = () => {

    const [count, setCount] = useState(10)

  return (
    <View style={globalStyles.centerContainer} >
        <FAB
            style={globalStyles.fab}
            onPress={() => setCount(count + 1)}
            onLongPress={() => setCount(10)}
            icon="add"
        />
        <Text style={ globalStyles.title } > {count} </Text>
        {/* <Text>Hola</Text> <Icon name='accessibility-outline' size={25} ></Icon> */}
    </View>
  )
}


export default CounterM3Screen
