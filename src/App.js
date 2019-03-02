/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component, useRef } from "react";
import {
  Button,
  Platform,
  StyleSheet,
  Text,
  View,
  DrawerLayoutAndroid
} from "react-native";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

type Props = {};
class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}

const Drawer = () => (
  <View style={styles.container}>
    <Text style={styles.instructions}>Hello from drawer!</Text>
  </View>
);

const DrawerWrappedApp = () => {
  const drawerRef = useRef(null);
  return (
    <DrawerLayoutAndroid
      ref={drawerRef}
      renderNavigationView={() => <Drawer />}
      drawerWidth={300}
    >
      <Button
        title="Toggle Drawer"
        onPress={() => drawerRef.current.openDrawer()}
      />
      <App />
    </DrawerLayoutAndroid>
  );
};

export default DrawerWrappedApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
