import React from 'react';
import {
  Text,
  View,
  Dimensions,
  Image,
} from 'react-native';
import AppHeader from '../components/AppHeader';
import ContainedButton from '../components/Buttons/ContainedButton';
import {systemWeights, human} from 'react-native-typography';
import NavigationHeader from '../components/NavigationHeader';
import {BoxShadow} from 'react-native-shadow';
import {
  eventsScreenRoute,
  directoryScreenRoute,
} from '../navigation/screenNames';
import {globalStyles} from '../styles/globalStyles';

const HowToEarnText = ({
  simpleText = 'Headline',
  highlightedText = '(10 Points)',
}) => (
  <View>
    <Text style={{color: '#464d55', fontSize: 18, textAlign: 'center'}}>
      {simpleText}
    </Text>
    <Text
      style={{
        color: '#464d55',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
      }}>
      {highlightedText}
    </Text>
  </View>
);

function LeaderBoardHowToEarnScreen({navigation}) {
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
    <View style={globalStyles.rootView}>
      <AppHeader title={'leaderBoard'} />
      <NavigationHeader
        style={{
          paddingTop: 0,
          marginTop: 5,
        }}
        navigation={navigation}
      />
      <View
        style={{
          flex: 1,
          alignItems: 'center',
        }}>
        <BoxShadow setting={shadowOpt}>
          <ContainedButton
            btnText={'How To Earn'}
            onPress={() => {}}
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
        <Image
          style={{
            height: Dimensions.get('screen').height * 0.2,
            width: Dimensions.get('screen').width * 0.5,
          }}
          source={require('../assets/coins.jpg')}
        />
        <View style={{flex: 1, justifyContent: 'space-around'}}>
          <HowToEarnText
            simpleText={'When you open the app'}
            highlightedText={'(10 Points)'}
          />
          <HowToEarnText
            simpleText={'If you open continuously for 5 days'}
            highlightedText={'(100 Points)'}
          />
          <HowToEarnText
            simpleText={'If you open continuously for 10 days'}
            highlightedText={'(200 Points)'}
          />
        </View>
      </View>
    </View>
  );
}

export default LeaderBoardHowToEarnScreen;
