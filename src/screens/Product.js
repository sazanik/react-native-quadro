import React from "react";
import {Text, StyleSheet, View, Button, Image, TextInput, Alert} from "react-native";
import {Ionicons} from '@expo/vector-icons'
import {THEME} from "../theme";

export const Product = ({item, goBack}) => {

  const handlePress = () => {
    Alert.alert('Your order is accepted')
  }

  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Ionicons.Button name="chevron-back" backgroundColor='white' size={30} color="black" onPress={goBack}/>
      </View>
      <Image style={styles.image} source={item.path}/>

      <View style={styles.wrapText}>
        <Text style={{...styles.text, ...styles.subtitle}}>{item.subtitle}</Text>
        <Text style={{...styles.text, ...styles.title}}>{item.title}</Text>
        <Text style={{...styles.text, ...styles.cost}}>{item.cost} $</Text>
        <Text style={{...styles.text, ...styles.desc}}>{item.desc}</Text>
      </View>
      <TextInput
        style={{...styles.text, ...styles.input}}
        placeholder='Name'
        autoCorrect={false}
      />
      <TextInput
        style={{...styles.text, ...styles.input}}
        placeholder='Phone number'
        autoCorrect={false}
        keyboardType='phone-pad'
      />
      <Button title='TO ORDER' onPress={handlePress} color={THEME.MAIN_COLOR}/>

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

  button: {
    marginTop: 30,
    marginBottom: 20,
    marginLeft: 20,
    alignSelf: 'flex-start'
  },

  image: {
    width: 343,
    height: 281,
    marginBottom: 30,
  },

  text: {
    fontFamily: 'Lato_400Regular',
  },

  subtitle: {
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 4
  },

  title: {
    fontSize: 28,
    lineHeight: 36,
    marginBottom: 10,
    fontFamily: 'Lato_900Black',
  },

  cost: {
    fontSize: 20,
    lineHeight: 24,
    marginBottom: 12,
    fontFamily: 'Lato_700Bold',
    color: THEME.MAIN_COLOR
  },

  desc: {
    fontSize: 16,
    lineHeight: 22,
    color: THEME.GREY_SECONDARY_COLOR,
  },

  wrapText: {
    width: 350,
    marginBottom: 30,
  },

  input: {
    width: 350,
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderBottomColor: THEME.GREY_SECONDARY_COLOR,
    paddingBottom: 10,
    marginBottom: 20,
    fontSize: 16,
    lineHeight: 22,
  }
})