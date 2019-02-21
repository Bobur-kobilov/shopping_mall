import React,{Component} from 'react';
import {View,Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input,SearchBar } from 'react-native-elements';

class Search extends Component {
  state ={
    search:''
  }
  updateSearch = () =>{

  }
  render () {
  return (
    <View>
      <SearchBar
      placeholder="Type Here..."
      containerStyle={{backgroundColor: 'transparent',borderBottomWidth:0,borderTopWidth:0,width:230}} round={true} inputContainerStyle={{backgroundColor: '#fff'}} placeholder="Search..."
      // onChangeText={this.updateSearch}
      value={this.state.search}
      lightTheme={true}
      />
    </View>
  )
}
}
export default Search;