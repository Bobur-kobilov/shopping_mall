import SignOut from './StackNavigation.js';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
export default createAppContainer(createSwitchNavigator(
  {
    NoAuth:SignOut,
  },
  {
    initialRouteName: 'NoAuth',
  }
));
