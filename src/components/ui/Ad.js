import React from "react";
import {Image, StyleSheet, Text, View} from "react-native";
import {THEME} from "../../theme";


export const Ad = () => {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <View style={styles.wrapText}>
          <Text style={{...styles.text, ...styles.subtitle}}>Need for Speed</Text>
          <Text style={{...styles.text, ...styles.title}}>UdoDron 3 Pro</Text>
          <Text style={{...styles.text, ...styles.cost}}>1984 $</Text>
        </View>

        <Image
          style={styles.image}
          source={require('../../../assets/images/ad.png')}
        />
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 50

  },

  item: {
    width: 350,
    height: 180,
    flexDirection: 'row',
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

  subtitle: {
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