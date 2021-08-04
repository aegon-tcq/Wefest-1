import React, {useState} from 'react';
import {
  Image,
  View,
  KeyboardAvoidingView,
  Modal,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import FormInput from '../../components/FormComponents/FormInput';
import {globalStyles} from '../../styles/globalStyles';
import Feather from 'react-native-vector-icons/Feather';
import * as ImagePicker from 'react-native-image-picker';
import ContainedButton from '../../components/Buttons/ContainedButton';
import {systemWeights, human} from 'react-native-typography';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default AddeventModal = ({
  onModalClose = () => console.log('modal close Btn'),
}) => {
  const [imageFile, setImageFile] = useState(null);

  const chooseImage = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.launchImageLibrary(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        const source = {uri: response.uri};
        console.log(
          'response file-Uri',
          JSON.stringify(response.assets[0].uri),
        );
        setImageFile({
          fileData: response.assets[0],
          fileUri: response.assets[0].uri,
        });
      }
    });
  };

  return (
    <KeyboardAvoidingView style={{flex: 1, padding: 20}}>
      <TouchableOpacity onPress={onModalClose}>
        <Feather name="x" size={30} />
      </TouchableOpacity>
      <View style={[globalStyles.screenView, {alignItems: 'center'}]}>
        {imageFile === null ? (
          <TouchableOpacity
            onPress={chooseImage}
            style={{
              height: 80,
              width: 80,
              borderRadius: 40,
              backgroundColor: '#dd665c',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Feather name="camera" size={50} />
          </TouchableOpacity>
        ) : (
          <Image
            style={{height: 100, width: 100, borderRadius: 50}}
            source={{uri: imageFile.fileUri}}
          />
        )}

        <View
          style={{
            flex: 1,
            width: '100%',
          }}>
          <FormInput
            labelText="Event Name"
            name="eventname"
            onChangeText={(name, text) => {}}
          />
          <FormInput
            labelText="Event Date"
            name="eventdate"
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
