import 'react-native-gesture-handler';
import * as React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import UserStackScreen from './navigation/UserStack';
import AdminStackScreen from './navigation/AdminStack';
import {store, persistor} from './redux/store';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <UserStackScreen />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
