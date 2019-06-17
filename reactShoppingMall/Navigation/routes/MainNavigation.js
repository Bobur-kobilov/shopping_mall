import SignOut from './NoAuth/StackNavigation.js';
import AuthLoadingScreen from './AuthLoading/AuthLoading'
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    NoAuth:SignOut,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));
