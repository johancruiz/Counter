import React from 'react'
import { View, Pressable, StyleSheet, Platform, Text } from 'react-native';

interface Props {
    label: string;
    onPress?: () => void;
    onLongPress?: () => void;
}

const PrimaryButton = ({label, onPress, onLongPress}: Props) => {
  return (
    <View>
        <Pressable 
            onPress={() => onPress && onPress()  } 
            onLongPress={() => onLongPress && onLongPress()  } 
            style={({ pressed }) => [
                styles.button,
                pressed && styles.buttonPressed
            ]}
        >
            <Text>{label}</Text>
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: Platform.OS === 'android' ? '#5856D6' : 'white',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10
    },
    buttonPressed: {
        backgroundColor: Platform.OS === 'android' ? '#4746AB' : 'white'
    }
})

export default PrimaryButton
