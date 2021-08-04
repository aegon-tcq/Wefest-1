import {
  MemberScreenRoute,
  directoryScreenRoute,
  announcementScreenRoute,
  galleryScreenRoute,
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
    screenName: 'Become A Member',
    routeName: MemberScreenRoute,
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
