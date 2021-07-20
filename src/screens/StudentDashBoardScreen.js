import React from 'react';
import {FlatList, View, Dimensions} from 'react-native';
import {dashboardScreenStyles as styles} from '../styles/screens/dashboardScreenStyles';
import {globalStyles} from '../styles/globalStyles';
import ContainedButton from '../components/Buttons/ContainedButton';
import {systemWeights, human} from 'react-native-typography';
import NavigationHeader from '../components/NavigationHeader';
import {BoxShadow} from 'react-native-shadow';
import {dashboardRoutes} from './StudentDashboardRoutes';

const StudentDashboardScreen = ({navigation}) => {
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
    <View style={globalStyles.screenView}>
      <NavigationHeader
        style={{
          paddingTop: 0,
          marginTop: -5,
        }}
        navigation={navigation}
      />
      <View style={styles.container}>
        <FlatList
          keyExtractor={item => item.screenName}
          data={dashboardRoutes}
          renderItem={({item}) => {
            return (
              <BoxShadow setting={shadowOpt}>
                <ContainedButton
                  btnText={item.screenName}
                  onPress={() => {
                    if (item.routeName) {
                      navigation.push(item.routeName);
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
      </View>
      <View style={styles.footer}>
        <ContainedButton
          btnText="About Us"
          onPress={() => {}}
          isUpperCase={true}
          variant="secondary"
          btnStyle={{
            elevation: 6,
            height: 35,
            paddingHorizontal: 10,
          }}
          textStyle={{
            ...human.body,
            color: 'white',
          }}
        />
        <ContainedButton
          btnText="Contact Us"
          onPress={() => {}}
          isUpperCase={true}
          variant="secondary"
          btnStyle={{
            elevation: 6,
            height: 35,
            paddingHorizontal: 10,
          }}
          textStyle={{
            ...human.body,
            color: 'white',
          }}
        />
      </View>
    </View>
  );
};

export default StudentDashboardScreen;