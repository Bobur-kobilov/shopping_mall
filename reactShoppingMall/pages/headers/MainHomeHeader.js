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
    // return (
    //   <View>
    //     <Header 
    //     statusBarProps={{ barStyle: 'light-content' }}
    //     leftComponent={{ icon: 'backspace', color: '#fff',onPress: () => this.props.navigation.goBack()}}
    //     centerComponent={{ text: 'ShopUs', style: { color: '#fff' } }}
    //     rightComponent= {{ text:'Sign In', style: { color: '#fff' },  onPress:()=>this.toggleModal() }}
    //     containerStyle={{
    //       backgroundColor: '#3D6DCC',
    //       justifyContent: 'space-around',
    //     }}
    //     />
    //       <Modal navigation={this.props.navigation} toggleModal={this.toggleModal} isModalVisible={this.state.isModalVisible}/>
    //   </View>
    // )
}
}
export default MainHeader;