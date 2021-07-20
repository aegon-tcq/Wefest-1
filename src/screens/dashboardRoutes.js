import {
  eventsScreenRoute,
  directoryScreenRoute,
  announcementScreenRoute,
  myEventsScreenRoute,
  galleryScreenRoute,
  ReachUs1ScreenRoute,
  ReachUs2ScreenRoute,
  AttendanceScreenRoute,
  StudentDashboardScreenRoute,
  LeaderBoardHomeScreenRoute,
  LeaderBoardHowToEarnScreenRoute,
  LeaderBoardLeaderShipScreenRoute
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
    routeName: AttendanceScreenRoute,
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
    routeName: ReachUs1ScreenRoute,
  },
  {
    screenName: 'Leaderboards',
    routeName: LeaderBoardHomeScreenRoute,
  },
];
