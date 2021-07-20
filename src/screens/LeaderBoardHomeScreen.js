import React from 'react';
import {StyleSheet, Text, View, FlatList, Image, Dimensions} from 'react-native';
import AppHeader from "../components/AppHeader";
import ContainedButton from "../components/Buttons/ContainedButton";
import {systemWeights, human} from 'react-native-typography';
import NavigationHeader from '../components/NavigationHeader';
import {BoxShadow} from 'react-native-shadow';
import {LeaderBoardHowToEarnScreenRoute,
  LeaderBoardLeaderShipScreenRoute} from '../navigation/screenNames';


const dashboardItems = [
    {
      screenName: 'My Points',
      routeName: '',
    },
    {
      screenName: 'How To Earn',
      routeName: LeaderBoardHowToEarnScreenRoute,
    },
    {
      screenName: 'Leadership Board',
      routeName: LeaderBoardLeaderShipScreenRoute,
    }
];

function LeaderBoardHomeScreen({navigation}) {
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
        <View style={{flex:1}} >
            <AppHeader 
                title={"leaderBoard"}
            />
    <NavigationHeader
            style={{
              paddingTop: 0,
              marginTop: 5,
            }}
            navigation={navigation}
          />
          {/* <View style={{alignItems:"center"}} > */}
          <Image 
          style={{
              height:Dimensions.get('screen').height*0.3,
              width:Dimensions.get('screen').width*0.8,
              marginLeft:Dimensions.get('screen').width*0.1
          }}
              source={require("../assets/welcome.jpeg")}
          />
          <FlatList
          style={{flex:1}}
          contentContainerStyle={{justifyContent:"space-around",alignItems:"center",flexGrow:1}}
              keyExtractor={item => item.screenName}
              data={dashboardItems}
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
          {/* </View> */}
        </View>
    )
    
    //   return (
    //     <View style={globalStyles.screenView}>
    //       <NavigationHeader
    //         style={{
    //           paddingTop: 0,
    //           marginTop: -5,
    //         }}
    //         navigation={navigation}
    //       />
    //       <View style={styles.container}>
    //         <FlatList
    //           keyExtractor={item => item.screenName}
    //           data={dashboardItems}
    //           renderItem={({item}) => {
    //             return (
    //               <BoxShadow setting={shadowOpt}>
    //                 <ContainedButton
    //                   btnText={item.screenName}
    //                   onPress={() => {
    //                     if (item.routeName) {
    //                       navigation.navigate(item.routeName);
    //                     }
    //                   }}
    //                   isUpperCase={true}
    //                   btnStyle={{
    //                     elevation: 6,
    //                   }}
    //                   textStyle={{
    //                     ...systemWeights.regular,
    //                     color: 'black',
    //                   }}
    //                 />
    //               </BoxShadow>
    //             );
    //           }}
    //         />
    //       </View>
    //       <View style={styles.footer}>
    //         <ContainedButton
    //           btnText="About Us"
    //           onPress={() => {}}
    //           isUpperCase={true}
    //           variant="secondary"
    //           btnStyle={{
    //             elevation: 6,
    //             height: 40,
    //             paddingHorizontal: 10,
    //           }}
    //           textStyle={{
    //             ...human.body,
    //             color: 'white',
    //           }}
    //         />
    //         <ContainedButton
    //           btnText="Contact Us"
    //           onPress={() => {}}
    //           isUpperCase={true}
    //           variant="secondary"
    //           btnStyle={{
    //             elevation: 6,
    //             height: 40,
    //             paddingHorizontal: 10,
    //           }}
    //           textStyle={{
    //             ...human.body,
    //             color: 'white',
    //           }}
    //         />
    //       </View>
    //     </View>);
}

export default LeaderBoardHomeScreen;
