import React from 'react';
import {StyleSheet, SafeAreaView, FlatList, Text} from 'react-native';
import {Card} from "./ui/Card";

export const List = ({data, onOpen}) => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        horizontal
        data={data}
        renderItem={({item}) => <Card onOpen={onOpen} item={item}/>}
        keyExtractor={item => item.id.toString()}
        showsHorizontalScrollIndicator={false}
        ListEmptyComponent={() => <Text style={{fontSize: 30, fontFamily: 'Lato_700Bold'}}>List is Empty</Text>}
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