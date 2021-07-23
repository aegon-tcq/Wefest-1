import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import SplashImage from '../assets/SplashScreen.png';
const SplashScreen = () => {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <Image
        source={SplashImage}
        style={{
          height: '100%',
          width: '100%',
        }}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
