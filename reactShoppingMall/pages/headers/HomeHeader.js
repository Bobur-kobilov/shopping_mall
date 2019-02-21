import React from 'react';
import {Header} from 'react-native-elements';
import Modal from '../../pages/Component/Modal';
import {View} from 'react-native';
import Search from './SearchBar';
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
        centerComponent={ <Search/>}
        rightComponent= {{ text:'Sign In', style: { color: '#fff' }, onPress:()=>this.toggleModal() }}
        containerStyle={{
          backgroundColor: '#409ed2',
          justifyContent: 'space-around',
        }}
      />
      {/* <SearchBar containerStyle={{backgroundColor: '#409ed2'}}  inputContainerStyle={{backgroundColor: '#fff'}} placeholder="Search..." onChangeText={this.searchFunc} value={searchItem}/> */}
      <Modal navigation={this.props.navigation} toggleModal={this.toggleModal} isModalVisible={this.state.isModalVisible}/>
    </View>
  )
}
}
export default HomeHeader;