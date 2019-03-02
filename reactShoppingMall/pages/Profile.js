import React, {Component} from 'react';
import {View, StyleSheet,Image,Text} from 'react-native';
import Header from '../pages/headers/Header';
import {isSignedIn} from '../src/auth';
import Authentication from './Authentication';
import Toast from 'react-native-easy-toast';
import UserDetail from '../pages/UserDetails';
import { Icon } from 'react-native-elements';
class Profile extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Profile',
      header:<View style={styles.header}>
      <Header navigation={navigation} />
      </View>,
      drawerIcon: () => (
      <Icon
        name='user'
        size={36}
        type='font-awesome'
        color='#517fa4'
      />
      ),
    };
  };
  constructor(props) {
    super(props);
    this.state = {
      signedIn: false,
      checkedSignIn: false,
      isModalVisible: false,
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
    backgroundColor:'#f5f7f2'
  },
  icon: {
    width: 50,
    height:50
  },
})  
export default Profile;