import React, {Component} from 'react';
import {View, StyleSheet,Text,Image,AsyncStorage} from 'react-native';
import Header from '../pages/headers/Header';
import {Button } from 'react-native-elements';
class UserDetail extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Profile',
      header:<View style={styles.header}>
      <Header navigation={navigation} />
      </View>,
      drawerIcon: () => (
        <Image
          source={require('../assets/images/icons/information.png')}
          style={[styles.icon]}
        />
      ),
    };
  };
  signout = () =>{
    AsyncStorage.clear();
    this.props.navigation.navigate('NoAuth');
  }
  render () {
    return (
      <View style={styles.container}>
        <Text>Profile Page</Text>
        <Button 
        title="Sign Out"
        onPress={this.signout}
        />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  icon: {
    width: 50,
    height:50
  },
  container: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    left: 0,
    position: 'absolute',
    top: 0,
    width: '100%',
    backgroundColor:'#3c6dbc'
  },
})
export default UserDetail;