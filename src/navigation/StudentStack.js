import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import WelcomeScreen from 'screens/WelcomeScreen';
import LoginScreen from 'screens/LoginScreen';

import {welcomeScreenRoute, loginScreenRoute} from './screenNames';

const StudentStack = createStackNavigator();

const StudentStackScreen = () => {
  return (
    <StudentStack.Navigator headerMode="none">
      <StudentStack.Screen
        component={WelcomeScreen}
        name={welcomeScreenRoute}
      />
      <StudentStack.Screen component={LoginScreen} name={loginScreenRoute} />
    </StudentStack.Navigator>
  );
};

export default StudentStackScreen;
