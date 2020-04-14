import React from 'react';
import {TextInput, StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const InputBox = ({placeholder, onChange, maxlength, keyboard}) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      underlineColorAndroid="transparent"
      onChangeText={value => onChange(value)}
      blurOnSubmit={true}
      maxLength={maxlength}
      keyboardType={keyboard}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#A80341',
    fontSize: wp('4%'),
    margin: 5,
    width: wp('80%'),
    paddingLeft: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
});

export default InputBox;
