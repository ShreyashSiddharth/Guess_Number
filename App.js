import React ,{useState}from 'react';
import Header from './components/Header';
import { StyleSheet, Text, View } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';

const fetchFonts = () =>{

  Font.loadAsync({
    'open-sans':require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold':require('./assets/fonts/OpenSans-Bold.ttf'),
  });


};

export default function App() {

  const [userNumber,setUserNumber] = useState();
  const [guessRounds , setGuessRounds] = useState(0);
  const [dataLoaded,setDataLoaded] = useState(false);

  if(!dataLoaded){
    return <AppLoading startAsync = {fetchFonts} onFinish = {() => {setDataLoaded(true)}} onError = {(err) =>console.log(err)}/>;
  }

  const newGameHandler = ()=>{
    setGuessRounds(0);
    setUserNumber(null);

  };


  const startGameHandler = (selectedNumber) =>{
    setUserNumber(selectedNumber);
    
  };
  const gameOverHandler = numberOfRounds =>{
    setGuessRounds(numberOfRounds);
  }
  let content = <StartGameScreen onStartGame ={startGameHandler}/>;

  if(userNumber && guessRounds<= 0){
    content = <GameScreen userChoice = {userNumber} onGameOver = {gameOverHandler}/>;
  } else if(guessRounds > 0){
    content = <GameOverScreen roundsNumber = {guessRounds} userNumber = {userNumber}
    onRestart = {newGameHandler}
    />
  }

  return (
    
        <View style = {styles.screen}>
      <Header title = "Guess The Number"/>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
 screen:{
   flex:1,
 },

});
