import {StyleSheet, Dimensions} from 'react-native';

export const leaderBoardLeaderShipStyles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:"#464d55",
    borderRadius:15,
    padding:10,
    flexDirection:"row",
    width:Dimensions.get('screen').width*0.8,
    marginVertical:10
  },
  leaderBoardCardStyle :{
    flexDirection:"row",
    flex:1,
    alignItems:"center",
    justifyContent:"space-around"
  },
  leaderBoardCardTextStyle:{
      color:"#FFF"
  }
});
