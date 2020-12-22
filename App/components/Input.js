import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'

export default function Input({style, ...props}) {
    return (
    <TextInput {...props} style={[styles.input, style]}/>
       
    )
}
const styles = StyleSheet.create({
    input: {
        backgroundColor: '#c7c4f5',
        width: '100%',
        padding: 20,
        borderRadius: 8,
    },
});