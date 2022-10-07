import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Main from './page/Main';
import Contacts from './page/Contacts';

const Stack = createNativeStackNavigator();

export default function Navigate() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Main' component={Main} options={{ title: 'Главная' }} />
        <Stack.Screen name='Contacts' component={Contacts} options={{ title: 'Контакты' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
