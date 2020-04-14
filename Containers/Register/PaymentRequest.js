import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  ToastAndroid,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {options} from '../../helpers/MapInputs';
import {BottomButtonWide} from '../../Components/Buttons';

class PaymentRequest extends React.Component {
  constructor() {
    super();
    this.state = {
      selected: 1,
    };
  }

  onSubmit = () => {
    if (this.state.selected === 1) {
      this.props.navigation.navigate('Retrieve');
    } else {
      ToastAndroid.show(
        'Beta Phase, Full Access not available',
        ToastAndroid.LONG,
      );
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>Select a pack</Text>
        <View>
          {options.map((value, index) => {
            return (
              <View key={index}>
                {this.state.selected === index ? (
                  <TouchableHighlight
                    style={styles.selectedBtn}
                    onPress={() => this.setState({selected: index})}>
                    <View style={styles.btnView}>
                      <Text style={styles.selectedName}>{value.name}</Text>
                      <Text style={styles.selectedInfo}>{value.info}</Text>
                      <Text style={styles.selectedName}>{value.cost}</Text>
                    </View>
                  </TouchableHighlight>
                ) : (
                  <TouchableHighlight
                    style={styles.normalBtn}
                    onPress={() => this.setState({selected: index})}>
                    <View style={styles.btnView}>
                      <Text style={styles.normalName}>{value.name}</Text>
                      <Text style={styles.normalInfo}>{value.info}</Text>
                      <Text style={styles.normalName}>{value.cost}</Text>
                    </View>
                  </TouchableHighlight>
                )}
              </View>
            );
          })}
        </View>
        <BottomButtonWide buttonText="CONTINUE" onButtonPress={this.onSubmit} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  titleText: {
    fontSize: wp('8%'),
    padding: 10,
  },
  btnView: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedBtn: {
    borderWidth: 1,
    borderRadius: 22,
    backgroundColor: '#A80341',
    padding: 10,
    height: hp('20%'),
    justifyContent: 'center',
    margin: 10,
  },
  selectedName: {
    color: '#fff',
    fontSize: wp('6%'),
  },
  selectedInfo: {
    color: '#F8F8F8',
    fontSize: wp('4%'),
    textAlign: 'center',
  },
  normalBtn: {
    borderWidth: 1,
    borderRadius: 22,
    backgroundColor: '#F8F8F8',
    padding: 10,
    height: hp('20%'),
    justifyContent: 'center',
    margin: 10,
  },
  normalName: {
    color: '#000',
    fontSize: wp('6%'),
  },
  normalInfo: {
    color: '#707070',
    fontSize: wp('4%'),
    textAlign: 'center',
  },
});

export default PaymentRequest;
