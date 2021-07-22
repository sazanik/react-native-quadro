import React from "react";
import {Text, View} from "react-native";


export const Basket = ({route}) => {
  return (
      <View style={route.params.container}>
        <Text style={route.params.text}>Basket</Text>
      </View>
  )
}