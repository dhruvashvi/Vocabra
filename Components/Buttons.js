import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import HideWithKeyboard from 'react-native-hide-with-keyboard';
import {withNavigation} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

const PRIMARY = '#A80341';
const SECONDARY = '#FFFFFF';

const Btn1 = ({onButtonPress}) => {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <HideWithKeyboard style={[styles.btnArea, {alignSelf: 'flex-end'}]}>
      <TouchableOpacity onPress={onButtonPress} style={styles.button}>
        <Icon name={'ios-arrow-forward'} color={SECONDARY} size={40} />
      </TouchableOpacity>
    </HideWithKeyboard>
  );
};

const Btn2 = ({buttonText, onButtonPress}) => {
  return (
    <HideWithKeyboard style={styles.btnArea}>
      <TouchableOpacity
        onPress={onButtonPress}
        style={[styles.button, styles.wideBtn]}>
        <Text style={styles.btnText}>{buttonText}</Text>
      </TouchableOpacity>
    </HideWithKeyboard>
  );
};

const Btn3 = ({navigation, btnArray}) => {
  return (
    <View style={styles.roundBtnView}>
      {btnArray.map(value => {
        return (
          <View style={styles.roundBtnContainer} key={value.id}>
            <TouchableOpacity
              onPress={() => navigation.navigate(value.route)}
              style={[styles.roundBtn, {backgroundColor: value.color}]}>
              <Icon size={wp('6%')} name={value.icon} color="white" />
            </TouchableOpacity>
            <Text>{value.name}</Text>
          </View>
        );
      })}
    </View>
  );
};

const Btn4 = ({onSignOut}) => {
  return (
    <TouchableOpacity onPress={onSignOut} style={styles.signoutBtn}>
      <Text style={styles.btnText1}>Sign Out</Text>
    </TouchableOpacity>
  );
};

const Btn5 = ({onClick, text}) => {
  return (
    <TouchableOpacity onPress={onClick} style={styles.deleteBtn}>
      <Text style={styles.btnText2}>{text}</Text>
    </TouchableOpacity>
  );
};

const Btn6 = ({navigation, route, text}) => {
  return (
    <TouchableOpacity
      style={styles.finBtn}
      onPress={() => navigation.navigate(route)}>
      <Text style={styles.answer}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnArea: {
    position: 'absolute',
    bottom: 0,
    paddingRight: 10,
    paddingBottom: 10,
  },
  button: {
    borderRadius: wp('6%'),
    width: wp('12%'),
    height: wp('12%'),
    backgroundColor: PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
  },
  btnText: {
    color: SECONDARY,
    fontSize: wp('3%'),
  },
  wideBtn: {
    width: wp('90%'),
    marginBottom: 10,
  },
  roundBtnView: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
    margin: 10,
    padding: 2,
  },
  roundBtn: {
    height: 60,
    width: 60,
    backgroundColor: '#000',
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
  },
  roundBtnContainer: {
    alignItems: 'center',
  },
  signoutBtn: {
    backgroundColor: '#DC2C2C',
    width: wp('95%'),
    padding: 10,
    margin: 20,
    alignSelf: 'center',
    elevation: 3,
    borderRadius: 5,
  },
  btnText1: {
    fontSize: wp('3%'),
    color: '#fff',
    textAlign: 'center',
  },
  deleteBtn: {
    backgroundColor: '#fff',
    width: wp('80%'),
    padding: 10,
    margin: 20,
    alignSelf: 'center',
    elevation: 3,
    borderRadius: 5,
    borderColor: '#DC2C2C',
    borderWidth: 2,
  },
  btnText2: {
    fontSize: wp('4%'),
    color: '#DC2C2C',
    textAlign: 'center',
  },
  finBtn: {
    borderColor: '#A80341',
    borderWidth: 2,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingBottom: 10,
    margin: 20,
  },
  answer: {
    textAlign: 'center',
    paddingTop: 10,
    fontWeight: 'bold',
    fontSize: wp('3%'),
  },
});

const BottomButton = withNavigation(Btn1);
const BottomButtonWide = withNavigation(Btn2);
const RoundButtonArray = withNavigation(Btn3);
const SignOutBtn = withNavigation(Btn4);
const BorderBtn = withNavigation(Btn5);
const BorderBtnRound = withNavigation(Btn6);

export {
  BottomButton,
  BottomButtonWide,
  RoundButtonArray,
  SignOutBtn,
  BorderBtn,
  BorderBtnRound,
};
