import React from 'react';
import {Text, View, Image, FlatList, Modal} from 'react-native';
import AppHeader from '../components/AppHeader';
import ContainedButton from '../components/Buttons/ContainedButton';
import FilterView from '../components/FilterView';
import {globalStyles} from '../styles/globalStyles';
import ExpandedCard from '../components/ExpandedCard';
import Colors from '../constants/Colors';
import {human} from 'react-native-typography';
import AddAnnouncementModal from './components/AddAnnouncementModal';
import {useSelector} from 'react-redux';
import PageLayout from './../containers/PageLayout';

const announcementColors = [Colors.primary, Colors.brown, Colors.pinkShade1];

const AnnouncementItem = ({item, index, isAdmin}) => {
  const [open, setOpen] = React.useState(false);

  const contentLeft = () => (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <Image
        source={{
          uri: 'https://previews.123rf.com/images/triken/triken1608/triken160800029/61320775-male-avatar-profile-picture-default-user-avatar-guest-avatar-simply-human-head-vector-illustration-i.jpg',
        }}
        style={{
          width: 50,
          height: 50,
          borderRadius: 50,
          marginRight: 10,
        }}
      />
      <View>
        <Text style={human.title3}>NAME</Text>
        <Text style={{...human.bodyObject, marginTop: 5}}>{'Award'}</Text>
      </View>
    </View>
  );

  const contentRight = () => (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <Text style={human.title3}>Date</Text>
    </View>
  );
  return (
    <ExpandedCard
      cardColor={announcementColors[index % announcementColors.length]}
      expanded={open}
      disabled={!isAdmin}
      onPress={() => {
        if (isAdmin) {
          setOpen(!open);
        }
      }}
      cardStyle={{
        borderRadius: 25,
      }}
      cardContent={
        <View style={{...globalStyles.rowSb, flex: 1}}>
          {contentLeft()}
          {contentRight()}
        </View>
      }
      buttonStyle={{
        justifyContent: 'center',
        alignItems: 'center',
      }}
    />
  );
};

const AnnouncementsScreen = () => {
  const [addAnnouncementModal, setAnnouncementModal] = React.useState(false);

  const toggleAnnouncementModal = () => {
    setAnnouncementModal(!addAnnouncementModal);
  };

  const {isAdmin} = useSelector(state => state.authState);
  return (
    <PageLayout>
      <View style={globalStyles.rootView}>
        <AppHeader title="Announcements" />
        <FilterView />
        <View
          style={{
            flex: 1,
            paddingHorizontal: 15,
          }}>
          <FlatList
            keyExtractor={item => item}
            data={[0, 1, 2, 3, 4]}
            renderItem={({item, index}) => {
              return (
                <AnnouncementItem key={item} index={index} isAdmin={isAdmin} />
              );
            }}
          />
        </View>
        {isAdmin && (
          <View
            style={{
              paddingVertical: 30,
              paddingHorizontal: 30,
            }}>
            <ContainedButton
              btnText="Add New Announcement"
              addIcon={true}
              variant="secondary"
              btnStyle={{
                ...globalStyles.rowCenter,
                height: 55,
                borderRadius: 15,
              }}
              onPress={toggleAnnouncementModal}
            />
          </View>
        )}

        <Modal
          animationType="slide"
          visible={addAnnouncementModal}
          onRequestClose={() => {
            toggleAnnouncementModal();
          }}>
          <AddAnnouncementModal onModalClose={toggleAnnouncementModal} />
        </Modal>
      </View>
    </PageLayout>
  );
};

export default AnnouncementsScreen;
