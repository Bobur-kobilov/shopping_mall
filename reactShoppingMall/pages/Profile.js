import React, {Component} from 'react';
import {View, StyleSheet,Image,Text} from 'react-native';
import Header from '../pages/headers/Header';
import {isSignedIn} from '../src/auth';
import Authentication from './Authentication';
import Toast from 'react-native-easy-toast';
import UserDetail from '../pages/UserDetails'
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
  constructor(props) {
    super(props);
    this.state = {
      signedIn: false,
      checkedSignIn: false
    };
  }
  componentDidMount() {
    isSignedIn()
      .then(res=>this.setState({signedIn:res,checkedSignIn:true}))
      .catch(err=>this.toast.show(`${err}`,1000))
  }
  render () {
    const {signedIn } = this.state;
    console.log(signedIn)
    if(!signedIn){
      return <Authentication navigation={this.props.navigation}/>
    } else if(signedIn) {
      return <UserDetail navigation={this.props.navigation}/>
    } else {
      return  <Toast 
      ref={toast => {this.toast = toast;}}
      position={'center'}
      position='top'
      style={{backgroundColor:'red'}}
    />
    }
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