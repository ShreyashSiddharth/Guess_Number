import React,{useState,useRef ,useEffect} from 'react';
import { View,Text,StyleSheet,Button , Alert} from 'react-native';
import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';
import defaultStyles from '../constants/default-styles';
import {Ionicons} from '@expo/vector-icons';
import MainButton from '../components/MainButton';

const genrateRandomBetween  = (min,max,exclude) => {
min = Math.ceil(min);
max = Math.floor(max);
const rndNum  = Math.floor(Math.random() * (max - min)) + min;
if(rndNum === exclude){
    return genrateRandomBetween(min,max,exclude);
}
else{
    return rndNum;
}
};

const GameScreen = props =>{
const [currentGuess,setcurrentGuess] = useState(genrateRandomBetween(1,100, props.userChoice));
const [rounds,setRounds] = useState(0);
const currentLow = useRef(1);
const currentHigh = useRef(100);

const {userChoice,onGameOver} = props;

useEffect(()=>{
    if(currentGuess === userChoice){
        onGameOver(rounds);
    }
},[currentGuess,userChoice,onGameOver]);

const nextGuessHandler = direction =>{
if((direction === 'lower' && currentGuess < props.userChoice) || (direction == 'higher' && currentGuess > props.userChoice)){
    Alert.alert('Dont Lie','You gave a Wrong Hint',[{text:'Sorry', style:'cancel',}]);
return;
}
if(direction === 'lower'){
    currentHigh.current = currentGuess;

} else {
    currentLow.current = currentGuess;
}
const nxtNumber =genrateRandomBetween(currentLow.current,currentHigh.current,currentGuess);
setcurrentGuess(nxtNumber);
setRounds(curRounds => curRounds+1);
};
return(
    <View style = {styles.screen}>
        <Text style= {defaultStyles.title}>Opponents Guess</Text>
        <NumberContainer>{currentGuess}</NumberContainer>
        <Card style = {styles.buttnContainer}>
        <MainButton  onPress={nextGuessHandler.bind(this , 'lower')}>
       <Ionicons name ="md-remove" size={24} color="white"/>
        </MainButton>
        <MainButton  onPress={nextGuessHandler.bind(this , 'higher')}>
        <Ionicons name ="md-add" size={24} color="white"/>
        </MainButton>

        </Card>
    </View>
);


};

const styles = StyleSheet.create({
    screen:{
        flex:1,
        padding:10,
        alignItems:'center',
    },
    buttnContainer:{
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop: 20,
        width:400,
        maxWidth:'90%',
    }
});

export default GameScreen;