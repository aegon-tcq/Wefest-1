import React from 'react';
import {StatusBar, Text, View, Image} from 'react-native';
import {appHeaderStyles} from '../styles/components/appHeaderStyles';
import Colors from '../constants/Colors';

const AppHeaderWithImage = ({title = 'App Header',backgroundColor = "#454c54", textColor = "#FFF"}) => {
  return (
    <View style={[appHeaderStyles.container,{backgroundColor:backgroundColor,height:150 }]}>
      <StatusBar backgroundColor={Colors.secondary} />
      <View style={{flexDirection:"row",justifyContent:"space-around",alignItems:"center"}} >
      <Image style={{height:100,width:100,borderRadius:50}} source={require("../assets/star.jpeg")} />
      <Text style={[appHeaderStyles.headerText,{color:textColor,fontWeight:"bold"}]}>{title}</Text>
      </View>
    </View>
  );
};

export default AppHeaderWithImage;
