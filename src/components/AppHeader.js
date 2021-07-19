import React from 'react';
import {StatusBar, Text, View} from 'react-native';
import {appHeaderStyles} from '../styles/components/appHeaderStyles';
import Colors from '../constants/Colors';

const AppHeader = ({title = 'App Header'}) => {
  return (
    <View style={appHeaderStyles.container}>
      <StatusBar backgroundColor={Colors.secondary} />
      <Text style={appHeaderStyles.headerText}>{title.toUpperCase()}</Text>
    </View>
  );
};

export default AppHeader;
