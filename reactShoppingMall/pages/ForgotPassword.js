import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import Header from '../pages/headers/Header';
import KeyboaardShift from '../src/keyboardShift';
import { Input,Button,Card } from 'react-native-elements';
import Validate from '../src/validation.js';
import axios from '../src/axios.js';
import LinearGradient from 'react-native-linear-gradient';
class ForgotPassword extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Reset Password',
      header:<View style={styles.header}>
      <Header navigation={navigation} />
      </View>
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
      <Card title='Reset Password' containerStyle={{width:320,height:200}}>
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
        ViewComponent={LinearGradient} // Don't forget this!
          linearGradientProps={{
          colors:['#6C4E90','#20011f'],
          start: {x: 0.0, y: 1.0},
          end: {x: 1.0, y: 1.0},
          }}
          buttonStyle={{borderRadius:20}}
          containerStyle={styles.btn}
        raised
        containerStyle={styles.btn}
        onPress = {this.pswdForgot}
        />
        {/* <TouchableOpacity style={{ alignItems:'center'}} onPress={this.redirectSignUp}>
          <Text>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ alignItems:'center'}}  onPress={this.pswdForgot}>
          <Text>SignUp</Text>
        </TouchableOpacity> */}
        </Card>
      </View>
      )}  
      </KeyboaardShift>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    height: '100%',
    justifyContent: 'center',
    left: 0,
    position: 'absolute',
    top: 0,
    width: '100%',
    backgroundColor:'#f5f7f2'
  },
  icon: {
    width: 50,
    height:50
  },
  btn:{
    padding:1,
    marginTop:15
  },
  textInput: {
    backgroundColor: 'white',
    height: 40,
  }
})
export default ForgotPassword;