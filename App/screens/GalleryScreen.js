import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Heading from '../components/Heading'
import HomeButton from '../components/HomeButton'
import { Dimensions } from 'react-native';
import Lightbox from 'react-native-lightbox';

// map function of array objects
const images=[
    {
        id: 1,
        uri: 'https://res.cloudinary.com/mureebaba/image/upload/v1608042088/photozine/IMG_1313_ovqxgz.jpg',
    },
    {
        id: 2,
        uri: 'https://res.cloudinary.com/mureebaba/image/upload/v1608042644/photozine/IMG_1917_bymyuv.jpg',
    },
    {
        id:3,
        uri: 'https://res.cloudinary.com/mureebaba/image/upload/v1608042542/photozine/IMG_9926_zywzqq.jpg',
    },
    {
        id:4,
        uri: 'https://res.cloudinary.com/mureebaba/image/upload/v1608042167/photozine/IMG_1520_uos4o2.jpg',
    },
]
const WINDOW_WIDTH = Dimensions.get('window').width;
const BASE_PADDING = 10;

export default function GalleryScreen({navigation}) {
    return (
        
        
        <View style={styles.container}>
            <Heading style={styles.head}>Gallery</Heading>
            <HomeButton style={styles.homeIcon} onPress={() => {
                navigation.navigate('Home')
            }}/>
        <ScrollView>
            {images.map(image => ( 
            <Lightbox underlayColor='white'>   
                <Image
                    style={styles.logo}
                    source={{
                    uri: image.uri  
                    
            }}
            onPress={() => {}}    
            />
            </Lightbox>  
))}
           </ScrollView>
         
        </View>
       
    )
} 
const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        alignItems: "center",
        backgroundColor: "#2c44c2",
       
        
      },
      logo: {
        width: 300,
        height: 300,
        marginVertical: 10,
        borderRadius: 15
      },
      homeIcon:{
        position:"absolute",
        top: 60,
        right:30,
        

      },
      head:{
        fontSize: 32,
        color:'yellow',
      }
})