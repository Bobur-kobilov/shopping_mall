import {createStackNavigator} from 'react-navigation';
import HomeScreen from '../../../pages/Home';
import ContactScreen from '../../../pages/Contact';
import ProfileScreen from '../../../pages/Profile';
import LanguageScreen from '../../../pages/Language';
import ShoppingHistoryScreen from '../../../pages/ShoppingHistory';
import UserDetailScreen from '../../../pages/UserDetails';
const StackNavigator = createStackNavigator({
  Home: HomeScreen,
  Contact:ContactScreen,
  Profile: ProfileScreen,
  UserDetail:UserDetailScreen,
  Language: LanguageScreen,
  ShoppingCart:ShoppingHistoryScreen  
},
{
  initialRouteName: "Home"
}
);
export default StackNavigator;  