import React from 'react';
import {View} from 'react-native';
import IconButton from '../components/Buttons/IconButton';

const NavigationHeader = ({
  navigation,
  style = {},
  isDrawer = false,
  handleClose,
}) => {
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
          if (isDrawer) {
            handleClose();
          } else {
            navigation.pop();
          }
        }}
      />
    </View>
  );
};

export default NavigationHeader;
