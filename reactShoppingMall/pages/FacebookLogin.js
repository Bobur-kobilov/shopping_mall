import React, { Component } from 'react';
import { View,AsyncStorage,Text} from 'react-native';
import FBSDK, { LoginManager ,GraphRequest, GraphRequestManager,AccessToken} from 'react-native-fbsdk';
import Toast from 'react-native-easy-toast';
export default class FaceBookLogin extends Component {
  _isMounted = false;
  constructor(props){
    super(props);
    this.state = {
      isLoading:false,
      haveError:false
    }
  }
  componentDidMount () {
    this._isMounted = true;
    this.fbLogin(this.props,this);
    }
  fbLogin =(props,state) =>{
    console.log(state);
    LoginManager.logInWithReadPermissions(["public_profile","email","user_birthday"]).then(
      function(result) {
        if (result.isCancelled) {
          console.log("Login cancelled");
          state.toast.show(`Login Cancelled`,1000);
          props.navigation.navigate('Profile');
        } else {
          console.log(result);
          AccessToken.getCurrentAccessToken()
          .then((data) => {
            let accessToken = data.accessToken
            const responseInfoCallback = (error, result) => {
              if (error) {
                console.log(error)
                state.toast.show(`${error}`,1000);
                props.navigation.navigate('Profile');
                return false;
              } else {
                console.log(result);
                state.toast.show('Success',1000);
                AsyncStorage.setItem('userToken', 'AuthToken');
                props.navigation.navigate('Auth');
              }
            }
            const infoRequest = new GraphRequest('/me', {
              accessToken: accessToken,
              parameters: {
                fields: {
                  string: 'email,name,first_name,middle_name,last_name'
                }
              }
            }, responseInfoCallback);
  
            // Start the graph request.
            new GraphRequestManager()
              .addRequest(infoRequest)
              .start()
  
          })
      }
    }, function (error) {
      alert('Login fail with error: ' + error);
      props.navigation.navigate('Profile');
      return false;
      });
    }
    componentWillUnmount () {
      this._isMounted = false;
    }
    render() {
      return (
        <View>
        <Text>Facebook Login</Text>
          <Toast 
            ref={toast => {
              this.toast = toast;
            }}
            position={'center'}
            position='top'
            style={ [{backgroundColor:'#27AE60'} ]}
          />
        </View>
      );
    }
}