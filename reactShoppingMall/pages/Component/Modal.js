import React, { Component } from "react";
import { Text, TouchableOpacity, View,StyleSheet } from "react-native";
import {Button } from 'react-native-elements';
import Modal from "react-native-modal";
export default class ModalDialog extends Component {
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
      {this.renderButton("Close", () => this.props.toggleModal)}
    </View>
  );
  renderButton = (text) => (
    <TouchableOpacity onPress={this.props.toggleModal}>
      <View style={styles.button}>
        <Text>{text}</Text>
      </View>
    </TouchableOpacity>
  );
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Modal  backdropColor={"#5c9bf9"}
          backdropOpacity={0.5}
          animationIn="zoomInDown"
          animationOut="zoomOutUp"
          animationInTiming={1000}
          animationOutTiming={1000}
          backdropTransitionInTiming={1000}
          backdropTransitionOutTiming={1000}
          isVisible={this.props.isModalVisible}>
          {this.renderModalContent()}
          {/* <View style={{ flex: 1 }}>
            <Text>Hello!</Text>
            <TouchableOpacity onPress={this.props.toggleModal}>
              <Text>Hide me!</Text>
            </TouchableOpacity>
          </View> */}
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
    // backgroundColor: "lightblue",
    padding: 6,
    margin: 2,
    justifyContent: "center",
    alignItems: "center",
    // borderRadius: 4,
    // borderColor: "rgba(0, 0, 0, 0.1)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 22,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)",
  },
  bottomModal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  scrollableModal: {
    height: 300,
  },
  scrollableModalContent1: {
    height: 200,
    backgroundColor: "orange",
    alignItems: "center",
    justifyContent: "center",
  },
  scrollableModalContent2: {
    height: 200,
    backgroundColor: "lightgreen",
    alignItems: "center",
    justifyContent: "center",
  },
});
