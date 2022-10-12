import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Main from './page/Main';
import FullInfo from './page/FullInfo';

const Stack = createNativeStackNavigator();

export default function Navigate() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Main'
          component={Main}
          options={{ title: 'Главная', headerStyle: { backgroundColor: '#ed5d3d', height: 100 } }}
        />
        <Stack.Screen name='FullInfo' component={FullInfo} options={{ title: 'Статья' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
