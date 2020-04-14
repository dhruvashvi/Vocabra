import React from 'react';
import {View, StyleSheet, ScrollView, ToastAndroid, Alert} from 'react-native';
import {BackHeader} from '../../Components/Headers';
import AsyncStorage from '@react-native-community/async-storage';
import ProfileTab from './ProfileTab';
import {RoundButtonArray, SignOutBtn} from '../../Components/Buttons';
import {btnArray} from '../../helpers/MapInputs';

const dummyText = {
  name: 'Ayush Singh',
  email: 'sniperline@gmail.com',
  type: 'Free',
  mob: '7607119944',
  prep: 'GRE, GMAT',
};

class Profile extends React.Component {
  signOutPress = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('LoadStack');
    ToastAndroid.show('Signed Out!', ToastAndroid.SHORT);
  };

  onSignOut = async () => {
    Alert.alert(
      'Sign out',
      'Are you sure you want to Sign out?',
      [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        {text: 'OK', onPress: this.signOutPress},
      ],
      {cancelable: true},
    );
  };

  onImagePress = () => {
    ToastAndroid.show('Hi', ToastAndroid.SHORT);
  };

  render() {
    return (
      <View style={styles.container}>
        <BackHeader
          route="Home"
          title="Profile"
          type="row"
          backIcon="ios-arrow-dropright"
        />
        <ScrollView>
          <ProfileTab data={dummyText} imagePress={this.onImagePress} />
          <RoundButtonArray btnArray={btnArray} />
          <SignOutBtn onSignOut={this.onSignOut} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Profile;
