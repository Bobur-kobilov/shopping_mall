import React, {Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import {Button,Card,Icon} from 'react-native-elements';
import axios from '../../src/axios';
import {isSignedIn} from '../../src/auth';
import Header from '../headers/Header';
import Modal from '../Component/Modal';
import QRCode from 'react-native-qrcode';
import Loading from '../Component/Loading';
import LinearGradient from 'react-native-linear-gradient';
class Wallet extends Component{
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Wallet',
      header:<View>
      <Header navigation={navigation} />
      </View>
    };
  };
  componentDidMount() {
    this.getWalletInfo();
    this.isSigned()
    this.props.navigation.addListener('willFocus', this.isSigned);
  }
  constructor(props) {
    super(props);
    this.state = {
      walletAddr:'',
      signedIn:false,
      isModalVisible: false,
      haveWallet: false,
      walletBalance:'',
      isLoading:true
    }
  }
  isSigned = () => {
    isSignedIn()
    .then(res=>this.setState({signedIn:res})) //true should be changed to res later
    .catch(err=>console.log(err));
    if (!this.state.signedIn) {
      this.setState({isModalVisible:true});
      this.toggleModal();
    }
  }
  toggleModal = () =>{
    this.setState({isModalVisible:!this.state.isModalVisible}, () => {
    });
  }
  getWalletInfo = () =>{
    const url = `/wallet/getWalletInfo?userId=1&coinCode=BTC`;
    axios.get(url)
      .then((res)=>{
        console.log(res.data);
        let data = res.data[0];
        if (res.data.length>0) {
          this.setState({walletAddr:data.coinAddress,walletBalance:data.coinBalance, haveWallet:true,isLoading:false});
          console.log(this.state.haveWallet);
        } else {
          this.setState({isLoading:false})
        }
      })
      .catch((error)=>{
        console.log(error);
      })
  }
  createAddr = () =>{
    const url = '/wallet/createAddr';
    const payload = {
      userId: 1,
      coinCode:'BTC',
      coinBalance:'0.0',
      coinAddr:'e3w32432reww43'
    } 
    this.setState({isLoading:true})
    axios.post(url, payload)
    .then((res)=>{
      // console.log(res.data.result.walletAddress);
      let walletAddr = res.data.result.walletAddress;
      this.setState({walletAddr:walletAddr,haveWallet:true,isLoading:false });
      console.log(this.state.walletAddr);
    })
    .catch((error)=>{
      console.log(error);
    })
  }
  render() {
    const {walletAddr,signedIn,haveWallet,walletBalance,isLoading} = this.state;
    if (signedIn) {
      if (!haveWallet && !isLoading) {
      return (
        <View style={styles.container}>
          <Button style={styles.button} title='Create Wallet' onPress={this.createAddr}></Button>
            <Text>{this.state.walletAddr.toString()}</Text>
        </View>
      )
      } else if (isLoading) {
        return (
          <Loading/>
        )
      } 
      else {
        return (
          <View style={styles.container}>
            <Card title={<Icon name='bitcoin' type='font-awesome' size={36} color='#6C4E90' />} containerStyle={{width:320,height:470}}> 
              <Text style={styles.text}>Address:</Text>
              <View style={{alignItems:'center'}}>
                <QRCode
                  value={walletAddr}
                  size={200}
                  bgColor='#FF9900'
                  fgColor='white'
                />
              </View>
              <Text style={{marginBottom: 10}}>{walletAddr}</Text>
              <Text style={styles.text}>Balance</Text>
              <Text>{walletBalance || '0.0'}</Text>
              <Button
              containerStyle={{marginTop:15}}
              raised
              ViewComponent={LinearGradient} // Don't forget this!
              linearGradientProps={{
                colors:['#6C4E90','#20011f'],
              start: {x: 0.0, y: 1.0},
              end: {x: 1.0, y: 1.0},
              }}
              icon={{name: 'send', color:'white'}}
              buttonStyle={{borderRadius: 20, marginLeft: 0, marginRight: 0, marginBottom: 0}}
              title='Transfer' />
              <Button
              containerStyle={{marginTop:10}}
              raised
              ViewComponent={LinearGradient} // Don't forget this!
              linearGradientProps={{
              colors:['#6C4E90','#20011f'],
              start: {x: 0.0, y: 1.0},
              end: {x: 1.0, y: 1.0},
              }}
              icon={{name: 'undo', color:'white'}}
              buttonStyle={{borderRadius: 20, marginLeft: 0, marginRight: 0, marginBottom: 0}}
              title='Deposit' />
            </Card>
          </View>
        )
      }
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
  },
  text:{
    fontSize:20
  }
})
export default Wallet;