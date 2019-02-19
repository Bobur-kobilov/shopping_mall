import React, { Component } from "react";
import { Text, TouchableOpacity, View,StyleSheet } from "react-native";
import {Button } from 'react-native-elements';
import Modal from "react-native-modal";
export default class ModalDialog extends Component {
  handleEmail = () =>{
    this.props.navigation.navigate('Login');
  }
  handleFingerprint = () =>{
    this.props.navigation.navigate('FingerPrint');
  }
  renderModalContent = () => (
    <View style={styles.modalContent}>
      <Text>Sign In</Text>
      <Button
        title="Email"
        style={styles.btn}
        onPress = {this.handleEmail}
      />
      <Button
        title="Fingerprint"
        style={styles.btn}
        onPress = {this.handleFingerprint}
      />
      <TouchableOpacity onPress={this.props.toggleModal}>
        <View style={styles.button}>
          <Text>Close</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
  render() {
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
          {this.renderModalContent()}
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
    backgroundColor: "lightblue",
    padding: 12,
    margin: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)",
  },
  btn: {
    padding: 6,
    margin: 2,
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
