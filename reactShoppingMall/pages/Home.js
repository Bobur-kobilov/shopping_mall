import React, {Component} from 'react';
import {View, StyleSheet,Image,ScrollView} from 'react-native';
import HomeHeader from '../pages/headers/MainHomeHeader';
import Fab from '../pages/Component/FAB';
import ProductList from '../pages/Component/ProductList';
import {isSignedIn} from '../src/auth';
import Swiper from './Component/Swiper';
import TabView from '../pages/Component/TabView'
export default class Home extends Component {
  constructor (props) {
    super(props);
    this.state = {
      signedIn: false,
      checkedSignIn: false
    }
 }
 componentDidMount() {
  isSignedIn()
    .then(res=>this.setState({signedIn:res,checkedSignIn:true}))
    .catch(err=>this.toast.show(`${err}`,1000));
}
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Home',
      header:<View>
      <HomeHeader navigation={navigation} />
      </View>
    };
  };
  render () {
    return (
      <ScrollView style={styles.container}>
        <TabView navigation={this.props.navigation}/>
        <Fab active={false}/>
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