import React, { Component } from 'react';
import {StyleSheet, Platform, StatusBar, View, Text, Button} from 'react-native';
import { MaterialCommunityIcons,Fontisto } from '@expo/vector-icons'; 
import { Actions } from 'react-native-router-flux';
import Favoritos from './screens/Favoritos/index';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function Topo(){
    return( 
            <View style={style.Topo}>
              <TouchableOpacity onPress={() => Favoritos }>
                <MaterialCommunityIcons name="heart-multiple" size={35} color="#9c00c8"/>
              </TouchableOpacity>
              <Text>teste</Text>
              <Fontisto name="shopping-bag-1" size={35} color="#9c00c8" />
            </View>
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
      paddingTop: 20,
      backgroundColor: ""

  },
  icontopo:{
    marginLeft: "20",

  },

});







