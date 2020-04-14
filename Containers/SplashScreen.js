import React from 'react';
import {StyleSheet, View, Text, Image, StatusBar} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import AsyncStorage from '@react-native-community/async-storage';

class SplashScreen extends React.Component {
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');
    this.props.navigation.navigate(userToken ? 'MainStack' : 'AuthStack');
  };

  componentDidMount() {
    this._bootstrapAsync();
  }

  render() {
    return (
      <View style={styles.splash}>
        <StatusBar hidden />
        <Image
          source={require('../Images/LogoNoBg.png')}
          resizeMode="contain"
          style={styles.logo}
        />
        <View style={styles.footer}>
          <Text style={styles.text}>©All Rights Reserved</Text>
          <Text style={styles.text}>2020-2024</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  splash: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFF',
    justifyContent: 'center',
  },
  logo: {
    width: wp('40%'),
    overflow: 'visible',
    alignItems: 'center',
  },
  footer: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    paddingBottom: 10,
  },
  text: {
    color: 'grey',
    fontSize: wp('2%'),
  },
});

export default SplashScreen;
