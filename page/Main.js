import { useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { gStyle } from '../styles';

export default function Main({ navigation }) {
  const [news, setNews] = useState([
    { id: '0', name: 'Google', anons: 'Google!!!', full: 'Google is cool!' },
    { id: '1', name: 'Apple', anons: 'Apple!!!', full: 'Apple is cool!' },
    { id: '2', name: 'Yandex', anons: 'Yandex!!!', full: 'Yandex is cool!' },
  ]);

  return (
    <View>
      <Text style={gStyle.title}>Главная страница</Text>
      <FlatList
        data={news}
        renderItem={({ item }) => (
          <TouchableOpacity style={gStyle.title} onPress={() => navigation.navigate('FullInfo', item)}>
            <Text> {item.name} </Text>
            <Text> {item.anons} </Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
