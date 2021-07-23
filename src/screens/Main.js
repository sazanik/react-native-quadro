import React, {useState} from "react";
import {ScrollView, StyleSheet, View} from "react-native";
import {Header} from "../components/Header";
import {Ad} from "../components/ui/Ad";
import {Filter} from "../components/Filter";
import {List} from "../components/List";
import {useAssets} from "expo-asset";
import AppLoading from "expo-app-loading";


export const Main = ({route}) => {


  const ad = {
    id: 0,
    subtitle: 'Need for Speed',
    title: 'UdoDron 3 Pro',
    desc: 'It is very faster and with good camera. Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor',
    cost: '1984',
    rating: '',
    speed: 60,
    path: require('./../../assets/images/ad.png')
  }

  const initialGoods = [
    {
      id: 1,
      subtitle: 'Very fast quadcopter',
      title: 'DJI Air 2S',
      desc: 'The Mavic 2 offers iconic Hasselblad image quality on Pro and a high-performance zoom lens on Zoom.',
      cost: '1424',
      rating: 4.2,
      speed: 70,
      path: require('./../../assets/images/1.png')
    },
    {
      id: 2,
      subtitle: 'Small quadcopter',
      title: 'DJI Mavic Mini',
      desc: 'Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet.',
      cost: '990.90',
      speed: 40,
      rating: 4.5,
      path: require('./../../assets/images/2.png')

    },
    {
      id: 3,
      subtitle: 'Ordinary quadcopter',
      title: "DJI’s Matrice 200",
      desc: 'Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet.',
      cost: '2780.30',
      speed: 45,
      rating: 3.8,
      path: require('./../../assets/images/3.png')
    },
  ]

  const [data, setData] = useState(() => initialGoods)


  const [assets] = useAssets([
    require('./../../assets/images/ad.png'),
    require('./../../assets/images/1.png'),
    require('./../../assets/images/2.png'),
    require('./../../assets/images/3.png'),
  ])


  const filterData = (filter) => {
    switch (filter) {
      case 'All':
        return initialGoods

      case 'Cheap':
        return initialGoods.reduce((prev, current) => +prev.cost < +current.cost ? prev : current)

      case 'Best':
        return initialGoods.filter(item => +item.rating > 4)

      case 'Fast':
        return initialGoods.reduce((prev, current) => +prev.speed > +current.speed ? prev : current)
    }
  }

  const sendNewData = filter => setData([].concat(filterData(filter)))


  if (!assets) {
    return <AppLoading/>
  }

  return (
    <View style={styles.container}>
      <Header/>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Ad data={ad} onOpen={route.params.onOpen}/>
        <Filter onFilter={sendNewData}/>
        <List data={data} onOpen={route.params.onOpen}/>
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