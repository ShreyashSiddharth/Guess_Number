import React from 'react';
import { View,Text,StyleSheet ,Button,Image} from 'react-native';
import defaultStyles from '../constants/default-styles';
import colors from '../constants/colors';
import MainButton from '../components/MainButton';
const GameOverScreen = props =>{
 return(
     <View style = {styles.screen}>
         <Text style = {defaultStyles.title}>The Game is Over !</Text>
         <View style = {styles.imageContainer}>
         <Image source={{uri:'https://images.livemint.com/img/2021/12/26/600x338/Modi_Mann_ki_baat_1640480387693_1640480387998.jpg'}} style  = {styles.image}
         resizeMode='cover'
        fadeDuration={1000}
         />
         </View>
         <View style = {styles.resultContainer}>
         <Text style = {{...defaultStyles.bodyText,textAlign:'center',fontSize:20}}>
             Your Phone Needed {''} <Text style = {styles.highlight}>{props.roundsNumber} </Text>rounds to Guess the number {''}<Text style = {styles.highlight}> {props.userNumber} </Text></Text>
         </View>
         <MainButton  onPress={props.onRestart} >NEW GAME</MainButton>
     </View>
 );
};

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    imageContainer:{
        width:300,
        height:300,
        borderWidth:3,
        borderRadius:150,
        borderColor:'black',
        overflow:'hidden',
        marginVertical:30,

    },
    image:{
       width:'100%',
       height:'100%',
       
    },
    highlight:{
        color:colors.accent,
        fontFamily:'open-sans-bold',
        
    },
    resultContainer:{
        marginHorizontal:30,
        marginVertical:15,
    },
});

export  default GameOverScreen;