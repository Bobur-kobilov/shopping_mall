import React, {Component} from 'react';
import {View, StyleSheet,Text,TouchableOpacity,AsyncStorage} from 'react-native';
import axios from '../src/axios.js';
import { Input,Button, Card } from 'react-native-elements';
import KeyboaardShift from '../src/keyboardShift';
import Validate from '../src/validation.js';
import Toast from 'react-native-easy-toast';
import Header from '../pages/headers/Header';
import LinearGradient from 'react-native-linear-gradient';
class Login extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Login',
      header:<View style={styles.header}>
      <Header navigation={navigation} />
      </View>
    };
  };
  state = {
    email:'',
    password:'',
    emailError:'',
    passwordError:'',
    haveError:false
    
  }
  login = () => {
    const emailError = Validate('email', this.state.email);
    const passwordError = Validate('password', this.state.password);
    this.setState({
      emailError: emailError,
      passwordError: passwordError,
    });
    if (!emailError && ! passwordError) {
      let url = `users/login`;
      const payload = {
        email: this.state.email,
        password: this.state.password
      };
      axios.post(url,payload)
        .then((res)=>{
          if (res.status === 200) {
            console.log(this.props)
            this.setState({haveError:false});
            this.toast.show('Success',800);
            AsyncStorage.setItem('userToken', 'AuthToken');
            this.props.navigation.navigate('Auth');
          }
        })
        .catch((error)=>{
          console.log(error);
          this.setState({
            haveError:true
          })
          this.toast.show(`${error.response.data}`,1000);
        });
    }
  }
  handleEmail = (text) =>{
    this.setState({email:text.trim()});
  }
  handlePassword = (text) =>{
    this.setState({password:text.trim()});
  }
  redirectSignUp = () => {
    this.props.navigation.navigate('SignUp');
  }
  pswdForgot = () => {
    this.props.navigation.navigate('ForgotPassword')
  }
  render () {
    return (
      <KeyboaardShift>
      {() => (
      <View style={styles.container}>
        <Card title='Login via email' containerStyle={{width:320,height:470}}>
          <Toast 
          ref={toast => {
            this.toast = toast;
          }}
          position={'center'}
          position='top'
          style={ [{backgroundColor:this.state.haveError ?'red':'#27AE60'} ]}
          />
          <Input
            containerStyle={{marginTop:40}}
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
          <Input
            placeholder='Password'
            leftIcon={{ type: 'ionicons', name: 'lock' }}
            onChangeText = {this.handlePassword} 
            style={styles.textInput}
            autoComplete='off'
            autoCapitalize='none'
            secureTextEntry= {true}
            autoCorrect={false}
            onBlur= {()=>{
              this.setState({
                emailError:Validate('password',this.state.email)
              })
            }}
            errorMessage = {this.state.passwordError}
          />
          <Button
          title="Login"
          raised
          ViewComponent={LinearGradient} // Don't forget this!
            linearGradientProps={{
            colors:['#6C4E90','#20011f'],
            start: {x: 0.0, y: 1.0},
            end: {x: 1.0, y: 1.0},
            }}
            containerStyle={styles.btn}
            buttonStyle={{borderRadius:20}}
          onPress = {this.login}
          />
          <View style={styles.signUp}>
            <TouchableOpacity style={{ alignItems:'center'}} onPress={this.redirectSignUp}>
              <Text>SignUp</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ alignItems:'center'}}  onPress={this.pswdForgot}>
              <Text>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
        </Card>
      </View>
      )}  
      </KeyboaardShift>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    alignItems:'center',
    flex: 1,
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
    marginTop:20
  },
  textInput: {
    backgroundColor: 'white',
    height: 40,
  },
  signUp:{
    alignItems:'center',
    justifyContent:'space-evenly',
    flexDirection:'row',
    marginTop:20
  }
}) 
export default Login;