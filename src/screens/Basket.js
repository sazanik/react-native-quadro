import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {Footer} from "../components/Footer";

export const Basket = ({route, navigation}) => {
  return (
    <>
      <View style={route.params.container}>
        <Text style={route.params.text}>Basket</Text>
      </View>
      <Footer navigation={navigation} route={route}/>
    </>
  )
}