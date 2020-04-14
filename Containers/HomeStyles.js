import {StyleSheet, Platform} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const CORRECT_COLOUR = '#18ECA6';
const INCORRECT_COLOUR = '#FA3B3B';
const PRIMARY_COLOR = '#A80341';
const SECONDARY_COLOR = '#F8F8F8';
const TERTIARY_COLOR = '#FFFFFF';

function font() {
  if (Platform.OS === 'android') {
    return 'serif';
  } else {
    return 'Georgia';
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: TERTIARY_COLOR,
  },
  cardContainer: {
    backgroundColor: SECONDARY_COLOR,
    height: '100%',
    width: '100%',
  },
  contentContainer: {
    height: hp('80%'),
    width: '95%',
    backgroundColor: SECONDARY_COLOR,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: PRIMARY_COLOR,
    marginTop: 10,
    alignSelf: 'center',
    elevation: 3,
    overflow: 'hidden',
  },
  wordContainer: {
    backgroundColor: PRIMARY_COLOR,
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    overflow: 'hidden',
  },
  paginationContainer: {
    backgroundColor: SECONDARY_COLOR,
    alignItems: 'center',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  paginationText: {
    width: '100%',
    paddingHorizontal: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#707070',
  },
  middleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: TERTIARY_COLOR,
    backgroundColor: TERTIARY_COLOR,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    overflow: 'hidden',
  },
  logo: {
    width: wp('8%'),
    height: wp('8%'),
    overflow: 'visible',
  },
  favContainer: {
    width: wp('8%'),
    height: wp('8%'),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: TERTIARY_COLOR,
    backgroundColor: TERTIARY_COLOR,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    overflow: 'hidden',
  },
  titleText: {
    color: SECONDARY_COLOR,
    textTransform: 'uppercase',
    fontFamily: font(),
    fontSize: wp('9%'),
  },
  wordrootContainer: {
    borderBottomWidth: 2,
    borderBottomColor: PRIMARY_COLOR,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  wordrootHeading: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  wordText: {
    color: PRIMARY_COLOR,
    fontSize: wp('4%'),
    fontWeight: 'bold',
    paddingLeft: 5,
  },
  rootContainer: {
    marginTop: 5,
    width: '90%',
    alignSelf: 'center',
  },
  rootText: {
    fontSize: wp('4%'),
    color: SECONDARY_COLOR,
    alignSelf: 'flex-start',
    textAlign: 'center',
    fontWeight: 'bold',
    backgroundColor: PRIMARY_COLOR,
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 20,
    elevation: 3,
    margin: 3,
  },
  meaningBox: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderWidth: 1,
    borderColor: PRIMARY_COLOR,
    alignItems: 'center',
    backgroundColor: TERTIARY_COLOR,
    overflow: 'hidden',
  },
  meaningContent: {
    padding: 10,
    fontSize: wp('4%'),
    textAlign: 'center',
  },
  meaningHeading: {
    fontSize: wp('4%'),
    color: SECONDARY_COLOR,
    textAlign: 'center',
    width: '100%',
    backgroundColor: PRIMARY_COLOR,
    paddingVertical: 5,
  },
  contextBox: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderWidth: 1,
    borderTopWidth: 0,
    borderColor: PRIMARY_COLOR,
    alignItems: 'center',
    backgroundColor: TERTIARY_COLOR,
    overflow: 'hidden',
  },
  contextHeading: {
    fontSize: wp('4%'),
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#707070',
    color: PRIMARY_COLOR,
    textAlign: 'center',
    width: '100%',
    backgroundColor: '#F2F2F2',
    paddingVertical: 5,
  },
  greyHeading: {
    fontSize: wp('3%'),
    alignSelf: 'flex-start',
    borderWidth: 1,
    borderColor: '#707070',
    borderRadius: 5,
    backgroundColor: '#F2F2F2',
    color: PRIMARY_COLOR,
    textAlign: 'center',
    marginBottom: 10,
    paddingVertical: 3,
    paddingHorizontal: 5,
  },
  redHeading: {
    fontSize: wp('3%'),
    alignSelf: 'flex-start',
    borderRadius: 5,
    backgroundColor: PRIMARY_COLOR,
    color: SECONDARY_COLOR,
    textAlign: 'center',
    marginBottom: 10,
    paddingVertical: 3,
    paddingHorizontal: 5,
  },
  newsContainer: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: PRIMARY_COLOR,
    backgroundColor: TERTIARY_COLOR,
    padding: 10,
    overflow: 'hidden',
    textAlign: 'justify',
    fontSize: wp('4%'),
    alignItems: 'center',
  },
  newsBox: {
    width: '100%',
    backgroundColor: TERTIARY_COLOR,
    padding: 5,
    margin: 2,
    borderWidth: 1,
    borderColor: '#707070',
  },
  newsContent: {
    fontSize: wp('3%'),
  },
  newsText: {
    fontSize: wp('2%'),
    color: '#707070',
  },
  questionText: {
    textAlign: 'center',
    fontSize: wp('5%'),
    fontWeight: 'bold',
    paddingVertical: 10,
  },
  optionContainer: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: PRIMARY_COLOR,
    backgroundColor: TERTIARY_COLOR,
    alignSelf: 'center',
    width: '100%',
    padding: 10,
    margin: 5,
  },
  optionText: {
    fontSize: wp('3%'),
    textTransform: 'capitalize',
  },
  correct: {
    borderColor: TERTIARY_COLOR,
    backgroundColor: CORRECT_COLOUR,
    borderWidth: 2,
    elevation: 5,
  },
  incorrect: {
    borderColor: TERTIARY_COLOR,
    backgroundColor: INCORRECT_COLOUR,
    borderWidth: 2,
    elevation: 5,
  },
  ytVideo: {
    alignSelf: 'stretch',
    height: 300,
  },
  fakeVideo: {
    backgroundColor: '#000',
    width: '80%',
    height: hp('20%'),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  videoContainer: {
    height: hp('100%'),
    backgroundColor: '#00000060',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  videoClose: {
    paddingBottom: 10,
    paddingRight: 10,
  },
  videoBtn: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
  },
  finishContainer: {
    backgroundColor: TERTIARY_COLOR,
    alignItems: 'center',
    alignSelf: 'center',
    width: '100%',
    height: '100%',
  },
  pointIcon: {
    position: 'absolute',
    left: 0,
    padding: 10,
  },
  testPrimary: {
    color: PRIMARY_COLOR,
    fontSize: wp('6%'),
    padding: 10,
  },
  testContent: {
    color: '#00000090',
    fontSize: wp('6%'),
    textTransform: 'uppercase',
    padding: 10,
  },
  testInfo: {
    color: '#707070',
    fontSize: wp('3%'),
    padding: 10,
  },
});

export default styles;
