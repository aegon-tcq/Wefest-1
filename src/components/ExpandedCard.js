import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {expandedCardStyles} from '../styles/components/expandedCardStyles';
import Colors from '../constants/Colors';
import {human} from 'react-native-typography';

const ExpandedCard = ({
  expanded = false,
  cardStyle = {},
  containerStyle = {},
  btnText = 'Edit Details',
  buttonStyle = {},
  cardColor,
  cardContent,
  onPress,
  onEditPress,
}) => {
  return (
    <View style={[expandedCardStyles.rootContainer, containerStyle]}>
      <TouchableOpacity
        onPress={onPress}
        style={[
          expandedCardStyles.card,
          {
            backgroundColor: cardColor,
          },
          cardStyle,
        ]}>
        {cardContent}
      </TouchableOpacity>
      {expanded && (
        <View
          style={{
            paddingVertical: 20,
            ...expandedCardStyles.expandingView,
            paddingHorizontal: 110,
          }}>
          <TouchableOpacity
            onPress={onEditPress}
            style={[
              {
                backgroundColor: Colors.secondary,
                justifyContent: 'center',
                alignItems: 'center',
                paddingVertical: 8,
              },
              buttonStyle,
            ]}>
            <Text style={human.title3White}>{btnText.toUpperCase()}</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default ExpandedCard;
