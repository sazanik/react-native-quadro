import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {Header} from "../components/Header";
import {THEME} from "../theme";
import {Ad} from "../components/ui/Ad";
import {Filter} from "../components/Filter";

export const Main = () => {
  return (
    <View style={styles.container}>
      <Header/>
      <Ad/>
      <Filter/>
    </View>
  )
}

const styles = StyleSheet.create({


    container: {
      alignItems: 'center',
      justifyContent: 'center',
    },

})