import React from 'react';
import {StyleSheet, SafeAreaView, FlatList, Text} from 'react-native';
import {Card} from "./ui/Card";

export const List = ({data}) => {
  console.log(data)
  return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}>All Quadcopters</Text>
        <FlatList
          horizontal
          data={data}
          renderItem={({item}) => <Card item={item}/>}
          keyExtractor={item => item.id.toString()}
          showsHorizontalScrollIndicator={false}
        />
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 350,
    justifyContent: 'center',
    alignItems: 'center'
  },

  text: {
    marginBottom: 20,
    alignSelf: 'flex-start',
    fontSize: 20,
    fontFamily: 'Lato_400Regular'
  }
});