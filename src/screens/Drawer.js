import React, { Component } from 'react';
import {StyleSheet, Platform, StatusBar, View, Text, Button} from 'react-native';
import { MaterialCommunityIcons,Fontisto } from '@expo/vector-icons'; 
import {Drawer} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import SideBar from './SideBar';


export default function Open(){
    return( 
    <Drawer
      ref={(ref) => { this.drawer = ref; }}
      content={<SideBar navigator={this.navigator} />}
      onClose={() => this.closeDrawer()}>
    </Drawer>
    
        );
}