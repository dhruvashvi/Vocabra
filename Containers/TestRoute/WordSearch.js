import React from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';
import {BackHeader} from '../../Components/Headers';
import DismissKeyboard from '../../Components/DismissKeyboard';
import Icon from 'react-native-vector-icons/Ionicons';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const WordSearch = () => {
  return (
    <DismissKeyboard>
      <View style={styles.container}>
        <BackHeader
          route="TestHome"
          title="Word-Search"
          type="row-reverse"
          backIcon="ios-arrow-dropleft"
        />
        <TextInput placeholder="Search" style={styles.inputSearch} />
        <View style={styles.recentCont}>
          <Icon name={'ios-time'} color="#707070" />
          <Text style={styles.recentText}>Recent Words</Text>
        </View>
      </View>
    </DismissKeyboard>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  inputSearch: {
    marginTop: 10,
    backgroundColor: '#F8F8F8',
    borderRadius: 22,
    color: '#707070',
    textAlign: 'right',
    width: '95%',
    borderColor: '#707070',
    borderWidth: 1,
    fontSize: wp('2%'),
    padding: 5,
  },
  recentText: {
    color: '#707070',
    fontSize: wp('2%'),
    paddingLeft: 2,
  },
  recentCont: {
    flexDirection: 'row',
    marginTop: 10,
    width: '95%',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

export default WordSearch;
