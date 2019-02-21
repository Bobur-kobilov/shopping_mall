import React, { Component } from "react";
import { Text, TouchableOpacity, View,StyleSheet } from "react-native";
import {Button } from 'react-native-elements';
import Modal from "react-native-modal";
import TouchID from "react-native-touch-id";
import LinearGradient from 'react-native-linear-gradient';
export default class ModalDialog extends Component {
  constructor() {
    super()
    this.state = {
      biometryType: null
    };
  }
  componentDidMount() {
    TouchID.isSupported()
    .then(biometryType => {
      this.setState({ biometryType });
    })
  }
  handleEmail = () =>{
    this.props.navigation.navigate('Login');
  }
  handleFingerprint = () =>{
    this.props.navigation.navigate('FingerPrint');
  }
  render() {
    const FingerPrintBnt = <Button
    title="Login via fingerprint"
    ViewComponent={LinearGradient} // Don't forget this!
      linearGradientProps={{
      colors:['#409ed2', '#409ed2', '#409ed2', '#409ed2', '#409ed2', '#17C8FF'],
      start: {x: 0.0, y: 1.0},
      end: {x: 1.0, y: 1.0},
      }}
      style={styles.btn}
    onPress = {this.handleFingerprint}
  />
  let button=<Text></Text>;
  if(this.state.biometryType !== null) {
    button = FingerPrintBnt;
  }
    return (
      <View style={{ flex: 1 }}>
        <Modal  backdropColor={"#5c9bf9"}
          onBackdropPress={this.props.toggleModal}
          backdropOpacity={0.5}
          animationIn="zoomInDown"
          animationOut="zoomOutUp"
          animationInTiming={1000}
          animationOutTiming={1000}
          backdropTransitionInTiming={1000}
          backdropTransitionOutTiming={1000}
          isVisible={this.props.isModalVisible}>
        <View style={styles.modalContent}>
          <Text>Sign In</Text>
          <Button
          title="Login via email"
          ViewComponent={LinearGradient} // Don't forget this!
          linearGradientProps={{
          colors:['#409ed2', '#409ed2', '#409ed2', '#409ed2', '#409ed2', '#17C8FF'],
          start: {x: 0.0, y: 1.0},
          end: {x: 1.0, y: 1.0},
          }}
          style={styles.btn}
          onPress = {this.handleEmail}
          />
          {button}
          <Button
          title="Close"
          ViewComponent={LinearGradient} // Don't forget this!
          linearGradientProps={{
          colors:['#FF0000', '#FF0000', '#FF0000', '#FF0000', '#FF0000', '#d21010'],
          start: {x: 0.0, y: 1.0},
          end: {x: 1.0, y: 1.0},
          }}
          style={styles.btn}
          onPress = {this.props.toggleModal}
          />
        </View>
        </Modal>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#409ed2",
    padding: 12,
    margin: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    // borderColor: "rgba(0, 0, 0, 0.1)",
  },
  btn: {
    padding: 8,
    margin: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 22,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)",
  },
});
