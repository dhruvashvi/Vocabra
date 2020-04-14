import React from 'react';
import {StyleSheet, View, Text, Picker, ToastAndroid} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {BottomButtonWide} from '../../Components/Buttons';
import InputBox from '../../Components/InputBox';
import DismissKeyboard from '../../Components/DismissKeyboard';
import {inputs, validEmailRegex} from '../../helpers/MapInputs';
import Icon from 'react-native-vector-icons/Ionicons';

class AccountInfo extends React.Component {
  static navigationOptions = {
    headerBackImage: () => (
      <Icon name={'ios-arrow-dropleft'} size={wp('4%')} color="#A80341" />
    ),
  };

  constructor() {
    super();
    this.state = {
      fname: '',
      lname: '',
      email: '',
      exam: '',
    };
  }

  checkErrors = () => {
    const {fname, lname, email, exam} = this.state;
    if (
      fname.length > 0 &&
      lname.length > 0 &&
      validEmailRegex.test(email) &&
      exam !== '-Selected-'
    ) {
      return true;
    }
  };

  onSubmit = () => {
    if (this.checkErrors()) {
      this.props.navigation.navigate('Payment');
    } else {
      ToastAndroid.show('Enter Data Correctly', ToastAndroid.SHORT);
    }
  };

  render() {
    return (
      <DismissKeyboard>
        <View style={styles.container}>
          <View style={styles.infoCont}>
            <Text style={styles.titleText}>Fill in the details</Text>
            {inputs.map((value, index) => {
              return (
                <InputBox
                  name={value.name}
                  key={index}
                  placeholder={value.placeholder}
                  keyboard={value.keyboard}
                  maxlength={value.maxlength}
                  onChange={data => this.setState({[value.name]: data})}
                />
              );
            })}
            <View style={styles.pickerCont}>
              <Picker
                style={styles.picker}
                itemStyle={styles.item}
                prompt="Exams"
                selectedValue={this.state.exam}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({exam: itemValue})
                }>
                <Picker.Item label="-Select-" value="" />
                <Picker.Item label="GRE" value="gre" />
                <Picker.Item label="SBI" value="sbi" />
                <Picker.Item label="SSC" value="ssc" />
                <Picker.Item label="IBPS" value="ibps" />
                <Picker.Item label="IELTS" value="ielts" />
              </Picker>
            </View>
            <Text style={styles.termsText}>
              {
                'By creating an account you agree to our Terms of Service and Privacy Policy'
              }
            </Text>
          </View>
          <BottomButtonWide
            onButtonPress={this.onSubmit}
            buttonText="Continue"
          />
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
    padding: 20,
    fontSize: wp('6%'),
  },
  infoCont: {
    borderWidth: 1,
    borderColor: '#A80341',
    backgroundColor: '#f8f8f8',
    color: '#707070',
    width: wp('90%'),
    borderRadius: 22,
    alignItems: 'center',
    marginTop: 20,
  },
  pickerCont: {
    borderWidth: 1,
    borderColor: '#A80341',
    backgroundColor: '#FFF',
    width: wp('80%'),
    borderRadius: 5,
    margin: 5,
  },
  picker: {
    width: '100%',
    textAlign: 'left',
  },
  item: {
    fontSize: wp('4%'),
    color: '#707070',
  },
  termsText: {
    padding: 20,
    fontSize: wp('3%'),
    textAlign: 'center',
  },
});

export default AccountInfo;
