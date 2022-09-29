import { StatusBar } from 'expo-status-bar';
import { Alert, Button, Image, SafeAreaView, StyleSheet, Text, TouchableHighlight, TouchableWithoutFeedback } from 'react-native';

export default function App() {
  const handleTextPress = () => console.log('Click');
  const handleBtnPress = () =>
    Alert.alert('Example Alert', 'Message', [
      { text: 'Да', onPress: () => console.log('Clicked yes') },
      { text: 'Отмена', onPress: () => console.log('Clicked cancel') },
    ]);

  const handleBtnPress2 = () => Alert.prompt('Example Alert', 'Message', text => console.log(text));

  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} style={styles.text}>
        Hello {'\n'}World!
      </Text>
      <Text numberOfLines={2} style={styles.text}>
        Hello {'\n'}World!
      </Text>
      <Text onPress={handleTextPress}>Clicked!</Text>

      <Button title='Button' color={'green'} onPress={handleBtnPress} />
      <Button title='Button2' color={'blue'} onPress={handleBtnPress2} />

      <Image source={require('./assets/adaptive-icon.png')} />

      <TouchableWithoutFeedback onPress={handleBtnPress}>
        <Image
          // blurRadius={10}
          source={{
            width: 200,
            height: 310,
            uri: 'https://img2.akspic.ru/previews/9/0/9/8/6/168909/168909-ballonchik-graffiti-ulichnoe_iskusstvo-svet-purpur-500x.jpg',
          }}
        />
      </TouchableWithoutFeedback>
      <StatusBar style='auto' />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text: {
    color: 'red',
  },
});
