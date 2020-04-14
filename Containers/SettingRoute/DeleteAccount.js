import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Alert,
  ToastAndroid,
  Platform,
  AlertIOS,
} from 'react-native';
import {CloseHeader} from '../../Components/Headers';
import {BorderBtn} from '../../Components/Buttons';

const MSG = 'Requested Succesfully';

class DeleteAccount extends React.Component {
  deletePress = async () => {
    if (Platform.OS === 'android') {
      ToastAndroid.show(MSG, ToastAndroid.SHORT);
    } else {
      AlertIOS.alert(MSG);
    }
    this.props.navigation.navigate('Setting');
  };

  onDelete = async () => {
    Alert.alert(
      'Are you sure you want to delete your account?',
      'You will lose current subscription and test history',
      [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        {text: 'ACCEPT', onPress: this.deletePress},
      ],
      {cancelable: true},
    );
  };

  render() {
    return (
      <View>
        <CloseHeader title="DeleteAccount" route="Setting" />
        <Text style={styles.infoText}>
          Info: Your account will be deleted after 48 Hours
        </Text>
        <BorderBtn onClick={this.onDelete} text="Delete Account" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  infoText: {
    margin: 10,
    textAlign: 'center',
  },
});

export default DeleteAccount;
