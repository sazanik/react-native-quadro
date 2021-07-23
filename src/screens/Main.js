import React, {useEffect, useState} from "react";
import {ScrollView, StyleSheet, View} from "react-native";
import {Header} from "../components/Header";
import {Ad} from "../components/ui/Ad";
import {Filter} from "../components/Filter";
import {List} from "../components/List";
import {Asset, useAssets} from "expo-asset";
import AppLoading from "expo-app-loading";


export const Main = ({navigation, route}) => {

  const [assets, error] = useAssets([
    require('./../../assets/images/ad.png'),
    require('./../../assets/images/1.png'),
    require('./../../assets/images/2.png'),
    require('./../../assets/images/3.png'),
  ])

  if (!assets) {
    return <AppLoading/>;
  }

  const ad = {
      id: 0,
      subtitle: 'Need for Speed',
      title: 'UdoDron 3 Pro',
      desc: 'It is very faster and with good camera. Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor',
      cost: '1984',
      rating: '',
      path: assets[0]
    }

  const initialGoods = [
    {
      id: 1,
      subtitle: 'Very fast quadcopter',
      title: 'DJI Air 2S',
      desc: 'The Mavic 2 offers iconic Hasselblad image quality on Pro and a high-performance zoom lens on Zoom.',
      cost: '1424',
      rating: 4.2,
      path: assets[1]
    },
    {
      id: 2,
      subtitle: 'Small quadcopter',
      title: 'DJI Mavic Mini',
      desc: 'Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet.',
      cost: '990.90',
      rating: 4.5,
      path: assets[2]

    },
    {
      id: 3,
      subtitle: 'Ordinary quadcopter',
      title: "DJI’s Matrice 200",
      desc: 'Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet.',
      cost: '2780.30',
      rating: 3.8,
      path: assets[3]
    },
  ]

  return (
    <View style={styles.container}>
      <Header/>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Ad data={ad} onOpen={route.params.onOpen}/>
        <Filter/>
        <List data={initialGoods} onOpen={route.params.onOpen}/>
      </ScrollView>

    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

})