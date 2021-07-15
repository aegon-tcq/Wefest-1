import React from 'react';
import {Image, Text, View} from 'react-native';
import TextButton from 'components/Buttons/TextButton';
import {globalStyles} from 'styles/globalStyles';
import {welcomeScreenStyles} from 'styles/screens/welcomeScreenStyles';
import {loginScreenRoute} from '/navigation/screenNames';
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
          <GradientButton btnText="Register Now" />
        </View>
        <View style={welcomeScreenStyles.btnWrapper}>
          <GradientButton btnText="Register Later" />
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
