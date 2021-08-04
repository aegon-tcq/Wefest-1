import {StyleSheet, Dimensions} from 'react-native';

export const leaderBoardLeaderShipStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    borderRadius: 15,
    padding: 10,
    flexDirection: 'row',
    width: Dimensions.get('screen').width * 0.8,
    marginVertical: 10,
    shadowColor: '#000',
    alignSelf:"center",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  leaderBoardCardStyle: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  leaderBoardCardTextStyle: {
    color: '#464d55',
  },
});
