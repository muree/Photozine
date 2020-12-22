import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';


export default function TextButton({title, style, onPress}) {
  

  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={onPress}>
      <Text style={styles.text}>{title.toUpperCase()}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white', 
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderRadius: 8,
  },
  text: {
    color: '#2c44c2',
    fontWeight: '500',
    fontSize: 14,
  },
});