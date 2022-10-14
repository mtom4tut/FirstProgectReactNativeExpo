import { Image, StyleSheet, Text, View } from 'react-native';

import { gStyle } from '../styles';

export default function FullInfo({ route }) {
  return (
    <View style={gStyle.main}>
      <Image
        style={styles.image}
        source={{
          uri: route.params.img,
        }}
      />
      <Text style={gStyle.title}>{route.params.title}</Text>
      <Text style={styles.full}>{route.params.full}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },

  full: {
    fontFamily: 'mt-light',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
    color: '#f55151',
  },
});
