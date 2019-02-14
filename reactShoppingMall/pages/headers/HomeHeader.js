import React from 'react';
import {Header,SearchBar} from 'react-native-elements';
import {View} from 'react-native';
import {createDrawerNavigator, DrawerActions} from 'react-navigation'
class HomeHeader extends React.Component {
  state = {
    searchItem: '',
  };
  searchFunc = searchItem =>{
    this.setState({searchItem});
  };
  render () {
  const {searchItem} = this.state;
  return (
    <View>
      <Header 
      leftComponent={{ icon: 'menu', color: '#fff',onPress: () => this.props.navigation.toggleDrawer()}}
      centerComponent={{ text: 'ShopUs', style: { color: '#fff' } }}
      />
      <SearchBar containerStyle={{backgroundColor: '#4c88e8'}}  inputContainerStyle={{backgroundColor: '#fff'}} placeholder="Search..." onChangeText={this.searchFunc} value={searchItem}/>
    </View>
  )
}
}
export default HomeHeader;