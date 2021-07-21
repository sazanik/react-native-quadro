import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {Footer} from "../components/Footer";

export const Favorites = (props) => (
  <>
    <View style={styles.container}>
      <Text style={styles.text}>Favorites</Text>
    </View>
    <Footer navigation={props.navigation} route={props.route}/>

  </>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  text: {
    textTransform: 'uppercase'
  }
})