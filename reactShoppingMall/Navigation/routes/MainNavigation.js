import SignOut from './NoAuth/DrawerNavigation';
import SignIn from './Auth/DrawerNavigation';
import AuthLoadingScreen from './AuthLoading/AuthLoading'
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    NoAuth:SignOut,
    Auth: SignIn
  },
  {
    initialRouteName: 'AuthLoading',
  }
));
