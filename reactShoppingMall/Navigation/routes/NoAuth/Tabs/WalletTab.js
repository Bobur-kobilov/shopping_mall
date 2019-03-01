import {createStackNavigator} from 'react-navigation';
import WalletScreen from '../../../../pages/funds/Wallet';
import IndexScreen from '../../../../pages/funds/indexPage';
import CardScreen from '../../../../pages/funds/Card'
const WalletTab = createStackNavigator({
  Wallet: WalletScreen,
  Index: IndexScreen,
  Card: CardScreen
},
{
  initialRouteName:"Index"
});

export default WalletTab;