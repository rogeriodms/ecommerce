/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import App from './src/routes';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './src/screens/reducers';




export default function Main(){
  return(
    <Provider store={createStore(reducers)}>
        <App />
    </Provider>
  );

}
  