import React from 'react';
import {Text, TextInput, View} from 'react-native';
import {inputFormStyles} from '../../styles/components/formStyles';

const FormInput = ({
  name,
  labelText = 'Input Label',
  placeHolder = 'Enter the placeholder',
  value = '',
  onChangeText,
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
        onChangeText={text => onChangeText(name, text)}
        style={[inputFormStyles.inputStyle, inputStyle]}
        secureTextEntry={name === 'password'}
      />
    </View>
  );
};

export default FormInput;
