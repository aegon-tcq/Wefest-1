import React from 'react';
import {Image, Text, View} from 'react-native';
import ContainedButton from 'components/Buttons/ContainedButton';
import TextButton from 'components/Buttons/TextButton';
import {globalStyles} from 'styles/screens/globalStyles';
import {welcomeScreenStyles} from 'styles/screens/welcomeScreenStyles';

const WelcomeScreen = () => {
  return (
    <View style={globalStyles.screenView}>
      <View style={welcomeScreenStyles.headerStyle}>
        <Text style={welcomeScreenStyles.headerText}>WELCOME</Text>
      </View>
      <View style={welcomeScreenStyles.imageWrapper}>
        <Image
          style={{
            width: 280,
            height: 280,
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
          <ContainedButton btnText="Register Now" />
        </View>
        <View style={welcomeScreenStyles.btnWrapper}>
          <ContainedButton btnText="Register Later" />
        </View>
      </View>
      <View style={welcomeScreenStyles.footerBtnWrapper}>
        <TextButton
          btnText="Login As Admin"
          isUpperCase={true}
          btnStyle={welcomeScreenStyles.footerBtn}
        />
      </View>

    </View>
  );
};

export default WelcomeScreen;
