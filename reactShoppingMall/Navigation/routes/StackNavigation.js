import {createStackNavigator} from 'react-navigation';
import HomeScreen from '../../pages/Home';
import HomeHeader from '../../pages/headers/HomeHeader';
const StackNavigator = createStackNavigator({
  Home: HomeScreen,
},
{
  initialRouteName: "Home"
}
);
export default StackNavigator;