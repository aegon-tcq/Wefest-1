import React from 'react';
import {
  Text,
  View,
  Dimensions,
  Image,
} from 'react-native';
import {globalStyles} from '../styles/globalStyles';
import HowToEarn1 from '../assets/hte1.png';
import HowToEarn2 from '../assets/hte2.png';
import HowToEarn3 from '../assets/hte3.png';
import HowToEarnBg from '../assets/htebg.png';

const HowToEarnText = ({text = 'text here', imageName}) => (
  <View style={{flexDirection: 'row', alignItems: 'center', margin: 20}}>
    <Image style={{height: 50, width: 50}} source={imageName} />
    <Text
      style={{width: '80%', color: '#464d55', fontSize: 18, marginLeft: 20}}>
      {text}
    </Text>
  </View>
);

function LeaderBoardHowToEarnScreen({navigation}) {

  return (
    <View style={[globalStyles.rootView, {backgroundColor: '#464d55'}]}>
      <View style={{flex: 0.25, alignItems: 'center'}}>
        <Image
          style={{
            height: Dimensions.get('screen').height * 0.2,
            width: Dimensions.get('screen').width * 0.8,
          }}
          resizeMode="contain"
          source={HowToEarnBg}
        />
      </View>
      <View
        style={{
          flex: 0.75,
          backgroundColor: '#FFF',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          alignItems: 'center',
          justifyContent: 'space-around',
        }}>
        <Text style={{color: '#464d55', fontSize: 22, marginBottom: 40}}>
          How To Earn Points
        </Text>
        <View style={{}}>
          <HowToEarnText
            text={'When you open the app (10 Points)'}
            imageName={HowToEarn1}
          />
          <HowToEarnText
            text={'If you open continuously for 5 days (100 Points)'}
            imageName={HowToEarn2}
          />
          <HowToEarnText
            text={'If you open continuously for 10 days (200 Points)'}
            imageName={HowToEarn3}
          />
        </View>
      </View>
    </View>
  );
}

export default LeaderBoardHowToEarnScreen;
