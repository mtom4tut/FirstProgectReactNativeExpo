import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';

export default function Form({ addHendler }) {
  const [text, setText] = useState('');

  const onPress = () => {
    addHendler(text);
    setText('');
  };

  return (
    <View style={styles.form}>
      <TextInput style={styles.input} value={text} onChangeText={setText} placeholder='Впишите задачу...' />
      <Button color='gray' onPress={onPress} title='Добавить задачу' />
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    marginVertical: 10,
    marginHorizontal: 20,
  },
  input: {
    borderBottomWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
});
