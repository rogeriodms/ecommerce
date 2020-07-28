import React from 'react';
import {StyleSheet, Platform, StatusBar, View, Text} from 'react-native';
import { MaterialCommunityIcons,Fontisto } from '@expo/vector-icons'; 

export default function Favoritos({ Navigation }){
    return( 
        <View >
            <Text>teste</Text>
        </View>
        );
}
Favoritos.navigationOptions = {
  title: 'Favoritos',
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

});