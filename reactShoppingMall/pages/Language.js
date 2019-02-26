import React, {Component} from 'react';
import {View, StyleSheet,Text,Image} from 'react-native';
import Header from '../pages/headers/Header';
import { Icon } from 'react-native-elements';
class Language extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Language',
      header:<View style={styles.header}>
      <Header navigation={navigation} />
      </View>,
      drawerIcon: () => (
        <Icon
          name='language'
          size={30}
          type='font-awesome'
          color='#517fa4'
      />
      ),
    };
  };
  render () {
    return (
      <View>
        <Text>Language Page</Text>
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
export default Language;