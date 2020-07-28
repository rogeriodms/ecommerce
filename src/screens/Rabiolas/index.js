import React from 'react';
import {Text,  StyleSheet, Platform, StatusBar,View } from 'react-native';



export default function Home(){
    return( 
        <View >
            <Text >Rabiolas</Text>
        </View> 
        );
}

const style =  StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  }
});