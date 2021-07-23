import React, {useState, useEffect} from "react";

import {
  Text,
  StyleSheet,
  View,
  Button,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback
} from "react-native";
import {Ionicons} from '@expo/vector-icons'
import {THEME} from "../theme";
import {ModalWindow} from "../components/ModalWindow";

export const Product = ({item, goBack}) => {

  const [value, setValue] = useState('+375')

  const [modalVisible, setModalVisible] = useState(false);

  const showModal = () => {
    setModalVisible(true)
  }

  const closeModal = () => {
    setModalVisible(false)
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          {modalVisible
            ? <ModalWindow modalVisible={modalVisible} closeModal={closeModal}/>
            : null
          }
          <View style={styles.buttonGoBack}>
            <Ionicons.Button name="chevron-back" backgroundColor='white' size={30} color="black" onPress={goBack}/>
          </View>
          <Image style={styles.image} source={item.path}/>

          <View style={styles.wrapTextItem}>
            <Text style={{...styles.text, ...styles.subtitle}}>{item.subtitle}</Text>
            <Text style={{...styles.text, ...styles.title}}>{item.title}</Text>
            <Text style={{...styles.text, ...styles.cost}}>{item.cost} $</Text>
            <Text style={{...styles.text, ...styles.desc}}>{item.desc}</Text>
          </View>
          <View style={styles.wrapForm}>
            <TextInput
              style={{...styles.text, ...styles.input}}
              placeholder='Name'
              autoCorrect={false}
              clearButtonMode='always'
            />
            <TextInput
              style={{...styles.text, ...styles.input}}
              placeholder='Phone number'
              autoCorrect={false}
              keyboardType='phone-pad'
              clearButtonMode='always'
              dataDetectorTypes='phoneNumber'
              textContentType='telephoneNumber'
              onChangeText={text => setValue(text)}
              value={value}
            />
            <Button title='TO ORDER' onPress={showModal} color={THEME.MAIN_COLOR}/>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },


  buttonGoBack: {
    position: 'absolute',
    left: -15,
    top: 50,
    zIndex: 100,
  },

  image: {
    marginTop: 120,
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

  wrapTextItem: {
    width: 350,
    marginBottom: 70,
  },

  wrapForm: {
    marginBottom: 30
  },

  input: {
    width: 350,
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderBottomColor: THEME.GREY_SECONDARY_COLOR,
    paddingBottom: 10,
    marginBottom: 10,
    fontSize: 16,
    lineHeight: 22,
  },
})