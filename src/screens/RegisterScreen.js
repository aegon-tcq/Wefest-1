import React, {useState} from 'react';

import {
  Image,
  View,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import FormInput from '../components/FormComponents/FormInput';
import {globalStyles} from '../styles/globalStyles';
import GradientButton from '../components/Buttons/GradientButton';
import NavigationHeader from '../components/NavigationHeader';
import {dashboardScreenRoute} from '../navigation/screenNames';
import Feather from 'react-native-vector-icons/Feather';
import DropDownPicker from 'react-native-dropdown-picker';
import * as ImagePicker from 'react-native-image-picker';


const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const RegisterScreen = ({navigation}) => {

  const [imageFile, setImageFile] = useState(null);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: '2017', value: '2017'},
    {label: '2018', value: '2018'},
    {label: '2019', value: '2019'},
  ]);

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
    {label: '2017', value: '2017'},
  ]);

  const [registerForm, setRegisterForm] = React.useState({
    firstName: '',
    lastName: '',
    password: '',
    email: '',
  });

  const handleInputChange = (key, value) => {
    setRegisterForm({
      ...registerForm,
      [key]: value,
    });
  };

  return (
    <KeyboardAvoidingView style={{flex: 1}}>
      <NavigationHeader navigation={navigation} />
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
          <FormInput labelText="First Name" />
          <FormInput labelText="Last Name" />
          <FormInput labelText="Password" />
          <FormInput labelText="Email Address" />
          <FormInput
            labelText="First Name"
            name="firstName"
            value={registerForm.firstName}
            onChangeText={handleInputChange}
          />
          <FormInput
            labelText="Last Name"
            name="lastName"
            value={registerForm.lastName}
            onChangeText={handleInputChange}
          />
          <FormInput
            labelText="Password"
            name="password"
            value={registerForm.password}
            onChangeText={handleInputChange}
          />
          <FormInput
            labelText="Email Address"
            name="email"
            value={registerForm.email}
            onChangeText={handleInputChange}
          />
          <View
            style={{
              alignItems: 'center',
            }}>
             <DropDownPicker
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
              placeholder={'Batch Number'}
              style={{
                height: 35,
                width:windowWidth*0.4,
                alignSelf: 'center',
                backgroundColor: '#464d55',
              }}
              textStyle={{
                color: '#FFF',
              }}
              dropDownContainerStyle={{
                backgroundColor: '#464d55',
                width:windowWidth*0.4,
               alignSelf:"center"
              }}
              arrowSize={30}
            />
          </View>

        </View>

        <View
          style={{
            bottom: 0,
            width: '100%',
          }}>
          <GradientButton
            btnText="LOG IN"
            gradientContainerStyle={{
              borderRadius: 22,
            }}
            onPress={() => {
              navigation.navigate(dashboardScreenRoute);
            }}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  dropDownContainer: {
    borderWidth: 0,
    width: 400,
    alignSelf: 'center',
    marginTop: 8,
  },
});

