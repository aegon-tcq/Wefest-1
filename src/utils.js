import {Alert} from "react-native"

export const alert = (title = 'title', message = 'message') =>
    Alert.alert(
      title,
      message,
      [
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );

export const checkEmptyField = (data = {}) => {
    for (let key in data)
      if (data[key] == '') return true;
    return false;
}