import React from 'react';
import {View, FlatList} from 'react-native';
import AppHeader from '../components/AppHeader';
import EventCard from '../components/EventCard';
import {cardColors} from '../styles/components/eventCardStyles';

const MyEventsScreen = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <AppHeader title="My Events" />
      <View
        style={{
          flex: 1,
          paddingHorizontal: 10,
          paddingVertical: 15,
        }}>
        <FlatList
          data={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]}
          keyExtractor={item => item}
          numColumns={2}
          renderItem={({item, index}) => {
            return (
              <EventCard
                onPressEdit={() => {
                  navigation.navigate(eventEditRoute);
                }}
                titleColor={cardColors[index % 4].titleColor}
                cardColor={cardColors[index % 4].cardBg}
                decorationColors={cardColors[index % 4].gradient}
                showEdit={false}
              />
            );
          }}
        />
      </View>
    </View>
  );
};

export default MyEventsScreen;
