import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {Header} from "../components/Header";
import {THEME} from "../theme";

export const Main = () => {
  return (
    <>
      <Header/>
      <View style={styles.container}>
        <Text style={styles.text}>Main</Text>
      </View>
    </>
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: THEME.BG_COLOR,
    justifyContent: 'center',
    alignItems: 'center'
  },

  text: {

  }
})