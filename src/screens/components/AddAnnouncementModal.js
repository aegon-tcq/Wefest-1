import React from 'react';
import {
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import FormInput from '../../components/FormComponents/FormInput';
import {globalStyles} from '../../styles/globalStyles';
import Feather from 'react-native-vector-icons/Feather';
import ContainedButton from '../../components/Buttons/ContainedButton';
import {human} from 'react-native-typography';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default AddAnnouncementModal = ({
  onModalClose = () => console.log('modal close Btn'),
}) => {
  return (
    <KeyboardAvoidingView style={{flex: 1, padding: 20}}>
      <TouchableOpacity onPress={onModalClose}>
        <Feather name="x" size={30} />
      </TouchableOpacity>
      <View style={[globalStyles.screenView, {alignItems: 'center'}]}>
        <View
          style={{
            flex: 1,
            width: '100%',
          }}>
          <FormInput
            labelText="Name"
            name="name"
            onChangeText={(name, text) => {}}
          />
          <FormInput
            labelText="Award"
            name="award"
            onChangeText={(name, text) => {}}
          />
          <FormInput
            labelText="Date"
            name="date"
            onChangeText={(name, text) => {}}
          />
        </View>

        <View>
          <ContainedButton
            btnText="Submit"
            onPress={() => {}}
            isUpperCase={true}
            variant="secondary"
            btnStyle={{
              elevation: 6,
              height: 40,
              paddingHorizontal: 10,
            }}
            textStyle={{
              ...human.body,
              color: 'white',
            }}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};
