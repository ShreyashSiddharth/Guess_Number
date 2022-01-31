import React from 'react';
import Header from './components/Header';
import { StyleSheet, Text, View } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';

export default function App() {
  return (
    <View style = {styles.screen}>
      <Header title = "Guess The Number"/>
      <StartGameScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
 screen:{
   flex:1,
 },

});
