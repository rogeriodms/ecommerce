import React, { Component } from 'react';
import {StyleSheet, Platform, StatusBar, View, Text, Button} from 'react-native';
import { MaterialCommunityIcons,Fontisto } from '@expo/vector-icons'; 
import Icon from 'react-native-vector-icons/FontAwesome';


export default class SideBar extends Component {
    
    
  render(){
      
      return (
              <View style={[ style.container, { backgroundColor: '#fff' } ]}>
                      <Text>
                          <Icon name="rocket" size={30} color="#900" />
                          Conteúdo side bar
                      </Text>
              </View>
             );
  } 
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
