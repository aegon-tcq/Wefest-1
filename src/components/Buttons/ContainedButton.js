import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {containedbuttonStyles as buttonStyles} from 'styles/components/buttonStyles';

const ContainedButton = ({
  btnText = 'Button',
  btnStyle = {},
  textStyle = {},
  onPress = () => {},
  isUpperCase = false,
}) => {
  return (
    <TouchableOpacity
      style={[buttonStyles.buttonContainer, btnStyle]}
      onPress={onPress}>
      <Text style={[buttonStyles.buttonText, textStyle]}>
        {isUpperCase ? btnText.toUpperCase() : btnText}
      </Text>
    </TouchableOpacity>
  );
};

export default ContainedButton;
