import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import DashboardScreen from '../screens/DashboardScreen';
import EventsScreen from '../screens/EventsScreen';
import EditEventScreen from '../screens/EditEventScreen';
import DirectoryScreen from '../screens/DirectoryScreen';
import AnnouncementsScreen from '../screens/AnnouncementsScreen';
import MyEventsScreen from '../screens/MyEventsScreen';
import GalleryScreen from '../screens/GalleryScreen';

import {
  welcomeScreenRoute,
  loginScreenRoute,
  dashboardScreenRoute,
  eventsScreenRoute,
  eventEditRoute,
  announcementScreenRoute,
  directoryScreenRoute,
  myEventsScreenRoute,
  galleryScreenRoute,
} from './screenNames';

const AdminStack = createStackNavigator();

const AdminStackScreen = () => {
  return (
    <AdminStack.Navigator headerMode="none">
      <AdminStack.Screen component={WelcomeScreen} name={welcomeScreenRoute} />
      <AdminStack.Screen
        component={MyEventsScreen}
        name={myEventsScreenRoute}
      />
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
      <AdminStack.Screen
        component={AnnouncementsScreen}
        name={announcementScreenRoute}
      />
      <AdminStack.Screen component={GalleryScreen} name={galleryScreenRoute} />
    </AdminStack.Navigator>
  );
};

export default AdminStackScreen;
