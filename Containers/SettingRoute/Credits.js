import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {CloseHeader} from '../../Components/Headers';

const Credits = () => {
  return (
    <View style={styles.container}>
      <CloseHeader title="Credits" route="Setting" />
      <Text style={styles.titleText}>Credits</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  titleText: {
    fontSize: wp('10%'),
  },
});

export default Credits;
