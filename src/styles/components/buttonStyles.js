import {StyleSheet} from 'react-native';
import Colors from 'constants/Colors';

export const containedbuttonStyles = StyleSheet.create({
  gradientContainer: {
    flex: 1,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gButtonContainer: {
    height: 65,
  },
  buttonText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.defaultColor,
  },
  buttonContainer: {
    backgroundColor: Colors.secondary,
    borderRadius:10,
    height: 48,
    marginVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const textButtonStyles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: 'transparent',
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '900',
    color: 'black',
  },
});
