import React, {Component} from 'react';
import {View, StyleSheet,Text,Image} from 'react-native';
import Header from '../pages/headers/Header';
import { Input,Button } from 'react-native-elements';
import axios from 'axios';
class Profile extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Profile',
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
  state = {
    data:[]
  }
  componentDidMount() {
    let url = `https://jsonplaceholder.typicode.com/users`;
    axios.get(url)
      .then((res)=>{
        const data = res.data;
        this.setState({data});
        console.log(this.state.data);
      })
  }
  render () {
    return (
      <View style={styles.container}>
      <Input
        placeholder='User'
        leftIcon={{ type: 'font-awesome', name: 'user' }}
      />
      <Input
        placeholder='Email Address'
        leftIcon={{ type: 'font-awesome', name: 'envelope' }}
      />
      <Input
        placeholder='Password'
        leftIcon={{ type: 'font-awesome', name: 'unlock-alt' }}
      />
      <Input
        placeholder='Confirm Password'
        leftIcon={{ type: 'font-awesome', name: 'unlock-alt' }}
      />
      <Button
      title="Solid Button"
      raised={false}
      style={styles.btn}
      />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#3c6dbc'
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  icon: {
    width: 50,
    height:50
  },
  btn:{
    padding:25,
  }
})  
export default Profile;