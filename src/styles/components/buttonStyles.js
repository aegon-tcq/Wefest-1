import {StyleSheet} from 'react-native';
import Colors from 'constants/Colors';

export const containedbuttonStyles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 20,
    backgroundColor: Colors.secondary,
    paddingVertical: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
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
