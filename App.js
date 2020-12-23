import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AuthStackNavigator from './App/navigators/AuthStackNavigator';
import auth from '@react-native-firebase/auth';



const RootStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{
        headerShown: false,

      }}>
        <RootStack.Screen name={'AuthStack'} component={AuthStackNavigator}/>
        
      </RootStack.Navigator>
    </NavigationContainer>
  

  );
}
