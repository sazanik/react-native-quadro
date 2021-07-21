import React from "react"
import {StyleSheet, Text, View} from "react-native";
import {SimpleLineIcons} from '@expo/vector-icons';
import {THEME} from "../theme";

export const Header = props => {
  return (
    <View style={styles.header}>
      <Text style={{...styles.text, ...props.style}}>Quadrojoy</Text>
      <SimpleLineIcons name="menu" size={24} color="black"/>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    height: 100,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    backgroundColor: THEME.BG_COLOR,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  text: {
    color: THEME.MAIN_FONT_COLOR,
    fontSize: 24,
    fontFamily: 'Lato_900Black',
  },
})