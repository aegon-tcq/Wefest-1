/* eslint-disable prettier/prettier */
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Touchable,
} from 'react-native';
import AppHeader from '../components/AppHeader';
import PageLayout from '../containers/PageLayout';
import {attendanceScreenStyles} from '../styles/screens/attendanceScreenStyles';
import {API_BASE_URL} from '../constants/ApiUrl';
import Loader from '../components/Loader';
import {setEventState} from './../redux/actions/eventActions';
import {useSelector, useDispatch} from 'react-redux';
import {
  eventRequest,
  eventRequestFail,
  eventRequestSuccess,
} from '../redux/actions/eventActions';
import {alert, toast} from "../utils";
import LocalAuth from "react-native-local-auth"

const AttendanceCard = ({
  item,
  onPress,
}) => (
  <View style={attendanceScreenStyles.attendenceCard}>
    <Text style={attendanceScreenStyles.attendanceCardText}>{item.event}</Text>
    <Text style={attendanceScreenStyles.attendanceCardText}>{item.date}</Text>
    {/* <Text style={attendanceScreenStyles.attendanceCardText}>{day}</Text> */}
    <TouchableOpacity
      onPress={()=>onPress(item)}
      style={{
        backgroundColor: 'grey',
        padding: 5,
        borderRadius: 10,
        paddingHorizontal: 10,
        marginTop: 5,
      }}>
      <Text
        style={{
          fontSize: 12,
          color: '#FFF',
        }}>
        Mark Attendance
      </Text>
    </TouchableOpacity>
  </View>
);

function AttendenceScreen() {

  const dispatch = useDispatch();
  const {events, loading, isEdit} = useSelector(state => state.eventsState);
  const {user} = useSelector(state => state.authState);
  const getEventList = async () => {
    dispatch(eventRequest());
    try {
      let response = await fetch(`${API_BASE_URL}/eventuser.php`);
      let json = await response.json();
      dispatch(eventRequestSuccess(json));
    } catch (error) {
      console.error(error);
      dispatch(eventRequestFail(json));
    }
  };

  React.useEffect(() => {
    getEventList();
  }, []);

  const markAttendence = async (item) => {
    dispatch(eventRequest());
    try {
      let response = await fetch(`${API_BASE_URL}/markAttendance.php`,{
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email:user.email,
          id:item.id,
          Date:item.date
        }),
      });
      let json = await response.text();
      console.log(json)
      alert("Success","Attendece makred");
      dispatch(eventRequestFail(json));
    } catch (error) {
      console.error(error);
      alert("Error","Something went wrong");
      dispatch(eventRequestFail(json));
    }
  }

  const authenticate = (item) => {
    LocalAuth.authenticate({
      reason: 'this is a secure area, please authenticate yourself',
      fallbackToPasscode: true,    // fallback to passcode on cancel
      suppressEnterPassword: true // disallow Enter Password fallback
    })
    .then(success => {
      toast('Authenticated Successfully');
      markAttendence(item);
    })
    .catch(error => {
      alert('Authentication Failed', error.message)
    })
  }

  return loading ? (
    <Loader />
  ):(
    <PageLayout>
      <View style={{flex: 1}}>
        <AppHeader title={'Attendance'} />
        <View style={{flex: 1, padding: 10}}>
          <FlatList
            data={events}
            keyExtractor={(item, index) => 'key' + index}
            numColumns={2}
            renderItem={({item}) => (
              <AttendanceCard item={item} onPress={authenticate} />
            )}
          />
        </View>
      </View>
    </PageLayout>
  );
}

export default AttendenceScreen;
