import { Image, StyleSheet, Button, TextInput, View } from 'react-native';
import { Formik } from 'formik';

import { gStyle } from '../styles';

export default function Form({ addArticle }) {
  return (
    <View>
      <Formik
        initialValues={{ title: '', anons: '', full: '', img: '' }}
        onSubmit={(values, action) => {
          addArticle(values);
          action.resetForm();
        }}
      >
        {props => (
          <View>
            <TextInput
              style={styles.input}
              value={props.values.title}
              placeholder='Введите заголовок'
              onChangeText={props.handleChange('title')}
            />
            <TextInput
              style={styles.input}
              value={props.values.anons}
              placeholder='Введите анонс'
              onChangeText={props.handleChange('anons')}
            />
            <TextInput
              style={styles.input}
              value={props.values.full}
              placeholder='Введите статью'
              onChangeText={props.handleChange('full')}
              multiline
            />
            <TextInput
              style={styles.input}
              value={props.values.img}
              placeholder='Введите url изображения'
              onChangeText={props.handleChange('img')}
            />

            <Button title='Добавить' onPress={props.handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    borderColor: 'silver',
    borderRadius: 4,
  },
});
