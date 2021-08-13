import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';

export const inputFormStyles = StyleSheet.create({
  inputContainer: {
    marginVertical: 8,
    backgroundColor: Colors.secondary,
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 10,
  },
  inputLabel: {
    fontSize: 16,
    color: Colors.defaultColor,
  },
  inputStyle: {
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    marginBottom: 8,
    color: '#fff',
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
