import React from 'react';
import {Dimensions, Animated} from 'react-native';
import {globalStyles} from './../styles/globalStyles';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import ActionModal from '../components/ActionModal';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const PageLayout = props => {
  const [showDrawer, setShowDrawer] = React.useState(false);
  const slideInTop = React.useRef(new Animated.Value(-deviceHeight)).current;

  function openModal() {
    setShowDrawer(true);
    Animated.timing(slideInTop, {
      duration: 500,
      toValue: 0,
      useNativeDriver: true,
    }).start();
  }

  function closeModal() {
    Animated.timing(slideInTop, {
      duration: 400,
      toValue: -deviceHeight,
      useNativeDriver: true,
    }).start();
    setTimeout(() => {
      setShowDrawer(true);
    }, 1000);
  }
  function onSwipeDown(gestureState) {
    openModal();
  }

  function onSwipeUp(gestureState) {
    closeModal();
  }

  const config = {
    velocityThreshold: 0.1,
    directionalOffsetThreshold: 40,
  };
  return (
    <GestureRecognizer
      onSwipeDown={state => onSwipeDown(state)}
      onSwipeUp={state => onSwipeUp(state)}
      config={config}
      style={[globalStyles.rootView, {zIndex: 100}]}>
      {props.children}
      {showDrawer && (
        <ActionModal slideInTop={slideInTop} closeModal={closeModal} />
      )}
    </GestureRecognizer>
  );
};

export default PageLayout;
