import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {withNavigation} from 'react-navigation';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

function TestItem({iconName, setName, setType, navigation}) {
  return (
    <TouchableOpacity
      style={styles.iconContainer}
      onPress={() =>
        navigation.navigate('Test', {name: setName + ' ' + setType})
      }>
      <Icon color="#DC7A9F" name={iconName} size={wp('25%')} />
      <View style={styles.iconTextCont}>
        <Text style={styles.iconText}>{setName}</Text>
        <Text style={styles.iconText}>{setType}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    backgroundColor: '#F8F8F8',
    borderRadius: 60,
    elevation: 3,
  },
  iconTextCont: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconText: {
    fontWeight: 'bold',
    fontSize: wp('3%'),
  },
});

export default withNavigation(TestItem);
