import {
  eventsScreenRoute,
  directoryScreenRoute,
  announcementScreenRoute,
  myEventsScreenRoute,
  galleryScreenRoute,
} from '../navigation/screenNames';

export const dashboardRoutes = [
  {
    screenName: 'Home Page',
    routeName: '',
  },
  {
    screenName: 'Events',
    routeName: eventsScreenRoute,
  },
  {
    screenName: 'Attendance',
    routeName: '',
  },
  {
    screenName: 'My Events',
    routeName: myEventsScreenRoute,
  },
  {
    screenName: 'Gallery',
    routeName: galleryScreenRoute,
  },
  {
    screenName: 'Directory',
    routeName: directoryScreenRoute,
  },
  {
    screenName: 'Announcements',
    routeName: announcementScreenRoute,
  },
  {
    screenName: 'React Out',
    routeName: '',
  },
  {
    screenName: 'Leaderboards',
    routeName: '',
  },
];
