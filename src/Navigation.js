import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from './screens/Home';
import PipasScreen from './screens/Pipas';
import LinhasScreen from './screens/Linhas';
import RabiolasScreen from './screens/Rabiolas';
import OutrosScreen from './screens/Outros';

const Tab = createBottomTabNavigator();

export default function Navigation(){

    return(
        <Tab.Navigator>
            <Tab.Screen name='Home' component={HomeScreen} />
            <Tab.Screen name='Pipas' component={PipasScreen} />
            <Tab.Screen name='Linhas' component={LinhasScreen} />
            <Tab.Screen name='Rabiolas' component={RabiolasScreen} />
            <Tab.Screen name='Outros' component={OutrosScreen} />
        </Tab.Navigator>
    );
}