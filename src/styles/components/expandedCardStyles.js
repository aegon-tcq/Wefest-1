import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';

export const expandedCardStyles = StyleSheet.create({
  rootContainer: {
    marginVertical: 10,
  },
  card: {
    elevation: 5,
    width: '100%',
    height: 'auto',
    borderRadius: 10,
    paddingVertical: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.secondary,
  },
  expandingView: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
});
