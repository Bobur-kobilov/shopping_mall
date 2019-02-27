import React from "react";
import {ScrollView,StyleSheet,Text} from "react-native";
import {createDrawerNavigator,SafeAreaView,DrawerItems} from 'react-navigation';
import StackNavigator from './StackNavigation.js';
import ContactScreen from '../../../pages/Contact';
import ProfileScreen from '../../../pages/Profile';
import LanguageScreen from '../../../pages/Language';
import ShoppingHistoryScreen from '../../../pages/ShoppingHistory';
import TabNavigator from './TabNavigation';
import { Icon } from 'react-native-elements';
const Drawer = createDrawerNavigator({
  Tab:{ 
  screen:TabNavigator,
  navigationOptions: {
    drawerLabel: 'Home',
    drawerIcon: ({ tintColor }) =>
    <Icon
      containerStyle={{width:46}}
      name='home'
      size={36}
      type='font-awesome'
      color='#517fa4'
  />
  }
  },
  Profile:{
    screen:ProfileScreen,
    navigationOptions: {
      drawerLabel: 'Profile',
      drawerIcon: ({ tintColor }) =>
      <Icon
        containerStyle={{width:46}}
        name='user'
        size={36}
        type='font-awesome'
        color='#517fa4'
    />
    }
  },
  // ShoppingCart:{
  //   screen:ShoppingHistoryScreen,
  //   navigationOptions: {
  //     drawerLabel: 'Shopping Cart',
  //     drawerIcon: ({ tintColor }) =>
  //     <Icon
  //       containerStyle={{width:46}}
  //       name='shopping-cart'
  //       size={36}
  //       type='font-awesome'
  //       color='#517fa4'
  //   />
  //   }
  // },
  Language:{
    screen:LanguageScreen,
    navigationOptions: {
      drawerLabel: 'Language',
      drawerIcon: ({ tintColor }) =>
      <Icon
        containerStyle={{width:46}}
        name='language'
        size={36}
        type='font-awesome'
        color='#517fa4'
    />
    }
  },
  Contact:{
    screen:ContactScreen,
    navigationOptions: {
      drawerLabel: 'Contact',
      drawerIcon: ({ tintColor }) =>
      <Icon
        containerStyle={{width:46}}
        name='phone'
        size={36}
        type='font-awesome'
        color='#517fa4'
    />
    }
  },
},
//  {
//   // drawerBackgroundColor: '#f4f4f4',
//   // contentOptions: {
//   //   activeTintColor: 'blue',
//   //   inactiveTintColor:'black',
//   //   itemsContainerStyle: {
//   //     marginVertical: 10,
//   //   },
//   //   activeBackgroundColor:'white',
//   //   iconContainerStyle: {
//   //     opacity: 1
//   //   },
//   //   itemStyle:{
//   //     width:100
//   //   }
//   // }
// },

{
  contentComponent:(props) =>{
    return (
      <ScrollView style={styles.container}>
      <SafeAreaView  style={styles.drawer} forceInset={{ top: 'always', horizontal: 'never' }}/>  
      <DrawerItems {...props} />
      </ScrollView>
    )
  }
},
);
const styles = StyleSheet.create({
  container: {
    backgroundColor:'#f4f4f4',
    // marginTop:20
    
  },
  drawer: {
    backgroundColor:'#409ed2',
    paddingTop:20,
    paddingLeft:5,
  },
});
export default Drawer;