import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {containedbuttonStyles as buttonStyles} from '../../styles/components/buttonStyles';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import {globalStyles} from '../../styles/globalStyles';

const ContainedButton = ({
  btnText = 'Button',
  btnStyle = {},
  textStyle = {},
  onPress = () => {},
  isUpperCase = false,
  icon = null,
  variant = 'primary',
  addIcon = false,
  btnContainerStyle = {},
}) => {
  return (
    <TouchableOpacity
      style={[buttonStyles[variant], btnStyle]}
      onPress={onPress}>
      <View
        style={[
          !addIcon ? globalStyles.flexCenter : globalStyles.rowSb,
          {
            flex: 1,
          },
          btnContainerStyle,
        ]}>
        <Text style={[buttonStyles.buttonText, textStyle]}>
          {isUpperCase ? btnText.toUpperCase() : btnText}
        </Text>

        {addIcon && (
          <View>
            <AntDesignIcon
              name="plus"
              style={{
                marginLeft: 10,
                fontSize: 32,
                color: 'white',
              }}
            />
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default ContainedButton;
