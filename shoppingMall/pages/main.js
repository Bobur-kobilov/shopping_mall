import React from 'react'
import {
  StyleSheet, View, Text
} from 'react-native';

export default class Main extends React.Component {
  render() {
    return (

      <View style={styles.container}>
        <Text> This is Main </Text> 
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red'
  }
})