import React from 'react';
import {Header,SearchBar} from 'react-native-elements';
import Modal from '../Component/Modal';
import {View} from 'react-native';
class HomeHeader extends React.Component {
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
  const {searchItem} = this.state;
  return (
    <View>
      <Header
      statusBarProps={{ barStyle: 'light-content' }}
      leftComponent={{ icon: 'menu', color: '#fff',onPress: () => this.props.navigation.toggleDrawer()}}
      centerComponent={{ text: 'ShopUs', style: { color: '#fff' } }}
      rightComponent= {{ text:'Sign In', style: { color: '#fff' }, onPress:()=>this.toggleModal() }}
      containerStyle={{
        backgroundColor: '#3D6DCC',
        justifyContent: 'space-around',
       }}
      />
      <SearchBar containerStyle={{backgroundColor: '#4c88e8'}}  inputContainerStyle={{backgroundColor: '#fff'}} placeholder="Search..." onChangeText={this.searchFunc} value={searchItem}/>
      <Modal toggleModal={this.toggleModal} isModalVisible={this.state.isModalVisible}/>
    </View>
  )
}
}
export default HomeHeader;