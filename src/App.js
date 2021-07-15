import React from 'react';
import {View, Text} from 'react-native';
import WelcomeScreen from 'screens/WelcomeScreen';
import {globalStyles} from 'styles/screens/globalStyles';

const App = () => {
  return (
    <View style={globalStyles.rootView}>
      <WelcomeScreen />
    </View>
  );
};

export default App;
