import {StyleSheet} from 'react-native';
import Colors from '../constants/Colors';

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
  rowStart: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  rowSb: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  rowEnd: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flexCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
