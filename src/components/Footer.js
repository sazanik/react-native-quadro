import React from "react"
import {StyleSheet, Text, View} from "react-native";
import {THEME} from "../theme";

export const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.text}>Quadrojoy</Text>
      <Text style={styles.text}>=</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    height: 52,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: THEME.BG_COLOR,
    marginTop: 52,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  text: {
    color: 'black',
    fontSize: 24,
  },
})