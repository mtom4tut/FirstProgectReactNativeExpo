import React, { useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import Header from './components/Header';

export default function App() {
  const [listOfItems, setListOfItems] = useState([
    {
      index: 1,
      test: 'Купить молоко',
    },
    {
      index: 2,
      test: 'Купить сыр',
    },
  ]);

  return (
    <View>
      <Header />
      <View>
        <FlatList data={listOfItems} renderItem={({ item }) => <Text>{item.text}</Text>} />
      </View>
    </View>
  );
}
