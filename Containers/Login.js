import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableHighlight,
  Keyboard,
  ToastAndroid,
} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import NumberInput from '../Components/NumberInput';
import {BottomButton} from '../Components/Buttons';
import DismissKeyboard from '../Components/DismissKeyboard';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: '',
      route: true,
    };
  }

  onAuth = () => {
    if (this.state.number.length === 10) {
      this.props.navigation.navigate('OTP', {
        number: this.state.number,
        route: this.state.route,
      });
    } else {
      ToastAndroid.show('Enter Valid Number', ToastAndroid.SHORT);
    }
  };

  onInputChange = value => {
    this.setState({number: value}, () => {
      if (this.state.number.length === 10) {
        Keyboard.dismiss();
      }
    });
  };

  render() {
    return (
      <DismissKeyboard>
        <View style={styles.container}>
          <ScrollView style={styles.container}>
            <Text style={styles.titleText}>
              {this.state.route ? 'Login' : 'Register'}
            </Text>
            <NumberInput onChange={this.onInputChange} />
            <TouchableHighlight
              style={styles.button}
              underlayColor="#f1f1f1"
              onPress={() => this.setState({route: !this.state.route})}>
              <Text style={styles.infoText}>
                {this.state.route
                  ? "Don't have an account?"
                  : 'Already have an account?'}
              </Text>
            </TouchableHighlight>
          </ScrollView>
          <BottomButton onButtonPress={this.onAuth} />
        </View>
      </DismissKeyboard>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  titleText: {
    padding: 30,
    fontSize: wp('8%'),
    textAlign: 'center',
  },
  button: {
    marginTop: 40,
    borderRadius: 22,
    padding: 5,
  },
  infoText: {
    fontSize: wp('5%'),
    color: '#A80341',
    textAlign: 'center',
  },
});

export default Login;
