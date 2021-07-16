import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import Colors from 'constants/Colors';
import {globalStyles} from 'styles/globalStyles';
import IconButton from 'components/Buttons/IconButton';
import {human} from 'react-native-typography';

const FilterView = ({title = ''}) => {
  return (
    <View
      style={[
        title !== '' ? globalStyles.rowSb : globalStyles.rowEnd,
        {
          paddingVertical: 10,
          paddingHorizontal: 18,
        },
      ]}>
      {title !== '' && (
        <View>
          <Text style={human.title2}>{title}</Text>
        </View>
      )}

      <View>
        <IconButton
          icon={
            <AntDesignIcon
              name="filter"
              style={{
                fontSize: 32,
                color: Colors.secondary,
              }}
            />
          }
        />
      </View>
    </View>
  );
};

export default FilterView;
