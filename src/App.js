import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AdminStackScreen from 'navigation/AdminStack';
import UserStackScreen from './navigation/UserStack';

const App = () => {
  return (
    <NavigationContainer>
          <UserStackScreen />
        </NavigationContainer>
  );
};

export default App;