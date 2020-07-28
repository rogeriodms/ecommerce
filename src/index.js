import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './Navigation';
import Topo from './Topo';
import {StatusBar} from 'react-native';



export default function App(){
    return(
        <>
        <StatusBar  barStyle="dark-content" backgroundColor="White" />
        <Topo/>
        <NavigationContainer>
           <Navigation/>
        </NavigationContainer>
        </>

    );
};
  