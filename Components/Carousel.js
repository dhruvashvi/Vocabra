import React, {Component} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableHighlight,
  Alert,
  Linking,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';

class Carousel extends Component {
  scrollRef = React.createRef();
  constructor(props) {
    super(props);

    this.state = {
      selectedIndex: 0,
    };
    this.scrollRef = React.createRef();
  }

  setSelectedIndex = event => {
    const contentOffset = event.nativeEvent.contentOffset;
    const viewSize = event.nativeEvent.layoutMeasurement;
    const selectedIndex = Math.floor(contentOffset.x / viewSize.width);
    this.setState({selectedIndex});
  };

  getNewsLink = newsLink => {
    Linking.openURL(newsLink).catch(() => Alert.alert('Network Error'));
  };

  render() {
    const {data} = this.props;
    const {selectedIndex} = this.state;
    if (data && data.length) {
      return (
        <View style={{width: wp('80%')}}>
          <ScrollView
            horizontal
            pagingEnabled
            onMomentumScrollEnd={this.setSelectedIndex}
            ref={this.scrollRef}
            showsHorizontalScrollIndicator={false}>
            {data.map(item => (
              <View key={item.id} style={styles.scrollContainer}>
                <TouchableHighlight
                  style={styles.linkIcon}
                  onPress={() => this.getNewsLink(item.newsLink)}>
                  <Icon name="ios-share-alt" color="#0000FF" size={wp('6%')} />
                </TouchableHighlight>
                <View style={styles.imageContainer}>
                  <Image source={item.picLink} style={styles.image} />
                </View>
                <View style={styles.textContainer}>
                  <Text style={styles.shortsHeading}>{item.heading}</Text>
                  <Text style={styles.shortsContent}>{item.content}</Text>
                </View>
              </View>
            ))}
          </ScrollView>
          <View style={styles.circleDiv}>
            {data.map((image, i) => (
              <View
                style={[
                  styles.whiteCircle,
                  // eslint-disable-next-line react-native/no-inline-styles
                  {
                    backgroundColor:
                      i === selectedIndex ? '#A80341' : '#F2F2F2',
                  },
                ]}
                key={image.id}
                active={i === selectedIndex}
              />
            ))}
          </View>
        </View>
      );
    }
    return null;
  }
}

const styles = StyleSheet.create({
  scrollContainer: {
    height: hp('45%'),
    width: wp('80%'),
    alignItems: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: '#707070',
  },
  image: {
    flex: 1,
    height: null,
    width: null,
    resizeMode: 'cover',
  },
  imageContainer: {
    height: '50%',
    width: '100%',
  },
  textContainer: {
    height: '50%',
    width: '100%',
    padding: 10,
  },
  circleDiv: {
    position: 'absolute',
    bottom: 2,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 10,
  },
  whiteCircle: {
    width: 10,
    height: 6,
    margin: 5,
    borderWidth: 1,
    borderColor: '#707070',
  },
  shortsHeading: {
    fontSize: wp('4%'),
    fontWeight: 'bold',
  },
  shortsContent: {
    color: '#707070',
    fontSize: wp('3%'),
    textAlign: 'justify',
  },
  linkIcon: {
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 1000,
    borderLeftWidth: 2,
    borderBottomWidth: 2,
    borderColor: '#0000FF',
    paddingHorizontal: 3,
    backgroundColor: '#FFFFFF',
    borderBottomLeftRadius: 5,
  },
});

export default Carousel;
