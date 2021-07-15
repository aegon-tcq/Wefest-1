import {StyleSheet} from 'react-native';
import Colors from 'constants/Colors';

export const globalStyles = StyleSheet.create({
  rootView: {
    flex: 1,
    backgroundColor: Colors.defaultColor,
  },
  screenView: {
    flex: 1,
    padding: 10,
    backgroundColor: Colors.defaultColor,
  },
  flexCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  
});
