import {StyleSheet} from 'react-native';
import Colors from 'constants/Colors';
export const cardColors = [
  {
    cardBg: Colors.pink,
    titleColor: Colors.darkPink,
    gradient: [Colors.pinkShade0, Colors.pinkShade1],
  },
  {
    cardBg: Colors.brown,
    titleColor: Colors.darkYellow,
    gradient: [Colors.yellow, Colors.shadeWhite],
  },
  {
    cardBg: Colors.blue,
    titleColor: Colors.darkBlue,
    gradient: [Colors.blueShade0, Colors.blueShade1],
  },
  {
    cardBg: Colors.violetShade1,
    titleColor: Colors.darkViolet,
    gradient: [Colors.violetShade0, Colors.violetShade0],
  },
];

export const eventCardStyles = StyleSheet.create({
  card: {
    flex: 1,
    marginHorizontal: 12,
    marginVertical: 10,
  },
  cardContainer: {
    height: 115,
    flex: 1,
    borderRadius: 30,
    position: 'relative',
  },
  cardDecoration: {
    position: 'absolute',
    height: '85%',
    width: '55%',
    top: -3,
    left: 0,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 2,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 8,
  },
  cardHeading: {
    fontSize: 24,
  },
  date: {
    fontSize: 20,
  },
  cardlabel: {
    marginTop: 5,
    fontSize: 19,
    color: 'black',
    textAlign: 'center',
  },
});
