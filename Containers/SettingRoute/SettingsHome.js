import React from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  Linking,
  Platform,
  Alert,
} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {BackHeader} from '../../Components/Headers';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SettingRoutes} from '../../helpers/MapInputs';
import Icon from 'react-native-vector-icons/Ionicons';
import {FullLogo} from '../../Components/Logos';

const GOOGLE_PACKAGE_NAME = 'com.android.chrome';
const APPLE_STORE_ID = 'dummy';

const getRateRoute = () => {
  if (Platform.OS !== 'ios') {
    Linking.openURL(
      `https://play.google.com/store/apps/details?id=${GOOGLE_PACKAGE_NAME}`,
    ).catch(() => Alert.alert('Please check for the Google Play Store'));
  } else {
    Linking.openURL(
      `itms://itunes.apple.com/in/app/apple-store/${APPLE_STORE_ID}`,
    ).catch(() => Alert.alert('Please check for the App Store'));
  }
};

const SettingsHome = ({navigation}) => {
  return (
    <View style={styles.container}>
      <BackHeader
        route="Home"
        title="Settings"
        type="row"
        backIcon="ios-arrow-dropright"
      />
      <FullLogo />
      <Text style={styles.resText}>Vocabra™ v1.01</Text>
      <TouchableOpacity style={styles.itemBtn} onPress={() => getRateRoute()}>
        <View style={styles.viewList}>
          <View style={styles.icon}>
            <Icon name={'md-star'} size={wp('5%')} />
          </View>
          <Text style={styles.itemTxt}>Rate the App</Text>
        </View>
      </TouchableOpacity>
      <FlatList
        data={SettingRoutes}
        style={{marginBottom: 20}}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              style={styles.itemBtn}
              onPress={() =>
                navigation.navigate(item.route, {
                  routeLink: item.routeLink,
                })
              }>
              <View style={styles.viewList}>
                <View style={styles.icon}>
                  <Icon name={item.icon} size={wp('5%')} />
                </View>
                <Text
                  style={[
                    styles.itemTxt,
                    index === 4 ? {color: 'red'} : {color: 'black'},
                  ]}>
                  {item.title}
                </Text>
              </View>
            </TouchableOpacity>
          );
        }}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  itemBtn: {
    width: wp('100%'),
    margin: 1,
    backgroundColor: '#fff',
    padding: 20,
    justifyContent: 'center',
  },
  itemTxt: {
    fontSize: wp('4%'),
    width: '95%',
    paddingLeft: 10,
  },
  resText: {
    paddingBottom: 20,
  },
  viewList: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  icon: {
    width: '5%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SettingsHome;
