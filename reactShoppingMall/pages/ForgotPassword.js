import React, {Component} from 'react';
import {View, StyleSheet,Text,Image,TouchableOpacity} from 'react-native';
import Header from '../pages/headers/Header';
import KeyboaardShift from '../src/keyboardShift';
import { Input,Button } from 'react-native-elements';
import Validate from '../src/validation.js';
import axios from '../src/axios.js';
class ForgotPassword extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Reset Password',
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
  state = {
    email:'',
    
  }
  pswdForgot = () => {
    
  }
  handleEmail = (text) =>{
    this.setState({email:text.trim()});
  }
  render () {
    return (
      <KeyboaardShift>
      {() => (
      <View style={styles.container}>
      <Input
        placeholder='Email Address'
        leftIcon={{ type: 'font-awesome', name: 'envelope' }}
        onChangeText = {this.handleEmail}
        style={styles.textInput}
        autoComplete='off'
        autoCapitalize='none'
        keyboardType='email-address'
        autoCorrect={false}
        onBlur= {()=>{
          this.setState({
            emailError:Validate('email',this.state.email)
          })
        }}
        errorMessage = {this.state.emailError}
      />
      <Button
      title="Submit"
      raised={false}
      style={styles.btn}
      onPress = {this.pswdForgot}
      />
      {/* <TouchableOpacity style={{ alignItems:'center'}} onPress={this.redirectSignUp}>
        <Text>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ alignItems:'center'}}  onPress={this.pswdForgot}>
        <Text>SignUp</Text>
      </TouchableOpacity> */}
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
export default ForgotPassword;