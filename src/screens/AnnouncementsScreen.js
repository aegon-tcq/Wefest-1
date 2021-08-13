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
import {useSelector, useDispatch} from 'react-redux';
import PageLayout from './../containers/PageLayout';
import {
  announcmentRequest,
  announcmentRequestFail,
  announcmentRequestSuccess,
} from '../redux/actions/announcementActions';
import Loader from '../components/Loader';
import {API_BASE_URL} from '../constants/ApiUrl';

const announcementColors = [Colors.primary, Colors.brown, Colors.pinkShade1];

const AnnouncementItem = ({item, index, isAdmin, onEditDetailsPress}) => {
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
        <Text style={human.title3}>{item.Name}</Text>
        <Text style={{...human.bodyObject, marginTop: 5}}>{item.Award}</Text>
      </View>
    </View>
  );

  const contentRight = () => (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <Text style={human.title3}>{item.Date}</Text>
    </View>
  );
  return (
    <ExpandedCard
      cardColor={announcementColors[index % announcementColors.length]}
      expanded={open}
      onEditPress={()=>onEditDetailsPress(item)}
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

  const [editAnnouncementData, setEditAnnouncementData] = React.useState(null);

  const onEditDetailsPress = (item) => {
    setEditAnnouncementData(item);
    toggleAnnouncementModal();
  }

  const dispatch = useDispatch();
  const {announcements, loading} = useSelector(
    state => state.announcementState,
  );

    const getAnnouncementsList = async () => {
      dispatch(announcmentRequest());
      try {
        let response = await fetch(`${API_BASE_URL}/announcementsuser.php`);
        let json = await response.json();
        dispatch(announcmentRequestSuccess(json));
      } catch (error) {
        console.error(error);
        dispatch(announcmentRequestFail(json));
      }
    }

    React.useEffect(() => {
      getAnnouncementsList();
    }, []);

  const {isAdmin} = useSelector(state => state.authState);
  return loading ? (
    <Loader />
  ) : (
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
            data={announcements}
            keyExtractor={(item, index) => 'key' + index}
            renderItem={({item, index}) => {
              return (
                <AnnouncementItem 
                onEditDetailsPress={onEditDetailsPress}
                item={item} key={item} index={index} isAdmin={isAdmin} />
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
          <AddAnnouncementModal 
          announcementData={editAnnouncementData}
          onModalClose={toggleAnnouncementModal} />
        </Modal>
      </View>
    </PageLayout>
  );
};

export default AnnouncementsScreen;
