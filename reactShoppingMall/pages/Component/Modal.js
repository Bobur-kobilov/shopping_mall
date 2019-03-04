import React, { Component } from "react";
import { Text, TouchableWithoutFeedback, View,StyleSheet } from "react-native";
import {Button } from 'react-native-elements';
import Modal from "react-native-modal";
import TouchID from "react-native-touch-id";
import { material,human } from 'react-native-typography'
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
    this.props.toggleModal();
    this.props.navigation.navigate('Login');
  }
  handleFingerprint = () =>{
    this.props.toggleModal();
    this.props.navigation.navigate('FingerPrint');
  }
  cancelModal = () =>{
    this.setState({isModalVisible:!this.state.isModalVisible}, () => {
    });
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
      <View style={styles.container}>
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
          <Text
          style={human.title3}>Sign In</Text>
          <Button
          title="Login via email"
          ViewComponent={LinearGradient} // Don't forget this!
          linearGradientProps={{
          colors:['#409ed2', '#409ed2', '#409ed2', '#409ed2', '#409ed2', '#17C8FF'],
          start: {x: 0.0, y: 1.0},
          end: {x: 1.0, y: 1.0},
          }}
          containerStyle={styles.btn}
          onPress = {this.handleEmail}
          />
          {button}
          <TouchableWithoutFeedback onPress = {this.props.toggleModal}>
            <Text style={[styles.skip,material.subheading]}>Skip</Text>
          </TouchableWithoutFeedback>  
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
  btn: {
    padding: 6,
    margin: 5,
    width:300,
    height:70,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    
    
  },
  modalContent: {
    backgroundColor: "white",
    padding: 22,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)",
  },
  skip:{
    position:'absolute',
    bottom:0,
    alignSelf:'flex-end'
  }
});
