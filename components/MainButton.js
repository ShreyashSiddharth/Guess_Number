import React from 'react';
import { Text,View,StyleSheet,TouchableOpacity } from 'react-native';
import colors from '../constants/colors';

const MainButton = props =>{
return (
 <TouchableOpacity activeOpacity={0.6} onPress = {props.onPress}>
     <View style = {styles.buttonContainer}>
         <Text style = {styles.buttonText}>{props.children}</Text>
     </View>
 </TouchableOpacity>
);
};

const styles = StyleSheet.create({
    buttonContainer:{
        backgroundColor: colors.primary,
        paddingVertical:12,
        paddingHorizontal:30,
        borderRadius:25,

    },
    buttonText:{
        color:'white',
        fontFamily:'open-sans',
        fontSize:18,
    },
    
});

export default MainButton;