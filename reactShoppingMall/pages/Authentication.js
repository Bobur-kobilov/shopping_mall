import React, {Component} from 'react';
import {View, StyleSheet,Text,Image} from 'react-native';
import {Button } from 'react-native-elements';
import Header from '../pages/headers/Header';
class Authentication extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Contact',
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
  handleEmail = () =>{
    this.props.navigation.navigate('Login');
  }
  handleFingerprint = () =>{
    this.props.navigation.navigate('FingerPrint');
  }
  render () {
    return (
      <View style={styles.container}>
        <Button
          title="Email"
          raised={false}
          style={styles.btn}
          onPress = {this.handleEmail}
        />
        <Button
          title="Fingerprint"
          raised={false}
          style={styles.btn}
          onPress = {this.handleFingerprint}
        />
      </View>
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
    backgroundColor:'#f5f7f2',
  },
  icon: {
    width: 50,
    height:50
  },
  btn:{
    padding:25,
  },
}) 
export default Authentication;