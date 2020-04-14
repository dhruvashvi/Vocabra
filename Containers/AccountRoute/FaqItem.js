import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  Animated,
} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const propTypes = {
  item: PropTypes.object,
};

class FaqItem extends React.Component {
  constructor(props) {
    super(props);

    const animation = new Animated.Value(0);

    this.state = {
      isSelected: false,
      animation,
    };
  }

  onPress = () => {
    const toValue = this.open ? 0 : 1;

    Animated.spring(this.state.animation, {
      toValue,
      friction: 9,
    }).start();

    this.open = !this.open;
    this.setState({isSelected: !this.state.isSelected});
  };

  getHeight() {
    const height = this.state.isSelected ? 'auto' : 0;
    return height;
  }

  renderAnswer = () => {
    return (
      <Text style={[styles.answerText, {height: this.getHeight()}]}>
        {this.props.item.ans}
      </Text>
    );
  };

  getRotation() {
    const rotation = {
      transform: [
        {
          rotate: this.state.animation.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '45deg'],
          }),
        },
      ],
    };

    return rotation;
  }

  getPopUp() {
    const pop = {
      transform: [
        {scale: this.state.animation},
        {
          translateY: this.state.animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, hp('100%') * 0.01],
          }),
        },
      ],
    };

    return pop;
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>{this.props.item.ques}</Text>
          <TouchableWithoutFeedback onPress={this.onPress}>
            <Animated.View style={(styles.btn, this.getRotation())}>
              <Icon size={wp('6%')} name={'ios-add'} />
            </Animated.View>
          </TouchableWithoutFeedback>
        </View>
        <Animated.View
          style={[
            this.getPopUp(),
            this.state.isSelected
              ? {paddingBottom: 20, paddingHorizontal: 10}
              : {paddingBottom: 0},
          ]}>
          {this.renderAnswer()}
        </Animated.View>
      </View>
    );
  }
}

FaqItem.propTypes = propTypes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    margin: 5,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: wp('95%'),
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    elevation: 2,
    alignSelf: 'center',
  },
  titleText: {
    fontSize: wp('4%'),
  },
  btn: {
    padding: 5,
  },
  answerText: {
    fontSize: wp('4%'),
    color: '#707070',
    width: wp('95%'),
    paddingHorizontal: 5,
  },
});

export default FaqItem;
