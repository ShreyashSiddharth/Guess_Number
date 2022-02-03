import React ,{useState} from 'react';
import { View,Text,StyleSheet, Button,TouchableWithoutFeedback,Keyboard ,Alert} from 'react-native';
import Card from '../components/Card';
import colors from '../constants/colors';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';
import MainButton from '../components/MainButton';
;



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
        if(isNaN(chosenNumber)|| chosenNumber <= 0  || chosenNumber > 99){
            Alert.alert('Invalid Number!','Number has to be between 1 and 99',[{text:'Okay', style:'destructive',onPress: resetInputHandler}])
            return ;
        }
        setConfirmed(true);
        setSelectedNumber(chosenNumber);
        setEnteredValue('');
        Keyboard.dismiss();
        
    };
    let confirmedOutput;
    if(confiremd){
        confirmedOutput = 
        <Card style={styles.summaryContainer}>
        <Text> You Selected </Text>
       <NumberContainer>{selectedNumber}</NumberContainer>
       <MainButton  onPress={() =>props.onStartGame(selectedNumber)} >Start Game</MainButton>
        </Card>
    }
    return(
        <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>
        <View style = {styles.screen}>

        <Text style = {styles.title} >Start a New Game !</Text>
        <Card style = {styles.inputContainer}>
      
            <Text style = {styles.text}>Enter a Number</Text>
          <Input blurOnSubmit autoCapitalize = 'none' autoCorrect = {false} keyboardType = "number-pad" maxLength = {2} style = {styles.input}
          onChangeText = {numberInputHandler}
          value = {enteredValue}
          />
            <View style={styles.buttonContainer}>
                <Button style = {{paddingHorizont:0}} color={colors.primary} title='Reset'onPress={resetInputHandler}/>
               <Button style = {{width:100}} color={colors.accent} title='Confirm'onPress={confirmInputHandler}/>
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
        justifyContent:'space-between',
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
        fontFamily:'open-sans-bold',
    },
    input:{
        width:50,
        textAlign:'center',
    },
    summaryContainer:{
        marginTop:20,
        alignItems:'center',
    },
    text:{
        fontFamily:'open-sans',
    }
});

export default StartGameScreen;