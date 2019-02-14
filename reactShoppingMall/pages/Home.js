import React, {Component} from 'react';
import {View, Text, StyleSheet,FlatList,ListItem} from 'react-native';
import {SearchBar} from 'react-native-elements';
import HomeHeader from '../pages/headers/HomeHeader';
export default class Home extends Component {
  constructor (props) {
    super(props);
    this.state = {
    }
 }
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Home',
      header:<View style={styles.header}>
      <HomeHeader navigation={navigation} />
      </View>
    };
  };
  render () {
    return (
      <View style={styles.container}>
        <Text>Home Page</Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems:'center',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})