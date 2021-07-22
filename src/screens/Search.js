import React from "react";
import {Text, View} from "react-native";


export const Search = ({route}) => {
  return (
      <View style={route.params.container}>
        <Text style={route.params.text}>Search</Text>
      </View>
  )
}