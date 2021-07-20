import React from 'react';
import { Linking } from 'react-native';
import {Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import AppHeader from 'components/AppHeader';
import FilterView from 'components/FilterView';
import {globalStyles} from 'styles/globalStyles';
import Colors from 'constants/Colors';
import {human} from 'react-native-typography';


const ContactUsScreen = ({navigation}) => {
  <View
      style={{
        backgroundColor: 'grey',
        height: 1,
      }}
    />
  
  return (
    <ScrollView style={[globalStyles.rootView,{backgroundColor:"#454c54"}]}>
      <AppHeader 
      backgroundColor={"#FFF"}
      textColor={"#454c54"}
      title="Contact Us" />
      <View style={{flex:1}} >

      <View style={{flex:0.3}} >
        <Text style={{color:"#FFFF",textAlign:"center",fontSize:22,padding:10}} >
           You can contact us via <Text style={{fontWeight:"bold"}} >FACEBOOK, INSTAGRAM, EMAIL</Text> or <Text style={{fontWeight:"bold"}} >YOUTUBE</Text>
        </Text>

        <View style={{flex:1,alignItems:"center",borderBottomColor:"#FFF",borderBottomWidth:1,paddingVertical:15}}>
          <View style={{flexDirection:"row"}} >
          <TouchableOpacity onPress={() => Linking.openURL('http://google.com')}>
         <Image
          source={require("../assets/facebook.jpg")}
          resizeMode="contain"
          style={{
            height: 88,
            width: 89}}
        ></Image> 
</TouchableOpacity>
<TouchableOpacity onPress={() => Linking.openURL('http://google.com')}>
         <Image
          source={require("../assets/instagram.jpg")}
          resizeMode="contain"
          style={{
            height: 88,
            width: 89}}
        ></Image> 
</TouchableOpacity>
          </View>
          <View style={{flexDirection:"row"}} >
          <TouchableOpacity onPress={() => Linking.openURL('http://google.com')}>
         <Image
          source={require("../assets/youtube.jpg")}
          resizeMode="contain"
          style={{
            height: 88,
            width: 89}}
        ></Image> 
</TouchableOpacity>
<TouchableOpacity onPress={() => Linking.openURL('http://google.com')}>
         <Image
          source={require("../assets/gmail.jpg")}
          resizeMode="contain"
          style={{
            height: 88,
            width: 89}}
        ></Image> 
</TouchableOpacity>
          </View>

        </View>
      </View>
            <View>
              <Text style={{color:"#FFFF",textAlign:"center",fontSize:22,padding:10}} >This App is Developed and maintained by ABC & DEF</Text>
              <Text style={{color:"#FFFF",textAlign:"center",fontSize:22,padding:10,marginTop:20}} >Tap on the icon or text to contact the developers</Text>
            <View style={{padding:20}} >
              <TouchableOpacity 
              style={{flexDirection:"row",alignItems:"center"}}
              >
                <Image
                style={{height:50,width:50}}
                source={require("../assets/mailIcon.jpg")}
                 />
                 <Text style={{
                   color:"#FFF",
                   marginLeft:20,
                   fontSize:18
                 }} >123@gmail.com</Text>
              </TouchableOpacity>
              <TouchableOpacity 
              style={{flexDirection:"row",alignItems:"center"}}
              >
                <Image
                style={{height:50,width:50}}
                source={require("../assets/mailIcon.jpg")}
                 />
                 <Text style={{
                   color:"#FFF",
                   marginLeft:20,
                   fontSize:18
                 }} >123@gmail.com</Text>
              </TouchableOpacity>
              <TouchableOpacity 
              style={{flexDirection:"row",alignItems:"center"}}
              >
                <Image
                style={{height:50,width:50}}
                source={require("../assets/phone.jpg")}
                 />
                 <Text style={{
                   color:"#FFF",
                   marginLeft:20,
                   fontSize:18
                 }} >91+ 9199999890</Text>
              </TouchableOpacity>
              <TouchableOpacity 
              style={{flexDirection:"row",alignItems:"center"}}
              >
                <Image
                style={{height:50,width:50}}
                source={require("../assets/phone.jpg")}
                 />
                 <Text style={{
                   color:"#FFF",
                   marginLeft:20,
                   fontSize:18
                 }} >91+ 9199999890</Text>
              </TouchableOpacity>
            </View>
            
            </View>

      </View>
      {/* <View
        style={{
          flex: 1,
          paddingHorizontal: 15,
          alignItems:"center"
        }}/>
        <Text style={{color:"#FFF"}}>
        You can contact us via FACEBOOK, {"\n"}INSTAGRAM, EMAIL or YOUTUBE
      </Text>
      <View style={{
        height: 88,
        flexDirection: "row",
        marginTop: 18,
        marginLeft: 87,
        marginRight: 79}}>
       
       <TouchableOpacity onPress={() => Linking.openURL('http://google.com')}>
         <Image
          source={require("../assets/facebook.png")}
          resizeMode="contain"
          style={{
            height: 88,
            width: 89}}
        ></Image> 
</TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('http://google.com')}>
          <Image
          source={require("../assets/insta.png")}
          resizeMode="contain"
          style={{
            height: 78,
            width: 78,
            marginLeft: 42,
            marginTop: 5}}
        ></Image>
        </TouchableOpacity>
        <View style={{
          height: 75,
          flexDirection: "row",
          marginTop: 19,
          marginLeft: 100,
          marginRight: 81}}>
     <TouchableOpacity onPress={() => Linking.openURL('http://google.com')}>

        <Image
          source={require("../assets/gmail.png")}
          resizeMode="contain"
          style={{
            height: 75,
            width: 76,
            borderRadius: 4}}
        ></Image>
       </TouchableOpacity>
       <TouchableOpacity onPress={() => Linking.openURL('http://google.com')}>

       <Image
          source={require("../assets/youtube.png")}
          resizeMode="contain"
          style={{
              height: 63,
              width: 75,
              marginLeft: 43,
              marginTop: 6}}
        ></Image>
        </TouchableOpacity>
      </View>
     
      <Image
        source={require("../assets/line.png")}
        resizeMode="contain"
        style={{
            height: 7,
            width: 346,
            marginTop: 49,
            marginLeft: 15}}
      ></Image>

      <Text style={{ 
        color: "black",
        fontSize: 16,
        width: 338,
        height: 40,
        textAlign: "center",
        marginTop: 19,
        alignSelf: "center"}}>
        This App is Developed and maintained by{"\n"}ABC &amp; DEF
      {"\n"}Tap on the icon or text to contact {"\n"}the developers
      </Text>



      <View style={{
              height: 35,
              flexDirection: "row",
              marginTop: 38,
              marginLeft: 27,
              marginRight: 86}}>
        <Image
          source={require("../assets/mail.png")}
          resizeMode="contain"
          style={{
            height: 35,
            width: 41}}
        ></Image>
        <Text style={{
          color: "black",
          width: 211,
          height: 17,
          marginLeft: 10,
          marginTop: 9}}>123@gmail.com</Text>
      </View>
      <View style={{ 
        height: 35,
        flexDirection: "row",
        marginTop: 7,
        marginLeft: 27,
        marginRight: 86}}>
        <Image
          source={require("../assets/mail.png")}
          resizeMode="contain"
          style={{height: 35,
          width: 41}}
        ></Image>
        <Text style={{color:"#FFF"}}>abc@gmail.com</Text>
      </View>
      <View style={{
        height: 30,
        flexDirection: "row",
        marginTop: 8,
        marginLeft: 31,
        marginRight: 188}}>
        <Image
          source={require("../assets/phone.png")}
          resizeMode="contain"
          style={{
            height: 30,
            width: 30}}
        ></Image>
        <Text style={{
                  color: "black",
                  width: 109,
                  height: 17,
                  marginLeft: 17,
                  marginTop: 8}}>91+ 9199999890</Text>
      </View>
      <View style={{  
        height: 30,
        flexDirection: "row",
        marginTop: 11,
        marginLeft: 32,
        marginRight: 189}}>
        <Image
          source={require("../assets/phone.jpg")}
          resizeMode="contain"
          style={{height:30,
          width:30}}
        ></Image>
        <Text style={{ 
          color: "black",
          width: 109,
          height: 17,
          marginLeft: 15,
          marginTop: 7}}>91+ 9199999890</Text>




      </View>
        
      </View> */}
      </ScrollView>
      
      
    
)};




export default ContactUsScreen;