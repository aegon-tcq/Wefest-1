import React from 'react';
import {Text, View, Image, FlatList} from 'react-native';
import AppHeader from 'components/AppHeader';
import ContainedButton from 'components/Buttons/ContainedButton';
import FilterView from 'components/FilterView';
import {globalStyles} from 'styles/globalStyles';
import ExpandedCard from 'components/ExpandedCard';
import IconButton from 'components/Buttons/IconButton';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Colors from 'constants/Colors';
import {human} from 'react-native-typography';

const DirectoryItem = ({item}) => {
  const [open, setOpen] = React.useState(false);
  const contentLeft = () => (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <Image
        source={{
          uri: 'https://previews.123rf.com/images/triken/triken1608/triken160800029/61320775-male-avatar-profile-picture-default-user-avatar-guest-avatar-simply-human-head-vector-illustration-i.jpg',
        }}
        style={{
          width: 50,
          height: 50,
          borderRadius: 50,
          marginRight: 10,
        }}
      />
      <View>
        <Text style={human.title3White}>Username</Text>
        <Text style={{...human.bodyWhiteObject, marginTop: 5}}>
          {'user Role'.toUpperCase()}
        </Text>
      </View>
    </View>
  );

  const contentRight = () => (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <IconButton
        icon={
          <FeatherIcon
            name="mail"
            style={{
              color: '#fff',
              fontSize: 32,
            }}
          />
        }
        btnStyle={{
          backgroundColor: '#ED4435',
          borderRadius: 25,
          marginRight: 10,
        }}
      />
      <IconButton
        icon={
          <FeatherIcon
            name="phone"
            style={{
              color: '#fff',
              fontSize: 32,
            }}
          />
        }
        btnStyle={{
          backgroundColor: '#35C635',
          borderRadius: 25,
        }}
      />
    </View>
  );
  return (
    <ExpandedCard
      cardColor={Colors.secondary}
      expanded={open}
      onPress={() => setOpen(!open)}
      cardContent={
        <View style={{...globalStyles.rowSb, flex: 1}}>
          {contentLeft()}
          {contentRight()}
        </View>
      }
      buttonStyle={{
        justifyContent: 'center',
        alignItems: 'center',
      }}
    />
  );
};

const DirectoryScreen = () => {
  return (
    <View style={globalStyles.rootView}>
      <AppHeader title="Directory" />
      <FilterView />
      <View
        style={{
          flex: 1,
          paddingHorizontal: 15,
        }}>
        <FlatList
          data={[0, 1, 2, 3, 4]}
          renderItem={({item}) => {
            return <DirectoryItem />;
          }}
        />
      </View>
      <View
        style={{
          paddingVertical: 30,
          paddingHorizontal: 30,
        }}>
        <ContainedButton
          btnText="Add New Member"
          addIcon={true}
          variant="secondary"
          btnStyle={{
            ...globalStyles.rowCenter,
            height: 55,
            borderRadius: 15,
          }}
        />
      </View>
    </View>
  );
};

export default DirectoryScreen;
