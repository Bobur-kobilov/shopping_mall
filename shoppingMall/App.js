import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// import {createStackNavigator, createAppContainer} from 'react-native';
// const MainNavigator = createStackNavigator({
//   Home:{screen: HomeScreen},
// });
// const App = createAppContainer(MainNavigator);

// export default App;