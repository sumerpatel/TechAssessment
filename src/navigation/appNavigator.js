import { createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LoginPage from '../modules/LoginRoot/LoginPage';
import Dashboard from '../modules/HomeRoot/Dashboard/screen';
import TrackDetails from '../modules/HomeRoot/Dashboard/screen/TrackDetails';

// From login page navigations
const LoginStack = createStackNavigator({
  LoginPage: {
    screen: LoginPage,
  },
});

// From Home option navigations
const HomeStack = createStackNavigator({
  Home: {
    screen: Dashboard,
  },
  TrackDetails: {
    screen: TrackDetails,
  },
});

export const createRootNavigator = () => {
  return createSwitchNavigator(
    {
      Auth: LoginStack,
      HomeScreen: HomeStack,
    },
    {
      initialRouteName: 'Auth',
    },
    {
      navigationoptions: { gesturesEnabled: false },
    },
    { orientation: true },
  );
};
