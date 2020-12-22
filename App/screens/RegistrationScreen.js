import React from 'react';
import {StyleSheet, View} from 'react-native';

import Heading from '../components/Heading';
import FilledButton from '../components/FilledButton';
import Error from '../components/Error';
import IconButton from '../components/IconButton';
import Input from '../components/Input';
import { SafeAreaView } from 'react-native-safe-area-context';



export default function RegistrationScreen({navigation}){
return(
    <View style={styles.container}>
            <Heading style={styles.title}>CREATE ACCOUNT</Heading>
            <IconButton style={styles.closeIcon} onPress={() => {
                navigation.pop()
            }}
            />
            <Error error={''}/>
            <Input 
            style={styles.input} 
            placeholder={'Name'} 
            
            />
            <Input 
          
            style={styles.input} 
            placeholder={'Email'} 
            keyboardType={'email-address'}
            />
            <Input 
            style={styles.input} 
            placeholder="Password" secureTextEntry
            />
            <Input
            style={styles.input} placeholder="Confirm Password" secureTextEntry
            />
            <FilledButton title={'Register'} 
            style={styles.registerButton}
            onPress={() =>{}}
            />
        </View>
        
    )
}
				const styles = StyleSheet.create({
 container: {
     flex: 1,
     paddingTop: 120,
     alignItems: 'center',
     padding: 20,
    
 },
 title:{
     marginBottom: 48,

 },
 input:{
    marginVertical: 10,

 },
 registerButton:{
     marginVertical: 32,
 },
 closeIcon:{
     position:"absolute",
     top: 60,
     right:20,

 }
})