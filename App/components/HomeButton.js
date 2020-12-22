import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';


export default function HomeButton({name, style, onPress}) {
  

  return (
    <TouchableOpacity
    style={[styles.container, style]}
    onPress={onPress}>
 <FontAwesome name="home" size={26} color="yellow" />
  
   
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
  

});