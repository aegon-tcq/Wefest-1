import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AdminStackScreen from 'navigation/AdminStack';

const App = () => {
  return (
    <NavigationContainer>
      <AdminStackScreen />
    </NavigationContainer>
  );
};

export default App;
