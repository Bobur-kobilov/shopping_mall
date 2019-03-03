import React from 'react';
import {Header,SearchBar} from 'react-native-elements';
import {View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
class HeaderCommon extends React.Component {
  render () {
  return (
    <LinearGradient colors={['#6C4E90','#20011f']}>
    <View>
      <Header
      backgroundColor={'transparent'}
      leftComponent={{ icon: 'backspace', color: '#fff',onPress: () => this.props.navigation.goBack()}}
      centerComponent={{ text: 'ShopUs', style: { color: '#fff' } }}
      rightComponent= {{ icon:'shopping-cart', color: '#fff', onPress:()=>this.props.navigation.navigate('Cart') }}
      containerStyle={{
        // backgroundColor: '#409ed2',
        // backgroundColor: 'transparent',
        justifyContent: 'space-around',
       }}
      />
    </View>
    </LinearGradient>
  )
}
}
export default HeaderCommon;