import React, { Component } from 'react';
import { View,AsyncStorage,ActivityIndicator,StyleSheet} from 'react-native';
import FBSDK, { LoginManager ,GraphRequest, GraphRequestManager,AccessToken} from 'react-native-fbsdk';
import Toast from 'react-native-easy-toast';
export default class FaceBookLogin extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading:false,
      haveError:false
    }
  }
  componentDidMount () {
    this.fbLogin(this.props,this);
    }
  fbLogin =(props,state) =>{
    console.log(state);
    LoginManager.logInWithReadPermissions(["public_profile","email","user_birthday"]).then(
      function(result) {
        if (result.isCancelled) {
          console.log("Login cancelled");
          state.setState({haveError:true});
          state.toast.show(`Login Cancelled`,1000);
          props.navigation.navigate('Profile');
        } else {
          console.log(result);
          console.log(this.props);
          AccessToken.getCurrentAccessToken()
          .then((data) => {
            let accessToken = data.accessToken
            const responseInfoCallback = (error, result) => {
              if (error) {
                console.log(error);
                state.setState({haveError:true,isLoading:true});
                state.toast.show(`${error}`,1000);
                props.navigation.navigate('Profile');
                // alert('Error fetching data: ' + error.toString());
                return false;
              } else {
                console.log(result);
                state.setState({haveError:false});
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
      state.setState({haveError:true});
      props.navigation.navigate('Profile');
      return false;
      });
    }
  render() {
    isLoading = this.state;
      return (
        <View>
          <Toast 
            ref={toast => {
              this.toast = toast;
            }}
            position={'center'}
            position='top'
            style={ [{backgroundColor:this.state.haveError ?'red':'#27AE60'} ]}
          />
        </View>
      );
    }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  }
});