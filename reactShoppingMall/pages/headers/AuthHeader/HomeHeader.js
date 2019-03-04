import React from 'react';
import {Header} from 'react-native-elements';
import Search from '../SearchBar';
import {View} from 'react-native';
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
      console.log(this.state.isModalVisible);
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
        rightComponent= {{ icon:'shopping-cart',  color: '#fff', onPress:()=>this.props.navigation.navigate('Cart') }}
        containerStyle={{
          height:130,
          justifyContent: 'space-around',
        }}
      />
    </View>
    </LinearGradient>
  )
}
}
export default HomeHeader;