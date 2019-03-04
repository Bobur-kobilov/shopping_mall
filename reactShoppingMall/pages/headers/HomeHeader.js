import React from 'react';
import {Header} from 'react-native-elements';
import Modal from '../../pages/Component/Modal';
import {View} from 'react-native';
import Search from './SearchBar';
import LinearGradient from 'react-native-linear-gradient';
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
    });
  }
  render () {
  const {searchItem} = this.state;
  return (
    <LinearGradient colors={['#6C4E90','#20011f']}>
    <View>
      <Header
      backgroundColor={'transparent'}
        statusBarProps={{ barStyle: 'light-content' }}
        leftComponent={{ icon: 'menu', color: '#fff',onPress: () => this.props.navigation.toggleDrawer()}}
        centerComponent={ <Search/>}
        rightComponent= {{ text:'Sign In', style: { color: '#fff' }, onPress:()=>this.toggleModal() }}
        containerStyle={{
          // backgroundColor: '#409ed2',
          height:130,
          justifyContent: 'space-around',
        }}
      />
      <Modal navigation={this.props.navigation} toggleModal={this.toggleModal} isModalVisible={this.state.isModalVisible}/>
    </View>
    </LinearGradient>
  )
}
}
export default HomeHeader;