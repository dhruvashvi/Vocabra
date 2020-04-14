import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {withNavigation} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

const PRIMARY_COLOR = '#A80341';
const SECONDARY_COLOR = '#FFFFFF';

const Hdr1 = ({
  headerText,
  navigation,
  iconLeft,
  iconRight,
  navLeft,
  navRight,
}) => {
  return (
    <View style={styles.hdrView}>
      <TouchableOpacity
        style={styles.accBtn}
        onPress={() => navigation.navigate(navLeft)}>
        <Icon size={wp('6%')} name={iconLeft} color={PRIMARY_COLOR} />
      </TouchableOpacity>
      <Text style={styles.titleText}>{headerText}</Text>
      <TouchableOpacity
        style={styles.testBtn}
        onPress={() => navigation.navigate(navRight)}>
        <Icon size={wp('6%')} name={iconRight} color={PRIMARY_COLOR} />
      </TouchableOpacity>
    </View>
  );
};

const Hdr2 = ({navigation, route, title, type, backIcon}) => {
  return (
    <View style={type === 'row' ? styles.header1 : styles.header2}>
      <Text style={styles.titleText}>{title}</Text>
      <TouchableOpacity onPress={() => navigation.navigate(route)}>
        <Icon size={wp('6%')} name={backIcon} color={PRIMARY_COLOR} />
      </TouchableOpacity>
    </View>
  );
};

const Hdr3 = ({navigation, route, title}) => {
  return (
    <View style={styles.header1}>
      <TouchableOpacity onPress={() => navigation.navigate(route)}>
        <Icon size={wp('6%')} name={'ios-close'} color={PRIMARY_COLOR} />
      </TouchableOpacity>
      <Text style={styles.titleText1}>{title}</Text>
    </View>
  );
};

const Hdr4 = ({onClick, score, icon, name}) => {
  return (
    <View style={styles.jbtrnHdrMain}>
      <TouchableOpacity onPress={onClick}>
        <Icon size={wp('6%')} name={icon} color={PRIMARY_COLOR} />
      </TouchableOpacity>
      <Text style={styles.titleText2}>{name}</Text>
      <Text style={styles.scoreText}>{score === 0 ? '00' : score}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  titleText: {
    fontSize: wp('5%'),
    color: PRIMARY_COLOR,
  },
  hdrView: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  accBtn: {
    paddingLeft: 5,
  },
  testBtn: {
    paddingRight: 5,
  },
  header1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
    padding: 10,
    paddingHorizontal: 20,
    backgroundColor: SECONDARY_COLOR,
    borderColor: SECONDARY_COLOR,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  header2: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
    padding: 10,
    backgroundColor: SECONDARY_COLOR,
    borderColor: SECONDARY_COLOR,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  titleText1: {
    fontSize: wp('5%'),
    color: PRIMARY_COLOR,
    fontStyle: 'italic',
    fontFamily: 'notoserif',
  },
  titleText2: {
    position: 'absolute',
    left: 120,
    right: 120,
    color: PRIMARY_COLOR,
    backgroundColor: SECONDARY_COLOR,
    fontSize: wp('3%'),
    textAlign: 'center',
    borderRadius: 22,
    padding: 10,
    paddingHorizontal: 30,
    elevation: 3,
    borderLeftWidth: 8,
    borderRightWidth: 8,
    borderColor: '#DD5F8E',
  },
  scoreText: {
    color: PRIMARY_COLOR,
    fontSize: wp('3%'),
    padding: 3,
    paddingHorizontal: 5,
    backgroundColor: SECONDARY_COLOR,
    elevation: 3,
    borderRadius: 5,
    borderColor: PRIMARY_COLOR,
    borderWidth: 2,
    textAlign: 'center',
  },
  jbtrnHdrMain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    width: '95%',
    paddingHorizontal: 20,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 50,
    height: 80,
    marginTop: 10,
    marginBottom: 10,
    elevation: 5,
  },
});

const ThreeBtnHeader = withNavigation(Hdr1);
const BackHeader = withNavigation(Hdr2);
const CloseHeader = withNavigation(Hdr3);
const JumbotronHeader = withNavigation(Hdr4);

export {ThreeBtnHeader, BackHeader, CloseHeader, JumbotronHeader};
