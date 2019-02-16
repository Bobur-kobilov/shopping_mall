import React, {Component} from 'react';
import {View, StyleSheet,Text,Image,Keyboard} from 'react-native';
import Header from '../pages/headers/Header';
import { Input,Button } from 'react-native-elements';
import axios from '../src/axios.js';
import KeyboaardShift from '../src/keyboardShift';
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
    email:'',
    password:'',
    confPswd:'',
  }
  signup = () => {
    console.log(this.state.password);
    let url = `/users/signup`;
    const payload = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    }
    axios.post(url,payload)
      .then((res)=>{
        console.log("RES",res);
        if (res.status === 200) {
          this.props.navigation.navigate('Home');
        }
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
  handlePassword = (text) =>{
    this.setState({password:text});
  }
  handleConfirmPswd = (text) => {
    this.setState({confPswd:text});
  }
  render () {
    return (
      <KeyboaardShift>
      {() => (
      <View style={styles.container}>
      <Input
        placeholder='User'
        leftIcon={{ type: 'font-awesome', name: 'user' }}
        onChangeText = {this.handleUserName}
        style={styles.textInput}
        autoComplete='off'
        autoCapitalize='none'
        autoCorrect={false}
      />
      <Input
        placeholder='Email Address'
        leftIcon={{ type: 'font-awesome', name: 'envelope' }}
        onChangeText = {this.handleEmail}
        style={styles.textInput}
        autoComplete='off'
        autoCapitalize='none'
        keyboardType='email-address'
        autoCorrect={false}
      />
      <Input
        placeholder='Password'
        leftIcon={{ type: 'ionicons', name: 'lock' }}
        onChangeText = {this.handlePassword} 
        style={styles.textInput}
        autoComplete='off'
        autoCapitalize='none'
        secureTextEntry= {true}
        autoCorrect={false}
      />
      <Input
        placeholder='Confirm Password'
        leftIcon={{ type: 'ionicons', name: 'lock' }}
        onChangeText = {this.handleConfirmPswd}
        style={styles.textInput}
        returnKeyType="go"
        autoComplete='off'
        autoCapitalize='none'
        secureTextEntry= {true}
        autoCorrect={false}
      />
      <Button
      title="Submit"
      raised={false}
      style={styles.btn}
      onPress = {this.signup}
      />
      </View>
      )}  
      </KeyboaardShift>
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
  },
  textInput: {
    backgroundColor: 'white',
    height: 40,
  }
})  
export default Profile;