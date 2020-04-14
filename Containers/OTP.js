import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableHighlight,
  ToastAndroid,
} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {BottomButton} from '../Components/Buttons';
import DismissKeyboard from '../Components/DismissKeyboard';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-community/async-storage';

class OTP extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      otp: '',
      number: props.navigation.getParam('number'),
      route: props.navigation.getParam('route'),
      timer: 120,
      timesup: false,
    };
  }

  static navigationOptions = {
    headerBackImage: () => (
      <Icon name={'ios-arrow-dropleft'} size={wp('4%')} color="#A80341" />
    ),
  };

  componentDidMount() {
    this.clockCall = setInterval(() => {
      this.decrementClock();
    }, 1000);
  }

  imagePress = () => {
    this.props.navigation.navigate('Login');
  };

  startTimer = () => {
    this.setState({
      timer: 120,
    });
  };

  decrementClock = () => {
    this.setState(
      prevstate => ({
        timer: prevstate.timer - 1,
      }),
      () => {
        if (this.state.timer === 0) {
          clearInterval(this.clockCall);
          this.setState({
            timesup: true,
          });
        }
      },
    );
  };

  componentWillUnmount() {
    clearInterval(this.clockCall);
  }

  getOtp = otp => {
    this.setState({otp: otp});
  };

  clearInput() {
    this.textInput.clear();
  }

  sendOtp = otp => {
    this.clearInput();
    this.startTimer();
    ToastAndroid.show('OTP sent', ToastAndroid.SHORT);
  };

  onClick = async () => {
    if (!this.state.timesup && this.state.otp.length === 6) {
      await AsyncStorage.setItem('userToken', 'abc');
      this.clearInput();
      this.state.route
        ? this.props.navigation.navigate('Retrieve', {otp: this.state.otp})
        : this.props.navigation.navigate('Info');
    } else if (this.state.timesup) {
      ToastAndroid.show('RESEND OTP', ToastAndroid.SHORT);
    } else {
      ToastAndroid.show('Enter Valid OTP', ToastAndroid.SHORT);
    }
  };

  render() {
    const {number, timer} = this.state;

    return (
      <DismissKeyboard>
        <View style={styles.container}>
          <Text style={styles.titleText}>OTP</Text>
          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>Mobile Number: </Text>
            <TouchableHighlight
              onPress={() => this.imagePress()}
              style={styles.editButton}>
              <View style={styles.infoContainer}>
                <Text style={[styles.buttonText, {paddingRight: 10}]}>
                  {number}
                </Text>
                <Icon
                  size={wp('5%')}
                  name={'md-create'}
                  color="#A80341"
                  style={{paddingBottom: wp('1%')}}
                />
              </View>
            </TouchableHighlight>
          </View>
          <View style={styles.otpInputBox}>
            <TextInput
              ref={input => {
                this.textInput = input;
              }}
              style={styles.input}
              underlineColorAndroid="transparent"
              onChangeText={otp => this.getOtp(otp)}
              blurOnSubmit={true}
              maxLength={6}
              keyboardType={'phone-pad'}
            />
            <View>
              <Text style={styles.buttonText}>{`0${parseInt(timer / 60, 10) %
                60} : ${timer % 60 < 10 ? 0 : ''}${timer % 60}`}</Text>
            </View>
            <Text style={styles.infoText}>Haven't recieved the OTP?</Text>
            <TouchableHighlight
              style={styles.button}
              underlayColor="#f1f1f1"
              onPress={this.sendOtp}>
              <Text style={styles.buttonText}>RESEND</Text>
            </TouchableHighlight>
          </View>
          <BottomButton onButtonPress={this.onClick} />
        </View>
      </DismissKeyboard>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  titleText: {
    marginTop: 20,
    fontSize: wp('8%'),
  },
  button: {
    marginTop: 10,
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 20,
  },
  buttonText: {
    fontSize: wp('5%'),
    color: '#A80341',
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginTop: 20,
  },
  infoText: {
    fontSize: wp('5%'),
    color: '#707070',
  },
  otpInputBox: {
    width: '100%',
    alignItems: 'center',
  },
  input: {
    width: '30%',
    borderBottomWidth: 2,
    borderBottomColor: '#A80341',
    textAlign: 'center',
    fontSize: wp('5%'),
    margin: 30,
  },
  editButton: {
    borderBottomWidth: 1,
    borderBottomColor: '#A80341',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
});

export default OTP;
