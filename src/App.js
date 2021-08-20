import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import UserStackScreen from './navigation/UserStack';
import SplashScreen from './screens/SplashScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {setAuthState} from './redux/actions/authActions';
import {useDispatch, useSelector} from 'react-redux';
import UserHomeStackScreen from './navigation/userHomeStack';

const RootApp = () => (
  <NavigationContainer>
    <UserStackScreen />
  </NavigationContainer>
);

const RootUserHomeStack = () => (
  <NavigationContainer>
    <UserHomeStackScreen />
  </NavigationContainer>
);

const App = () => {
  const [showSplashScreen, setShowSplashScreen] = React.useState(true);
  const [isLoggedIn, setIsLoggedin] = React.useState(false);
  const dispatch = useDispatch();
  const {user} = useSelector(state => state.authState);

  const getUserDetails = async () => {

    try {
      let result = await AsyncStorage.getItem('authState');
      result = await JSON.parse(result);
      if (result.isLoggedIn) {
        dispatch(
          setAuthState({
            isAdmin: result.isAdmin,
            user: result.user,
          }),
        );
      }
    } catch (error) {}

    const timeOut = setTimeout(() => {
      setShowSplashScreen(false);
    }, 3000);
    checkLoggedIn();
    return () => {
      clearTimeout(timeOut);
    };
  };

  const checkLoggedIn = () => {
    if (user) setIsLoggedin(true);
  };

  React.useEffect(() => {
    console.log('cheking');
    checkLoggedIn();
  }, [user]);

  React.useEffect(() => {
    getUserDetails();
  }, []);

  if (showSplashScreen) return <SplashScreen />;
  if (isLoggedIn && user) return <RootUserHomeStack />;
  return <RootApp />;
};

export default App;
// import React, {Component} from 'react';
// import {Text, SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native';
// import FingerprintScanner from 'react-native-fingerprint-scanner';

// const optionalConfigObject = {
//   fallbackLabel: 'Show Passcode', 
//   passcodeFallback: true,
// }

// export default class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       biometryType: null,
//     };
//   }
//   componentDidMount() {
//     FingerprintScanner.isSensorAvailable()
//       .then((biometryType) => {
//         this.setState({biometryType});
//       })
//       .catch((error) => console.log('isSensorAvailable error => ', error));
//   }
  
//   getMessage=()=>{
//   const {biometryType}=this.state;
//     if(biometryType=='Face ID')
//     {
//       return 'Scan your Face on the device to continue'
//     }
//     else
//     {
//       return 'Scan your Fingerprint on the device scanner to continue'
//     }
//   }

//   showAuthenticationDialog = () => {
//     const {biometryType}=this.state;
//     if(biometryType!==null && biometryType!==undefined )
//     {
//     FingerprintScanner.authenticate({
//       description: this.getMessage(),
//       fallbackEnabled:true
//     })
//       .then(() => {
//         //you can write your logic here to what will happen on successful authentication
//       })
//       .catch((error) => {
//         console.log('Authentication error is => ', error);
//       });
//     }
//     else
//     {
//     console.log('biometric authentication is not available');
//     }
//   };

//   render() {
//     const {biometryType}=this.state;
//     return (
//       <SafeAreaView style={styles.container}>
//         <TouchableOpacity
//           style={styles.buttonStyle}
//           onPress={this.showAuthenticationDialog()}>
//           <Text style={styles.textStyle}>Authenticate</Text>
//         </TouchableOpacity>
//         <Text
//           style={
//             styles.biometryText
//           }>{`biometryType is  ${biometryType}`}</Text>
//       </SafeAreaView>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   buttonStyle: {
//     width: '70%',
//     backgroundColor: '#000',
//     borderRadius: 25,
//     padding: 10,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   buttonText: {color: '#fff', fontSize: 17, fontWeight: 'bold'},
//   biometryText: {
//     color: '#000',
//     fontSize: 17,
//     fontWeight: 'bold',
//     marginTop: 30,
//   },
// });
