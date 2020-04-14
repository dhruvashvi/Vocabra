import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableWithoutFeedback,
} from 'react-native';
import {BackHeader} from '../../Components/Headers';
import FaqItem from './FaqItem';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {sendEmail} from '../../Components/Mail';

const data = [
  {
    id: '1',
    ques: 'What is React-Native',
    ans:
      'React Native combines the best parts of native development with React, a best-in-class JavaScript library for building user interfaces.',
  },
  {
    id: '2',
    ques: 'What is Firebase',
    ans:
      'Firebase is a mobile and web application development platform developed by Firebase, Inc. in 2011, then acquired by Google in 2014',
  },
  {
    id: '3',
    ques: 'What is NodeJS',
    ans:
      'Node.js is an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside of a browser.',
  },
  {
    id: '4',
    ques: 'What is NodeJS',
    ans:
      'Node.js is an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside of a browser.',
  },
  {
    id: '5',
    ques: 'What is NodeJS',
    ans:
      'Node.js is an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside of a browser.',
  },
  {
    id: '6',
    ques: 'What is NodeJS',
    ans:
      'Node.js is an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside of a browser.',
  },
];

class Faq extends React.Component {
  renderItem = ({item}) => <FaqItem item={item} />;
  sendEmail = () => {
    sendEmail('vocabra.care@gmail.com').then(() => {
      console.log('Our email successful provided to device mail ');
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <BackHeader
          route="Home"
          title="Help"
          type="row"
          backIcon="ios-arrow-dropright"
        />
        <Text style={styles.titleText}>FAQ's</Text>
        <View style={{height: hp('60%')}}>
          <FlatList
            data={data}
            renderItem={this.renderItem}
            keyExtractor={item => item.id}
          />
        </View>
        <Text style={styles.titleText}>Didn't resolve your problem?</Text>
        <TouchableWithoutFeedback style={styles.btn} onPress={this.sendEmail}>
          <Text style={styles.btnText}>vocabra@yahoo.com</Text>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  titleText: {
    fontSize: 20,
    padding: 10,
    color: '#707070',
  },
  btn: {
    alignSelf: 'center',
    width: '100%',
  },
  btnText: {
    fontSize: 20,
    color: '#A80341',
  },
});

export default Faq;
