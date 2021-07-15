import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import IconButton from 'components/Buttons/IconButton';

const NavigationHeader = ({navigation, style = {}}) => {
  return (
    <View
      style={[
        {
          backgroundColor: '#fff',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          paddingTop: 20,
        },
        style,
      ]}>
      <IconButton
        onPress={() => {
          navigation.pop();
        }}
      />
    </View>
  );
};

export default NavigationHeader;
