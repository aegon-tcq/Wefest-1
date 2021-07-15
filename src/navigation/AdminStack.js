import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import WelcomeScreen from 'screens/WelcomeScreen';
import LoginScreen from 'screens/LoginScreen';
import DashboardScreen from 'screens/DashboardScreen';
import {
  welcomeScreenRoute,
  loginScreenRoute,
  dashboardScreenRoute,
} from './screenNames';

const AdminStack = createStackNavigator();

const AdminStackScreen = () => {
  return (
    <AdminStack.Navigator headerMode="none">
      <AdminStack.Screen component={WelcomeScreen} name={welcomeScreenRoute} />
      <AdminStack.Screen component={LoginScreen} name={loginScreenRoute} />
      <AdminStack.Screen
        component={DashboardScreen}
        name={dashboardScreenRoute}
      />
    </AdminStack.Navigator>
  );
};

export default AdminStackScreen;
