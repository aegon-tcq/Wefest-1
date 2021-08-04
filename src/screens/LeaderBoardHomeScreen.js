import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';
import AppHeader from '../components/AppHeader';
import ContainedButton from '../components/Buttons/ContainedButton';
import {systemWeights, human} from 'react-native-typography';
import NavigationHeader from '../components/NavigationHeader';
import {BoxShadow} from 'react-native-shadow';
import {
  LeaderBoardHowToEarnScreenRoute,
  LeaderBoardLeaderShipScreenRoute,
  leaderpointsRoute,
} from '../navigation/screenNames';
import PageLayout from '../containers/PageLayout';

const dashboardItems = [
  {
    screenName: 'My Points',
    routeName: leaderpointsRoute,
  },
  {
    screenName: 'How To Earn',
    routeName: LeaderBoardHowToEarnScreenRoute,
  },
  {
    screenName: 'Leadership Board',
    routeName: LeaderBoardLeaderShipScreenRoute,
  },
];

function LeaderBoardHomeScreen({navigation}) {
  const shadowOpt = {
    height: 50,
    width: Dimensions.get('screen').width - 50,
    color: '#E9948D',
    border: 3,
    radius: 12,
    opacity: 0.2,
    x: 0,
    y: -1,
    style: {marginVertical: 7, borderRadius: 10},
  };
  return (
    <PageLayout>
      <View style={{flex: 1}}>
        <AppHeader title={'leaderBoard'} />
        <NavigationHeader
          style={{
            paddingTop: 0,
            marginTop: 5,
          }}
          navigation={navigation}
        />
        {/* <View style={{alignItems:"center"}} > */}
        <Image
          style={{
            height: Dimensions.get('screen').height * 0.3,
            width: Dimensions.get('screen').width * 0.8,
            marginLeft: Dimensions.get('screen').width * 0.1,
          }}
          source={require('../assets/welcome.jpeg')}
        />
        <FlatList
          style={{flex: 1}}
          contentContainerStyle={{
            justifyContent: 'space-around',
            alignItems: 'center',
            flexGrow: 1,
          }}
          keyExtractor={item => item.screenName}
          data={dashboardItems}
          renderItem={({item}) => {
            return (
              <BoxShadow setting={shadowOpt}>
                <ContainedButton
                  btnText={item.screenName}
                  onPress={() => {
                    if (item.routeName) {
                      navigation.navigate(item.routeName);
                    }
                  }}
                  isUpperCase={true}
                  btnStyle={{
                    elevation: 6,
                  }}
                  textStyle={{
                    ...systemWeights.regular,
                    color: 'black',
                  }}
                />
              </BoxShadow>
            );
          }}
        />
        {/* </View> */}
      </View>
    </PageLayout>
  );
}

export default LeaderBoardHomeScreen;
