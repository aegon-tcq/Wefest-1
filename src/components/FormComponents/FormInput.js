import React from 'react';
import {Text, TextInput, View} from 'react-native';
import {inputFormStyles} from '../../styles/components/formStyles';

const FormInput = ({
  labelText = 'Input Label',
  placeHolder = 'Enter the placeholder',
  value = '',
  onChangeText = text => {},
  inputContainerStyle = {},
  inputStyle = {},
  labelStyle = {},
}) => {
  return (
    <View style={[inputFormStyles.inputContainer, inputContainerStyle]}>
      <Text style={[inputFormStyles.inputLabel, labelStyle]}>{labelText}</Text>
      <TextInput
        placeholder={placeHolder}
        placeholderTextColor="grey"
        value={value}
        onChangeText={onChangeText}
        style={[inputFormStyles.inputStyle, inputStyle]}
      />
    </View>
  );
};

export default FormInput;
