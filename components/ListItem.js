import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function ListItem({ el, deleteHandler }) {
  return (
    <TouchableOpacity style={styles.item} onPress={() => deleteHandler(el.id)}>
      <Text style={styles.text}>{el.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#dfdcdc',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 5,
  },
  text: {
    fontSize: 18,
  },
});
