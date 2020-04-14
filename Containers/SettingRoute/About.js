import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {CloseHeader} from '../../Components/Headers';

const About = () => {
  return (
    <View style={styles.container}>
      <CloseHeader title="About" route="Setting" />
      <Text style={styles.titleText}>About</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  titleText: {
    fontSize: wp('30%'),
  },
});

export default About;
