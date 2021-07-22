import React from "react";
import {Image, StyleSheet, Text, View} from "react-native";


export const Card = ({item}) => {
  console.log('ITEM CARD', item)
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Image
          style={styles.image}
          source={require('../../../assets/images/quadro.png')}
        />
        <View style={styles.wrapText}>
          <Text style={{...styles.text, ...styles.title}}>UdoDron 3 Pro</Text>
          <View style={styles.wrapLine}>
            <Text style={{...styles.text, ...styles.cost}}>1984 $</Text>
            <Text style={{...styles.text, ...styles.rating}}>4.5</Text>
          </View>
        </View>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 32,
  },

  item: {
    height: 250,
    width: 205,
    borderRadius: 20,
    borderWidth: 1,
    marginRight: 16,
    backgroundColor: 'white',
    borderColor: 'lightgrey'
  },

  wrapText: {
    justifyContent: 'flex-end',
  },

  text: {
    color: 'black',
    marginLeft: 20,
    fontFamily: 'Lato_700Bold',
    lineHeight: 17,
    fontSize: 14,
  },

  title: {
    marginBottom: 13,
  },

  wrapLine: {
    flexDirection: 'row',

    justifyContent: 'space-between'
  },

  cost: {},

  rating: {
    alignSelf: 'flex-end',
  },

  image: {}
})