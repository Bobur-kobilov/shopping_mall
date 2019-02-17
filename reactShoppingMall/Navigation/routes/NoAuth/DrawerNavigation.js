import React from "react";
import {ScrollView,StyleSheet} from "react-native";
import {createDrawerNavigator,SafeAreaView,DrawerItems} from 'react-navigation';
import StackNavigator from './StackNavigation.js';
import ContactScreen from '../../../pages/Contact';
import ProfileScreen from '../../../pages/Profile';
import LanguageScreen from '../../../pages/Language';
import ShoppingHistoryScreen from '../../../pages/ShoppingHistory';
const Drawer = createDrawerNavigator({
  Home: StackNavigator,
  Profile:ProfileScreen,
  ShoppingHistory: ShoppingHistoryScreen,
  Language: LanguageScreen,
  Contact: ContactScreen,
},
{
  contentOptions: {
    activeTintColor: 'blue',
    itemsContainerStyle: {
      marginVertical: 10,
    },
    activeBackgroundColor:'white',
    iconContainerStyle: {
      opacity: 1
    }
  }
},
{
  contentComponent:(props) =>{
    return (
      <ScrollView >
      <SafeAreaView  style={styles.drawer} forceInset={{ top: 'always', horizontal: 'never' }}/>  
      <DrawerItems {...props} />  
      </ScrollView>
    )
  }
},
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red'
  },
  drawer: {
    backgroundColor:'#4682e2',
    opacity:0.9
  },
});
export default Drawer;