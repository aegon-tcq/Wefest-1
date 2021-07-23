import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';

export const imageHeaderStyles = StyleSheet.create({
  headerContainer: {
    height: 170,
  },
  imageContainer: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
});
