import React from 'react';
import {StyleSheet, View, Text, FlatList, ToastAndroid} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {CloseHeader} from '../../Components/Headers';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import ActivityIndicatorDots from '../../Components/ActivityIndicatorDots';

const dummyData = [
  {
    id: '1',
    route: 'Doc',
    title: 'Altruistic',
    routeLink: '',
  },
  {
    id: '2',
    route: 'Doc',
    title: 'Audacious',
    routeLink: '',
  },
  {
    id: '3',
    route: 'Doc',
    title: 'Animosity',
    routeLink: '',
  },
  {
    id: '4',
    route: 'DeleteAccount',
    title: 'Affinity',
    routeLink: '',
  },
];

class Favourites extends React.Component {
  state = {
    count: null,
    load: true,
    data: [],
  };

  performTimeConsumingTask = async () => {
    this.setState({data: dummyData});
    this.setState({count: dummyData.length});
    return new Promise(resolve =>
      setTimeout(() => {
        resolve('result');
      }, 2000),
    );
  };

  async componentDidMount() {
    const data = await this.performTimeConsumingTask();

    if (data !== null) {
      // eslint-disable-next-line react/no-did-mount-set-state
      this.setState({load: false});
    }
  }

  onDelete = id => {
    const filteredData = this.state.data.filter(item => item.id !== id);
    this.setState({data: filteredData});
    const newCount = this.state.count - 1;
    this.setState({count: newCount});
    ToastAndroid.show('Removed', ToastAndroid.SHORT);
  };

  render() {
    return (
      <View style={styles.container}>
        <CloseHeader title="Favourites" route="Profile" />
        {this.state.load ? (
          <View style={styles.resText}>
            <ActivityIndicatorDots />
          </View>
        ) : this.state.count <= 0 ? (
          <Text style={styles.resText}>You have no favorite words</Text>
        ) : (
          <FlatList
            data={this.state.data}
            // eslint-disable-next-line react-native/no-inline-styles
            style={{marginTop: 10}}
            renderItem={({item, index}) => {
              return (
                <View style={styles.itemBtn}>
                  <View style={styles.btnStyle}>
                    <TouchableOpacity
                      onPress={() =>
                        this.navigation.navigate(item.route, {
                          routeLink: item.routeLink,
                        })
                      }>
                      <Text style={styles.itemTxt}>{item.title}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.onDelete(item.id)}>
                      <Icon size={25} name={'ios-trash'} />
                    </TouchableOpacity>
                  </View>
                </View>
              );
            }}
            keyExtractor={item => item.id}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  itemBtn: {
    width: wp('100%'),
    margin: 1,
    backgroundColor: '#fff',
    padding: 5,
    height: hp('7%'),
    justifyContent: 'center',
  },
  itemTxt: {
    fontSize: wp('4%'),
  },
  resText: {
    marginTop: 50,
    color: '#707070',
  },
  btnStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
});

export default Favourites;
