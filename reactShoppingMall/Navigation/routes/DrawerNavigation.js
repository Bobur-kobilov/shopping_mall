import {createDrawerNavigator} from 'react-navigation';
import StackNavigator from './StackNavigation.js';

const Drawer = createDrawerNavigator({
  Home: StackNavigator  
});

export default Drawer;