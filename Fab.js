import React, { useState, Component } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Alert
} from "react-native";
import { AntDesign, Entypo } from "@expo/vector-icons";

const FAB = ({ style }) => {
  const [animation] = useState(new Animated.Value(0));
  const [open, setOpen] = useState(false);

  toggleAnimation = () => {
    // console.log(open);
    const toValue = open ? 0 : 1;
    Animated.spring(animation, {
      toValue,
      friction: 5
    }).start();
    setOpen(!open);
  };

  const circle_1 = {
    transform: [
      { scale: animation },
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -65]
        })
      }
    ]
  };
  const circle_2 = {
    transform: [
      { scale: animation },
      {
        //   translateY: animation.interpolate({
        //     inputRange: [0, 1],
        //     outputRange: [0, 0]
        //   }),
        translateX: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -75]
        })
      }
    ]
  };
  const circle_3 = {
    transform: [
      { scale: animation },
      {
        //   translateY: animation.interpolate({
        //     inputRange: [0, 1],
        //     outputRange: [0, 0]
        //   }),
        translateX: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 75]
        })
      }
    ]
  };
  const rotation = {
    transform: [
      {
        rotate: animation.interpolate({
          inputRange: [0, 1],
          outputRange: ["0deg", "45deg"]
        })
      }
    ]
  };

  return (
    <View style={[styles.fab, style]}>
      <TouchableOpacity activeOpacity={0.9}>
        <Animated.View style={[styles.button, styles.secondary, circle_3]}>
          <Entypo name="location-pin" size={25} color="#F02A4B" />
        </Animated.View>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.9}>
        <Animated.View style={[styles.button, styles.secondary, circle_2]}>
          <Entypo name="thumbs-up" size={25} color="#F02A4B" />
        </Animated.View>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.9}>
        <Animated.View style={[styles.button, styles.secondary, circle_1]}>
          <AntDesign name="hearto" size={25} color="#F02A4B" />
        </Animated.View>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, styles.menu]}
        onPress={toggleAnimation}
        activeOpacity={0.9}
      >
        <Animated.View style={[rotation]}>
          <AntDesign name="plus" size={25} color="#fff" />
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
};

export default FAB;

const styles = StyleSheet.create({
  fab: {
    alignItems: "center",
    position: "absolute"
  },
  button: {
    position: "absolute",
    height: 70,
    width: 70,
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#F02A4B",
    shadowOpacity: 0.3,
    shadowOffset: {
      height: 10
    }
  },
  menu: {
    backgroundColor: "#F02A4B",
    alignSelf: "center"
  },
  secondary: {
    alignSelf: "center",
    width: 58,
    height: 58,
    borderRadius: 58 / 2,
    backgroundColor: "#fff"
  }
});
