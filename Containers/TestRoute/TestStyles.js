import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const CORRECT_COLOUR = '#18ECA6';
const INCORRECT_COLOUR = '#FA3B3B';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardContainer: {
    backgroundColor: '#FFF',
    height: '100%',
    width: '100%',
  },
  contentContainer: {
    height: hp('70%'),
    width: '95%',
    backgroundColor: '#FFF',
    borderRadius: 22,
    marginTop: 10,
    alignSelf: 'center',
    elevation: 3,
    overflow: 'hidden',
  },
  questionNumber: {
    backgroundColor: '#A80341',
    padding: 5,
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    alignItems: 'center',
  },
  quesNumText: {
    color: '#FFF',
    fontSize: wp('5%'),
  },
  questionContainer: {
    width: '100%',
    borderBottomWidth: 1,
    borderColor: '#A80341',
    padding: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  questionText: {
    fontSize: wp('4%'),
    fontWeight: 'bold',
  },
  optionBox: {
    backgroundColor: '#FFF',
    width: wp('95%'),
    borderBottomLeftRadius: 22,
    borderBottomRightRadius: 22,
    elevation: 3,
    alignSelf: 'center',
  },
  optionContainer: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#A80341',
    alignSelf: 'center',
    width: '90%',
    padding: 10,
    margin: 5,
  },
  optionText: {
    fontSize: wp('4%'),
    textAlign: 'center',
  },
  correct: {
    borderColor: '#FFF',
    backgroundColor: CORRECT_COLOUR,
    borderWidth: 2,
    elevation: 5,
  },
  incorrect: {
    borderColor: '#FFF',
    backgroundColor: INCORRECT_COLOUR,
    borderWidth: 2,
    elevation: 5,
  },
  selectedText: {
    fontSize: wp('4%'),
    color: '#FFF',
    textAlign: 'center',
  },
  answerContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    width: '90%',
    height: hp('20%'),
    backgroundColor: '#F8F8F8',
    alignSelf: 'center',
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 5,
    marginTop: 2,
  },
  answer: {
    textAlign: 'center',
    paddingTop: 10,
    fontWeight: 'bold',
    fontSize: wp('3%'),
  },
  titleText: {
    fontSize: wp('4%'),
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  infoText: {
    fontSize: wp('3%'),
    textAlign: 'center',
    textTransform: 'capitalize',
  },
  finishContainer: {
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: '100%',
    height: '100%',
  },
  score: {
    fontSize: wp('5%'),
    borderTopWidth: 1,
    borderBottomWidth: 1,
    padding: 5,
    width: '30%',
    textAlign: 'center',
  },
  revisionText: {
    color: '#FFF',
    fontSize: wp('3%'),
    backgroundColor: '#A80341',
    fontWeight: 'bold',
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 22,
    textAlign: 'center',
    margin: 2,
  },
  wordMap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  pad: {
    padding: 10,
    fontSize: wp('3%'),
  },
});

export default styles;
