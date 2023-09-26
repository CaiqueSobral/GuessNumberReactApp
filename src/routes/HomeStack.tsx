import React from 'react';
import GameOverPage from '../pages/GameOverPage';
import GamePage from '../pages/GamePage';
import HomePage from '../pages/HomePage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const HomeStack = createNativeStackNavigator();

export default function HomeStackNavigator() {
  return (
    <HomeStack.Navigator
      initialRouteName="HomePage"
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: 'transparent' },
      }}
    >
      <HomeStack.Screen name="HomePage" component={HomePage} />
      <HomeStack.Screen name="GamePage" component={GamePage} />
      <HomeStack.Screen name="GameOverPage" component={GameOverPage} />
    </HomeStack.Navigator>
  );
}
