import 'react-native-gesture-handler';
import * as React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import UserStackScreen from './navigation/UserStack';
import AdminStackScreen from './navigation/AdminStack';
import {store, persistor} from './redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import SplashScreen from './screens/SplashScreen';

const RootAppWithProvider = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <NavigationContainer>
        <UserStackScreen />
      </NavigationContainer>
    </PersistGate>
  </Provider>
);

const App = () => {
  const [showSplashScreen, setShowSplashScreen] = React.useState(true);
  React.useEffect(() => {
    const timeOut = setTimeout(() => {
      setShowSplashScreen(false);
    }, 3000);
    return () => {
      clearTimeout(timeOut);
    };
  }, []);

  if (showSplashScreen) return <SplashScreen />;
  return <RootAppWithProvider />;
};

export default App;
