import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';

export const appHeaderStyles = StyleSheet.create({
  container: {
    height: 90,
    borderBottomRightRadius: 45,
    borderBottomLeftRadius: 45,
    backgroundColor: Colors.secondary,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 15,
  },
  headerText: {
    fontSize: 24,
    color: '#fff',
  },
});
