import React from 'react';
import {
  View,
  ToastAndroid,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Linking,
  Alert,
  Animated,
} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {ThreeBtnHeader} from '../Components/Headers';
import ReportModal from '../Components/ReportModal';
import {FooterNormal} from '../Components/Footers';
import HomeSwiper from '../Components/HomeSwiper';
import Carousel from '../Components/Carousel';
import Icon from 'react-native-vector-icons/Ionicons';
import {DATA} from '../helpers/MapInputs';
import styles from './HomeStyles';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import YouTube from 'react-native-youtube';
import ActivityIndicatorDots from '../Components/ActivityIndicatorDots';
import PaginationSlider from '../Components/PaginationSlider';

class Home extends React.Component {
  static navigationOptions = {
    headerShown: false,
  };

  constructor(props) {
    super(props);

    this.videoRef = React.createRef();

    this.state = {
      modalVisible: false,
      bugTitle: '',
      comment: '',
      selection: -1,
      correct: true,
      isClicked: false,
      video: false,
      play: true,
      videoID: '',
      currentIndex: 0,
      testAttempted: 1,
      load: true,
      animation: new Animated.Value(0),
    };
  }

  fetchWords = () => {
    //fetch stuff here
    this.setState({load: false});
  };

  componentDidMount() {
    this.fetchWords();
  }

  setModalVisible = visible => {
    this.setState({modalVisible: visible});
    if (this.state.modalVisible) {
      ToastAndroid.show('Thank you for your feedback', ToastAndroid.SHORT);
    }
  };

  setItemValue = value => {
    console.warn(value);
    this.setState({bugTitle: value});
  };

  setComment = value => {
    console.warn(value);
    this.setState({comment: value});
  };

  performSelectionReset = () => {
    this.setState({selection: -1});
    this.setState({correct: true});
  };

  performSelection = (index, value) => {
    if (this.state.selection === -1) {
      this.setState({selection: value});
      if (DATA[index].ans !== value) {
        this.setState({correct: false});
      }
    }
  };

  getNewsLink = newsLink => {
    Linking.openURL(newsLink).catch(() => Alert.alert('Network Error'));
  };

  onFavClick(wordNumber) {
    const newState = !this.state.isClicked;
    this.popAnimation(newState);
    this.setState({isClicked: !this.state.isClicked});
    if (!this.state.isClicked) {
      ToastAndroid.show('Added to Favourites!', ToastAndroid.SHORT);
    } else {
      ToastAndroid.show('Removed from Favourites!', ToastAndroid.SHORT);
    }
  }

  popAnimation(newState) {
    this.state.animation.setValue(newState ? 0 : 1);
    Animated.spring(this.state.animation, {
      toValue: 1,
      friction: 3,
    }).start();
  }

  onVideoError(e) {
    console.log(e.error);
    ToastAndroid.show('Not able to play video', ToastAndroid.SHORT);
  }

  renderWordCard = (item, index, current) => {
    const {selection, correct} = this.state;

    return (
      <View style={styles.contentContainer}>
        <ScrollView key={item.id} style={styles.cardContainer}>
          <View style={styles.wordContainer}>
            <View style={styles.paginationContainer}>
              <Text style={styles.paginationText}>SET: 01</Text>
              <Text>{`WORD: ${item.wordNumber}`}</Text>
            </View>
            <View style={styles.middleContainer}>
              <View style={styles.logoContainer}>
                <Image
                  source={require('../Images/AppLogo.png')}
                  style={styles.logo}
                  resizeMode="contain"
                />
              </View>
              <TouchableWithoutFeedback
                onPress={() => this.onFavClick(item.wordNumber)}>
                <View style={styles.favContainer}>
                  <Animated.View
                    style={{
                      transform: [
                        {
                          scale: this.state.animation.interpolate({
                            inputRange: [0, 1],
                            outputRange: [0, 1],
                          }),
                        },
                      ],
                    }}>
                    <Icon
                      name="ios-heart"
                      size={wp('6%')}
                      color={this.state.isClicked ? '#FF0000' : '#707070'}
                    />
                  </Animated.View>
                </View>
              </TouchableWithoutFeedback>
            </View>
            <Text style={styles.titleText}>{item.word}</Text>
          </View>
          <View style={styles.wordrootContainer}>
            <View style={styles.wordrootHeading}>
              <Icon name="ios-link" color="#A80341" size={wp('4%')} />
              <Text style={styles.wordText}>Word Root</Text>
            </View>
            <View style={styles.rootContainer}>
              {item.wordRoot.map((value, i) => {
                return (
                  <Text key={i} style={styles.rootText}>
                    {value}
                  </Text>
                );
              })}
            </View>
          </View>
          <View style={styles.wordrootContainer}>
            <View style={styles.meaningBox}>
              <Text style={styles.meaningHeading}>MEANING</Text>
              <Text style={styles.meaningContent}>{item.meaning}</Text>
            </View>
          </View>
          <View style={styles.wordrootContainer}>
            <View style={styles.contextBox}>
              <Text style={styles.contextHeading}>CONTEXT</Text>
              <Text style={styles.meaningContent}>{item.context}</Text>
            </View>
          </View>
          <View style={styles.wordrootContainer}>
            <Text style={styles.redHeading}>Showcase</Text>
            <Text style={styles.meaningContent}>{item.videoText}</Text>
            <TouchableOpacity
              style={styles.fakeVideo}
              onPress={() =>
                this.setState({
                  video: !this.state.video,
                  videoID: item.videoLink,
                })
              }>
              <Icon name="ios-play" size={50} color="#FFF" />
            </TouchableOpacity>
          </View>
          <View style={styles.wordrootContainer}>
            <Text style={styles.greyHeading}>Shorts</Text>
            <View style={styles.newsContainer}>
              <Carousel data={item.shorts} />
            </View>
          </View>
          <View style={styles.wordrootContainer}>
            <Text style={styles.redHeading}>News Article</Text>
            {item.news.map(value => {
              return (
                <View key={value.id} style={styles.newsBox}>
                  <Text style={styles.newsContent}>{value.headline}</Text>
                  <View style={styles.middleContainer}>
                    <Text style={styles.newsText}>
                      {`${value.publisher} ${value.date}`}
                    </Text>
                    <TouchableOpacity
                      onPress={() => this.getNewsLink(value.articleLink)}>
                      <Icon name="md-link" color="#0000FF" size={wp('5%')} />
                    </TouchableOpacity>
                  </View>
                </View>
              );
            })}
          </View>
          <View style={styles.wordrootContainer}>
            <Text style={styles.questionText}>{item.question}</Text>
            {item.options.map((value, i) => {
              return (
                <View key={i}>
                  {selection === i && current ? (
                    <View
                      style={[
                        styles.optionContainer,
                        correct ? styles.correct : styles.incorrect,
                      ]}>
                      <Text style={[styles.optionText, styles.selectedText]}>
                        {value}
                      </Text>
                    </View>
                  ) : (
                    <TouchableOpacity
                      style={[styles.optionContainer]}
                      onPress={() => this.performSelection(index, i)}>
                      <Text style={styles.optionText}>{value}</Text>
                    </TouchableOpacity>
                  )}
                </View>
              );
            })}
          </View>
          <View style={styles.wordrootContainer}>
            <Text style={styles.greyHeading}>Fun-Fact</Text>
            <Text style={styles.newsContainer}>{item.funFact}</Text>
          </View>
          <ReportModal
            modalVisibility={this.setModalVisible}
            modalVisible={this.state.modalVisible}
            setItemValue={this.setItemValue}
            itemValue={this.state.bugTitle}
            setComment={this.setComment}
            word={item.word}
          />
          <FooterNormal />
        </ScrollView>
      </View>
    );
  };

  onSwipeFinish = () => {
    return (
      <View style={styles.finishContainer}>
        <Icon
          name="md-navigate"
          color="#A80341"
          size={wp('10%')}
          style={styles.pointIcon}
        />
        <Text style={styles.testPrimary}>Stop!</Text>
        <Text style={styles.testPrimary}>IT'S REVISION TIME</Text>
        <Text style={styles.testContetnt}>
          Before we jump to the next word page
        </Text>
        <Text style={styles.testInfo}>
          It's mandatory to give your PT's (Mandatory/Primary Tests)
        </Text>
      </View>
    );
  };

  setCurrentIndex = index => {
    this.setState({currentIndex: index});
  };

  async seekVideo(duration) {
    let currentDuration = await this.videoRef.current.getCurrentTime();
    if (!isNaN(currentDuration)) {
      this.videoRef.current.seekTo(currentDuration + duration);
    } else {
      console.log(currentDuration);
    }
  }

  render() {
    const {play, video, load, currentIndex, selection, videoID} = this.state;

    return (
      <View style={styles.container}>
        <ThreeBtnHeader
          headerText="WORDS"
          iconLeft="md-list"
          iconRight="md-create"
          navLeft="Account"
          navRight="Test"
        />
        {load ? (
          <ActivityIndicatorDots />
        ) : (
          <View style={styles.container}>
            <HomeSwiper
              data={DATA}
              optionEnable={true}
              leftSwipe={true}
              allow={true}
              currentIndex={currentIndex}
              setCurrentIndex={this.setCurrentIndex}
              renderCard={this.renderWordCard}
              onSwipeFinish={this.onSwipeFinish}
              disableStuff={this.disableStuff}
              selection={selection}
              forceReset={this.performSelectionReset}
              message="Select an answer"
            />
            <PaginationSlider setIndex={this.setCurrentIndex} />
            {video ? (
              <View style={styles.videoContainer}>
                <TouchableOpacity
                  style={styles.videoClose}
                  onPress={() => this.setState({video: !video})}>
                  <Icon name="ios-close" size={50} color="#FFF" />
                </TouchableOpacity>
                <YouTube
                  ref={this.videoRef}
                  videoId={videoID}
                  apiKey="AIzaSyDIz20S7aIjY5ImHc1Y6ityp6gFg9EnuwI"
                  play={video && play}
                  controls={0}
                  showinfo={true}
                  onError={e => this.onVideoError(e)}
                  style={styles.ytVideo}
                />
                <View style={styles.videoBtn}>
                  <TouchableOpacity onPress={() => this.seekVideo(-10)}>
                    <Icon
                      name="ios-skip-backward"
                      color="#FFF"
                      size={wp('10%')}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => this.setState({play: !play})}>
                    <Icon
                      name={play ? 'ios-pause' : 'ios-play'}
                      color="#FFF"
                      size={wp('10%')}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => this.seekVideo(+10)}>
                    <Icon
                      name="ios-skip-forward"
                      color="#FFF"
                      size={wp('10%')}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            ) : (
              <View />
            )}
          </View>
        )}
      </View>
    );
  }
}

export default Home;
