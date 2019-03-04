import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import Tab1 from './StackNavigation';
import CartTab from '../NoAuth/Tabs/CartTab';
import WalletTab from '../NoAuth/Tabs/WalletTab';
const TabNavigator = createBottomTabNavigator({
  Home: Tab1,
  ShoppingCart:CartTab ,
  Wallet: WalletTab
},
{
defaultNavigationOptions: ({ navigation }) => ({
  tabBarIcon: ({ focused, horizontal, tintColor }) => {
    const { routeName } = navigation.state;
    let IconComponent = Icon;
    let iconName;
    if (routeName === 'Home') {
      iconName = `home`;
    } else if(routeName === 'ShoppingCart') {
        iconName = `shopping-cart`
    } else if (routeName ==='Wallet') {
        iconName = `payment`
    }
    // You can return any component that you like here!
    return <Icon
    name={iconName}
    type='material'
    color={tintColor}
    size={30}
  />
    // return <IconComponent type="font-awesome" name={iconName} size={25} color={tintColor} />;
  },
}),
tabBarOptions: {
  activeTintColor: '#6C4E90',
  inactiveTintColor: 'gray',
  animationEnabled:true,
  showIcon:true,
  showLabel:false,
},
}
);
export default TabNavigator;