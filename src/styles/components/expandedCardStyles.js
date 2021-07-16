import {StyleSheet} from 'react-native';
import Colors from 'constants/Colors';

export const expandedCardStyles = StyleSheet.create({
  rootContainer: {

  },
  card: {
    width: '100%',
    height: 'auto',
    borderRadius: 10,
    paddingVertical: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.secondary,
    marginVertical: 10,
  },
  expandingView: {
    borderTopColor: 'grey',
    borderTopWidth: 1,
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
});
