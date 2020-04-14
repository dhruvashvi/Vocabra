import React from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {CloseHeader} from '../../Components/Headers';

const userScore = 60;
const MAX_SCORE = 90;
const TEST_APPEARED = 3;

const dummyData = [
  {
    id: '1',
    title: 'SET 1',
    date: '12th Jan 2020',
    score: '66',
  },
  {
    id: '2',
    title: 'SET 2',
    date: '12th Jan 2020',
    score: '90',
  },
  {
    id: '3',
    title: 'SET 3',
    date: '12th Jan 2020',
    score: '74',
  },
  {
    id: '4',
    title: 'SET 1',
    date: '12th Jan 2020',
    score: '10',
  },
  {
    id: '5',
    title: 'SET 1',
    date: '12th Jan 2020',
    score: '10',
  },
  {
    id: '6',
    title: 'SET 1',
    date: '12th Jan 2020',
    score: '10',
  },
  {
    id: '7',
    title: 'SET 1',
    date: '12th Jan 2020',
    score: '10',
  },
];

class Scores extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 100,
      timesup: false,
    };
  }

  componentDidMount() {
    this.scoreCall = setInterval(() => {
      this.decrementScore();
    }, 20);
  }

  decrementScore = () => {
    this.setState(
      prevstate => ({
        score: prevstate.score - 1,
      }),
      () => {
        if (this.state.score === userScore) {
          clearInterval(this.scoreCall);
          this.setState({
            timesup: true,
          });
        }
      },
    );
  };

  componentWillUnmount() {
    clearInterval(this.scoreCall);
  }

  render() {
    return (
      <View style={styles.container}>
        <CloseHeader title="Scores" route="Profile" />
        <View style={styles.scoreContainer}>
          <Text style={styles.infoText}>Your Score:</Text>
          <Text
            style={
              this.state.score > userScore ? styles.scoreText : styles.userScore
            }>
            {this.state.score}
          </Text>
        </View>
        <View style={styles.scoreCard}>
          <Text
            style={
              styles.scoreCardText
            }>{`Number of Test Given:${TEST_APPEARED}`}</Text>
          <Text style={styles.scoreCardText}>{`Max Score:${MAX_SCORE}`}</Text>
        </View>
        <Text style={styles.history}>History</Text>
        <View style={styles.titleBar}>
          <Text style={{color: '#707070'}}>Test</Text>
          <Text style={{color: '#707070'}}>Date</Text>
          <Text style={{color: '#707070'}}>Score</Text>
        </View>
        <FlatList
          data={dummyData}
          // eslint-disable-next-line react-native/no-inline-styles
          style={{marginVertical: 10}}
          renderItem={({item, index}) => {
            return (
              <View style={styles.itemBtn}>
                <Text>{item.title}</Text>
                <Text>{item.date}</Text>
                <Text>{item.score}</Text>
              </View>
            );
          }}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  scoreText: {
    fontSize: 80,
    color: '#1BB142',
    borderWidth: 3,
    borderColor: '#1BB142',
    padding: 10,
    borderRadius: 50,
  },
  infoText: {
    fontSize: wp('8%'),
    padding: 10,
  },
  scoreContainer: {
    alignItems: 'center',
    backgroundColor: '#fff',
    width: wp('95%'),
    padding: 10,
    marginTop: 5,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  userScore: {
    fontSize: 80,
    color: '#4F44E8',
    borderWidth: 3,
    borderColor: '#4F44E8',
    padding: 10,
    borderRadius: 50,
  },
  scoreCard: {
    width: wp('95%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#A80341',
    padding: 10,
    borderRadius: 5,
  },
  scoreCardText: {
    color: '#fff',
  },
  history: {
    padding: 10,
    fontSize: wp('5%'),
  },
  itemBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: wp('95%'),
    margin: 1,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
  },
  titleBar: {
    width: wp('95%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
});

export default Scores;
