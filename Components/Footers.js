import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const FooterNormal = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerTxt}>Vocabra™</Text>
    </View>
  );
};

const FooterInfo = () => {
  return (
    <View style={styles.footerInfo}>
      <Image
        source={require('../Images/LogoPlain.png')}
        style={styles.img}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#A80341',
    width: '100%',
    justifyContent: 'center',
    borderBottomLeftRadius: 22,
    borderBottomRightRadius: 22,
    marginTop: 5,
    borderColor: '#A80341',
    borderWidth: 2,
  },
  footerTxt: {
    color: 'white',
    textAlign: 'center',
    fontSize: wp('5%'),
  },
  footerInfo: {
    position: 'absolute',
    bottom: 0,
    marginTop: 5,
    alignSelf: 'center',
  },
  img: {
    width: wp('30%'),
    height: wp('10%'),
    overflow: 'visible',
  },
});

export {FooterNormal, FooterInfo};
