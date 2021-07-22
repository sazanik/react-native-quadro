import React, {useEffect, useState} from "react";
import {StyleSheet, View} from "react-native";
import {Header} from "../components/Header";
import {Ad} from "../components/ui/Ad";
import {Filter} from "../components/Filter";
import {List} from "../components/List";
import {Asset, useAssets} from "expo-asset";
import AppLoading from "expo-app-loading";

export const Main = () => {

  useEffect(() => {

  }, [])

  const [assets, error] = useAssets([
    require('./../../assets/images/1.png'),
    require('./../../assets/images/2.png'),
    require('./../../assets/images/3.png'),
  ])

  const initialGoods = [
    {
      id: 1,
      title: 'DJI Air 2S',
      desc: 'The Mavic 2 offers iconic Hasselblad image quality on Pro and a high-performance zoom lens on Zoom.',
      cost: '1424',
      rating: 4.2,
      path: '../../../assets/images/1.png'
    },
    {
      id: 2,
      title: 'DJI Mavic Mini',
      desc: 'Lorem ipsum dolor sit amet.',
      cost: '990.90',
      rating: 4.5,
      path: '../../../assets/images/2.png'

    },
    {
      id: 3,
      title: "DJI’s Matrice 200",
      desc: 'Lorem ipsum dolor sit amet.',
      cost: '2780.30',
      rating: 3.8,
      path: '../../../assets/images/3.png'
    },
  ]


  if (!assets) {
    return <AppLoading/>;
  }


  return (
    <View style={styles.container}>
      <Header/>
      <Ad/>
      <Filter/>
      <List data={initialGoods}/>
    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },

})