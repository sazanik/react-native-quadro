import React from 'react';
import {StyleSheet, SafeAreaView, FlatList} from 'react-native';
import {Card} from "./ui/Card";

export const List = ({data}) => {
  return (
      <SafeAreaView style={styles.container}>
        <FlatList
          horizontal
          data={data}
          renderItem={({item}) => <Card item={item} path='../../../assets/images/3.png'/>}
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
})