import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import WelcomeScreen from 'screens/WelcomeScreen';
import LoginScreen from 'screens/LoginScreen';
import DashboardScreen from 'screens/DashboardScreen';
import EventsScreen from 'screens/EventsScreen';
import EditEventScreen from 'screens/EditEventScreen';
import DirectoryScreen from 'screens/DirectoryScreen';
import {directoryScreenRoute} from './screenNames';
import {
  welcomeScreenRoute,
  loginScreenRoute,
  dashboardScreenRoute,
  eventsScreenRoute,
  eventEditRoute,
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
      <AdminStack.Screen component={EventsScreen} name={eventsScreenRoute} />
      <AdminStack.Screen component={EditEventScreen} name={eventEditRoute} />
      <AdminStack.Screen
        component={DirectoryScreen}
        name={directoryScreenRoute}
      />
    </AdminStack.Navigator>
  );
};

export default AdminStackScreen;
