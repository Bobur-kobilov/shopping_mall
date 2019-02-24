import React, { Component } from 'react';
import { StyleSheet, View, Text,ActivityIndicator,TouchableWithoutFeedback } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import axios from '../../src/axios';
import { Card} from 'react-native-elements';
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
        <View style={[styles.container, styles.horizontal]}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )
    } else {
    return (
      <FlatGrid
        itemDimension={170}
        items={productInfo}
        style={styles.gridView}
        renderItem={({ item, index }) => (
          <View style={[styles.itemContainer, {  }]}>
          <TouchableWithoutFeedback onPress={()=>this.handleProduct(item)}>
              <Card
                style={styles.itemName}
                image = {{uri: item.productImage}}>
                <Text>{item.productName}</Text>
                <Text>${item.productPrice}</Text>
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
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 5,
    height: 220,
    width: 200,
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
    alignItems:'center',
    justifyContent: 'center',
    width:200,
    height:200
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  }
});