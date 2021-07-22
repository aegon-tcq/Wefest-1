import React from 'react';
import {FlatList, View, Text} from 'react-native';
import CheckBox from 'react-native-check-box';
import AppHeader from '../components/AppHeader';
import ContainedButton from '../components/Buttons/ContainedButton';
import {galleryScreenStyles} from '../styles/screens/galleryScreenStyles';
import {globalStyles} from '../styles/globalStyles';
import FilterView from '../components/FilterView';
import {human} from 'react-native-typography';

const GalleryItem = ({isEdit}) => {
  const [toggleCheckBox, setToggleCheckBox] = React.useState(false);

  const showCheckBox = () => {
    if (isEdit) {
      return (
        <View style={galleryScreenStyles.checkboxView}>
          <CheckBox
            isChecked={toggleCheckBox}
            unCheckedImage={
              <View
                style={{
                  backgroundColor: '#fafafa',
                  height: 18,
                  width: 18,
                  marginTop: 3,
                  marginRight: 3,
                }}></View>
            }
            onClick={() => setToggleCheckBox(!toggleCheckBox)}
            uncheckedCheckBoxColor="grey"
            checkBoxColor="#fff"
          />
        </View>
      );
    }
    return null;
  };
  return <View style={galleryScreenStyles.galleryItem}>{showCheckBox()}</View>;
};

const GalleryScreen = () => {
  const [isEdit, setIsEdit] = React.useState(false);
  return (
    <View style={globalStyles.rootView}>
      <AppHeader title="Gallery" />
      <FilterView showBackBtn={isEdit}  onPressBackBtn={() => setIsEdit(false)}/>
      <View style={galleryScreenStyles.listView}>
        <FlatList
          numColumns={2}
          keyExtractor={item => item}
          data={[0, 1, 2, 3, 4, 5]}
          renderItem={({item}) => {
            return <GalleryItem isEdit={isEdit} />;
          }}
        />
      </View>
      {isEdit ? (
        <View style={galleryScreenStyles.actionsView1}>
          <View
            style={{
              flex: 0.5,
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}>
            <Text style={human.body}>Select images to remove or edit.</Text>
          </View>
          <ContainedButton
            btnText="Remove Images"
            variant="secondary"
            btnStyle={{
              marginBottom: 15,
            }}
          />
          <ContainedButton btnText="Edit Images" variant="secondary" />
        </View>
      ) : (
        <View style={galleryScreenStyles.actionsView}>
          <ContainedButton
            btnText="Remove/Edit Images"
            variant="secondary"
            btnStyle={{
              marginBottom: 10,
            }}
            onPress={() => setIsEdit(true)}
          />
          <ContainedButton
            btnText="Add Images"
            variant="secondary"
            addIcon={true}
            btnStyle={{
              marginBottom: 10,
            }}
          />
          <ContainedButton
            btnText="Add Details"
            variant="secondary"
            addIcon={true}
          />
        </View>
      )}
    </View>
  );
};

export default GalleryScreen;
