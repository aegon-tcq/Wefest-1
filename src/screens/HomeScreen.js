import React from 'react';
import {Image, Text, View} from 'react-native';
import {homeScreenStyles as styles} from './../styles/screens/homeScreenStyles';
import LogoImage from '../assets/AppLogo.png';
import FooterImage from '../assets/footerImage.png';
const HomeScreen = () => {
  return (
    <View style={styles.homeView}>
      <View style={styles.header}>
        <Image source={LogoImage} style={styles.headerImg} />
      </View>
      <View style={styles.main}>
        <Text style={styles.titleText}>The Rotaract Club of K.C. College</Text>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={styles.content1}>One Stop {'\n'} Destination for</Text>
          <Text style={styles.content2}>OPPORTUNITIES</Text>
        </View>
        <Text style={styles.footerText}>Made with Love by RCKC</Text>
      </View>
      <View style={styles.footer}>
        <Image source={FooterImage} style={styles.footerImg} />
      </View>
    </View>
  );
};

export default HomeScreen;
