import { useState } from 'react';
import { FlatList, Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Form from '../components/Form';

import { gStyle } from '../styles';

export default function Main({ navigation }) {
  const [isModal, setIsModal] = useState(false);

  const [news, setNews] = useState([
    {
      id: '0',
      title: 'Google',
      anons: 'Google!!!',
      full: 'Google is cool!',
      img: 'https://itproger.com/img/courses/1623566752.jpg',
    },
    {
      id: '1',
      title: 'Apple',
      anons: 'Apple!!!',
      full: 'Apple is cool!',
      img: 'https://itproger.com/img/courses/1620476899.jpg',
    },
    {
      id: '2',
      title: 'Yandex',
      anons: 'Yandex!!!',
      full: 'Yandex is cool!',
      img: 'https://itproger.com/img/courses/1621164792.jpg',
    },
  ]);

  const addArticle = article => {
    setNews(list => {
      article.id = list.length.toString();
      return [article, ...list];
    });
    setIsModal(false);
  };

  return (
    <View style={gStyle.main}>
      <Modal visible={isModal}>
        <AntDesign name='closecircle' size={24} color='red' style={styles.icon} onPress={() => setIsModal(false)} />

        <View style={gStyle.main}>
          <Text style={[gStyle.title, styles.header]}>Форма добавления статей</Text>
          <Form addArticle={addArticle} />
        </View>
      </Modal>

      <AntDesign name='pluscircle' size={34} color='green' style={styles.icon} onPress={() => setIsModal(true)} />

      <Text style={[gStyle.title, styles.header]}>Главная страница</Text>
      <FlatList
        data={news}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('FullInfo', item)}>
            <Image
              style={styles.image}
              source={{
                uri: item.img,
              }}
            />
            <Text style={styles.title}> {item.title} </Text>
            <Text style={styles.anons}> {item.anons} </Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginBottom: 20,
  },

  icon: {
    textAlign: 'center',
    margin: 10,
  },

  item: {
    width: '100%',
    marginBottom: 30,
  },

  image: {
    width: '100%',
    height: 200,
  },

  title: {
    fontFamily: 'mt-bold',
    fontSize: 22,
    textAlign: 'center',
    marginTop: 20,
    color: '#474747',
  },

  anons: {
    fontFamily: 'mt-light',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 5,
    color: '#474747',
  },
});
