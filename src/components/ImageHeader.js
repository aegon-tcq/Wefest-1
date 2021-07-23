import React from 'react';
import {View, Image} from 'react-native';
import {imageHeaderStyles as styles} from './../styles/components/imageHeaderStyles';

const ImageHeader = ({containerStyle, image, imageStyle}) => {
  return (
    <View style={[styles.headerContainer, containerStyle]}>
      <Image source={image} style={[styles.imageContainer, imageStyle]} />
    </View>
  );
};

export default ImageHeader;
