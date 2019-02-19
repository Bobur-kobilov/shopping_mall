import React from 'react';
import {Header,SearchBar} from 'react-native-elements';
import {View} from 'react-native';
class HeaderCommon extends React.Component {
  render () {
  return (
    <View>
      <Header 
      leftComponent={{ icon: 'backspace', color: '#fff',onPress: () => this.props.navigation.goBack()}}
      centerComponent={{ text: 'ShopUs', style: { color: '#fff' } }}
      rightComponent= {{ icon:'shopping-cart', color: '#fff', onPress:()=>this.props.navigation.navigate('Cart') }}
      containerStyle={{
        backgroundColor: '#3D6DCC',
        justifyContent: 'space-around',
       }}
      />
    </View>
  )
}
}
export default HeaderCommon;