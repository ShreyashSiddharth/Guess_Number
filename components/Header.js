import React from 'react';
import { View,Text,StyleSheet } from 'react-native';
import colors from '../constants/colors';

const Header = props =>{
  return(
      <View style = {styles.head}>
          <Text style = {styles.headTitle}>{props.title}</Text>
      </View>
  );  
};

const styles = StyleSheet.create({
    head:{
        width:'100%',
        height:90,
        paddingTop:36,
        backgroundColor: colors.accent,
        alignItems :'center',
        justifyContent:'center',
    },
    headTitle:{
        color:'black',
        fontSize:18,
        fontWeight:'bold',
        fontFamily:'open-sans-bold',
    }
});

export default Header;