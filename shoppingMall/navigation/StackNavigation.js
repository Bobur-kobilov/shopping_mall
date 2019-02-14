import React from "react";
import {View, Text, Button, ScrollView} from "react-native";
import { createAppContainer, createStackNavigator, createDrawerNavigator } from 'react-navigation';

class SecondScreen extends React.Component {
  render (){
    return (
      <View style={{flex:1, alignItems:"center",justifyContent:"center"}}>
        <Text>Second Screen</Text>
        <Button title="Home" onPress={() => this.props.navigation.navigate('Home') }/>
      </View>
    );
  }
}

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}} >
        <Text>Hello </Text>
      </View>
    )
  }
}

class ThridScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}} >
        <Text>ThridScreen </Text>
        <Button title='toggle Drawer' onPress={() => this.props.navigation.toggleDrawer()}/>
      </View>
    )
  }
}

const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  Second: SecondScreen,
},
{
  initialRouteName: "Home"
});

const Drawer = createDrawerNavigator({
  Home: HomeScreen,
  Main: AppNavigator,
  Third: ThridScreen,
}, {
  contentComponent: (props) => {
    return (
      <ScrollView>
        <Button title='Main' onPress={() => props.navigation.navigate('Main')}/>
        <Button title='Third' onPress={() => props.navigation.navigate('Third')}/>
        <Button title='Fourth' onPress={() => props.navigation.navigate('Fourth')}/>
      </ScrollView>
    );
  }
})
export default createAppContainer(Drawer);