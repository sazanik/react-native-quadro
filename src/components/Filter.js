import React, {useState} from "react";
import {TouchableOpacity, View, StyleSheet, Text} from "react-native";
import {THEME} from "../theme";


export const Filter = ({onFilter}) => {

  const [actBtn, setActBtn] = useState('All')

  const pressHandler = filter => {
    setActBtn(filter)
    onFilter(filter)

  }


  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity
          style={actBtn === 'All' ? styles.activeButton : styles.button}
          onPress={() => pressHandler('All')}
        >
          <Text style={actBtn === 'All' ? styles.activeText : styles.text}>All</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={actBtn === 'Cheap' ? styles.activeButton : styles.button}
          onPress={() => pressHandler('Cheap')}
        >
          <Text style={actBtn === 'Cheap' ? styles.activeText : styles.text}>Cheap</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={actBtn === 'Best' ? styles.activeButton : styles.button}
          onPress={() => pressHandler('Best')}
        >
          <Text style={actBtn === 'Best' ? styles.activeText : styles.text}>Best</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={actBtn === 'Fast' ? styles.activeButton : styles.button}
          onPress={() => pressHandler('Fast')}
        >
          <Text style={actBtn === 'Fast' ? styles.activeText : styles.text}>Fast</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.wrapTitle}>
        <Text style={styles.title}>All Quadcopters</Text>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 350,
    height: 46,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 40,
  },

  button: {
    height: 46,
    width: 78,
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },

  activeButton: {
    height: 46,
    width: 78,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: THEME.MAIN_COLOR,
  },

  text: {
    fontFamily: 'Lato_400Regular',
    fontSize: 16,
    color: 'black'
  },

  activeText: {
    fontFamily: 'Lato_400Regular',
    fontSize: 16,
    color: 'white'
  },

  wrapTitle: {
    width: 350,
    marginBottom: 30,
  },

  title: {
    alignSelf: 'flex-start',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Lato_400Regular'
  }


})