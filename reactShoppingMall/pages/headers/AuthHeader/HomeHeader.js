import React from 'react';
import {Header} from 'react-native-elements';
import Search from '../SearchBar';
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
        centerComponent={ <Search/>}
        rightComponent= {{ icon:'shopping-cart',  color: '#fff', onPress:()=>this.props.navigation.navigate('Cart') }}
        containerStyle={{
          backgroundColor: '#409ed2',
          justifyContent: 'space-around',
        }}
      />
    </View>
  )
}
}
export default HomeHeader;