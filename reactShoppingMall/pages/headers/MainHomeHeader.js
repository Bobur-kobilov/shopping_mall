import React from 'react';
import NoAuthHeader from './HomeHeader';
import AuthHeader from './AuthHeader/HomeHeader';
import {isSignedIn} from '../../src/auth';
class MainHeader extends React.Component {
  componentDidMount() {
    isSignedIn()
      .then(res=>this.setState({signedIn:res,checkedSignIn:true}))
      .catch(err=>this.toast.show(`${err}`,1000))
  }
  constructor(props) {
    super(props);
    this.state = {
      signedIn: false,
      checkedSignIn: false
    };
  }
  render () {
    const {signedIn} = this.state;
    if(!signedIn) {
      return <NoAuthHeader navigation={this.props.navigation}/>
    } else {
      return <AuthHeader navigation={this.props.navigation}/>
    }
}
}
export default MainHeader;