import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Header from '../headers/Header';
import {isSignedIn} from '../../src/auth';
import Modal from '../Component/Modal';
import {Button, Icon} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import { CreditCardInput } from "react-native-credit-card-input";
class Card extends Component {
static navigationOptions = ({ navigation }) => {
  return {
    title: 'Wallet',
    header:<View>
    <Header navigation={navigation} />
    </View>
  };
};
  componentDidMount() {
    this.isSigned()
    this.props.navigation.addListener('willFocus', this.isSigned);
  }
  constructor(props) {
    super(props);
    this.state = {
      signedIn:false,
      isModalVisible: false,
    }
  }
  isSigned = () => {
    isSignedIn()
    .then(res=>this.setState({signedIn:res})) //true should be changed to res later
    .catch(err=>console.log(err));
    if (!this.state.signedIn) {
      this.setState({isModalVisible:true});
      this.toggleModal();
    }
  }
  toggleModal = () =>{
    this.setState({isModalVisible:!this.state.isModalVisible}, () => {
    });
  }
  _onChange = (formData) => console.log(JSON.stringify(formData, null, " "));
  _onFocus = (field) => console.log("focusing", field);
  render () {
    const {signedIn} = this.state;
    if (signedIn) {
    return (
        <View style={s.container}>
          <CreditCardInput
            autoFocus
            requiresName
            requiresCVC
            labelStyle={s.label}
            inputStyle={s.input}
            validColor={"black"}
            invalidColor={"red"}
            placeholderColor={"darkgray"}
            onFocus={this._onFocus}
            onChange={this._onChange} />
            <View style={{alignItems:'center'}}>
              <Button
                containerStyle={{marginTop:25, width:'70%'}}
                raised
                ViewComponent={LinearGradient} // Don't forget this!
                linearGradientProps={{
                colors:['#6C4E90','#20011f'],
                start: {x: 0.0, y: 1.0},
                end: {x: 1.0, y: 1.0},
                }}
                icon={<Icon
                  name='credit-card'
                  type='font-awesome'
                  color='white'/>
                }
                buttonStyle={{borderRadius: 20, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                title='Save' 
              />
            </View>
        </View>
      )
    } else {
      return (
        <View>
          <Modal navigation={this.props.navigation} toggleModal={this.toggleModal} isModalVisible={this.state.isModalVisible}/>
        </View>
      )
    }
  }
}
const s = StyleSheet.create({
  switch: {
    alignSelf: "center",
    marginTop: 10,
    marginBottom: 20,
  },
  container: {
    marginTop: 20,
  },
  label: {
    color: "black",
    fontSize: 12,
  },
  input: {
    fontSize: 16,
    color: "black",
  },
});
export default Card;