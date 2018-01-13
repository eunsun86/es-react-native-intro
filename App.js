import React from 'react';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';

// 1. Install

// 2. Run in development mode - expo.io

// 3. Update basic text and style

// 4. Slider and number value change

// 5. ActivityIndicator on slide move

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello, Vanilla!</Text>
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
  }
});

AppRegistry.registerComponent('great', () => App);
