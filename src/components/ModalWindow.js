import React from "react";
import {Alert, Modal, StyleSheet, Text, Pressable, View, Image} from "react-native";
import {THEME} from "../theme";

export const ModalWindow = ({modalVisible, closeModal}) => {

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        closeModal();
      }}
    >
      <View style={styles.container}>
        <View style={styles.modalContainer}>
          <Image
            style={styles.image}
            source={require('../../assets/images/modal.png')}
          />
          <Text style={[styles.text, styles.modalText]}>Your order is accepted</Text>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => closeModal()}
          >
            <Text style={[styles.text, styles.buttonText]}>OK</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({

  container: {

    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  modalContainer: {
    width: 350,
    height: 250,
    backgroundColor: "white",
    justifyContent: 'center',
    alignItems: "center",
    borderRadius: 16,
    padding: 36,
    shadowColor: "#000",

    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },

  text: {
    color: "white",
    fontFamily: 'Lato_700Bold',
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center"
  },

  modalText: {
    marginBottom: 30,
    textAlign: "center",
    color: THEME.GREY_SECONDARY_COLOR,
  },

  buttonText: {
    lineHeight: 50,
  },

  button: {
    width: 150,
    height: 50,
    borderRadius: 8,
    elevation: 12,
  },

  buttonClose: {
    backgroundColor: THEME.MAIN_COLOR,
  },
})