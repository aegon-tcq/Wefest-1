import {StyleSheet} from 'react-native';
import Colors from 'constants/Colors';

export const galleryScreenStyles = StyleSheet.create({
  listView: {
    flex: 1,
  },
  actionsView: {
    flex: 1,
  },
  galleryItem: {
    height: 120,
    flex: 1,
    borderRadius: 20,
    backgroundColor: Colors.primary,
  },
});
