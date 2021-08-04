import React from 'react';
import {FlatList, View, Dimensions} from 'react-native';
import {dashboardScreenStyles as styles} from '../styles/screens/dashboardScreenStyles';
import {globalStyles} from '../styles/globalStyles';
import ContainedButton from '../components/Buttons/ContainedButton';
import {systemWeights, human} from 'react-native-typography';
import NavigationHeader from '../components/NavigationHeader';
import {BoxShadow} from 'react-native-shadow';
import {dashboardRoutes} from './dashboardRoutes';
import Icon from 'react-native-vector-icons/Entypo';
const DashboardScreen = ({navigation}) => {
import {contactusScreenRoute} from '../navigation/screenNames';
const DashboardScreen = ({navigation, isDrawer = false, handleClose}) => {
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
  const [dropDownVisible, setDropDownVisible] = React.useState(null);

  const changedropDownVisibility = value => {
    if (dropDownVisible === null) setDropDownVisible(value);
    else setDropDownVisible(null);
  };

  return (
    <View style={globalStyles.screenView}>
      <NavigationHeader
        style={{
          paddingTop: 0,
          marginTop: -5,
        }}
        navigation={navigation}
        isDrawer={isDrawer}
        handleClose={handleClose}
      />
      <View style={styles.container}>
        <FlatList
          keyExtractor={item => item.screenName}
          data={dashboardRoutes}
          renderItem={({item}) => {
            return (
              <View>
                <BoxShadow setting={shadowOpt}>
                  <ContainedButton
                    icon={
                      item.child ? (
                        <Icon
                          name={
                            dropDownVisible === item.screenName
                              ? 'chevron-up'
                              : 'chevron-down'
                          }
                          color="#000"
                          size={20}
                        />
                      ) : null
              <BoxShadow setting={shadowOpt}>
                <ContainedButton
                  btnText={item.screenName}
                  onPress={() => {
                    if (item.routeName) {
                      navigation.navigate(item.routeName);
                      isDrawer && handleClose();
                    }
                    btnText={item.screenName}
                    onPress={() => {
                      if (item.child) {
                        changedropDownVisibility(item.screenName);
                      } else if (item.routeName) {
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
                {item.child && dropDownVisible === item.screenName
                  ? item.child.map(ch => (
                      <ContainedButton
                        btnText={ch.screenName}
                        onPress={() => navigation.push(ch.routeName)}
                        variant="secondary"
                        btnStyle={{
                          elevation: 6,
                          height: 35,
                          paddingHorizontal: 10,
                          marginTop: 10,
                          width: '50%',
                          marginLeft: '25%',
                        }}
                        textStyle={{
                          ...human.body,
                          color: 'white',
                        }}
                      />
                    ))
                  : null}
              </View>
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
            height: 40,
            paddingHorizontal: 10,
          }}
          textStyle={{
            ...human.body,
            color: 'white',
          }}
        />
        <ContainedButton
          btnText="Contact Us"
          onPress={() => {
            navigation.navigate(contactusScreenRoute);
          }}
          isUpperCase={true}
          variant="secondary"
          btnStyle={{
            elevation: 6,
            height: 40,
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

export default DashboardScreen;
