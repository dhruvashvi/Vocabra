import React from 'react';
import Slider from '@react-native-community/slider';
import {View, Text, StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

class PaginationSlider extends React.Component {
  state = {
    set: 1,
  };

  render() {
    return (
      <View style={styles.container}>
        <Slider
          style={styles.slider}
          minimumValue={1}
          step={1}
          value={this.state.set}
          onValueChange={val => this.setState({set: val})}
          onSlidingComplete={() => console.log(this.state.set)}
          maximumValue={85}
          thumbTintColor="#A80341"
          minimumTrackTintColor="#A80341"
          maximumTrackTintColor="#707070"
        />
        <Text style={styles.text}>{`SET ${this.state.set}`}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
    alignItems: 'center',
  },
  slider: {
    width: wp('90%'),
    height: 40,
  },
  text: {
    color: '#707070',
    fontSize: wp('3%'),
  },
});

export default PaginationSlider;
