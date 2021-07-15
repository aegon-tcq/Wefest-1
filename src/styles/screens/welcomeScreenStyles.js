import {StyleSheet} from 'react-native';
import Colors from 'constants/Colors';

export const welcomeScreenStyles = StyleSheet.create({
  headerStyle: {
    marginTop: 20,
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 35,
    color: Colors.primary,
    fontWeight: '900',
  },
  imageWrapper: {
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  btnWrapper: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  footerBtnWrapper: {
    margin: 20,
    flex:.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerBtn: {
    borderBottomColor: Colors.primary,
    borderBottomWidth: 2,
    width: 200,
  },
});
