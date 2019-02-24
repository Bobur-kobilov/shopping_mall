import React, {Component} from 'react';
import {View,Text,Image,StyleSheet} from 'react-native';
import Header from '../pages/headers/Header';
class ProductDetail extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Product Detail',
      header:<View style={styles.header}>
      <Header navigation={navigation} />
      </View>,
      drawerIcon: () => (
        <Image
          source={require('../assets/images/icons/user.png')}
          style={[styles.icon]}
        />
      ),
    };
  };
  constructor(props) {
    super(props);
    this.state = {
      productDescription:'',
      productPrice:'',
      productId:'',
      productReviews:''
    }
  }
  componentDidMount () {
    console.log(this.props.navigation);
  }
render () {
  
  return (
    <View>
      <Text>Product Detail Page</Text>
    </View>
  )
}
}
const styles = StyleSheet.create({
  header:{
    
  }
})
export default ProductDetail