import React, {Component} from 'react';
import {View, StyleSheet,Text,Image} from 'react-native';
import Header from '../pages/headers/Header';
class History extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Shopping History',
      header:<View style={styles.header}>
      <Header navigation={navigation} />
      </View>,
      drawerIcon: () => (
        <Image
          source={require('../assets/images/icons/cart.png')}
          style={[styles.icon]}
        />
      ),
    };
  };
  render () {
    return (
      <View>
        <Text>Shopping History Page</Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  icon: {
    width: 50,
    height:50
  }
})
export default History;