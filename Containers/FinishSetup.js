import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import {BottomButtonWide} from '../Components/Buttons';
import Icon from 'react-native-vector-icons/Ionicons';

const FinishSetup = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#FFF" translucent />
      <Text style={styles.titleText}>All Done!</Text>
      <Icon name={'ios-done-all'} size={35} style={styles.icon} />
      <BottomButtonWide
        onButtonPress={() => navigation.navigate('Home')}
        buttonText="CONTINUE"
      />
    </View>
  );
};

FinishSetup.navigationOptions = {
  headerShown: false,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  titleText: {
    fontSize: wp('8%'),
  },
  icon: {
    color: '#FFF',
    backgroundColor: '#A80341',
    borderRadius: 35,
    paddingHorizontal: 20,
    paddingVertical: 13,
  },
});

export default FinishSetup;
