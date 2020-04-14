import React from 'react';
import PropTypes from 'prop-types';
import {Animated} from 'react-native';
import {Shape, Path, Surface} from '@react-native-community/art';

class Circle extends React.PureComponent {
  static propTypes = {
    radius: PropTypes.number.isRequired,
    opacity: PropTypes.number,
  };

  render() {
    const {radius} = this.props;

    const path = Path()
      .moveTo(0, -radius / 2)
      .arc(0, radius, 1)
      .arc(0, -radius, 1)
      .close();

    return <Shape {...this.props} d={path} />;
  }
}

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

export default class ActivityIndicatorDots extends React.PureComponent {
  static propTypes = {
    size: PropTypes.number,
    betweenSpace: PropTypes.number,
  };

  static defaultProps = {
    size: 10,
    betweenSpace: 5,
  };

  state = {
    scales: [
      new Animated.Value(0),
      new Animated.Value(0),
      new Animated.Value(0),
    ],
  };

  componentDidMount() {
    this._animation();
  }

  componentWillUnmount() {
    this.unmounted = true;
  }

  _animation = () => {
    function seq(self, i) {
      return Animated.sequence([
        Animated.timing(self.state.scales[i], {
          toValue: 1,
          duration: 300,
          delay: (i + 1) * 200,
        }),
        Animated.timing(self.state.scales[i], {
          toValue: 0,
          duration: 300,
          delay: 50,
        }),
      ]);
    }

    Animated.parallel([seq(this, 0), seq(this, 1), seq(this, 2)]).start(() => {
      if (!this.unmounted) {
        this._animation();
      }
    });
  };

  _renderCircle = i => {
    const {size, betweenSpace} = this.props;
    return (
      <AnimatedCircle
        radius={size}
        fill={'#A80341'}
        x={size / 2 + i * (size + betweenSpace)}
        y={size / 2}
        scale={this.state.scales[i]}
      />
    );
  };

  render() {
    const {size, betweenSpace} = this.props;
    return (
      <Surface width={size * 3 + betweenSpace * 2} height={size}>
        {this._renderCircle(0)}
        {this._renderCircle(1)}
        {this._renderCircle(2)}
      </Surface>
    );
  }
}
