import React, {Component} from 'react';
import {View, StyleSheet,Text,Image} from 'react-native';
import Header from '../pages/headers/Header';
import { Input,Button } from 'react-native-elements';
import axios from '../src/axios.js';
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
  state = {
    username:'',
    email: '',
    password:'',
    confPswd:''
    
  }
  componentDidMount() {
  }
  signup() {
    let url = `/users/signup`;
    const payload = {
      username: username,
      email: email,
      password: password
    }
    axios.post(url,payload)
      .then((res)=>{
        console.log(res.data);
      })
      .catch((error)=>{
        console.log(error);
      })
  }
  handleEmail = (text) =>{
    this.setState({email:text});
  }
  handleUserName = (text) =>{
    this.setState({username: text});
  }
  handlePassword = (text) => {
    this.setState({password:text});
  }
  handleConfirmPswd = (text) => {
    this.setState({confPswd:text});
  }
  render () {
    return (
      <View style={styles.container}>
      <Input
        placeholder='User'
        leftIcon={{ type: 'font-awesome', name: 'user' }}
        onChangeText = {this.handleUserName}
      />
      <Input
        placeholder='Email Address'
        leftIcon={{ type: 'font-awesome', name: 'envelope' }}
        onChangeText = {this.handleEmail}
      />
      <Input
        placeholder='Password'
        leftIcon={{ type: 'font-awesome', name: 'unlock-alt' }}
        onChangeText = {this.handlePassword} 
      />
      <Input
        placeholder='Confirm Password'
        leftIcon={{ type: 'font-awesome', name: 'unlock-alt' }}
        onChangeText = {this.handleConfirmPswd}
      />
      <Button
      title="Solid Button"
      raised={false}
      style={styles.btn}
      onPress = {this.signup}
      />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#3c6dbc'
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  icon: {
    width: 50,
    height:50
  },
  btn:{
    padding:25,
  }
})  
export default Profile;