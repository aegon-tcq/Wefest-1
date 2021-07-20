import React from 'react';
import {Image, Text, View, TouchableOpacity} from 'react-native';
import TextButton from 'components/Buttons/TextButton';
import {globalStyles} from 'styles/globalStyles';
import {welcomeScreenStyles} from 'styles/screens/welcomeScreenStyles';
import {loginScreenRoute,RegisterScreenRoute} from '/navigation/screenNames';
import {StudentDashboardScreenRoute} from '/navigation/screenNames';
import GradientButton from 'components/Buttons/GradientButton';

const WelcomeScreen = ({navigation}) => {
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
          <GradientButton onPress={()=>{
            navigation.push(RegisterScreenRoute);
          }} btnText="Register Now" />
        </View>
        <View 
        style={welcomeScreenStyles.btnWrapper}>
          <GradientButton onPress={() => {
            navigation.push(StudentDashboardScreenRoute);
          }}
           btnText="Register Later" />
        </View>
      </View>
      <View style={welcomeScreenStyles.footerBtnWrapper}>
        <TextButton
          btnText="Login As User"
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
