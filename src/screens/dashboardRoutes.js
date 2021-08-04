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
  LeaderBoardLeaderShipScreenRoute,
  homeScreenRoute,
} from '../navigation/screenNames';

export const dashboardRoutes = [
  {
    screenName: 'Home Page',
    routeName: homeScreenRoute,
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
    child: [
      {
        screenName: 'Feedback',
        routeName: ReachUs1ScreenRoute,
      },
      {
        screenName: 'Event idea pitch',
        routeName: ReachUs2ScreenRoute,
      },
    ],
  },

  {
    screenName: 'Leaderboards',
    routeName: LeaderBoardHomeScreenRoute,
    child: [
      {
        screenName: 'Your Point',
        routeName: LeaderBoardHomeScreenRoute,
      },
      {
        screenName: 'How To Earn',
        routeName: LeaderBoardHowToEarnScreenRoute,
      },
      {
        screenName: 'LeaderBoard Chart',
        routeName: LeaderBoardLeaderShipScreenRoute,
      },
    ],
  },
];
