import React from 'react';
import {Header,SearchBar} from 'react-native-elements';
import {View} from 'react-native';
import Modal from '../Component/Modal';
class HeaderCommon extends React.Component {
  state = {
    searchItem: '',
    isModalVisible: false,
  };
  searchFunc = searchItem =>{
    this.setState({searchItem});
  };
  toggleModal = () =>{
    this.setState({isModalVisible:!this.state.isModalVisible}, () => {
      console.log(this.state.isModalVisible);
    });
  }
  render () {
  return (
    <View>
      <Header 
      statusBarProps={{ barStyle: 'light-content' }}
      leftComponent={{ icon: 'backspace', color: '#fff',onPress: () => this.props.navigation.goBack()}}
      centerComponent={{ text: 'ShopUs', style: { color: '#fff' } }}
      rightComponent= {{ text:'Sign In', style: { color: '#fff' },  onPress:()=>this.toggleModal() }}
      containerStyle={{
        backgroundColor: '#3D6DCC',
        justifyContent: 'space-around',
       }}
      />
        <Modal navigation={this.props.navigation} toggleModal={this.toggleModal} isModalVisible={this.state.isModalVisible}/>
    </View>
  )
}
}
export default HeaderCommon;