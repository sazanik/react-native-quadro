import React from "react";
import {Text, View} from "react-native";

export const Favorites = ({route}) => {
  return (
      <View style={route.params.container}>
        <Text style={route.params.text}>Favorites</Text>
      </View>
  )
}