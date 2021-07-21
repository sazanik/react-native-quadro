import React, {useEffect, useState} from "react"
import {StyleSheet, View} from "react-native";
import {AntDesign} from '@expo/vector-icons';
import {Ionicons} from '@expo/vector-icons';
import {MaterialIcons} from '@expo/vector-icons';
import {Feather} from '@expo/vector-icons';
import {THEME} from "../theme";

export const Footer = ({navigation, route}) => {
  const [currentScreen, setCurrentScreen] = useState(null)

  const handlerPress = currentScreen => {
    navigation.navigate(currentScreen)
  }

  useEffect(() => {
    setCurrentScreen(route.name)
  }, [])

  return (
    <View style={styles.footer}>
      <AntDesign
        onPress={() => handlerPress('Main')} color={currentScreen === 'Main' ? THEME.MAIN_COLOR : THEME.GREY_COLOR}
        name="home"
        style={styles.icon}/>
      <MaterialIcons
        onPress={() => handlerPress('Favorites')}
        color={currentScreen === 'Favorites' ? THEME.MAIN_COLOR : THEME.GREY_COLOR}
        name="favorite-border" style={styles.icon}/>
      <Feather
        onPress={() => handlerPress('Search')} color={currentScreen === 'Search' ? THEME.MAIN_COLOR : THEME.GREY_COLOR}
        name="search"
        style={styles.icon}/>
      <Ionicons
        onPress={() => handlerPress('Basket')} color={currentScreen === 'Basket' ? THEME.MAIN_COLOR : THEME.GREY_COLOR}
        name="cart-outline" style={styles.icon}/>
    </View>
  )
}

const styles = StyleSheet.create({
  footer: {
    width: '100%',
    height: 96,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingBottom: 10,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    elevation: 7,

  },
  text: {
    color: THEME.MAIN_FONT_COLOR,
    fontSize: 24,
  },

  icon: {
    fontSize: 32,
  }
})