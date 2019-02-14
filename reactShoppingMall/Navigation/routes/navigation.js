import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from '../../pages/Home';
const AppNavigator = createStackNavigator({
  Home: HomeScreen
},
{
  initialRouteName: "Home"
}
);
export default createAppContainer(AppNavigator);
