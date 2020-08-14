import React, { Component } from 'react';
import {StyleSheet, Platform, StatusBar, View, Text, Button} from 'react-native';
import { MaterialCommunityIcons,Fontisto } from '@expo/vector-icons'; 
import Icon from 'react-native-vector-icons/FontAwesome';





export default function Home(){
    return( 
           <Button title='MercadoPago'/>
        );
}

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