import {
    MemberScreenRoute,
    directoryScreenRoute,
    announcementScreenRoute,
    galleryScreenRoute,
    LeaderBoardHomeScreenRoute
  } from 'navigation/screenNames';
  
  export const dashboardRoutes = [
    {
      screenName: 'Home Page',
      routeName: '',
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
    },
  ];