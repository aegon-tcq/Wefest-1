import React from 'react';
import {StatusBar, Text, View} from 'react-native';
import {appHeaderStyles} from 'styles/components/appHeaderStyles';
import Colors from 'constants/Colors';

const AppHeader = ({title = 'App Header',backgroundColor = "#454c54", textColor = "#FFF"}) => {
  return (
    <View style={[appHeaderStyles.container,{backgroundColor:backgroundColor}]}>
      <StatusBar backgroundColor={Colors.secondary} />
      <Text style={[appHeaderStyles.headerText,{color:textColor}]}>{title.toUpperCase()}</Text>
    </View>
  );
};

export default AppHeader;
