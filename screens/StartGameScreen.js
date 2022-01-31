import React ,{useState} from 'react';
import { View,Text,StyleSheet, Button,TouchableWithoutFeedback,Keyboard } from 'react-native';
import Card from '../components/Card';
import colors from '../constants/colors';
import Input from '../components/Input';
const StartGameScreen = props =>{

    
    const [enteredValue, setEnteredValue] = useState('');
    const [confiremd,setConfirmed] = useState(false);
    const [selectedNumber,setSelectedNumber] = useState();
    const numberInputHandler = inputText =>{
        setEnteredValue(inputText.replace(/[^0-9]/g,''));
    };
    const resetInputHandler = ()=>{
        setEnteredValue('');
        setConfirmed(false);
    };
    const confirmInputHandler = ()=>{
        const chosenNumber = parseInt(enteredValue);
        if(chosenNumber === NaN || chosenNumber <= 0  || chosenNumber > 99){
            return ;
        }
        setConfirmed(true);
        setSelectedNumber(chosenNumber);
        setEnteredValue('');
        
    };
    let confirmedOutput;
    if(confiremd){
        confirmedOutput = <Text>Chosen Number: {selectedNumber}</Text>
    }
    return(
        <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>
        <View style = {styles.screen}>

        <Text style = {styles.title} >Start a New Game !</Text>
        <Card style = {styles.inputContainer}>
      
            <Text>Enter a Number</Text>
          <Input blurOnSubmit autoCapitalize = 'none' autoCorrect = {false} keyboardType = "number-pad" maxLength = {2} style = {styles.input}
          onChangeText = {numberInputHandler}
          value = {enteredValue}
          />
            <View style={styles.buttonContainer}>
                <Button style = {{width:150}} color={colors.accent} title='Reset'onPress={resetInputHandler}/>
               <Button style = {{width:100}} color={colors.primary} title='Confirm'onPress={confirmInputHandler}/>
            </View>
        
        </Card>
        {confirmedOutput}
        </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    screen:{
        flex:1,
        padding:10,
        alignItems:'center',
    },
    buttonContainer:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-around',
        paddingHorizontal:15,
    },
    inputContainer:{
        width:300,
        maxWidth:'80%',
        alignItems:'center',
     
    },
    title:{
        fontSize:20,
        marginVertical:10,
    },
    input:{
        width:50,
        textAlign:'center',
    },
});

export default StartGameScreen;