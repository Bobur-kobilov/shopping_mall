import {createStackNavigator} from 'react-navigation';
import ShoppingCartScreen from '../../../../pages/ShoppingHistory';

const CartTab = createStackNavigator({
  ShoppingCart: ShoppingCartScreen
},
{
  initialRouteName:"ShoppingCart"  
});

export default CartTab;