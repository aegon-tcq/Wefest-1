import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {textButtonStyles as buttonStyles} from 'styles/components/buttonStyles';

const TextButton = ({
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

export default TextButton;
