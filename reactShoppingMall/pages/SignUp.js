import React, {Component} from 'react';
import {View, StyleSheet,Text,Image,Keyboard,AsyncStorage} from 'react-native';
import Header from '../pages/headers/Header';
import { Input,Button ,CheckBox,Card} from 'react-native-elements';
import axios from '../src/axios.js';
import KeyboaardShift from '../src/keyboardShift';
import Validate from '../src/validation.js';
import Toast from 'react-native-easy-toast';
import LinearGradient from 'react-native-linear-gradient';
class SignUP extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'SignUp',
      header:<View style={styles.header}>
      <Header navigation={navigation} />
      </View>
    };
  };
  state = {
    username:'',
    email:'',
    password:'',
    confPswd:'',
    emailError:'',
    passwordError:'',
    confPswdError:'',
    haveError:false,
    checked:false
  }
  signup = () => {
    const emailError = Validate('email', this.state.email);
    const passwordError = Validate('password', this.state.password);
    const confPswdError = Validate('confirmPassword',this.state.confPswd);
    this.setState({
      emailError: emailError,
      passwordError: passwordError,
      confPswdError: confPswdError
    });
    if (!emailError && !passwordError) {
      let url = `/users/signup`;
      const payload = {
        username: this.state.username,
        email: this.state.email,
        password: this.state.password
      }
      axios.post(url,payload)
        .then((res)=>{
          console.log("RES",res);
          console.log(res);
          if (res.status === 200) {
            this.setState({haveError:false});
            this.toast.show('Successfully registered',1000)
            AsyncStorage.setItem('userToken','AuthToken');
            this.props.navigation.navigate('Auth');
          }
        })
        .catch((error)=>{
          this.setState({
            haveError:true
          })
          console.log(error);
          this.toast.show(`${error.response.data}`,1000);
        })
    }
  }
  handleEmail = (text) =>{
    this.setState({email:text.trim()});
  }
  handleUserName = (text) =>{
    this.setState({username: text.trim()});
  }
  handlePassword = (text) =>{
    this.setState({password:text.trim()});
  }
  handleConfirmPswd = (text) => {
    this.setState({confPswd:text.trim()});
  }
  render () {
    return (
      <KeyboaardShift>
      {() => (
      <View style={styles.container}>
        <Card title='SignUp' containerStyle={{width:320,height:470}}>
          <Toast 
          ref={toast => {
              this.toast = toast;
          }}
          position={'center'}
          position='top'
          style={ [{backgroundColor:this.state.haveError ?'red':'#27AE60'} ]}
          />
          <Input
          containerStyle={{marginTop:10}}
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
                emailError:Validate('password',this.state.password)
              })
            }}
            errorMessage = {this.state.passwordError}
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
            // onBlur= {()=>{
            //   this.setState({
            //     emailError:Validate('confirmPassword',this.state.confirmPassword)
            //   })
            // }}
            errorMessage = {this.state.confPswdError}
          />
          <CheckBox
            containerStyle={{backgroundColor:'transparent',borderBottomWidth:0,borderTopWidth:0,borderLeftWidth:0,borderRightWidth:0}}
            title='Agree with Terms of Use'
            checked={this.state.checked}
            onPress={()=>this.setState({checked:!this.state.checked})}
          />
          <Button
          title="Sign Up"
          raised
          ViewComponent={LinearGradient} // Don't forget this!
            linearGradientProps={{
            colors:['#6C4E90','#20011f'],
            start: {x: 0.0, y: 1.0},
            end: {x: 1.0, y: 1.0},
            }}
            style={styles.btn}
            buttonStyle={{borderRadius:20}}
          style={styles.btn}
          onPress = {this.signup}
          />
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
   
  },
  textInput: {
    backgroundColor: 'white',
    height: 40,
  }
})  
export default SignUP;