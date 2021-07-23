import React from "react";
import {AntDesign} from '@expo/vector-icons';
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";


export const Card = ({item, onOpen}) => {

  return (
    <TouchableOpacity
      onPress={() => onOpen(item)}
      style={styles.item}
    >
      {item.path}

      <View style={styles.wrapText}>
        <Text style={{...styles.text, ...styles.title}}>{item.title}</Text>
        <View style={styles.wrapLine}>
          <Text style={{...styles.text, ...styles.cost}}>{item.cost} $</Text>
          <Text style={{...styles.text, ...styles.rating}}>
            <AntDesign name="star" size={14} color="gold"/> {item.rating}
          </Text>
        </View>
      </View>

    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({

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
    marginTop: 20,
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
    marginRight: 18,
  },

})