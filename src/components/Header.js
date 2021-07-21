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
    flexDirection: 'row',
    height: 52,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: THEME.BG_COLOR,
    marginTop: 52,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  text: {
    color: THEME.MAIN_FONT_COLOR,
    fontSize: 24,
  },
})