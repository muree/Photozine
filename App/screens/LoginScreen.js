import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Error from '../components/Error'
import FilledButton from '../components/FilledButton'
import Heading from '../components/Heading'
import Input from '../components/Input'
import  TextButton from '../components/TextButton'


export default function LoginScreen({navigation}) {
    return (
        <View style={styles.container}>
            <Heading style={styles.title}>LOGIN</Heading>
            <Error error={''}/>
            <Input 
            style={styles.input} 
            placeholder='Email'
            keyboardType='email-address'
            />
            <Input style={styles.input} 
            placeholder="Password" 
            secureTextEntry
            />
            <FilledButton title='Login' 
            style={styles.loginButton}
            onPress={() =>{
                navigation.navigate('Gallery')}}
            />
            <TextButton title={"Don't have an account? create one"}
            onPress={() =>{
                navigation.navigate('Registration')
            }}/>
        </View>
    )
}
const styles = StyleSheet.create({
 container: {
     flex: 1,
     paddingTop: 120,
     alignItems: 'center',
     padding: 20,
     backgroundColor: 'white'
    
     
 },
 title:{
     marginBottom: 48,

 },
 input:{
    marginVertical: 10,

 },
 loginButton:{
     marginVertical: 32,
 },
})