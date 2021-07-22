import React from "react";
import {Text, StyleSheet} from "react-native";

export const Product = () => {
  return (
    <Text style={styles.text}>
      PRODUCT INFO
    </Text>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 50,
  }
})