import React from 'react';
import {View} from 'react-native';
import AuthHeader from './AuthHeader/Header';
import {isSignedIn} from '../../src/auth';
import NoAuthHeader from './NoAuthHeader/Header';
class HeaderCommon extends React.Component {
  componentDidMount () {
    this.isSignedIn();
  }
  constructor(props) {
    super(props);
    this.state = {
      signedIn:false,
    };
  }
  isSignedIn = () =>{
    isSignedIn()
      .then(res=>this.setState({signedIn:res}))
      .catch(err=>console.log(err));
  }
  render () {
    const {signedIn} = this.state;
    if (signedIn) {
      return (
        <View>
          <AuthHeader navigation={this.props.navigation}/>
        </View>
      )
    } else {
      return (
        <NoAuthHeader navigation={this.props.navigation} backButton={this.props.backButton}/>
      )
}
}
}
export default HeaderCommon;