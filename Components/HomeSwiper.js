import React from 'react';
import {
  PanResponder,
  Animated,
  View,
  StyleSheet,
  LayoutAnimation,
  UIManager,
  ToastAndroid,
} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const SWIPE_THRESHOLD = 0.3 * wp('100%');

class HomeSwiper extends React.Component {
  static defaultProps = {
    allow: false,
    onSwipeFinish: () => {},
    leftSwipe: true,
    message: 'Reset',
    selection: -1,
  };

  constructor(props) {
    super(props);

    const position = new Animated.ValueXY();
    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (event, gesture) => false,
      onMoveShouldSetPanResponder: (event, gesture) => {
        if (Math.abs(gesture.dx) > 2 * Math.abs(gesture.dy)) {
          return true;
        }
      },
      onPanResponderMove: (event, gesture) => {
        if (gesture.dx > 100) {
          position.setValue({x: gesture.dx, y: 0});
        } else if (gesture.dx < 0 && this.props.leftSwipe) {
          this.leftSwipe();
        }
      },
      onPanResponderRelease: (event, gesture) => {
        if (gesture.dx > SWIPE_THRESHOLD) {
          if (this.props.selection > -1) {
            this.swipeForced('R', gesture);
          } else {
            ToastAndroid.show(this.props.message, ToastAndroid.SHORT);
            this.resetPosition();
          }
        } else if (gesture.dx > 0 && gesture.dx < SWIPE_THRESHOLD) {
          this.resetPosition();
        }
      },
    });

    this.state = {
      panResponder,
      position,
      swipe: 'horizontal',
    };
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.data !== this.props.data) {
      this.props.setCurrentIndex(0);
    }
  }

  componentDidMount() {
    UIManager.setLayoutAnimationEnabledExperimental &&
      UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  swipeForced(direction, gesture) {
    const swipe = direction === 'R' ? 1 : -1;
    Animated.spring(this.state.position, {
      toValue: {x: (wp('100%') + 100) * swipe, y: gesture.dy},
    }).start(() => this.onSwipeComplete(direction));
  }

  leftSwipe() {
    const pos = this.props.currentIndex - 1;
    if (pos > -1) {
      LayoutAnimation.configureNext(
        LayoutAnimation.Presets.CustomLayoutAnimation,
      );
      this.props.setCurrentIndex(pos);
    }
  }

  onSwipeComplete(direction) {
    this.state.position.setValue({x: 0, y: 0});
    const pos = this.props.currentIndex + 1;
    this.props.setCurrentIndex(pos);
    this.props.forceReset();
  }

  resetPosition() {
    Animated.spring(this.state.position, {
      toValue: {x: 0, y: 0},
      friction: 9,
    }).start();
  }

  getCardStyle() {
    const {position} = this.state;
    const rotate = position.x.interpolate({
      inputRange: [-wp('100%') / 2, 0, wp('100%') / 2],
      outputRange: ['-10deg', '0deg', '10deg'],
      extrapolate: 'clamp',
    });

    return {
      transform: [{rotate}, ...position.getTranslateTransform()],
    };
  }

  nextCardOpacity() {
    const {position} = this.state;
    const Opacity = position.x.interpolate({
      inputRange: [-wp('100%') / 2, 0, wp('100%') / 2],
      outputRange: [1, 0, 1],
      extrapolate: 'clamp',
    });

    return {opacity: Opacity};
  }

  nextCardScale() {
    const {position} = this.state;
    const Scale = position.x.interpolate({
      inputRange: [-wp('100%') / 2, 0, wp('100%') / 2],
      outputRange: [1, 0.8, 1],
      extrapolate: 'clamp',
    });

    return {transform: [{scale: Scale}]};
  }

  renderHomeCard() {
    const {data, currentIndex, onSwipeFinish, renderCard} = this.props;

    if (currentIndex >= data.length) {
      return onSwipeFinish();
    }

    return data
      .map((item, index) => {
        if (index < currentIndex) {
          return null;
        }
        if (index === currentIndex) {
          return (
            <Animated.View
              key={item.id}
              style={[this.getCardStyle(), styles.cardStyle]}
              {...this.state.panResponder.panHandlers}>
              {renderCard(item, index, true)}
            </Animated.View>
          );
        }
        return (
          <Animated.View
            style={[
              styles.cardStyle,
              this.nextCardOpacity(),
              this.nextCardScale(),
            ]}
            key={item.id}>
            {renderCard(item, index, false)}
          </Animated.View>
        );
      })
      .reverse();
  }

  render() {
    return <View>{this.renderHomeCard()}</View>;
  }
}

// eslint-disable-next-line no-unused-vars
const CustomLayoutAnimation = {
  duration: 300,
  create: {
    property: LayoutAnimation.Properties.opacity,
    type: LayoutAnimation.Types.linear,
  },
  update: {
    property: LayoutAnimation.Properties.opacity,
    type: LayoutAnimation.Types.linear,
  },
  delete: {
    duration: 200,
    property: LayoutAnimation.Properties.opacity,
    type: LayoutAnimation.Types.linear,
  },
};

const styles = StyleSheet.create({
  cardStyle: {
    position: 'absolute',
    width: '100%',
  },
});

export default HomeSwiper;
