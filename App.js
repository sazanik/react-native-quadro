import {StatusBar} from 'expo-status-bar';
import 'react-native-gesture-handler';
import React, {} from 'react';
import {/*StackNavigation, */TabNavigation} from "./src/navigation/AppNavigation";
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


  if (!fontsLoaded) {
    return <AppLoading/>
  } else {
    return (
      <>
        <StatusBar backgroundColor={THEME.BG_COLOR} style="auto"/>
        {/*<StackNavigation style={styles.headerText}/>*/}
        <TabNavigation/>
      </>
    )
  }
}
