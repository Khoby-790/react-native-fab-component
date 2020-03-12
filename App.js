import React, { useState } from "react";
import { StyleSheet, Text, View, Animated } from "react-native";
// import Icon from "@expo";
import { AntDesign, Entypo } from "@expo/vector-icons";
import Fab from "./Fab";
// imprt FAB

export default function App() {
  const [] = useState(new Animated.Value(0));
  return (
    <View style={styles.container}>
      <Fab style={{ bottom: 150 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "silver"
  }
});
