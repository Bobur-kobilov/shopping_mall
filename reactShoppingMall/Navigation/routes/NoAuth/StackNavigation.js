import {createStackNavigator} from 'react-navigation';
import HomeScreen from '../../../pages/Home';
import ContactScreen from '../../../pages/Contact';
import ProfileScreen from '../../../pages/Profile';
import LanguageScreen from '../../../pages/Language';
import ShoppingHistoryScreen from '../../../pages/ShoppingHistory';
import AuthenticationScreen from '../../../pages/Authentication';
import FingerPrintScreen from '../../../pages/FingerPrint'
import LoginScreen from '../../../pages/Login';
import SignUpScreen from '../../../pages/SignUp';
import ForgotPasswordScreen from '../../../pages/ForgotPassword';
const StackNavigator = createStackNavigator({
  Home: HomeScreen,
  Contact:ContactScreen,
  Profile: ProfileScreen,
  Language: LanguageScreen,
  ShoppingHistory:ShoppingHistoryScreen ,
  Authentication: AuthenticationScreen,
  Login: LoginScreen,
  FingerPrint: FingerPrintScreen,
  SignUp:SignUpScreen,
  ForgotPassword: ForgotPasswordScreen
},
{
  initialRouteName: "Home"
}
);
export default StackNavigator;  