import {StyleSheet} from 'react-native';
import Colors from 'constants/Colors';

export const galleryScreenStyles = StyleSheet.create({
  listView: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  actionsView: {
    flex: 0.65,
    paddingVertical: 15,
    paddingHorizontal: 35,
    justifyContent: 'center',
  },
  actionsView1: {
    flex: 0.65,
    paddingVertical: 15,
    paddingHorizontal: 35,
    justifyContent: 'center',
  },
  galleryItem: {
    height: 140,
    flex: 1,
    borderRadius: 10,
    backgroundColor: Colors.primary,
    marginVertical: 10,
    marginHorizontal: 10,
    position: 'relative',
  },
  checkboxView: {
    position: 'absolute',
    zIndex: 2,
    right: 10,
    top: 10,
  },
});
