import { StyleSheet, Text, View } from 'react-native';

import { gStyle } from '../styles';

export default function FullInfo({ route }) {
  return (
    <View>
      <Text style={gStyle.title}>{route.params.name}</Text>
      <Text>{route.params.full}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
