import React from "react";
import {Image, StyleSheet, Text, View} from "react-native";
import {THEME} from "../../theme";
import * as Svg from 'react-native-svg';


export const Ad = () => {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <View style={styles.wrapText}>
          <Text style={{...styles.text, ...styles.desc}}>Need for Speed</Text>
          <Text style={{...styles.text, ...styles.title}}>UdoDron 3 Pro</Text>
          <Text style={{...styles.text, ...styles.cost}}>1984 $</Text>
        </View>


        <Image
          style={styles.image}
          source={require('../../../assets/images/quadro.png')}
        />
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 164,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 32,
  },

  item: {
    flexDirection: 'row',
    width:  350,
    borderRadius: 20,
    backgroundColor: THEME.MAIN_COLOR,
  },

  wrapText: {
    justifyContent: 'flex-end',
    marginBottom: 20,
  },

  text: {
    color: 'white',
    fontFamily: 'Lato_400Regular',
    marginLeft: 20,
  },

  desc: {
    fontSize: 14,
  },

  title: {
    fontSize: 24,
    lineHeight: 30,
    fontFamily: 'Lato_900Black',
  },

  cost: {
    lineHeight: 30,
    fontSize: 24,
  },

  image: {
    position: 'relative',
    right: 75,
    bottom: 5,
  }
})