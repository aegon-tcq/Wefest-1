import {StyleSheet} from 'react-native';
import {systemWeights, human, material} from 'react-native-typography';
import Colors from '../../constants/Colors';

export const contactusScreenStyles = StyleSheet.create({
  section1: {
    flex: 0.4,
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  section2: {
    flex: 1,
    paddingHorizontal: 20,
  },
  divider: {
    height: 1,
    backgroundColor: '#fff',
    marginHorizontal: 15,
    marginVertical: 15,
  },
  content: {
    ...human.calloutWhiteObject,
  },
  body: {
    ...human.calloutWhiteObject,
  },
  iconWrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  icon: {
    width: 35,
    height: 35,
    resizeMode: 'contain',
  },
  icon1: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  text: {
    ...human.subheadWhiteObject,
    marginBottom: 5,
  },
  phoneText: {
    ...human.subheadWhiteObject,
  },
  mailIcon: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
    marginRight: 10,
  },
  phoneIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    marginRight: 10,
  },
  rowItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 7,
  },
});
