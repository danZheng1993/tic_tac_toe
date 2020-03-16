/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React from 'react';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {StatusBar} from 'react-native';
import {PersistGate} from 'redux-persist/integration/react';

import Store, {Persistor} from './Store';

import NavigationContainer from './NavigationContainer';

const App = () => {
  return (
    <Provider store={Store}>
      <PersistGate persistor={Persistor}>
        <StatusBar barStyle="dark-content" />
        <NavigationContainer />
      </PersistGate>
    </Provider>
  );
};

export default App;
