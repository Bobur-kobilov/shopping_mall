import {createStackNavigator} from 'react-navigation';
import WalletScreen from '../../../../pages/Wallet';

const WalletTab = createStackNavigator({
  Wallet: WalletScreen
},
{
  initialRouteName:"Wallet"
});

export default WalletTab;