import React from "react";
import {Text, StyleSheet, View, Button} from "react-native";
import {Ionicons} from '@expo/vector-icons'

export const Product = ({item, goBack}) => {
  console.log(item)
  return (


    <View style={styles.container}>
      <View style={styles.icon}>
        <Ionicons.Button name="chevron-back" backgroundColor='white' size={30} color="black" onPress={goBack}/>
      </View>
      <Text>INFO</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  icon: {
    marginTop: 30,
    marginLeft: 20,
    alignSelf: 'flex-start'
  }
})