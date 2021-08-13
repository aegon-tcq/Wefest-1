import React, {useState} from 'react';
import {
  Image,
  View,
  KeyboardAvoidingView,
  Modal,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import FormInput from '../../components/FormComponents/FormInput';
import {globalStyles} from '../../styles/globalStyles';
import Feather from 'react-native-vector-icons/Feather';
import * as ImagePicker from 'react-native-image-picker';
import ContainedButton from '../../components/Buttons/ContainedButton';
import {systemWeights, human} from 'react-native-typography';
import {
  eventRequest,
  eventRequestFail,
  eventRequestSuccess
} from "../../redux/actions/eventActions";
import {API_BASE_URL} from "../../constants/ApiUrl";
import {useSelector, useDispatch} from 'react-redux';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default AddeventModal = ({
  onModalClose = () => console.log('modal close Btn'),
}) => {
  const [imageFile, setImageFile] = useState(null);

  const dispatch = useDispatch();
  const {events, loading} = useSelector(state => state.eventsState);
  const [eventForm, setEventForm] = React.useState({
    "id": events.length,
    "eventName": "",
    "eventDetails": "",
    "eventDate": ""
  });

  const handleInputChange = (key, value) => {
    setEventForm({
      ...eventForm,
      [key]: value,
    });
  };

  //return true if empty value..
  const checkValues = () => {
    for (let key in eventForm)
      if (eventForm[key] == '') return true;
    return false;
  };

  const addNewEvent = async () => {
    if (!checkValues()) {
      const newEvent = [...events, eventForm];
      dispatch(eventRequest());

      try {
        let response = await fetch(`${API_BASE_URL}/eventadmin.php`, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(eventForm),
        });
        dispatch(eventRequestSuccess(newEvent));
        onModalClose();
      } catch (error) {
        console.error(error);
        dispatch(eventRequestFail(newEvent));
        onModalClose();
      }
    }
  };

  const chooseImage = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.launchImageLibrary(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        const source = {uri: response.uri};
        console.log(
          'response file-Uri',
          JSON.stringify(response.assets[0].uri),
        );
        setImageFile({
          fileData: response.assets[0],
          fileUri: response.assets[0].uri,
        });
      }
    });
  };

  return (
    <KeyboardAvoidingView style={{flex: 1, padding: 20}}>
      <TouchableOpacity onPress={onModalClose}>
        <Feather name="x" size={30} />
      </TouchableOpacity>
      <View style={[globalStyles.screenView, {alignItems: 'center'}]}>
        {imageFile === null ? (
          <TouchableOpacity
            onPress={chooseImage}
            style={{
              height: 80,
              width: 80,
              borderRadius: 40,
              backgroundColor: '#dd665c',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Feather name="camera" size={50} />
          </TouchableOpacity>
        ) : (
          <Image
            style={{height: 100, width: 100, borderRadius: 50}}
            source={{uri: imageFile.fileUri}}
          />
        )}

        <View
          style={{
            flex: 1,
            width: '100%',
          }}>
          <FormInput
            labelText="Event Name"
            name="eventname"
            onChangeText={value => handleInputChange('eventName', value)}
          />
          <FormInput
            labelText="Event Date"
            name="eventdate"
            onChangeText={value => handleInputChange('eventDate', value)}
          />
        </View>

        <View>
          <ContainedButton
            btnText="Submit"
            onPress={addNewEvent}
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
