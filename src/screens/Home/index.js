import React, { Component } from 'react';
import {StyleSheet, Platform, StatusBar, View, Text, Button} from 'react-native';
import { MaterialCommunityIcons,Fontisto } from '@expo/vector-icons'; 
import {Drawer} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';


class SideBar extends Component {
    
    
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

closeDrawer = () => {
  this.drawer._root.close()
};
openDrawer = () => {
  this.drawer._root.open()
};    

export default function Home(){
    return( 
      <Drawer
        ref={(ref) => { this.drawer = ref; }}
        content={<SideBar navigator={this.navigator} />}
        onClose={() => this.closeDrawer()}>
           <Icon onPress={() => this.openDrawer()} name="bars" size={30} color="#9c00c8" />
         <Text>Home</Text>
      </Drawer>   
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