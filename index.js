/**
 * @format
 */
import * as React from 'react';
import {AppRegistry} from 'react-native';
import App from './src/App';
import {store, persistor} from  './src/redux/store'
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import {name as appName} from './app.json';

const RootAppWithProvider = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);

AppRegistry.registerComponent(appName, () => RootAppWithProvider);
