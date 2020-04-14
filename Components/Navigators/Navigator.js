import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {createStackNavigator} from 'react-navigation-stack';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {HeaderLogo} from '../Logos';

//Routes
import Profile from '../../Containers/AccountRoute/Profile';
import Faq from '../../Containers/AccountRoute/Faq';
import Home from '../../Containers/Home';
import FinshSetup from '../../Containers/FinishSetup';
import OTP from '../../Containers/OTP';
import Login from '../../Containers/Login';
import RetrieveAccount from '../../Containers/RetrieveAccount';
import AccountInfo from '../../Containers/Register/AccountInfo';
import PaymentRequest from '../../Containers/Register/PaymentRequest';
import TestHome from '../../Containers/TestRoute/TestHome';
import Test from '../../Containers/TestRoute/Test';
import WordSearch from '../../Containers/TestRoute/WordSearch';
import About from '../../Containers/SettingRoute/About';
import DeleteAccount from '../../Containers/SettingRoute/DeleteAccount';
import Membership from '../../Containers/AccountRoute/Membership';
import Favourites from '../../Containers/AccountRoute/Favourites';
import Scores from '../../Containers/AccountRoute/Scores';
import WebViewPage from '../../Containers/SettingRoute/WebViewPage';
import Credits from '../../Containers/SettingRoute/Credits';
import SettingsHome from '../../Containers/SettingRoute/SettingsHome';

const TestNavigator = createStackNavigator(
  {
    TestHome: {screen: TestHome},
    Test: {screen: Test},
    Search: {screen: WordSearch},
  },
  {
    initialRouteName: 'TestHome',
    headerMode: 'none',
  },
);

const AccountNavigator = createMaterialBottomTabNavigator(
  {
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <View>
            <Icon style={{color: tintColor}} size={25} name={'ios-person'} />
          </View>
        ),
      },
    },
    Help: {
      screen: Faq,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <View>
            <Icon
              style={{color: tintColor}}
              size={25}
              name={'ios-chatbubbles'}
            />
          </View>
        ),
      },
    },
    Setting: {
      screen: SettingsHome,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <View>
            <Icon style={{color: tintColor}} size={25} name={'ios-settings'} />
          </View>
        ),
      },
    },
  },
  {
    initialRouteName: 'Profile',
    activeColor: '#A80341',
    inactiveColor: '#707070',
    barStyle: {
      backgroundColor: '#fff',
      borderWidth: 1,
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
      borderColor: '#fff',
      overflow: 'hidden',
    },
    shifting: true,
  },
);

const AppNavigator = createStackNavigator(
  {
    Home: {screen: Home},
    Account: {screen: AccountNavigator},
    Test: {screen: TestNavigator},
    DeleteAccount: {screen: DeleteAccount},
    Doc: {screen: WebViewPage},
    Credits: {screen: Credits},
    About: {screen: About},
    Membership: {screen: Membership},
    Favourites: {screen: Favourites},
    Scores: {screen: Scores},
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
  },
);

const AuthNavigator = createStackNavigator(
  {
    Login: {screen: Login},
    OTP: {screen: OTP},
    Info: {screen: AccountInfo},
    Payment: {screen: PaymentRequest},
    Retrieve: {screen: RetrieveAccount},
    Finish: {screen: FinshSetup},
  },
  {
    initialRouteName: 'Login',
    defaultNavigationOptions: {
      headerTitle: () => <HeaderLogo />,
      headerStyle: {
        backgroundColor: '#fff',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        height: hp('10%'),
      },
      headerTitleAlign: 'center',
    },
  },
);

export {AppNavigator, AuthNavigator};
