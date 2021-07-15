import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {containedbuttonStyles as buttonStyles} from 'styles/components/buttonStyles';

const ContainedButton = ({
  btnText = 'Button',
  btnStyle = {},
  textStyle = {},
  onPress = () => {},
}) => {
  return (
    <TouchableOpacity
      style={[buttonStyles.buttonContainer, btnStyle]}
      onPress={onPress}>
      <Text style={[buttonStyles.buttonText, textStyle]}>{btnText}</Text>
    </TouchableOpacity>
  );
};

export default ContainedButton;
