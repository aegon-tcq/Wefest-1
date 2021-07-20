import React,{useState} from 'react';
import {Text, View, KeyboardAvoidingView, Dimensions} from 'react-native';
import FormInput from 'components/FormComponents/FormInput'
import {globalStyles} from "../styles/globalStyles" ;
import GradientButton from '../components/Buttons/GradientButton';
import NavigationHeader from '../components/NavigationHeader';
import {dashboardScreenRoute} from  "../navigation/screenNames";
import Feather from "react-native-vector-icons/Feather";
import DropDownPicker from 'react-native-dropdown-picker';

const RegisterScreen = ({navigation}) => {
    const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: '2019', value: '2019'},
    {label: '2018', value: '2018'},
    {label: '2017', value: '2017'}
  ]);

  return (
    <KeyboardAvoidingView style={{flex: 1}}>
      <NavigationHeader navigation={navigation} />
      <View style={[globalStyles.screenView,{alignItems:"center"}]}>

        <View style={{
            height:80,
            width:80,
            borderRadius:40,
            backgroundColor:"#dd665c",
            alignItems:"center",
            justifyContent:'center'
        }} >
            <Feather name="camera" size={50} />
        </View>

        <View
          style={{
            flex: 1,
            width:"100%",
          }}>
          <FormInput labelText="First Name" />
          <FormInput labelText="Last Name" />
          <FormInput labelText="Password" />
          <FormInput labelText="Email Address" />
          <View style={{
            alignItems:"center",
        }} >
        <DropDownPicker
            open={open}
      style={{
        width:Dimensions.get('screen').width*0.4,
          backgroundColor:"#464d55",
      }}
      containerStyle={{
        width:Dimensions.get('screen').width*0.4,
        backgroundColor:"#000"
}}
dropDownContainerStyle={{backgroundColor:"#464d55"}}
textStyle={{
    color:"#FFF",
}}

      value={value}
      items={items}
      placeholder={"Batch Number"}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
    />
        </View>
        </View>
        
        
        <View
          style={{
            bottom:0,
            width:"100%"
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