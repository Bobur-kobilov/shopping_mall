import React , {Component} from 'react';
import {View, Text,StyleSheet} from 'react-native';
import {Button, Card} from 'react-native-elements';
import Header from '../headers/Header';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
class Index extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Index Page',
      header:<View>
      <Header navigation={navigation} backButton={false}/>
      </View>
    };
  };
  constructor(props) {
    super(props)
  }
  handleCard = () =>{
    this.props.navigation.navigate('Card');
  }
  handleWallet = () =>{
    console.log(this.props.navigation)
    this.props.navigation.navigate('Wallet');
  }
  render() {
    return (
      <View style={styles.container}>
        <Card title='Account' containerStyle={{width:320,height:200}}> 
          <Button
          containerStyle={{marginTop:15}}
          raised
          icon={<Icon
          name="credit-card"
          size={20}
          color="white"
          />}
          onPress={this.handleCard}
          ViewComponent={LinearGradient} // Don't forget this!
          linearGradientProps={{
          colors:['#6C4E90','#20011f'],
          start: {x: 0.0, y: 1.0},
          end: {x: 1.0, y: 1.0},
          }}
          buttonStyle={{borderRadius: 20, marginLeft: 0, marginRight: 0, marginBottom: 0}}
          title='Card' />
          <Button
          containerStyle={{marginTop:10}}
          raised
          icon={<Icon
          name="bitcoin"
          size={20}
          color="white"
          />}
          ViewComponent={LinearGradient} // Don't forget this!
          linearGradientProps={{
          colors:['#6C4E90','#20011f'],
          start: {x: 0.0, y: 1.0},
          end: {x: 1.0, y: 1.0},
          }}
          onPress={this.handleWallet}
          buttonStyle={{borderRadius: 20, marginLeft: 0, marginRight: 0, marginBottom: 0}}
          title='Crypto Wallet' />
        </Card>
      </View>
    )
  }
 }
 const styles = StyleSheet.create({
  container:{
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    left: 0,
    position: 'absolute',
    top: 0,
    width: '100%',
    // backgroundColor:'#f5f7f2',
    alignItems:'center'
  },
  linearGradient: {
    flex: 1,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    // paddingLeft: 15,
    // paddingRight: 15,
    // borderRadius: 5
  },
})
 export default Index;