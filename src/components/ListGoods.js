import React from 'react';
import {StyleSheet, SafeAreaView, FlatList} from 'react-native';
import {Card} from "./ui/Card";

export const ListGoods = ({data}) => {
  console.log(data)
  return (
    <SafeAreaView style={styles.container}>
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
    height: 200,
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});