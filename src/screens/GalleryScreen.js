import React from 'react';
import {FlatList, View, Text, Image} from 'react-native';
import CheckBox from 'react-native-check-box';
import AppHeader from '../components/AppHeader';
import ContainedButton from '../components/Buttons/ContainedButton';
import {galleryScreenStyles} from '../styles/screens/galleryScreenStyles';
import {globalStyles} from '../styles/globalStyles';
import FilterView from '../components/FilterView';
import {human} from 'react-native-typography';
import {useSelector, useDispatch} from 'react-redux';
import PageLayout from './../containers/PageLayout';
import {
  galleryRequest,
  galleryRequestFail,
  galleryRequestSuccess
} from "../redux/actions/galleryActions"
import Loader from '../components/Loader';
import {API_BASE_URL} from '../constants/ApiUrl';

const GalleryItem = ({item, isEdit}) => {
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
  return <View style={galleryScreenStyles.galleryItem}>
    <Image
    style={{height:"100%",width:"100%",borderRadius:10}}
    source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd6KlPGqecE8gRuvPcsbsZ6OSQbZxbvEA-uw&usqp=CAU"}}
     />
     {showCheckBox()}
  </View>;
};

const GalleryScreen = () => {
  const [isEdit, setIsEdit] = React.useState(false);
  const {isAdmin} = useSelector(state => state.authState);

  const dispatch = useDispatch();
  const {gallery, loading} = useSelector(
    state => state.galleryState,
  );


  const getImageList = async () => {
    dispatch(galleryRequest());
    try {
      let response = await fetch(`${API_BASE_URL}/galleryuser.php`);
      let json = await response.json();
      dispatch(galleryRequestSuccess(json));
    } catch (error) {
      console.error(error);
      dispatch(galleryRequestFail(json));
    }
  }

  React.useEffect(() => {
    getImageList();
  }, []);

  return loading ? <Loader /> :  (
    <PageLayout>
      <View style={globalStyles.rootView}>
        <AppHeader title="Gallery" />
        <FilterView
          showBackBtn={isEdit}
          onPressBackBtn={() => setIsEdit(false)}
        />
        <View style={galleryScreenStyles.listView}>
          <FlatList
            numColumns={2}
            data={gallery}
            keyExtractor={(item, index) => 'key' + index}
            renderItem={({item}) => {
              return <GalleryItem item={item} isEdit={isEdit} />;
            }}
          />
        </View>
        {isAdmin &&
          (isEdit ? (
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
          ))}
      </View>
    </PageLayout>
  );
};

export default GalleryScreen;
