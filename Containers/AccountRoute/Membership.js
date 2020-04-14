import React from 'react';
import {StyleSheet, View, Text, Alert} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {CloseHeader} from '../../Components/Headers';
import {TouchableHighlight} from 'react-native-gesture-handler';

const Membership = () => {
  return (
    <View style={styles.container}>
      <CloseHeader title="Membership" route="Profile" />
      <View style={styles.subView}>
        <Text style={styles.packText}>Pack: Free 15 Trial ₹000/MONTH</Text>
        <Text style={styles.packInfoText}>
          Subcription Valid Till: 10 March 2020
        </Text>
      </View>
      <Text style={styles.infoText}>
        You are currently using our free tier, for uninterrupted usage, buy one
        of the packs below
      </Text>
      <Text style={styles.titleText}>Select a pack</Text>
      <View style={styles.btnView}>
        <Text style={styles.normalName}>PREMIUM MONTHLY</Text>
        <Text style={styles.normalInfo}>Full library access at 350/-</Text>
        <Text style={styles.normalName}>₹350/-</Text>
      </View>
      <TouchableHighlight
        onPress={() => Alert.alert('Testing Phase')}
        style={styles.btn}>
        <Text>Buy Now</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  subView: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
    width: wp('95%'),
    borderRadius: 5,
    marginTop: 10,
    padding: 10,
  },
  titleText: {
    fontSize: wp('6%'),
    marginTop: 20,
  },
  btnView: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 22,
    backgroundColor: '#fff',
    padding: 20,
    margin: 10,
    elevation: 5,
  },
  normalName: {
    color: '#000',
    fontSize: wp('6%'),
  },
  normalInfo: {
    color: '#707070',
    fontSize: wp('4%'),
    textAlign: 'center',
  },
  btn: {
    width: wp('50%'),
    padding: 10,
    borderRadius: 22,
    borderColor: '#A80341',
    borderWidth: 3,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  infoText: {
    color: '#707070',
    padding: 20,
    textAlign: 'center',
    fontStyle: 'italic',
    fontSize: wp('2%'),
  },
  packText: {
    fontWeight: 'bold',
    fontSize: wp('3%'),
  },
  packInfoText: {
    color: '#707070',
    fontSize: wp('2%'),
  },
});

export default Membership;
