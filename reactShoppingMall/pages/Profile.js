import React, {Component} from 'react';
import {View, StyleSheet,Image} from 'react-native';
import Header from '../pages/headers/Header';
import SignUp from './SignUp';
class Profile extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Profile',
      header:<View style={styles.header}>
      <Header navigation={navigation} />
      </View>,
      drawerIcon: () => (
        <Image
          source={require('../assets/images/icons/user.png')}
          style={[styles.icon]}
        />
      ),
    };
  };
  render () {
    return (
    <SignUp/>
    )
  }
}
const styles = StyleSheet.create({
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
  icon: {
    width: 50,
    height:50
  },
})  
export default Profile;