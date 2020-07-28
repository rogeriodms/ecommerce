import React, { Component } from 'react';
import {StyleSheet, Platform, StatusBar, View, Text, Button} from 'react-native';
import { MaterialCommunityIcons,Fontisto } from '@expo/vector-icons'; 

import FavoritosScreen from './screens/Favoritos';


export default function Home(){
    return( 
            <View style={style.Topo}>
                <MaterialCommunityIcons name="heart-multiple" size={35} color="#9c00c8" onPress={() => navigation.navigate('Favoritos') } />
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







