import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { AntDesign, FontAwesome5, MaterialCommunityIcons, Entypo } from '@expo/vector-icons'; 



import HomeScreen from './screens/Home';
import PipasScreen from './screens/Pipas';
import LinhasScreen from './screens/Linhas';
import RabiolasScreen from './screens/Rabiolas';
import OutrosScreen from './screens/Outros';
import FavoritosScreen from './screens/Favoritos';
import { State } from 'react-native-gesture-handler';




const Tab = createBottomTabNavigator();
const icons = {
    Home: {
        lib: AntDesign,
        name:'home',
    },
    Pipas: {
        lib: FontAwesome5,
        name:'wind',
    },
    Linhas: {
        lib: FontAwesome5,
        name:'grip-lines-vertical',
    },
    Rabiolas: {
        lib: MaterialCommunityIcons,
        name:'ribbon',
    },
    Outros: {
        lib: Entypo,
        name:'dots-three-vertical',
    }
};


export default function Navigation(){

    return(
        <Tab.Navigator screenOptions={({ route })=>({
            tabBarIcon:({color, size}) =>{
                const { lib: Icon, name } = icons[route.name];
                return  <Icon name= {name} size={size} color={color}/>;
               
            },
        })}
        tabBarOptions={{
            activeTintColor:'#ffa926',
            inactiveTintColor:'#9c00c8',
        }}
        
        >
            <Tab.Screen name='Home' component={HomeScreen} />
            <Tab.Screen name='Pipas' component={PipasScreen} />
            <Tab.Screen name='Linhas' component={LinhasScreen} />
            <Tab.Screen name='Rabiolas' component={RabiolasScreen} />
            <Tab.Screen name='Outros' component={OutrosScreen} />
        </Tab.Navigator>
    );
}   