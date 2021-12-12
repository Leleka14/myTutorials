import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../Home';
import LiquidSwipeContainer from '../sections/LiquidSwipe/LiquidSwipeContainer';
import BingerContainer from '../sections/Binger/BingerContainer';

const Stack = createNativeStackNavigator();

export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="LiquidSwipe" component={LiquidSwipeContainer} />
        <Stack.Screen name="Binger" component={BingerContainer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
