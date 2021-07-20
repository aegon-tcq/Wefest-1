import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import WelcomeScreen from 'screens/WelcomeScreen';
import LoginScreen from 'screens/LoginScreen';
import StudentDashboardScreen from '../screens/StudentDashBoardScreen';
import EventsScreen from 'screens/EventsScreen';
import EditEventScreen from 'screens/EditEventScreen';
import DirectoryScreen from 'screens/DirectoryScreen';
import {directoryScreenRoute} from './screenNames';
import {LeaderBoardHomeScreenRoute,RegisterScreenRoute} from './screenNames';
import LeaderBoardHomeScreen from '../screens/LeaderBoardHomeScreen';
import LeaderBoardHowToEarnScreen from '../screens/LeaderBoardHowToEarnScreen';
import LeaderBoardLeaderShipScreen from '../screens/LeaderBoardLeaderShipScreen';
import RegisterScreen from '../screens/RegisterScreen';

import {
  welcomeScreenRoute,
  loginScreenRoute,
  dashboardScreenRoute,
  eventsScreenRoute,
  eventEditRoute,
  StudentDashboardScreenRoute,
  LeaderBoardHowToEarnScreenRoute,
  LeaderBoardLeaderShipScreenRoute
} from './screenNames';

const UserStack = createStackNavigator();

const UserStackScreen = () => {
  return (
    <UserStack.Navigator headerMode="none">
      <UserStack.Screen component={WelcomeScreen} name={welcomeScreenRoute} />
      <UserStack.Screen component={LoginScreen} name={loginScreenRoute} />
      <UserStack.Screen
        component={StudentDashboardScreen}
        name={StudentDashboardScreenRoute}
      />
      <UserStack.Screen component={RegisterScreen} name={RegisterScreenRoute} />
      <UserStack.Screen component={LeaderBoardHomeScreen} name={LeaderBoardHomeScreenRoute} />
      <UserStack.Screen component={LeaderBoardHowToEarnScreen} name={LeaderBoardHowToEarnScreenRoute} />
      <UserStack.Screen component={LeaderBoardLeaderShipScreen} name={LeaderBoardLeaderShipScreenRoute} />
      <UserStack.Screen component={EditEventScreen} name={eventEditRoute} />
      <UserStack.Screen
        component={DirectoryScreen}
        name={directoryScreenRoute}
      />
    </UserStack.Navigator>
  );
};

export default UserStackScreen;
