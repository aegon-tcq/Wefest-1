import React from 'react';
import {FlatList, View, Text} from 'react-native';
import AppHeader from 'components/AppHeader';
import ContainedButton from 'components/Buttons/ContainedButton';
import {galleryScreenStyles} from 'styles/screens/galleryScreenStyles';

const GalleryItem = () => {
  return (
    <View style={galleryScreenStyles.galleryItem}>
      <Text>dsad</Text>
    </View>
  );
};

const GalleryScreen = () => {
  return (
    <View>
      <AppHeader title="Gallery" />
      <View style={galleryScreenStyles.listView}>
        <FlatList
          numColumns={2}
          keyExtractor={item => item}
          data={[0, 1, 2, 3]}
          renderItem={({item}) => {
            return <GalleryItem />;
          }}
        />
      </View>
      <View style={galleryScreenStyles.actionsView}>
        <ContainedButton btnText="Remove/Edit Images" variant="secondary" />
        <ContainedButton
          btnText="Add Images"
          variant="secondary"
          addIcon={true}
        />
        <ContainedButton
          btnText="Add Images"
          variant="secondary"
          addIcon={true}
        />
      </View>
    </View>
  );
};

export default GalleryScreen;
