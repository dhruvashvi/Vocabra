import React from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';
import SplashNavigator from './Components/Navigators/SplashNavigator';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
      <SplashNavigator />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
