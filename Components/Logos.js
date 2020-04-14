import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const HeaderLogo = () => {
  return (
    <Image
      source={require('../Images/LogoPlain.png')}
      resizeMode="contain"
      style={styles.image}
    />
  );
};

const FullLogo = () => {
  return (
    <Image
      source={require('../Images/LogoNoBg.png')}
      style={styles.logoImg}
      resizeMode="contain"
    />
  );
};

const styles = StyleSheet.create({
  image: {
    width: wp('40%'),
    overflow: 'visible',
  },
  logoImg: {
    width: wp('40%'),
    height: wp('20%'),
    overflow: 'visible',
    marginTop: 10,
  },
});

export {HeaderLogo, FullLogo};
