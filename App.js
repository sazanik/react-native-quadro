import {StatusBar} from 'expo-status-bar';
import 'react-native-gesture-handler';
import React, {} from 'react';
import {StyleSheet, View} from 'react-native';
import {Main} from "./src/screens/Main";
import {Header} from "./src/components/Header";
import {Footer} from "./src/components/Footer";
import {AppNavigation} from "./src/navigation/AppNavigation";
import {THEME} from "./src/theme";
import AppLoading from 'expo-app-loading';
import {
  Lato_100Thin,
  Lato_100Thin_Italic,
  Lato_300Light,
  Lato_300Light_Italic,
  Lato_400Regular,
  Lato_400Regular_Italic,
  Lato_700Bold,
  Lato_700Bold_Italic,
  Lato_900Black,
  Lato_900Black_Italic, useFonts
} from '@expo-google-fonts/lato'


export default function App() {
  let [fontsLoaded] = useFonts({
    Lato_100Thin,
    Lato_900Black,
  });

  let content = <Main/>

  if (!fontsLoaded) {
    return <AppLoading/>
  } else {
    return (
      <>
        <StatusBar backgroundColor={THEME.BG_COLOR} style="auto"/>
        <Header style={styles.headerText}/>
        <AppNavigation/>
      </>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: -20,
    backgroundColor: THEME.BG_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
  },

  headerText: {
    fontFamily: 'Lato_900Black'
  }
})
