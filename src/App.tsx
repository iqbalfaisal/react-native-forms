import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import 'react-native-get-random-values';

import {persistor, store} from './store';
import {RootStack} from './routes';
import {NativeBaseProvider} from 'native-base';

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NativeBaseProvider>
            <RootStack />
          </NativeBaseProvider>
        </PersistGate>
      </Provider>
    </NavigationContainer>
  );
}
