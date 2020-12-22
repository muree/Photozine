import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function BackButton({name, style, onPress}) {
  

  return (
    <TouchableOpacity
    style={[styles.container, style]}
    onPress={onPress}>
   <AntDesign name="back" size={24} color="black" />
   
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
  

});