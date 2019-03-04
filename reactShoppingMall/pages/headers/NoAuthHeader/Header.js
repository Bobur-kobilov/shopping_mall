import React , {Component} from 'react';
import {Header} from 'react-native-elements';
import {View} from 'react-native';
import Modal from '../../Component/Modal';
import LinearGradient from 'react-native-linear-gradient';
class NoAuthHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchItem: '',
      isModalVisible: false,
    };
  }
  searchFunc = searchItem =>{
    this.setState({searchItem});
  };
  toggleModal = () =>{
    this.setState({isModalVisible:!this.state.isModalVisible}, () => {
      console.log(this.state.isModalVisible);
    });
  }
  render () {
    const backButton = this.props.backButton;
    if(backButton ===false) {
      return (
        <LinearGradient colors={['#6C4E90','#20011f']}>
        <View>
        <Header 
        backgroundColor={'transparent'}
        statusBarProps={{ barStyle: 'light-content' }}
        centerComponent={{ text: 'ShopUs', style: { color: '#fff' } }}
        rightComponent= {{ text:'Sign In', style: { color: '#fff' },  onPress:()=>this.toggleModal() }}
        containerStyle={{
          // backgroundColor: '#409ed2',
          justifyContent: 'space-around',
        }}
        />
          <Modal navigation={this.props.navigation} toggleModal={this.toggleModal} isModalVisible={this.state.isModalVisible}/>
      </View>
      </LinearGradient>
      )
    } else {
      return (
        <LinearGradient colors={['#6C4E90','#20011f']}>
        <View>
        <Header
        backgroundColor={'transparent'}
        statusBarProps={{ barStyle: 'light-content' }}
        leftComponent={{ icon: 'backspace', color: '#fff',onPress: () => this.props.navigation.goBack()}}
        centerComponent={{ text: 'ShopUs', style: { color: '#fff' } }}
        rightComponent= {{ text:'Sign In', style: { color: '#fff' },  onPress:()=>this.toggleModal() }}
        containerStyle={{
          // backgroundColor: '#409ed2',
          justifyContent: 'space-around',
          height:120
        }}
        />
          <Modal navigation={this.props.navigation} toggleModal={this.toggleModal} isModalVisible={this.state.isModalVisible}/>
      </View>
      </LinearGradient>
      )
    }
  }
}
export default NoAuthHeader;