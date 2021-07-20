import React from 'react';
import {Text, View} from 'react-native';
import {
  cardColors,
  eventCardStyles,
} from '../styles/components/eventCardStyles';
import LinearGradient from 'react-native-linear-gradient';
import TextButton from './Buttons/TextButton';

const EventCard = ({
  cardColor,
  decorationStyle = {},
  decorationColors = cardColors[0].gradient,
  titleStyle = {},
  titleColor,
  dateStyle = {},
  labelStyle = {},
  label = 'Edit Details',
  date = 'Date',
  name = 'Name',
  onPressEdit,
  showEdit = true,
}) => {
  return (
    <View style={eventCardStyles.card}>
      <View
        style={[eventCardStyles.cardContainer, {backgroundColor: cardColor}]}>
        <LinearGradient
          colors={decorationColors}
          style={[eventCardStyles.cardDecoration, decorationStyle]}
        />
        <View
          style={{
            flex: 1,
            paddingHorizontal: 20,
            paddingVertical: 20,
          }}>
          <Text
            style={[eventCardStyles.date, {...dateStyle, color: titleColor}]}>
            {date}
          </Text>
          <Text
            numberOfLines={1}
            style={[
              eventCardStyles.cardHeading,
              {...titleStyle, color: titleColor},
            ]}>
            {name.toUpperCase()}
          </Text>
        </View>
      </View>
      {showEdit && (
        <TextButton
          onPress={onPressEdit}
          btnText={label}
          btnStyle={[eventCardStyles.cardlabel, labelStyle]}
        />
      )}
    </View>
  );
};

export default EventCard;
