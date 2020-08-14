import React from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import NavigationScreen from './Navigation';

import SacolaScreen from './screens/Sacola/index';
import { createStackNavigator } from '@react-navigation/stack';


export default function App(){
    return(
        <>
        <StatusBar  barStyle="dark-content" backgroundColor="White" />
        <NavigationScreen/>
        </>

    );
};

  
const style =  StyleSheet.create({
    AndroidSafeArea: {
      flex: 1,
      backgroundColor: "white",
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    Topo:{
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-between",
        padding: 20,
  
    },
    icontopo:{
      marginLeft: "20",
  
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    
  
  });