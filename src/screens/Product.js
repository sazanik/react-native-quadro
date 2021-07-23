import React, {useState} from "react";
import {Text, StyleSheet, View, Button, Image, TextInput} from "react-native";
import {Ionicons} from '@expo/vector-icons'
import {THEME} from "../theme";
import {ModalWindow} from "../components/ModalWindow";

export const Product = ({item, goBack}) => {

  const [modalVisible, setModalVisible] = useState(false);

  const showModal = () => {
    setModalVisible(true)
  }

  const closeModal = () => {
    setModalVisible(false)
  }


  return (
    <View style={styles.container}>
      {modalVisible
        ? <ModalWindow modalVisible={modalVisible} closeModal={closeModal}/>
        : null
      }
      <View style={styles.buttonGoBack}>
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
        keyboardType='numbers-and-punctuation'
      />
      <Button title='TO ORDER' onPress={showModal} color={THEME.MAIN_COLOR}/>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },

  buttonGoBack: {
    marginTop: 60,
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
    marginBottom: 50,
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