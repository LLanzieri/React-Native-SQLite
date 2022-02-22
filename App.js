// navigation
import MainNavigator from './src/navigation/index.js'
import {
  Provider
} from 'react-redux'
import React from 'react';
import { init } from './src/db/index';
import store from './src/store/index.js'

init().then(() => {
  console.log('DB inicializada correctamente');
}).catch(err => {
  console.log('DB no pudo ser inicializada', err);
});

export default function App() {
  return (
    <Provider store={store} >
      < MainNavigator />
    </Provider>
  );
}