import React, { Component } from 'react';
import { StyleSheet, View, Text,TouchableWithoutFeedback } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import axios from '../../src/axios';
import { Card} from 'react-native-elements';
import { human } from 'react-native-typography';
import Loading from './Loading';
export default class ProductList extends React.Component {
    constructor(props){
      super(props);
      this.state = {
      productInfo:[],
      isLoading:true,
      itemInfo: []
      }
      this.handleProduct = this.handleProduct.bind(this);
    }
  async componentDidMount() {
    console.log(this.props.navigation);
   const url = `/products/getInfo`;
   try {
     const result = await axios.get(url);
     this.setState({productInfo:result.data,isLoading:false});
     console.log(this.state.productInfo)
   } catch(error){
     alert(`${error }`)
    //  console.log(error);
   }
  }
  handleProduct(payload){
    this.props.navigation.navigate('ProductDetail',{payload});
  }
  render() {
    const {isLoading,productInfo} = this.state;
    if (isLoading) {
      return (
        <Loading/>
      )
    } else {
    return (
      <FlatGrid
        // itemDimension={170}
        spacing={5}
        items={productInfo}
        style={styles.gridView}
        renderItem={({ item, index }) => (
          <View style={[styles.itemContainer, {  }]}>
          <TouchableWithoutFeedback onPress={()=>this.handleProduct(item)}>
              <Card
              containerStyle={{margin:1,height:240,shadowOpacity:0,shadowRadius:0}}
                style={[styles.itemName]}
                image = {{uri: item.productImage}}>
                <Text style={[human.subhead]}>{item.productName}</Text>
                <Text style={[human.headline,styles.text]}>${item.productPrice}</Text>
              </Card>
            </TouchableWithoutFeedback>
          </View>
        )}
      />
      );
    }
  }
}

const styles = StyleSheet.create({
  gridView: {
    marginTop: 20,
    flex: 1,
    padding:0,
  },
  itemContainer: {
    justifyContent: 'flex-end',

  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
    alignItems:'center',
    justifyContent: 'center',
    width:230,
    height:200,
    margin:10
  
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
  text:{
    padding:10,
    paddingLeft:0
  }
});