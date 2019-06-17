import {createStackNavigator} from 'react-navigation';
import HomeScreen from '../pages/Home.js';
import ProductDetailScreen from '../pages/ProductDetail'
const StackNavigator = createStackNavigator({
  Home: HomeScreen,
  ProductDetail: ProductDetailScreen
},
{
  initialRouteName: "Home"
}
);
export default StackNavigator;  