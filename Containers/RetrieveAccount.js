import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import ActivityIndicatorDots from '../Components/ActivityIndicatorDots';

class RetrieveAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      forwardFlag: true,
    };
  }

  static navigationOptions = {
    headerShown: false,
  };

  performTimeConsumingTask = async () => {
    return new Promise(resolve =>
      setTimeout(() => {
        resolve('result');
      }, 2000),
    );
  };

  async componentDidMount() {
    const data = await this.performTimeConsumingTask();

    if (this.state.forwardFlag && data !== null) {
      this.props.navigation.push('Finish');
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>Setting Up Account...</Text>
        <ActivityIndicatorDots />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
  },
  titleText: {
    fontSize: wp('5%'),
    padding: 30,
  },
});

export default RetrieveAccount;
