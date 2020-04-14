import React from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';
import {ThreeBtnHeader} from '../../Components/Headers';
import IconInfo from '../../Components/IconInfo';
import TestItem from './TestItem';

const dummyData = [
  {
    id: '1',
    iconName: 'hexagon-slice-1',
    setName: 'SET-1',
    setType: 'RT 1h',
  },
  {
    id: '2',
    iconName: 'hexagon-slice-2',
    setName: 'SET-1',
    setType: 'RT 9h',
  },
  {
    id: '3',
    iconName: 'hexagon-slice-3',
    setName: 'SET-1',
    setType: 'RT 2d',
  },
  {
    id: '4',
    iconName: 'hexagon-slice-6',
    setName: 'SET-2',
    setType: 'PT',
  },
  {
    id: '5',
    iconName: 'hexagon-slice-1',
    setName: 'SET-1',
    setType: 'RT 1h',
  },
  {
    id: '6',
    iconName: 'hexagon-slice-2',
    setName: 'SET-1',
    setType: 'RT 9h',
  },
  {
    id: '7',
    iconName: 'hexagon-slice-3',
    setName: 'SET-1',
    setType: 'RT 2d',
  },
  {
    id: '8',
    iconName: 'hexagon-slice-6',
    setName: 'SET-2',
    setType: 'PT',
  },
];

class TestHome extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ThreeBtnHeader
          headerText="TEST"
          iconLeft="ios-arrow-dropleft"
          iconRight="ios-search"
          navLeft="Home"
          navRight="Search"
        />
        <View style={styles.warningContainer}>
          <View style={styles.innerContainer}>
            <View>
              <IconInfo name="hexagon-slice-6" text="PT (Mandatory)" />
              <IconInfo name="hexagon-slice-1" text="RT (1h)" />
              <IconInfo name="hexagon-slice-2" text="RT (9h)" />
            </View>
            <View>
              <IconInfo name="hexagon-slice-3" text="RT (7d)" />
              <IconInfo name="hexagon-slice-4" text="RT (1m)" />
              <IconInfo name="hexagon-slice-5" text="RT (6m)" />
            </View>
          </View>
          <View style={styles.innerContainer}>
            <Text>PT: Primary Test</Text>
            <Text>RT: Revision Test</Text>
          </View>
        </View>
        <Text style={styles.titleText}>Upcoming Tests:</Text>
        <FlatList
          data={dummyData}
          numColumns={3}
          contentContainerStyle={styles.testContainer}
          renderItem={({item}) => (
            <TestItem
              iconName={item.iconName}
              setName={item.setName}
              setType={item.setType}
            />
          )}
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
    backgroundColor: '#FFF',
  },
  warningContainer: {
    width: '95%',
    backgroundColor: '#FDF6B2',
    alignItems: 'center',
    borderRadius: 22,
    padding: 10,
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  testContainer: {
    justifyContent: 'space-evenly',
  },
  titleText: {
    fontSize: 20,
    padding: 10,
  },
});

export default TestHome;
