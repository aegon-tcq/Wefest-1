import React from 'react';
import {
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import FormInput from '../../components/FormComponents/FormInput';
import {globalStyles} from '../../styles/globalStyles';
import Feather from 'react-native-vector-icons/Feather';
import ContainedButton from '../../components/Buttons/ContainedButton';
import {human} from 'react-native-typography';
import {
  announcmentRequest,
  announcmentRequestFail,
  announcmentRequestSuccess,
} from '../../redux/actions/announcementActions';
import {useSelector, useDispatch} from 'react-redux';
import Loader from '../../components/Loader';
import {API_BASE_URL} from '../../constants/ApiUrl';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default AddAnnouncementModal = ({
  announcementData = null,
  onModalClose = () => console.log('modal close Btn'),
}) => {
  const dispatch = useDispatch();
  const {announcements, loading} = useSelector(
    state => state.announcementState,
  );
  const [announcementForm, setAnnouncementForm] = React.useState( announcementData ? announcementData : {
    Name: '',
    Award: '',
    Date: '',
    id: announcements.length,
  });

  const handleInputChange = (key, value) => {
    setAnnouncementForm({
      ...announcementForm,
      [key]: value,
    });
  };

  //return true if empty value..
  const checkValues = () => {
    for (let key in announcementForm)
      if (announcementForm[key] == '') return true;
    return false;
  };

  const findIndexofAnnouncementForm = () => {
    for(let i = 0; i < announcements.length ;i ++) 
    if(announcements[i].id == announcementForm.id) return i;
  }

  const updateAnnouncement = async () => {
    if (!checkValues()) {
      const newAnnouncement = announcements.filter(dir => dir.id != announcementForm.id);
      newAnnouncement.splice(findIndexofAnnouncementForm(),0,announcementForm);
      dispatch(announcmentRequest());

      try {
        let response = await fetch(`${API_BASE_URL}/updateannouncement.php`, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(announcementForm),
        });
        dispatch(announcmentRequestSuccess(newAnnouncement));
        onModalClose();
      } catch (error) {
        console.error(error);
        dispatch(announcmentRequestFail(newAnnouncement));
        onModalClose();
      }
    }
  }

  const addNewAnnouncement = async () => {
    if (!checkValues()) {
      const newAnnouncement = [...announcements, announcementForm];
      dispatch(announcmentRequest());

      try {
        let response = await fetch(`${API_BASE_URL}/announcementsadmin.php`, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(announcementForm),
        });
        dispatch(announcmentRequestSuccess(newAnnouncement));
        onModalClose();
      } catch (error) {
        console.error(error);
        dispatch(announcmentRequestFail(newAnnouncement));
        onModalClose();
      }
    }
  };

  return (
    <KeyboardAvoidingView style={{flex: 1, padding: 20}}>
      <TouchableOpacity onPress={onModalClose}>
        <Feather name="x" size={30} />
      </TouchableOpacity>
      <View style={[globalStyles.screenView, {alignItems: 'center'}]}>
        <View
          style={{
            flex: 1,
            width: '100%',
          }}>
          <FormInput
            labelText="Name"
            name="name"
            value={announcementForm.Name}
            onChangeText={value => handleInputChange('Name', value)}
          />
          <FormInput
            labelText="Award"
            name="award"
            value={announcementForm.Award}
            onChangeText={value => handleInputChange('Award', value)}
          />
          <FormInput
            labelText="Date"
            name="date"
            value={announcementForm.Date}
            onChangeText={value => handleInputChange('Date', value)}
          />
        </View>

        <View>
          <ContainedButton
            btnText="Submit"
            onPress={()=>{
              if(announcementData) updateAnnouncement();
              else addNewAnnouncement()
            }}
            isUpperCase={true}
            variant="secondary"
            btnStyle={{
              elevation: 6,
              height: 40,
              paddingHorizontal: 10,
            }}
            textStyle={{
              ...human.body,
              color: 'white',
            }}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};
