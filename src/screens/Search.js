import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {Footer} from "../components/Footer";

export const Search = ({route, navigation}) => {
  return (
    <>
      <View style={route.params.container}>
        <Text style={route.params.text}>Search</Text>
      </View>
      <Footer navigation={navigation} route={route}/>
    </>
  )
}