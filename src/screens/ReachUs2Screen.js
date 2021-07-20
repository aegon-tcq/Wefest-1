import React from 'react';
import {FlatList, View, Dimensions, Text, Image, ScrollView} from 'react-native';
import {globalStyles} from 'styles/globalStyles';
import ContainedButton from 'components/Buttons/ContainedButton';
import {systemWeights, human} from 'react-native-typography';
import {BoxShadow} from 'react-native-shadow';
import AppHeader from '../components/AppHeader';
const Reachus2Routes =  [
  {
    screenName: 'Mail ID ',
    routeName: '',
  },
  {
    screenName: 'Name',
    routeName: '',
  },
  {
      screenName: 'Contact No.',
      routeName: '',
    },
  {
      screenName: 'Event Idea',
      routeName: '',
  },
 
];
const ReachUs2Screen = ({navigation}) => {
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

  return(
    <ScrollView style={globalStyles.rootView}>
           <AppHeader title="Reach Us" />
           <View style={{flex:0.2,alignItems:"center",paddingVertical:20}} >
           <Text style={{
             color:"#121212",
             fontSize:29,
             textAlign:"center"
           }} >
           IDEA PITCH
             </Text>
             <Text style={{
             color:"#121212",
             fontSize:29,
             textAlign:"center"
           }}>
             Wish to execute your ideas?
             </Text>
             <Image 
               style={{height:200,width:200}}
               source={require("../assets/idea.jpg")}
             />
           </View>
           <View style={{flex:0.8, alignItems:"center",justifyContent:'space-around'}} >
           <FlatList
          keyExtractor={item => item.screenName}
          data={Reachus2Routes}
          style={{flex:1}}
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
        <ContainedButton
          btnText="Submit"
          onPress={() => {}}
          isUpperCase={true}
          variant="secondary"
          btnStyle={{
            elevation: 6,
            height: 40,
            paddingHorizontal: 10,
            width:"40%",
          }}
          textStyle={{
            ...human.body,
            color: 'white',
          }}
        />
           </View>
  </ScrollView>
  )
}

  export default ReachUs2Screen;