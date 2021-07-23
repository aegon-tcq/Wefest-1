import React from 'react';
import {Image, Text, View} from 'react-native';
import AppHeader from '../components/AppHeader';
import {leaderpointsScreenStyles as styles} from './../styles/screens/leaderpointsScreenStyles';
import LeaderPointsImage from '../assets/leaderpoints.png';
import {human, systemWeights} from 'react-native-typography';
const LeaderpointsScreen = () => {
  return (
    <View style={{flex: 1}}>
      <AppHeader title="Leaderpoints" />
      <View style={styles.container}>
        <View style={styles.circle}></View>
        <View style={styles.card}>
          <Image source={LeaderPointsImage} style={styles.coins} />
          <View style={styles.titleView}>
            <Text style={[human.title1, styles.titleText]}>Robert</Text>
          </View>
          <View style={styles.pointsView}>
            <Text style={[human.title1White, systemWeights.bold]}>40</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default LeaderpointsScreen;
