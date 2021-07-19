import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {textButtonStyles as buttonStyles} from '../../styles/components/buttonStyles';
import IonicIcon from 'react-native-vector-icons/Ionicons';

const IconButton = ({icon, btnStyle, iconStyle = {}, onPress = () => {}}) => {
  return (
    <TouchableOpacity
      style={[buttonStyles.buttonContainer, btnStyle]}
      onPress={onPress}>
      {icon ? (
        icon
      ) : (
        <IonicIcon
          name="ios-chevron-back-sharp"
          style={[{fontSize: 35}, iconStyle]}
        />
      )}
    </TouchableOpacity>
  );
};

export default IconButton;
