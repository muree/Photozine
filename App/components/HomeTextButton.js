import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';


export default function HomeTextButton({title, style, onPress}) {
  

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
    backgroundColor: 'transparent', 
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderRadius: 10,
  },
  text: {
    color: '#fbb156',
    fontWeight: '600',
    fontSize: 20,
  },
});