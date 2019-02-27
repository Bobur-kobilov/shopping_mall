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
      productImage: '',
      productName:''
    }
  }
  componentDidMount () {
    const payload = this.props.navigation.getParam('payload');
    console.log(payload);
    this.setState({
      productDescription:payload.productDesc,
      productId: payload.productId,
      productImage: payload.productImage4x4_01,
      productName:payload.productName,
      productPrice:payload.productPrice
    })
    console.log(this.state.productImage);
  }
render () {
  const {productImage,productName,productDescription,productId,productReviews,productPrice} = this.state;
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
    <View sytle={styles.productText}>
    <Text style={[human.subhead,styles.text]}>{productName} </Text>
    </View>
    <Text style={styles.price}>${productPrice}</Text>
    <Text style={human.subhead}>{productDescription} </Text>
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
    width: 375,
    height: 324,
    backgroundColor: "#eceff1"
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
    marginBottom: 16,
    alignItems:'center'
  },
  button:{
    bottom:0,
    width: 311,
    height: 40,
    borderRadius: 20,
    backgroundColor:'#409ed2'

  },
  productText: {
    width: 375,
    height: 163,
    backgroundColor: "#ffffff"
  },
  text:{
    width: 343,
    height: 56,
    fontSize: 24,
    fontWeight: "bold",
    fontStyle: "normal",
    lineHeight: 28,
    letterSpacing: 0,
    textAlign: "center",
    color: "#263238"
  },
  price:{
    width: 343,
    height: 22,
    fontSize: 20,
    fontWeight: "600",
    fontStyle: "normal",
    lineHeight: 22,
    letterSpacing: 0,
    textAlign: "center",
    color: "#263238"
  }
})
export default ProductDetail