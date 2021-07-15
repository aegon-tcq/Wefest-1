import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {containedbuttonStyles as buttonStyles} from 'styles/components/buttonStyles';
import LinearGradient from 'react-native-linear-gradient';
import Colors from 'constants/Colors';

const GradientButton = ({
  btnText = 'Button',
  btnContainerStyle = {},
  gradientContainerStyle = {},
  textStyle = {},
  onPress = () => {},
}) => {
  return (
    <TouchableOpacity
      style={[buttonStyles.gButtonContainer, btnContainerStyle]}
      onPress={onPress}>
      <LinearGradient
        colors={[Colors.secondary, Colors.secondaryLight]}
        style={[buttonStyles.gradientContainer, gradientContainerStyle]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}>
        <View>
          <Text style={[buttonStyles.buttonText, textStyle]}>{btnText}</Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default GradientButton;
