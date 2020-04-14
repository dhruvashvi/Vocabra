import React from 'react';
import {StyleSheet, View, Text, Image, TextInput} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {withNavigation} from 'react-navigation';

const NumberInput = ({onChange}) => {
  return (
    <View>
      <View style={styles.loginArea}>
        <Text style={styles.infoText}>Enter mobile number to continue</Text>
        <View style={styles.loginBox}>
          <View style={styles.code}>
            <Image
              source={require('../Images/India.png')}
              style={styles.image}
              resizeMode="contain"
            />
            <Text style={styles.textCode}>+91</Text>
          </View>
          <TextInput
            style={styles.input}
            keyboardType={'phone-pad'}
            placeholder="999-999-9999"
            underlineColorAndroid="transparent"
            autoCompleteType="tel"
            maxLength={10}
            onChangeText={value => onChange(value)}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loginArea: {
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    width: wp('90%'),
    borderWidth: 1,
    borderColor: '#A80341',
    borderRadius: 22,
    backgroundColor: '#f8f8f8',
    padding: 10,
  },
  infoText: {
    fontSize: wp('4%'),
    padding: 10,
  },
  loginBox: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    margin: 20,
  },
  code: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#A80341',
    borderRadius: 22,
    backgroundColor: '#fff',
  },
  image: {
    width: wp('9%'),
    height: wp('9%'),
    alignItems: 'center',
  },
  textCode: {
    color: 'grey',
    fontSize: wp('5%'),
  },
  input: {
    marginLeft: 10,
    marginBottom: 5,
    width: '75%',
    borderWidth: 2,
    borderColor: '#f8f8f8',
    borderBottomColor: '#A80341',
    textAlign: 'center',
    fontSize: wp('5%'),
  },
});

export default withNavigation(NumberInput);
