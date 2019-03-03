import React, {Component} from 'react';
import {View, StyleSheet,Text,Image,AsyncStorage} from 'react-native';
import Header from '../pages/headers/Header';
import {Card,Icon} from 'react-native-elements';

class UserDetail extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Profile',
      header:<View style={styles.header}>
      <Header navigation={navigation} />
      </View>
    };
  };
  signout = () =>{
    AsyncStorage.clear();
    this.props.navigation.navigate('NoAuth');
  }
  render () {
    return (
      <View style={styles.container}>
        <Icon
        containerStyle={styles.avatar}
        size={76}
        name='user'
        type='font-awesome'
        color='#6C4E90'
        onPress={this.signout}
      />
      <Card title='Personal Info' containerStyle={styles.card}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Username:</Text>
          <Text style={styles.textChild}>Bobur</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Email:</Text>
          <Text style={styles.textChild}>bob@gmail.com</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Password:</Text>
          <Text style={styles.textChild}>******</Text>
          <Icon
          containerStyle={styles.pswdIcon}
          raised
          size={18}
          name='edit'
          type='font-awesome'
          color='#6C4E90'
        />
        </View>
      </Card>
      <View style={styles.icon}>
        <Icon
          raised
          size={36}
          name='shopping-cart'
          type='font-awesome'
          color='#6C4E90'
        />
        <Icon
          raised
          size={36}
          name='credit-card'
          type='font-awesome'
          color='#6C4E90'
        />
          <Icon
          raised
          size={36}
          name='sign-out'
          type='font-awesome'
          color='#6C4E90'
          onPress={this.signout}
        />
      </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  icon: {
    flexDirection:'row',
    justifyContent:'flex-start',
    position:'absolute',
    bottom:150
  },
  container: {
    flex: 1,
    alignItems:'center',
    height: '100%',
    justifyContent: 'center',
    left: 0,
    position: 'absolute',
    top: 0,
    width: '100%',
    backgroundColor:'#FDFDFD'
  },
  avatar:{
   position:'absolute',
   top:40,

  },
  card:{
    marginTop:70,
    width:340,
    height:360
  },
  textContainer:{
    flexDirection:'row',
    justifyContent:'flex-start',
    marginTop:13,
    
  },
  text:{
    fontSize:20,
  },
  textChild:{
    fontSize:20,
    position:'absolute',
    left:120
  },
  pswdIcon:{
    position:'absolute',
    right:30,
    top:-12
    // bottom:0
  }
})
export default UserDetail;