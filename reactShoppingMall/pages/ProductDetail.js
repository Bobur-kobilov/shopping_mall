import React, {Component} from 'react';
import {View,Text,Image,StyleSheet,Dimensions} from 'react-native';
import Header from '../pages/headers/Header';
const { width } = Dimensions.get('window');
class ProductDetail extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Product Detail',
      header:<View style={styles.header}>
      <Header navigation={navigation} />
      </View>
    };
  };
  constructor(props) {
    super(props);
    this.state = {
      productDescription:'',
      productPrice:'',
      productId:'',
      productReviews:'',
      productImage: ''
    }
  }
  componentDidMount () {
    const payload = this.props.navigation.getParam('payload');
    console.log(payload.productImage);
    this.setState({
      productDescription:payload.productDesc,
      productId: payload.productId,
      productImage: payload.productImage
    })
    console.log(this.state.productImage);
  }
render () {
  const {productImage} = this.state;
  return (
    <View style={styles.container}>
    <Image
          style={styles.imageContainer}
          source={{uri:productImage}}
        />
    </View>
  )
}
}
const styles =StyleSheet.create({
  imageContainer: {
    width:width,
    height:400,
    paddingTop:15,
    top:10,
  },
  container:{
    flex:1,
    // justifyContent:'center',
    // alignItems:'center'
  },
  header:{
    
  }
})
export default ProductDetail