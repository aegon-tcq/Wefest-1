import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {dashboardScreenStyles as styles} from 'styles/screens/dashboardScreenStyles';
import {globalStyles} from 'styles/globalStyles';
import ContainedButton from 'components/Buttons/ContainedButton';
import {systemWeights, human} from 'react-native-typography';
import NavigationHeader from 'components/NavigationHeader';
import Colors from 'constants/Colors';

const dashboardItems = [
  {
    screenName: 'Home Page',
    routeName: '',
  },
  {
    screenName: 'Events',
    routeName: '',
  },
  {
    screenName: 'Attendance',
    routeName: '',
  },
  {
    screenName: 'My Events',
    routeName: '',
  },
  {
    screenName: 'Gallery',
    routeName: '',
  },
  {
    screenName: 'Directory',
    routeName: '',
  },
  {
    screenName: 'Announcements',
    routeName: '',
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

const DashboardScreen = ({navigation}) => {
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
          data={dashboardItems}
          renderItem={({item}) => {
            return (
              <ContainedButton
                btnText={item.screenName}
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
            );
          }}
        />
      </View>
      <View style={styles.footer}>
        <ContainedButton
          btnText="About Us"
          onPress={() => {}}
          isUpperCase={true}
          btnStyle={{
            elevation: 6,
            height: 40,
            paddingHorizontal: 10,
            backgroundColor: Colors.primary,
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
          btnStyle={{
            elevation: 6,
            height: 40,
            paddingHorizontal: 10,
            backgroundColor: Colors.primary,
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

export default DashboardScreen;
