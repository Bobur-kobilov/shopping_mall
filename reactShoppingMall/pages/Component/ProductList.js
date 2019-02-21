import React, { Component } from 'react';
import { StyleSheet, View, Text,ActivityIndicator } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import axios from '../../src/axios';
import { Card} from 'react-native-elements';
export default class Example extends Component {
    state = {
    productInfo:[],
    isLoading:true
  }
  async componentDidMount() {
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
            <Card
              style={styles.itemName}
              image = {{uri: item.productImage}}>
              <Text>{item.productName}</Text>
              <Text>${item.productPrice}</Text>
            </Card>
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