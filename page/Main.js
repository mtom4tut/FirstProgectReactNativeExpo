import { StyleSheet, Text, View } from 'react-native';

import { gStyle } from '../styles';

export default function Main() {
  return (
    <View>
      <Text style={gStyle.title}>Главная страница</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
