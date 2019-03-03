import React, {Component} from 'react';
import {View, StyleSheet,Text,Image} from 'react-native';
import {Button,SocialIcon,Card } from 'react-native-elements';
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
        <Card title='Login'  containerStyle={{width:320,height:470}}>
          <Button
          raised
          title="Login via email"
          ViewComponent={LinearGradient} // Don't forget this!
          linearGradientProps={{
          colors:['#6C4E90','#20011f'],
          start: {x: 0.0, y: 1.0},
          end: {x: 1.0, y: 1.0},
          }}
          containerStyle={styles.btn}
          onPress = {this.handleEmail}
          buttonStyle={{borderRadius:20}}
          />
          <Button
          raised
          title="Login via fingerprint"
          ViewComponent={LinearGradient} // Don't forget this!
          linearGradientProps={{
          colors:['#6C4E90','#20011f'],
          start: {x: 0.0, y: 1.0},
          end: {x: 1.0, y: 1.0},
          }}
          buttonStyle={{borderRadius:20}}
          containerStyle={styles.btn}
          onPress = {this.handleFingerprint}
          />
          <Text style={{top:40}}>Login with your accounts below</Text>
          <View style={styles.socialBtn}>
          <SocialIcon
            containerStyle={styles.socialRaised}
            raised
            type='facebook'
            onPress={this.handleFbLogin}
          />
          <SocialIcon
            containerStyle={styles.socialRaised}
            raised 
            type='google-plus-official'
            onPress={this.handleGoogleLogin}
          />
          </View>
        </Card>   
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems:'center',
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
    padding:1,
    marginTop:30
    
  },
  socialBtn:{
    marginTop:55,
    flex: 1,
    justifyContent:'center', 
    flexDirection: 'row',
  },
  socialRaised:{
    padding:1
  }
}) 
export default Authentication;