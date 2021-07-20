import React from "react";
import {StyleSheet, Text} from "react-native";

export const Main = () => <Text style={styles.text}>Main screen</Text>

const styles = StyleSheet.create({
  text: {
    textTransform: 'uppercase'
  }
})