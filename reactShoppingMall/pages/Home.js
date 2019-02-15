import React, {Component} from 'react';
import {View, Text, StyleSheet,FlatList,ListItem} from 'react-native';
import HomeHeader from '../pages/headers/HomeHeader';
import Fab from '../pages/Component/FAB';
import ProductList from '../pages/Component/ProductList';
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
        <ProductList/>
        <Fab active={false}/>
      </View>
    
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})