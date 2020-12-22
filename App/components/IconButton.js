import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';


export default function IconButton({name, style, onPress}) {
  

  return (
    <TouchableOpacity
    style={[styles.container, style]}
    onPress={onPress}>
   <Ionicons name="close-circle-outline" size={25} color="#c22d35"/>
   
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
  

});