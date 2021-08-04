import React from 'react';
import {Text, View, KeyboardAvoidingView} from 'react-native';
import FormInput from '../components/FormComponents/FormInput';
import {globalStyles} from '../styles/globalStyles';
import GradientButton from '../components/Buttons/GradientButton';
import {human} from 'react-native-typography';
import TextButton from '../components/Buttons/TextButton';
import NavigationHeader from '../components/NavigationHeader';
import {homeScreenRoute} from '../navigation/screenNames';
import {useDispatch} from 'react-redux';
import {setAuthState} from './../redux/actions/authActions';

const LoginScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const [loginForm, setLoginForm] = React.useState({
    username: '',
    password: '',
  });

  const handleInputChange = (key, value) => {
    setLoginForm({
      ...loginForm,
      [key]: value,
    });
  };
  return (
    <KeyboardAvoidingView style={{flex: 1}}>
      <NavigationHeader navigation={navigation} />
      <View style={globalStyles.screenView}>
        <View
          style={[
            globalStyles.flexCenter,
            {flex: 0.8, justifyContent: 'flex-start'},
          ]}>
          <Text style={human.title1}>LOGIN</Text>
        </View>
        <View
          style={{
            flex: 2,
            padding: 20,
          }}>
          <FormInput
            labelText="Enter Username"
            onChangeText={handleInputChange}
            name="username"
            value={loginForm.username}
          />
          <FormInput
            labelText="Enter Password"
            onChangeText={handleInputChange}
            name="password"
            value={loginForm.password}
          />
          <TextButton
            btnText="Forgot Password?"
            btnStyle={{
              alignSelf: 'flex-end',
              borderBottomWidth: 1,
              borderBottomColor: 'black',
            }}
            textStyle={human.headline}
          />
        </View>
        <View
          style={{
            padding: 55,
            flex: 1,
          }}>
          <GradientButton
            btnText="LOG IN"
            gradientContainerStyle={{
              borderRadius: 22,
            }}
            onPress={() => {
              dispatch(
                setAuthState({
                  isAdmin: true,
                }),
              );
              navigation.navigate(homeScreenRoute);
            }}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
