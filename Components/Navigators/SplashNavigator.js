import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {AppNavigator, AuthNavigator} from './Navigator';
import SplashScreen from '../../Containers/SplashScreen';
import Home from '../../Containers/Home';

const SplashNavigator = createAppContainer(
  createSwitchNavigator(
    {
      Home: {
        screen: Home,
      },
      LoadStack: {
        screen: SplashScreen,
      },
      AuthStack: {
        screen: AuthNavigator,
      },
      MainStack: {
        screen: AppNavigator,
      },
    },
    {
      initialRouteName: 'LoadStack',
      headerMode: 'none',
    },
  ),
);

export default createAppContainer(SplashNavigator);
