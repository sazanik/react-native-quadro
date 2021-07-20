import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Main} from "./src/screens/Main";
import {Footer} from "./src/components/Footer";
import {THEME} from "./src/theme";

export default function App() {

  let content = <Main/>

  return (
    <>
      <StatusBar backgroundColor={THEME.BG_COLOR} style="auto"/>
      <Footer/>
      <View style={styles.container}>
        {content}
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.BG_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
