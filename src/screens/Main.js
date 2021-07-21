import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {Footer} from "../components/Footer";
import {Header} from "../components/Header";
import {THEME} from "../theme";

export const Main = ({route, navigation}) => {
  return (
    <>
      <Header/>
      <View style={styles.container}>
        <Text style={styles.text}>Main</Text>
      </View>
      <Footer navigation={navigation} route={route}/>
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