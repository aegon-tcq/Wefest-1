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

const AttendanceCard = ({
  name = 'NAME',
  date = 'DATE',
  day = 'DAY',
  onPress,
}) => (
  <View style={attendanceScreenStyles.attendenceCard}>
    <Text style={attendanceScreenStyles.attendanceCardText}>{name}</Text>
    <Text style={attendanceScreenStyles.attendanceCardText}>{date}</Text>
    <Text style={attendanceScreenStyles.attendanceCardText}>{day}</Text>
    <TouchableOpacity
      onPress={onPress}
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
  return (
    <PageLayout>
      <View style={{flex: 1}}>
        <AppHeader title={'Attendance'} />
        <View style={{flex: 1, padding: 10}}>
          <FlatList
            data={[0, 1, 2, 3, 4, 5, 6, 7, 8]}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item}
            numColumns={2}
            renderItem={() => (
              <AttendanceCard onPress={() => console.log('pressed')} />
            )}
          />
        </View>
      </View>
    </PageLayout>
  );
}

export default AttendenceScreen;
