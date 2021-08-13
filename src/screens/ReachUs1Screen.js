/* eslint-disable prettier/prettier */
import React from 'react';
import {
  ScrollView,
  View,
  Dimensions,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import {dashboardScreenStyles as styles} from 'styles/screens/dashboardScreenStyles';
import {globalStyles} from '../styles/globalStyles';
import ContainedButton from '../components/Buttons/ContainedButton';
import {systemWeights, human} from 'react-native-typography';
import NavigationHeader from '../components/NavigationHeader';
import {BoxShadow} from 'react-native-shadow';
// import {ReachusRoutes} from './ReachusRoutes';
import AppHeader from '../components/AppHeader';
import {ReachUs2ScreenRoute} from '../navigation/screenNames';
import ReachUs2Screen from './ReachUs2Screen';
import PageLayout from './../containers/PageLayout';
import FormInput from '../components/FormComponents/FormInput';
import {alert, checkEmptyField} from "../utils";

const ReachUs1Screen = ({navigation}) => {
  const shadowOpt = {
    height: 50,
    width: Dimensions.get('screen').width - 50,
    color: '#E9948D',
    border: 3,
    radius: 12,
    opacity: 0.2,
    x: 0,
    y: -1,
    style: {marginVertical: 7, borderRadius: 10},
  };

  const [reachUs1Form, setReachUs1Form] = React.useState({
    name: '',
    eventname:''
  });

  const handleInputChange = (key, value) => {
    setReachUs1Form({
      ...reachUs1Form,
      [key]: value,
    });
  };
  
  const navigateToNextScreen = () => {

    if(checkEmptyField(reachUs1Form)){
      alert('Warning','Fields cannot be empty');
      return
    }
    navigation.push(ReachUs2ScreenRoute,reachUs1Form);
  }

  return (
    <PageLayout>
      <ScrollView style={globalStyles.rootView}>
        <AppHeader title="Reach Us" />
        <View
          style={{
            alignItems: 'center',
          }}
        />

        <Text
          style={{
            color: '#121212',
            fontSize: 24,
            marginTop: 20,
            textAlign: 'center',
            marginBottom: 20,
          }}>
          EVENT FEEDBACK FORM
        </Text>

        <View style={{flex: 1, padding: 20}}>
          <FormInput
            labelText="Name"
            name="name"
            onChangeText={value => handleInputChange('name', value)}
          />
          <FormInput
            labelText="Event Name"
            name="eventname"
            onChangeText={value => handleInputChange('eventname', value)}
          />
        </View>

        <View
          style={{
            height:Dimensions.get('screen').height*0.45 ,
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Image
            source={require('../assets/reachus1.jpg')}
            resizeMode="contain"
            style={{
              height: "50%",
              width: 300,
            }} />
          <TouchableOpacity
            style={{alignItems: 'flex-end', width: '100%', padding: 15}}
            onPress={navigateToNextScreen}>
            <Text style={{borderBottomWidth: 1, fontSize: 18}}>Next</Text>
          </TouchableOpacity>
          <Image
            source={require('../assets/bottom-img.jpg')}
            resizeMode="cover"
            style={{
              height: "20%",
              width: "100%",
            }} />
        </View>
      </ScrollView>
    </PageLayout>
  );
};
export default ReachUs1Screen;
