import {StyleSheet} from 'react-native';
import {systemWeights} from 'react-native-typography';
import Colors from '../../constants/Colors';

export const leaderpointsScreenStyles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#FFFFFF',
  },
  coins: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  card: {
    marginHorizontal: 40,
    backgroundColor: 'white',
    elevation: 5,
    height: 300,
    borderRadius: 8,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    position: 'absolute',
    backgroundColor: Colors.greyLight,
    height: '60%',
    width: '100%',
    top: '20%',
    borderRadius: 200,
  },
  titleView: {
    position: 'absolute',
    top: '15%',
    paddingHorizontal: 14,
    paddingVertical: 4,
    backgroundColor: Colors.greyShade,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  titleText: {
    textAlign: 'center',
    ...systemWeights.semibold,
    color: Colors.secondary,
  },
  pointsView: {
    position: 'absolute',
    backgroundColor: Colors.primary,
    paddingHorizontal: 20,
    paddingVertical: 18,
    borderRadius: 50,
    justifyContent: 'center',
    alignContent: 'center',
    elevation: 5,
  },
});
