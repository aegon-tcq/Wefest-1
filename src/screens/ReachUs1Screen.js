/* eslint-disable prettier/prettier */
import React from 'react';
import {FlatList, View, Dimensions, Text, TouchableOpacity, Image} from 'react-native';
import {dashboardScreenStyles as styles} from 'styles/screens/dashboardScreenStyles';
import {globalStyles} from '../styles/globalStyles';
import ContainedButton from '../components/Buttons/ContainedButton';
import {systemWeights, human} from 'react-native-typography';
import NavigationHeader from '../components/NavigationHeader';
import {BoxShadow} from 'react-native-shadow';
// import {ReachusRoutes} from './ReachusRoutes';
import AppHeader from '../components/AppHeader';

const ReachusRoutes = [
  {
    screenName: 'Name',
    routeName: '',
  },
  {
    screenName: 'EventName',
    routeName: '',
  },
];

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

  return (
    <View style={globalStyles.rootView}>
      <AppHeader title="Reach Us" />
      <View
        style={{
          alignItems:"center",
        }}
      />
      
        <Text
          style={{
            color: '#121212',
            fontSize: 24,
            marginTop:20,
            textAlign:"center",
            marginBottom:20
          }}>
          EVENT FEEDBACK FORM
        </Text>
          <FlatList
            keyExtractor={item => item.screenName}
            data={ReachusRoutes}
            style={{height:50}}
            contentContainerStyle={{alignItems:"center"}}
            renderItem={({item}) => {
              return (
                <BoxShadow setting={shadowOpt}>
                  <ContainedButton
                    btnText={item.screenName}
                    onPress={() => {
                      if (item.routeName) {
                        navigation.navigate(item.routeName);
                      }
                    }}
                    isUpperCase={true}
                    btnStyle={{
                      elevation: 6,
                    }}
                    textStyle={{
                      ...systemWeights.regular,
                      color: 'black',
                    }}
                  />
                </BoxShadow>
              );
            }}
          />
        <View style={{height:"50%", alignItems:"center",justifyContent:'space-between'}} >
        <Image
          source={require('../assets/reachus1.jpg')}
          resizeMode="contain"
          style={{
            height: 200,
            width: 300,
          }}></Image>
        <TouchableOpacity
        style={{alignItems:"flex-end",width:"100%",padding:15}}
        onPress={()=>{}}
        >
          <Text style={{borderBottomWidth:1,fontSize:18}}>Next</Text>
        </TouchableOpacity>
        <Image
          source={require('../assets/bottom-img.jpg')}
          resizeMode="contain"
          style={{
            height: Dimensions.get('screen').height*0.3,
            width:  Dimensions.get('screen').width*1.5,
          }}></Image>
        </View>
    </View>
  );
};
export default ReachUs1Screen;
