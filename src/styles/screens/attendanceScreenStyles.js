import {StyleSheet} from 'react-native';
import Colors from 'constants/Colors';

export const attendanceScreenStyles = StyleSheet.create({
  attendenceCard:{
    backgroundColor:"#dd665c",
    borderRadius:10,
    width:"40%",
    margin:20,
    alignItems:"center",
    justifyContent:"center",
    padding:10,
    shadowColor: "#000",
shadowOffset: {
width: 0,
height: 5,
},
shadowOpacity: 1,
shadowRadius: 10,

elevation: 10,
  },
  attendanceCardText:{
    color:"#FFF",
    fontSize:18
  }
});
