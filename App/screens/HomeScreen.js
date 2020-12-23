import React from 'react'
import { View, StyleSheet, ImageBackground } from 'react-native'
import { Container, Content, Text } from 'native-base';
import TextButton from '../components/TextButton';
import HomeTextButton from '../components/HomeTextButton';


export default function HomeScreen({navigation}) {
    setTimeout(() => {
        navigation.replace('Login');
    }, 5000);
    return (  
        <Container>
            <ImageBackground style={{flex:1}} source={require('../assets/splash1.jpg')}> 
            <Content
            contentContainerStyle={{
               flex: 1,
               justifyContent: 'center',
               alignItems: 'center'
           }}
           >
            <Text style={styles.text}>Welcome to Photozine</Text>
           </Content>
           <HomeTextButton title={"Login to Photozine"}
            onPress={() =>{
                navigation.navigate('Login')
            }}
            style={styles.textButton}
            />
            </ImageBackground>
           
       </Container>
  
    );
}


const styles = StyleSheet.create({
    textButton: {
        marginBottom: 80,

    },
    text:{
        fontSize: 30,
        fontWeight:'400',
        fontStyle: "italic"
        
    }
})