import React from 'react';
import {StatusBar, StyleSheet,View, Text, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import NavigationScreen from './Navigation';
import Menu from './Menu';
import New from './New';
import SacolaScreen from './screens/Sacola/';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import { MaterialCommunityIcons,Fontisto } from '@expo/vector-icons'; 

closeDrawer = () => {
    this.drawer._root.close()
  };
openDrawer = () => {
    this.drawer._root.open()
  };  
  
const Stack = createStackNavigator();

export default function App(){
    return(
        <>
        <NavigationContainer>
            <Stack.Navigator>

                <Stack.Screen name='Login' component={Menu}/>


                <Stack.Screen name='NavigationScreen' component={New}  options={({navigation,route}) =>({header: () =>
                <View style={style.Topo}>
                    <MaterialCommunityIcons name="heart-multiple" size={35} color="#9c00c8"  onPress={() => this.openDrawer()}/>
                    <Image source={require('./screens/img/logos/minilogo.png')}/>
                    <Fontisto name="shopping-bag-1" size={35} color="#9c00c8"  onPress={() => navigation.navigate('SacolaScreen')} />
                </View>
                })}/>

                <Stack.Screen name='SacolaScreen' component={SacolaScreen} options={({navigation,route}) =>({ headerTitle:'Sacola',headerRight: () =>
                <Fontisto name="shopping-bag-1" size={35} color="#9c00c8" style={style.Topo} onPress={() => navigation.navigate('NavigationScreen')}
                 />
                })}/>
                
            </Stack.Navigator>
        </NavigationContainer>
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
        padding: 10,
  
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