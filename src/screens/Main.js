import React, {useEffect, useState} from "react";
import {StyleSheet, View} from "react-native";
import {Header} from "../components/Header";
import {Ad} from "../components/ui/Ad";
import {Filter} from "../components/Filter";
import {ListGoods} from "../components/ListGoods";




export const Main = () => {
  const initialGoods = [
    {
      id: 1,
      title: 'DJI Air 2S',
      desc: 'The Mavic 2 offers iconic Hasselblad image quality on Pro and a high-performance zoom lens on Zoom.',
      cost: 1424,
      rating: 4.2,
      src: ''
    },
    {
      id: 2,
      title: 'DJI Mavic Mini',
      desc: 'Lorem ipsum dolor sit amet.',
      cost: 1424,
      rating: 4.2,
      src: ''

    },
    {
      id: 3,
      title: "DJI’s Matrice 200",
      desc: 'Lorem ipsum dolor sit amet.',
      cost: 2780.30,
      rating: 3.8,
      src: ''
    },
  ]

  return (
    <View style={styles.container}>
      <Header/>
      <Ad/>
      <Filter/>
      <ListGoods data={initialGoods}/>
    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },

})