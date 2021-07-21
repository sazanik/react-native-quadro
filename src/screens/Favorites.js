import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {Footer} from "../components/Footer";

export const Favorites = ({route, navigation}) => {
  return (
    <>
      <View style={route.params.container}>
        <Text style={route.params.text}>Favorites</Text>
      </View>
      <Footer navigation={navigation} route={route}/>
    </>
  )
}