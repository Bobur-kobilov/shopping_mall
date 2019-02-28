import React, {Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import axios from '../src/axios';
import {isSignedIn} from '../src/auth';
import Header from '../pages/headers/Header';
import Modal from '../pages/Component/Modal';
class Wallet extends Component{
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Wallet',
      header:<View>
      <Header navigation={navigation} backButton={false}/>
      </View>
    };
  };
  componentDidMount() {
    this.isSigned()
    this.props.navigation.addListener('willFocus', this.isSigned);
  }
  constructor(props) {
    super(props);
    this.state = {
      walletAddr:'',
      signedIn:false,
      isModalVisible: false,
    }
  }
  isSigned = () => {
    isSignedIn()
    .then(res=>this.setState({signedIn:true})) //true should be changed to res later
    .catch(err=>console.log(err));
    if (!this.state.signedIn) {
      this.setState({isModalVisible:true});
      this.toggleModal();
    }
  }
  toggleModal = () =>{
    this.setState({isModalVisible:!this.state.isModalVisible}, () => {
      console.log(this.state.isModalVisible);
      if(!this.state.isModalVisible) {
        console.log("SKIP")
        console.log(this.props.navigation)
        this.props.navigation.navigate('Home');
      }
    });
  }
  createAddr = () =>{
    let url = '/wallet/createAddr';
    axios.post(url)
    .then((res)=>{
      // console.log(res.data.result.walletAddress);
      let walletAddr = res.data.result.walletAddress;
      this.setState({walletAddr:walletAddr});
      console.log(this.state.walletAddr);
    })
    .catch((error)=>{
      console.log(error);
    })
  }
  render() {
    const {walletAddr,signedIn} = this.state;
    if (signedIn) {
      return (
        <View style={styles.container}>
          <Button style={styles.button} title='Create Wallet' onPress={this.createAddr}></Button>
            <Text>{this.state.walletAddr.toString()}</Text>
        </View>
      )
    } else {
      return (
        <View>
          <Modal navigation={this.props.navigation} toggleModal={this.toggleModal} isModalVisible={this.state.isModalVisible}/>
        </View>
      )
    }
  
  }
};
const styles = StyleSheet.create({
  container:{
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    left: 0,
    position: 'absolute',
    top: 0,
    width: '100%',
    backgroundColor:'#f5f7f2',
    alignItems:'center'
  },
  button:{
   width:'70%'
  }
})
export default Wallet;