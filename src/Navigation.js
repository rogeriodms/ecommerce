import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { AntDesign, FontAwesome5, MaterialCommunityIcons, Entypo } from '@expo/vector-icons'; 
import {Drawer} from 'native-base';
import SideBar from './screens/SideBar';

import HomeScreen from './screens/Home';
import PipasScreen from './screens/Pipas';
import LinhasScreen from './screens/Linhas';
import RabiolasScreen from './screens/Rabiolas';
import OutrosScreen from './screens/Outros';



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
    <>
        <Drawer
                ref={(ref) => { this.drawer = ref; }}
                content={<SideBar navigator={this.navigator} />}
                onClose={() => this.closeDrawer()}>
      

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
       
        </Drawer>
        
        </>   
    );
}   