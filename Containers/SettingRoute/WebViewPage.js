import React from 'react';
import {StyleSheet, View} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {CloseHeader} from '../../Components/Headers';
import {WebView} from 'react-native-webview';

class WebViewPage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.view}>
          <CloseHeader title="About" route="Setting" />
        </View>
        <WebView source={{uri: this.props.navigation.getParam('routeLink')}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  titleText: {
    fontSize: wp('10%'),
  },
  view: {
    alignItems: 'center',
  },
});

export default WebViewPage;
