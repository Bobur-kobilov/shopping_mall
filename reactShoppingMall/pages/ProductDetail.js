import React, {Component} from 'react';
import {View,Text,Image,StyleSheet,Dimensions} from 'react-native';
import Header from '../pages/headers/Header';
const { width } = Dimensions.get('window');
import { Button,Card} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { human } from 'react-native-typography'
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
    console.log(payload);
    this.setState({
      productDescription:payload.productDesc,
      productId: payload.productId,
      productImage: payload.productImage4x4_01
    })
    console.log(this.state.productImage);
  }
render () {
  const {productImage,productDescription,productId,productReviews,productPrice} = this.state;
  return (
    <View style={styles.container}>
    <Image
      style={styles.imageContainer}
      source={{uri:productImage || ' '}}
    />
    <View
      style={{
      borderBottomColor: 'black',
      borderBottomWidth: 1,
    }}
    />
    <Text style={human.subhead}>{productDescription}</Text>
    <Button
    containerStyle={styles.bottom}
     buttonStyle={styles.button}
      icon={
      <Icon
        name="arrow-right"
        size={15}
        color="white"
      />
      }
      iconRight
      title="Buy"
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
    
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 16
  },
  button:{
    position:'absolute',
    bottom:0,
    width:width
  },
})
export default ProductDetail