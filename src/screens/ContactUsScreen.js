import React from 'react';
import {Linking} from 'react-native';
import {Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import Colors from '../constants/Colors';
import ImageHeader from '../components/ImageHeader';
import HeaderImage from '../assets/contactus.jpg';
import {contactusScreenStyles as styles} from './../styles/screens/contactusScreenStyles';

const ContactUsScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: Colors.secondary}}>
      <ImageHeader image={HeaderImage} />
      <View style={{flex: 1}}>
        <View style={styles.section1}>
          <Text style={styles.content}>
            You can contact us via Facebook, Instagram, Email or Youtube{' '}
          </Text>
          <Text style={styles.body}>
            Simply tap an icon to get in touchwith us.
          </Text>
          <View style={styles.iconWrapper}>
            <TouchableOpacity
              onPress={() => Linking.openURL('http://google.com')}>
              <Image
                source={require('../assets/facebook.png')}
                style={styles.icon}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => Linking.openURL('http://google.com')}>
              <Image
                source={require('../assets/instagram.png')}
                style={styles.icon}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => Linking.openURL('http://google.com')}>
              <Image
                source={require('../assets/gmail.png')}
                style={styles.icon1}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => Linking.openURL('http://google.com')}>
              <Image
                source={require('../assets/youtube.png')}
                style={styles.icon1}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.divider} />
        <View style={styles.section2}>
          <Text style={styles.text}>
            This App is Developed and maintained by : {'\n'}ABC & DEF
          </Text>
          <Text style={styles.text}>
            ( Tap on the icon or text to contact the developers)
          </Text>
          <View
            style={{
              marginTop: 30,
            }}>
            <TouchableOpacity style={styles.rowItem}>
              <Image
                style={styles.mailIcon}
                source={require('../assets/gmail.png')}
              />
              <Text style={styles.phoneText}>123@gmail.com</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.rowItem}>
              <Image
                style={styles.mailIcon}
                source={require('../assets/gmail.png')}
              />
              <Text style={styles.phoneText}>123@gmail.com</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.rowItem}>
              <Image
                style={styles.phoneIcon}
                source={require('../assets/phone.png')}
              />
              <Text style={styles.phoneText}>91+ 9199999890</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.rowItem}>
              <Image
                style={styles.phoneIcon}
                source={require('../assets/phone.png')}
              />
              <Text style={styles.phoneText}>91+ 9199999890</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ContactUsScreen;
