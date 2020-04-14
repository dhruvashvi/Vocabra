import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const IconInfo = ({name, text}) => {
  return (
    <View style={styles.container}>
      <Icon name={name} size={20} />
      <Text style={styles.iconText}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconText: {
    fontSize: wp('3%'),
    paddingLeft: 2,
  },
});

export default IconInfo;
