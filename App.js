import React, { useState } from 'react';
import { FlatList, View } from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import Form from './components/Form';

export default function App() {
  const [listOfItems, setListOfItems] = useState([
    {
      id: 0,
      text: 'Купить молоко',
    },
    {
      id: 1,
      text: 'Купить сыр',
    },
    {
      id: 2,
      text: 'Купить мясо',
    },
  ]);

  const addHendler = text => {
    setListOfItems(list => {
      return [
        {
          text,
          id: list.length,
        },
        ...list,
      ];
    });
  };

  const deleteHandler = id => {
    setListOfItems(list => {
      return list.filter(item => item.id !== id);
    });
  };

  return (
    <View>
      <Header />
      <Form addHendler={addHendler} />
      <View>
        <FlatList
          data={listOfItems}
          renderItem={({ item }) => <ListItem el={item} deleteHandler={deleteHandler} />}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
}
