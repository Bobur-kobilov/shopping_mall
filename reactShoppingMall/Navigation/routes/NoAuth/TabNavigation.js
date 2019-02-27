import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import Tab1 from './StackNavigation';
import ShoppingCartScreen from '../../../pages/ShoppingHistory';

const Tab2 = createStackNavigator({
  ShoppingCart:ShoppingCartScreen
},
{
  initialRouteName:"ShoppingCart"
})
const TabNavigator = createBottomTabNavigator({
  Home: Tab1,
  ShoppingCart:Tab2 
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
    }
    // You can return any component that you like here!
    return <IconComponent name={iconName} size={25} color={tintColor} />;
  },
}),
tabBarOptions: {
  activeTintColor: '#409ed2',
  inactiveTintColor: 'gray',
  animationEnabled:true,
  showIcon:true,
  showLabel:false
},
}
);
export default TabNavigator;