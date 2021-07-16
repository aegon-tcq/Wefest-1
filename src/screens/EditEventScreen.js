import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import NavigationHeader from 'components/NavigationHeader';
import ContainedButton from 'components/Buttons/ContainedButton';
import {globalStyles} from 'styles/globalStyles';
import AppHeader from 'components/AppHeader';

const EditEventScreen = ({navigation}) => {
  const options = [
    {
      name: 'Add Images',
      onPress: () => {},
    },
    {
      name: 'Event Name',
      onPress: () => {},
    },
    {
      name: 'Add Details',
      onPress: () => {},
    },
  ];
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <AppHeader title="Events" />
      <NavigationHeader navigation={navigation} />
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {options.map((option, index) => {
          return (
            <ContainedButton
              key={option.name + index}
              btnText={option.name}
              variant="secondary"
              btnStyle={{
                ...globalStyles.rowSb,
                width: 300,
                marginVertical: 14,
                borderRadius: 15,
                height: 55,
              }}
              addIcon={true}
            />
          );
        })}
      </View>
    </View>
  );
};

export default EditEventScreen;
