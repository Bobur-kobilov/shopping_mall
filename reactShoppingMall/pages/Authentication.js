import React, {Component} from 'react';
import {View, StyleSheet,Text,Image} from 'react-native';
import {Button,SocialIcon } from 'react-native-elements';
import Header from '../pages/headers/Header';
import LinearGradient from 'react-native-linear-gradient';
class Authentication extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Contact',
      header:<View style={styles.header}>
      <Header navigation={navigation} />
      </View>
    };
  };
  handleEmail = () =>{
    this.props.navigation.navigate('Login');
  }
  handleFingerprint = () =>{
    this.props.navigation.navigate('FingerPrint');
  }
  handleSocialMedia = () => {
    this.props.navigation.navigate('SocialMediaLogin');
  }
  handleSignup = () => {
    this.props.navigation.navigate('SignUp');
  }
  handleFbLogin = () => {
    this.props.navigation.navigate('FacebookLogin')
  }
  handleGoogleLogin = () => {
    this.props.navigation.navigate('GoogleLogin');
  }
  render () {
    return (
      <View style={styles.container}>
          <Button
          title="Login via email"
          ViewComponent={LinearGradient} // Don't forget this!
          linearGradientProps={{
          colors:['#409ed2', '#409ed2', '#409ed2', '#409ed2', '#409ed2', '#17C8FF'],
          start: {x: 0.0, y: 1.0},
          end: {x: 1.0, y: 1.0},
          }}
          style={styles.btn}
          onPress = {this.handleEmail}
          />
          <Button
          title="Login via fingerprint"
          ViewComponent={LinearGradient} // Don't forget this!
          linearGradientProps={{
          colors:['#409ed2', '#409ed2', '#409ed2', '#409ed2', '#409ed2', '#17C8FF'],
          start: {x: 0.0, y: 1.0},
          end: {x: 1.0, y: 1.0},
          }}
          style={styles.btn}
          onPress = {this.handleFingerprint}
          />
          <Text style={{top:175}}>Login with your accounts below</Text>
          <View style={{flex: 1,justifyContent:'center', flexDirection: 'row',top:180}}>
          <SocialIcon
            raised={true}
            type='facebook'
            onPress={this.handleFbLogin}
          />
          <SocialIcon
            raised = {true}
            type='google-plus-official'
            onPress={this.handleGoogleLogin}
          />
          </View>  
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    // alignItems:'center',
    left: 0,
    position: 'absolute',
    top: 0,
    width: '100%',
    backgroundColor:'#f5f7f2',
  },
  icon: {
    width: 50,
    height:50
  },
  btn:{
    padding:25,
    top:170,
    justifyContent:'center'
  },
}) 
export default Authentication;