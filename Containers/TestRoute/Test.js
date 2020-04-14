import React from 'react';
import {View, Text, ScrollView, TouchableOpacity, Alert} from 'react-native';
import DeckSwiper from '../../Components/DeckSwiper';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './TestStyles';
import {BorderBtnRound} from '../../Components/Buttons';
import {JumbotronHeader} from '../../Components/Headers';
import {FooterInfo} from '../../Components/Footers';

const DATA = [
  {
    id: 1,
    word: 'doppelganger',
    context: 'he has been replaced by an evil doppelgänger',
    question: 'Which is a synonym of doppelganger?',
    options: ['maniac', 'double', 'friend'],
    ans: 1,
  },
  {
    id: 2,
    word: 'extraneous',
    context: 'one is obliged to wade through many pages of extraneous material',
    question: 'Which is a synonym of extraneous?',
    options: ['promising', 'likely', 'unimportant'],
    ans: 2,
  },
  {
    id: 3,
    word: 'implicit',
    context: 'he has been replaced by an evil doppelgänger',
    question: 'Which is a synonym of implicit?',
    options: ['proposed', 'implied', 'sketchy'],
    ans: 1,
  },
  {
    id: 4,
    word: 'dossier',
    context: 'he has been replaced by an evil doppelgänger',
    question: 'Which is a synonym of dossier?',
    options: ['horse', 'credit', 'file'],
    ans: 2,
  },
  {
    id: 5,
    word: 'colloquial',
    context: 'he has been replaced by an evil doppelgänger',
    question: 'Which is a synonym of colloquial?',
    options: ['bookish', 'quaint', 'informal'],
    ans: 2,
  },
  {
    id: 6,
    word: 'doppelganger',
    context: 'he has been replaced by an evil doppelgänger',
    question: 'Which is a synonym of doppelganger?',
    options: ['maniac', 'double', 'friend'],
    ans: 1,
  },
  {
    id: 7,
    word: 'extraneous',
    context: 'he has been replaced by an evil doppelgänger',
    question: 'Which is a synonym of extraneous?',
    options: ['promising', 'likely', 'unimportant'],
    ans: 2,
  },
  {
    id: 8,
    word: 'implicit',
    context: 'he has been replaced by an evil doppelgänger',
    question: 'Which is a synonym of implicit?',
    options: ['proposed', 'implied', 'sketchy'],
    ans: 1,
  },
  {
    id: 9,
    word: 'dossier',
    context: 'he has been replaced by an evil doppelgänger',
    question: 'Which is a synonym of dossier?',
    options: ['horse', 'credit', 'file'],
    ans: 2,
  },
  {
    id: 10,
    word: 'colloquial',
    context: 'he has been replaced by an evil doppelgänger',
    question: 'Which is a synonym of colloquial?',
    options: ['bookish', 'quaint', 'informal'],
    ans: 2,
  },
];
const CORRECT_COLOUR = '#18ECA6';
const INCORRECT_COLOUR = '#FA3B3B';

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selection: -1,
      correct: true,
      score: 0,
      enableHeader: true,
      incorrectWords: [],
      name: props.navigation.getParam('name'),
    };
  }

  performSelectionReset = () => {
    this.setState({selection: -1});
    this.setState({correct: true});
  };

  performSelection = (index, value) => {
    if (this.state.selection === -1) {
      this.setState({selection: value});
      if (DATA[index].ans !== value) {
        var newArray = this.state.incorrectWords.concat(DATA[index].word);
        this.setState({incorrectWords: newArray});
        this.setState({correct: false});
      } else {
        this.setState({score: this.state.score + 10});
      }
    }
  };

  renderQuestionCard = (item, index, current) => {
    const {selection, correct} = this.state;

    return (
      <View style={styles.contentContainer}>
        <ScrollView key={item.id} style={styles.cardContainer}>
          <View style={styles.questionNumber}>
            <Text style={styles.quesNumText}>{`Q.${item.id}`}</Text>
          </View>
          <View style={styles.questionContainer}>
            <Text style={styles.questionText}>{item.question}</Text>
          </View>
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
                    style={styles.optionContainer}
                    onPress={() => this.performSelection(index, i)}>
                    <Text style={styles.optionText}>{value}</Text>
                  </TouchableOpacity>
                )}
              </View>
            );
          })}
          <Text style={styles.answer}>Answer</Text>
          {selection > -1 && current ? (
            <View style={styles.answerContainer}>
              <Icon
                name={correct ? 'ios-checkmark-circle' : 'ios-close-circle'}
                size={40}
                color={correct ? CORRECT_COLOUR : INCORRECT_COLOUR}
              />
              <Text style={styles.titleText}>{item.word}</Text>
              <Text style={styles.infoText}>{`"${item.context}"`}</Text>
            </View>
          ) : (
            <View style={styles.answerContainer} />
          )}
        </ScrollView>
      </View>
    );
  };

  getColour() {
    const score = this.state.score;
    if (score < 30) {
      return '#FF0000';
    } else if (score >= 30 && score < 60) {
      return '#FFFF00';
    } else if (score >= 60) {
      return '#00FF00';
    }
  }

  disableStuff = () => {
    this.setState({enableHeader: false});
  };

  onSwipeFinish = () => {
    const {score, incorrectWords} = this.state;
    return (
      <View style={styles.finishContainer}>
        <Icon name="ios-ribbon" color="#A80341" size={50} />
        <Text style={styles.answer}>Finished!</Text>
        <Text style={styles.pad}>You scored:</Text>
        <Text style={[styles.score, {color: this.getColour()}]}>{score}</Text>
        <Text style={styles.pad}>out of 100</Text>
        <Text style={styles.answer}>Revise these words:</Text>
        <View style={styles.answerContainer}>
          {incorrectWords.length ? (
            <View style={styles.wordMap}>
              {incorrectWords.map((value, index) => {
                return (
                  <Text style={styles.revisionText} key={index}>
                    {value}
                  </Text>
                );
              })}
            </View>
          ) : (
            <Text>Nevermind, you aced it!</Text>
          )}
        </View>
        <BorderBtnRound route="TestHome" text="Submit" />
      </View>
    );
  };

  onClose = () => {
    Alert.alert(
      'Cancel Test?',
      "Your score won't be saved",
      [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        {text: 'OK', onPress: () => this.props.navigation.navigate('TestHome')},
      ],
      {cancelable: true},
    );
  };

  render() {
    return (
      <View style={styles.container}>
        {this.state.enableHeader ? (
          <JumbotronHeader
            icon="ios-close-circle"
            score={this.state.score}
            onClick={this.onClose}
            name={this.state.name}
          />
        ) : (
          <View />
        )}
        <DeckSwiper
          data={DATA}
          optionEnable={true}
          leftSwipe={false}
          allow={false}
          renderCard={this.renderQuestionCard}
          onSwipeFinish={this.onSwipeFinish}
          disableStuff={this.disableStuff}
          selection={this.state.selection}
          forceReset={this.performSelectionReset}
          message="Select an answer"
        />
        {this.state.enableHeader ? <FooterInfo /> : <View />}
      </View>
    );
  }
}

export default Test;
