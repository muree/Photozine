import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import RegistrationScreen from '../screens/RegistrationScreen';
import LoginScreen from '../screens/LoginScreen';
import GalleryScreen from '../screens/GalleryScreen';
import HomeScreen from '../screens/HomeScreen'




const AuthStack = createStackNavigator();

export default function AuthStackNavigator() {
  return (
    <AuthStack.Navigator 
    mode={'modal'}
    screenOptions={{
    headerShown: false,
    }}>
      <AuthStack.Screen name={'Home'} component={HomeScreen}/>
      <AuthStack.Screen name={'Login'} component={LoginScreen}/>
      <AuthStack.Screen name={'Registration'} component={RegistrationScreen} />
      <AuthStack.Screen name={'Gallery'} component={GalleryScreen} />
      
    </AuthStack.Navigator>
   
  );
}
