import React from 'react';
import {Image, Text, View, TouchableOpacity} from 'react-native';
import {
  homeScreenRoute,
  loginScreenRoute,
  RegisterScreenRoute,
  StudentDashboardScreenRoute,
} from '../navigation/screenNames';
import GradientButton from '../components/Buttons/GradientButton';
import TextButton from '../components/Buttons/TextButton';
import {globalStyles} from '../styles/globalStyles';
import {welcomeScreenStyles} from '../styles/screens/welcomeScreenStyles';
import {useDispatch} from 'react-redux';
import {setAuthState} from './../redux/actions/authActions';

const WelcomeScreen = ({navigation}) => {
  const dispatch = useDispatch();
  return (
    <View style={globalStyles.screenView}>
      <View style={welcomeScreenStyles.headerStyle}>
        <Text style={welcomeScreenStyles.headerText}>WELCOME</Text>
      </View>
      <View style={welcomeScreenStyles.imageWrapper}>
        <Image
          style={{
            width: 270,
            height: 270,
          }}
          source={require('../assets/welcome.jpeg')}
        />
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
        }}>
        <View style={welcomeScreenStyles.btnWrapper}>
          <GradientButton
            onPress={() => {
              dispatch(
                setAuthState({
                  isAdmin: false,
                }),
              );
              navigation.push(RegisterScreenRoute);
            }}
            btnText="Register Now"
          />
        </View>
        <View style={welcomeScreenStyles.btnWrapper}>
          <GradientButton
            onPress={() => {
              dispatch(
                setAuthState({
                  isAdmin: false,
                }),
              );
              navigation.push(homeScreenRoute);
            }}
            btnText="Register Later"
          />
        </View>
      </View>
      <View style={welcomeScreenStyles.footerBtnWrapper}>
        <TextButton
          btnText="Login As Admin"
          isUpperCase={true}
          btnStyle={welcomeScreenStyles.footerBtn}
          onPress={() => {
            navigation.push(loginScreenRoute);
          }}
        />
      </View>
    </View>
  );
};

export default WelcomeScreen;
