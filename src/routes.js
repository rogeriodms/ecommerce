import React from 'react';
import {Router, Scene, Stack} from 'react-native-router-flux';
import Login from './screens/Login';
import Cadastro from './screens/Cadastro';


export default function App(){
    return(
        <Router>
          <Stack key='root'>
            <Scene key='Login' component={Login} title='Login' headerMode='none'/>
            <Scene key='Cadastro' component={Cadastro} title='Cadastro'/>
          </Stack>
        </Router>


    );
};
