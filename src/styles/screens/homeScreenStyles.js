import {StyleSheet} from 'react-native';
import {systemWeights, human, material} from 'react-native-typography';
import Colors from '../../constants/Colors';

export const homeScreenStyles = StyleSheet.create({
  homeView: {
    flex: 1,
    backgroundColor: Colors.secondary,
  },
  header: {
    flex: 0.65,
    paddingTop: 15,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  headerImg: {
    resizeMode: 'contain',
    height: 110,
    width: 110,
  },
  main: {
    flex: 2,
    paddingHorizontal: 50,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleText: {
    ...material.display1Object,
    ...systemWeights.bold,
    color: '#fff',
    textAlign: 'center',
  },
  content1: {
    ...human.bodyObject,
    ...systemWeights.bold,
    color: Colors.orange,
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 0,
    lineHeight: 28,
  },
  content2: {
    ...systemWeights.bold,
    color: Colors.blue,
    fontSize: 25,
  },
  footerText: {
    fontSize: 28,
    ...systemWeights.bold,
    color: '#fff',
    textAlign: 'center',
  },
  footer: {
    flex: 1.35,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 20,
  },
  footerImg: {
    resizeMode: 'contain',
    height: 200,
    width: 200,
  },
});
