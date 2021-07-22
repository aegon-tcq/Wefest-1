import React from 'react';
import {View, FlatList, Modal} from 'react-native';
import AppHeader from '../components/AppHeader';
import {globalStyles} from '../styles/globalStyles';
import FilterView from '../components/FilterView';
import ContainedButton from '../components/Buttons/ContainedButton';
import EventCard from '../components/EventCard';
import {cardColors} from '../styles/components/eventCardStyles';
import {eventEditRoute} from '../navigation/screenNames';
import AddEventModal from './components/AddEventModal';


const EventsScreen = ({navigation}) => {

  const [addEventModalVisible, setAddEventModalVisible] = React.useState(false);

  const changeAddEventModalVisiblity = () => {
    setAddEventModalVisible(!addEventModalVisible);
  }

  return (
    <View style={{flex: 1}}>
      <AppHeader title="Events" />
      <FilterView title="Earlier Events" />
      <View
        style={{
          flex: 1,
          paddingHorizontal: 10,
        }}>
        <FlatList
          data={[0, 1, 2, 3, 4, 5]}
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
              />
            );
          }}
        />
      </View>
      <View
        style={{
          paddingHorizontal: 35,
          paddingVertical: 15,
        }}>
        <ContainedButton
        onPress={changeAddEventModalVisiblity}
          btnText="Add New Event"
          isUpperCase={true}
          variant="secondary"
          btnStyle={{
            ...globalStyles.rowCenter,
          }}
          addIcon={true}
        />
      </View>
      <Modal
        animationType="slide"
        visible={addEventModalVisible}
        onRequestClose={() => {
          changeAddEventModalVisiblity()
        }}
      >
        <AddEventModal 
        onModalClose={changeAddEventModalVisiblity}
      />
      </Modal>
      
    </View>
  );
};

export default EventsScreen;
