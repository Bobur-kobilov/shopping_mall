import React, {Component} from 'react';
import {StyleSheet,ScrollView} from 'react-native';
import TabView from '../pages/Component/TabView'
export default class Home extends Component {
  constructor (props) {
    super(props);
    this.state = {
      signedIn: false,
      checkedSignIn: false
    }
 }
  render () {
    return (
      <ScrollView style={styles.container}>
        <TabView navigation={this.props.navigation}/>
      </ScrollView>
    
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#f5f7f2'
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  icon: {
    width: 50,
    height:50
  }
})