import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Header from '../headers/Header';
import { CreditCardInput, LiteCreditCardInput } from "react-native-credit-card-input";
class Card extends Component {
static navigationOptions = ({ navigation }) => {
  return {
    title: 'Wallet',
    header:<View>
    <Header navigation={navigation} />
    </View>
  };
};
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  _onChange = (formData) => console.log(JSON.stringify(formData, null, " "));
  _onFocus = (field) => console.log("focusing", field);
  render () {
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
      </View>
    )
  }
}
const s = StyleSheet.create({
  switch: {
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  container: {
    backgroundColor: "#F5F5F5",
    marginTop: 60,
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